# -*- coding: utf-8 -*-
"""
Generate complete structured tech_database.json from techdatadb/技術文件摘要與重點.md
Extracted and curated strictly from techdatadb files: rich, specific data, professional parameters,
zero hallucination, following the ATTech 5-dimension standard.
"""

import os
import sys
import re
import json

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TECH_ROOT = os.path.join(ROOT_DIR, 'techdatadb')
MD_FILE = os.path.join(TECH_ROOT, '技術文件摘要與重點.md')

CATEGORIES_META = {
    "tyzor": {
        "slug": "tyzor",
        "hasData": True,
        "brand": "Dorf Ketal",
        "name": "Organic Titanates and Zirconates",
        "sub": "鈦酸酯與鋯酸酯, Tyzor",
        "productLink": "products/dorfketal/tyzor/",
        "titleZh": "鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)"
    },
    "carbon-black": {
        "slug": "carbon-black",
        "hasData": True,
        "brand": "Orion",
        "name": "Special Carbon Black",
        "sub": "特級碳黑 / 導電碳黑",
        "productLink": "products/orion/coating/",
        "titleZh": "特級碳黑技術應用 (Carbon Black)"
    },
    "maleic": {
        "slug": "maleic",
        "hasData": False,
        "brand": "其他特化",
        "name": "Maleic Resin / 馬林酸樹脂",
        "sub": "松香改性馬林酸樹脂",
        "productLink": "products/others/maleic_acid_resin/",
        "titleZh": "馬林酸樹脂技術應用 (Maleic Resin)"
    },
    "px": {
        "slug": "px",
        "hasData": False,
        "brand": "Dorf Ketal",
        "name": "PX Lubricant Additives",
        "sub": "潤滑油添加劑 (原 ExxonMobil)",
        "productLink": "products/dorfketal/px/",
        "titleZh": "PX 潤滑油添加劑技術應用 (PX Lubricants)"
    },
    "silane": {
        "slug": "silane",
        "hasData": False,
        "brand": "Evonik / 特化",
        "name": "Silane / 矽烷偶合劑",
        "sub": "Dynasylan / hydrosil 系列",
        "productLink": "products/others/silane/",
        "titleZh": "矽烷偶合劑系列技術應用 (Silane)"
    },
    "wax": {
        "slug": "wax",
        "hasData": True,
        "brand": "Micro Powders",
        "name": "Micronized Wax / 微粉蠟",
        "sub": "PTFE 取代 / 耐磨耐刮助劑",
        "productLink": "products/mpi/ptfe/",
        "titleZh": "微粉化蠟技術應用 (Micronized Wax)"
    },
    "adhesion": {
        "slug": "adhesion",
        "hasData": False,
        "brand": "其他特化",
        "name": "Adhesion Resin / 密著樹脂",
        "sub": "氯化聚烯烴 (CPO) & 非氯系",
        "productLink": "products/others/adhesion_promoter/",
        "titleZh": "密著樹脂技術應用 (Adhesion Resin)"
    },
    "polyester": {
        "slug": "polyester",
        "hasData": False,
        "brand": "其他特化",
        "name": "Polyester Resin / 飽和聚酯樹脂",
        "sub": "卷材 / 烤漆 / 防腐樹脂",
        "productLink": "products/others/polyester_resin/",
        "titleZh": "飽和聚酯樹脂技術應用 (Polyester Resin)"
    },
    "chain": {
        "slug": "chain",
        "hasData": True,
        "brand": "Dorf Ketal",
        "name": "Chain Extender / 擴鏈劑",
        "sub": "Unilink & Clearlink 系列",
        "productLink": "products/dorfketal/chain/",
        "titleZh": "擴鏈劑技術應用 (Chain Extender)"
    },
    "matting": {
        "slug": "matting",
        "hasData": True,
        "brand": "其他特化",
        "name": "Matting Agent / 消光粉",
        "sub": "二氧化矽 / 表面處理消光",
        "productLink": "products/others/matting_agent/",
        "titleZh": "消光粉技術應用 (Matting Agent)"
    },
    "powder": {
        "slug": "powder",
        "hasData": False,
        "brand": "其他特化",
        "name": "Powder Coating Additive",
        "sub": "粉體塗料專用功能性助劑",
        "productLink": "products/others/coating_additive/",
        "titleZh": "粉體塗料專用助劑技術應用 (Powder Additives)"
    }
}

def classify_doc(path, fn):
    """
    依據檔案路徑與檔名判定 slug 與所屬維度 tab_key
    """
    clean_p = path.replace(chr(96), '').strip().replace(chr(92), '/')
    parts = clean_p.split('/')
    top = parts[0]
    sub = parts[1] if len(parts) > 1 else ''

    slug_map = {
        '2.Tyzor': 'tyzor',
        '3.unilink': 'chain',
        '4.Orion': 'carbon-black',
        '5. MPI': 'wax',
        '7.Matting Agent': 'matting'
    }
    slug = slug_map.get(top, 'unknown')

    if 'Formulation Guide' in fn or 'Formulation' in sub:
        tab = 'formulation'
    elif '1.原理' in sub:
        tab = 'principles'
    elif '2.' in sub or 'Brochure' in sub or '目錄' in sub:
        tab = 'catalog'
    elif '3.' in sub or 'Application Note' in sub:
        tab = 'applications'
    elif '4.' in sub or '單一產品' in sub:
        tab = 'single'
    else:
        tab = 'applications'

    return slug, tab, clean_p

def determine_labels_and_meta(slug, tab, fn, title, origin, clean_p=""):
    """
    生成短標籤 (shortLabel)、語言、版本、群組 (productGroup) 等中繼資訊
    """
    lang = "EN (英文)"
    if " CN" in f" {fn} " or fn.endswith(" CN") or fn.endswith("(中)") or "（中文版）" in title:
        lang = "CN (簡體中文)"
    elif " TW" in f" {fn} " or fn.endswith(" TW") or "(繁)" in title or "（繁體中文）" in title:
        lang = "TW (繁體中文)"
    elif any('\u4e00' <= c <= '\u9fff' for c in fn):
        lang = "TW (繁體中文)"

    version = "原廠發行版"
    for yr in ["202608", "202607", "202602", "202512", "202504", "202412", "202407", "202208", "201707", "2026", "2025", "2024", "2022", "2020"]:
        if yr in fn or yr in origin:
            version = yr
            break

    doc_type_map = {
        "principles": "1. 原理機制",
        "catalog": "2. Brochure 總覽型錄",
        "applications": "3. Application Note 應用技術手冊",
        "single": "4. TI 單一產品技術資料",
        "formulation": "5. Formulation 配方指南"
    }

    short_label = title
    product_group = "其他產品技術"
    mech_img = None

    # ==========================
    # 1. TYZOR
    # ==========================
    if slug == "tyzor":
        if tab == "principles":
            if "交聯劑" in fn or "交聯劑" in title:
                short_label = "作為交聯劑"
                mech_img = "techdatadb/2.Tyzor/1.原理/crosslinker.webp"
            elif "催化劑" in fn or "催化劑" in title:
                short_label = "作為催化劑"
                mech_img = "techdatadb/2.Tyzor/1.原理/catalyst.webp"
            elif "表面改性" in fn or "表面改性" in title:
                short_label = "作為表面改性"
                mech_img = "techdatadb/2.Tyzor/1.原理/surface_treatment.webp"
            elif "附著力" in fn or "附著力" in title:
                short_label = "作為附著力促進劑"
                mech_img = "techdatadb/2.Tyzor/1.原理/adhesion.webp"
        elif tab == "catalog":
            if "Adhesive Plus Coatings" in fn:
                short_label = "膠黏與塗料"
            elif "Polyols Polymers" in fn:
                short_label = "多元醇聚合物"
            elif "General CN" in fn:
                short_label = "綜合手冊 (中)"
            elif "Plus Coatings" in fn:
                short_label = "塗料專用型錄"
        elif tab == "applications":
            app_short_map = {
                "Adhesives Sealants": "膠黏與密封膠",
                "Bulk Handling": "大宗儲運規範",
                "Catalyst Plasticizer": "可塑劑生產催化",
                "Crosslinking for Paper": "紙張塗佈交聯",
                "Direct Esterification": "直接酯化反應",
                "Ferrous and Nonferrous": "金屬表面前處理",
                "Glass Surface Coatings": "玻璃表面塗層",
                "Inorganic Filler": "無機填料改質",
                "Surface Primers": "底塗促進劑",
                "Thawing Frozen": "TPT 解凍操作",
                "Transesterification": "酯交換反應",
                "Vapor Pressure": "蒸氣壓曲線手冊"
            }
            for k, sl in app_short_map.items():
                if k in fn:
                    short_label = sl
                    break
        elif tab == "single":
            if "Activate 422 Plastic Packaging" in fn:
                short_label = "Activate 422 食品接觸"
                product_group = "Activate 專利耐水解系列"
            elif "Activate 422 for PET" in fn:
                short_label = "Activate 422 瓶級聚酯"
                product_group = "Activate 專利耐水解系列"
            elif "IAM for Ink" in fn:
                short_label = "IAM 印刷油墨"
                product_group = "IAM 油墨無黃變系列"
            elif "IAM for Solvent-Based" in fn:
                short_label = "IAM 溶劑型油墨"
                product_group = "IAM 油墨無黃變系列"

    # ==========================
    # 2. CHAIN (UNILINK / CLEARLINK)
    # ==========================
    elif slug == "chain":
        if tab == "catalog":
            short_label = "Unilink & Clearlink 型錄"
        elif tab == "single":
            if "Clearlink 1000" in fn:
                short_label = "Clearlink 1000 聚脲塗層"
                product_group = "Clearlink 耐候脂肪族系列"
            elif "Unilink 1030" in fn:
                short_label = "Unilink 1030 澆注彈性體"
                product_group = "Unilink 催化系統"
            elif "Foams" in fn:
                short_label = "Unilink 4200 軟質泡棉"
                product_group = "Unilink 芳香族擴鏈劑系列"
            elif "Elastomeric Coatings" in fn:
                short_label = "Unilink 4200 彈性體塗層"
                product_group = "Unilink 芳香族擴鏈劑系列"

    # ==========================
    # 3. CARBON BLACK (ORION)
    # ==========================
    elif slug == "carbon-black":
        if tab == "principles":
            if "平均原生粒徑" in title or "平均原生粒徑" in origin:
                short_label = "平均原生粒徑"
                mech_img = "techdatadb/4.Orion/1.原理/particle size.png"
            elif "結構" in title or "結構" in origin:
                short_label = "聚集體結構形態"
                mech_img = "techdatadb/4.Orion/1.原理/property comparison chart.png"
            elif "表面處理" in title or "表面處理" in origin:
                short_label = "表面處理"
            elif "製程差異" in title or "製程差異" in origin:
                short_label = "製程差異"
                mech_img = "techdatadb/4.Orion/1.原理/processes_comparison.png"
        elif tab == "catalog":
            if "CN" in fn:
                short_label = "特種碳黑型錄 (中)"
            else:
                short_label = "特種碳黑型錄 (英)"
        elif tab == "applications":
            cb_app_map = {
                "Fastness": "碳黑堅牢度 (TI 1460)",
                "Handling": "碳黑安全裝卸 (TI 1451)",
                "Modern Coatings": "現代塗料系統 (0402)",
                "Fibers": "纖維紡絲碳黑 (TI 1377)",
                "Disperse Guideline": "潤濕分散指引 (TI 1375)",
                "Industrial Coatings": "工業防護塗料 (TI 1458)",
                "Inkjet": "數位噴墨油墨 (TI 1482)",
                "Powder Coatings": "粉體塗料碳黑 (TI 1456)",
                "Printing Inks": "包裝印刷油墨 (TI 1452)",
                "Tinting Coating": "調色塗料碳黑 (TI 1459)",
                "Food Package": "食品包裝油墨 (TI 1453)",
                "Low PAHS": "低 PAHs 環保碳黑 (TI 1483)"
            }
            for k, sl in cb_app_map.items():
                if k in fn:
                    short_label = sl
                    break
        elif tab == "single":
            if "CN" in fn:
                short_label = "FW 310 超高黑度碳黑在水性及油性塗料中應用(中文版)"
            else:
                short_label = "FW 310 超高黑度碳黑在水性及油性塗料中應用(英文版)"
            product_group = "Colour Black 超高色素氣黑系列"

    # ==========================
    # 4. WAX (MICRO POWDERS)
    # ==========================
    elif slug == "wax":
        if tab == "principles":
            if "作用原理" in title:
                short_label = "1. 作用原理機制"
            elif "品種及功能" in title:
                short_label = "2. 微粉蠟品種與功能"
            elif "粒徑" in title:
                short_label = "3. 粒徑及分佈效應"
            elif "分散性" in title:
                short_label = "4. 分散性與工藝操作"
            elif "熔點" in title:
                short_label = "5. 熔點與表面性能"
            elif "極性" in title:
                short_label = "6. 極性改質與性能"
        elif tab == "catalog":
            if "PTFE Alternatives" in fn:
                short_label = "PTFE 無氟替代指南"
            elif "Specialty Wax Additives" in fn:
                short_label = "微粉蠟產品目錄總覽"
        elif tab == "applications":
            wax_app_map = {
                "Advanced Composite": "先進複合材料 (PFAS-Free)",
                "How to Disperse": "微粉蠟高效分散指引",
                "MicroTouch": "MicroTouch 觸感助劑",
                "Can Container": "罐頭金屬塗層選用",
                "Energy Curable": "UV/EB 固化塗料油墨",
                "Industrial Coatings": "工業塗料選用指南",
                "Industrial Flooring": "工業地坪耐磨塗料",
                "Powder Coatings": "粉體塗料選用指南",
                "Printing Inks": "印刷油墨抗耐磨",
                "WoodCoatings": "木器傢俱塗料",
                "Architectural Coatings": "建築裝飾塗料"
            }
            for k, sl in wax_app_map.items():
                if k in fn:
                    short_label = sl
                    break
        elif tab == "formulation":
            short_label = "MicroTouch 觸感起始配方"
        elif tab == "single":
            if "PolyGlide" in fn:
                short_label = "PolyGlide 1226XF"
                product_group = "PolyGlide 超滑無氟系列"
            elif "PropylMatte 31 HD" in fn:
                short_label = "PropylMatte 31 HD"
                product_group = "PropylMatte / AquaMatte 啞光系列"
            elif "MicroKlear" in fn:
                short_label = "MicroKlear 418AL"
                product_group = "MicroKlear 棕櫚蠟複合系列"
            elif "MicroMatte 1415-EZ" in fn:
                short_label = "MicroMatte 1415-EZ"
                product_group = "MicroMatte 易分散消光系列"
            elif "MPP-611AL" in fn:
                short_label = "MPP-611AL 氧化鋁耐磨"
                product_group = "MPP 聚乙烯氧化鋁複合系列"
            elif "PolyTuf" in fn:
                short_label = "PolyTuf 1229 耐磨衝擊"
                product_group = "PolyTuf 抗衝擊高韌性系列"
            elif "AquaMatte and PropylMatte" in fn:
                short_label = "AquaMatte 水性消光"
                product_group = "PropylMatte / AquaMatte 啞光系列"
            elif "Superslip" in fn:
                short_label = "Superslip 6515AL 超滑爽"
                product_group = "Superslip 超滑爽耐磨系列"
            elif "Polyfluo 190" in fn:
                short_label = "Polyfluo 190 / Fluo 300"
                product_group = "Polyfluo / Fluo 微粉系列"
            elif "MicroTex" in fn:
                short_label = "MicroTex 950 紋理防滑"
                product_group = "MicroTex 砂紋紋理助劑系列"
            elif "MP 22 MP 620F MP 635F" in fn:
                if "MP 22 VF" in clean_p:
                    short_label = "MP-22 VF 油墨耐磨"
                    product_group = "MP-22 合成費托微粉系列"
                elif "MP-22XF" in clean_p:
                    short_label = "MP-22XF 薄膜耐磨"
                    product_group = "MP-22 合成費托微粉系列"
                elif "MPP-620F" in clean_p:
                    short_label = "MPP-620F 油墨耐磨"
                    product_group = "MPP 高耐磨聚乙烯系列"
                elif "MPP-620XF" in clean_p:
                    short_label = "MPP-620XF 超細耐磨"
                    product_group = "MPP 高耐磨聚乙烯系列"
                elif "MPP-635VF" in clean_p:
                    short_label = "MPP-635VF 高分子量耐磨"
                    product_group = "MPP 高耐磨聚乙烯系列"
                else:
                    short_label = "MPP 耐摩擦試驗研究"
                    product_group = "MPP 高耐磨聚乙烯系列"

    # ==========================
    # 5. MATTING (二氧化矽消光粉)
    # ==========================
    elif slug == "matting":
        if tab == "principles":
            if "消光原理" in title:
                short_label = "1. 消光散射機理"
            elif "平均粒徑" in title:
                short_label = "2. 平均粒徑及分佈"
            elif "孔隙率" in title:
                short_label = "3. 孔隙率與微孔容積"
            elif "膜厚" in title:
                short_label = "4. 塗膜膜厚影響"
            elif "樹脂系統" in title:
                short_label = "5. 樹脂系統與分散工藝"

    return {
        "lang": lang,
        "version": version,
        "docType": doc_type_map.get(tab, "技術資料"),
        "shortLabel": short_label,
        "productGroup": product_group,
        "mechImg": mech_img
    }

def build_database_from_md():
    database = {}
    for slug, meta in CATEGORIES_META.items():
        database[slug] = {
            "slug": slug,
            "hasData": meta["hasData"],
            "tabs": {
                "principles": [],
                "catalog": [],
                "applications": [],
                "single": [],
                "formulation": []
            }
        }

    # 解析 技術文件摘要與重點.md
    if not os.path.exists(MD_FILE):
        raise FileNotFoundError(f"Markdown file not found: {MD_FILE}")

    with open(MD_FILE, 'r', encoding='utf-8') as f:
        md_text = f.read()

    pattern = r'###\s+([^\n]+)\s*\n+-\s+\*\*檔案\*\*：([^\n]+)\s*\n+-\s+\*\*路徑\*\*：([^\n]+)\s*\n+-\s+\*\*原文出處\*\*：([^\n]+)\s*\n+-\s+\*\*重點\*\*：\s*\n+\s+-\s+\*\*摘要\*\*：([^\n]+)\s*\n+\s+-\s+\*\*核心重點\*\*：\s*\n+((?:\s+\d+\.\s+[^\n]+\n)+)-\s+\*\*應用\*\*：([^\n]*)'
    matches = list(re.finditer(pattern, md_text))

    print(f"📖 Successfully parsed {len(matches)} document entries directly from {MD_FILE}")

    for idx, m in enumerate(matches, 1):
        raw_title = m.group(1).strip()
        fn = m.group(2).replace(chr(96), '').strip()
        raw_path = m.group(3).strip()
        origin = m.group(4).strip()
        desc = m.group(5).strip()
        points = [re.sub(r'^\d+\.\s*', '', p.strip()) for p in m.group(6).strip().split('\n') if p.strip()]
        apps_raw = m.group(7).strip()
        apps = [a.strip() for a in re.split(r'[,、，]', apps_raw) if a.strip()]

        slug, tab, clean_rel_path = classify_doc(raw_path, fn)
        if slug == "unknown":
            print(f"⚠️ Warning: Unrecognized slug for path: {raw_path}")
            continue

        meta_info = determine_labels_and_meta(slug, tab, fn, raw_title, origin, clean_rel_path)
        brand = CATEGORIES_META[slug]["brand"]

        # 設定 web 相對路徑
        web_pdf_path = f"techdatadb/{clean_rel_path}"

        title_zh = raw_title
        title_en = fn

        doc_item = {
            "docId": f"{slug.upper()[:3]}-{tab.upper()[:4]}-{len(database[slug]['tabs'][tab]) + 1:02d}",
            "filename": fn,
            "pdfPath": web_pdf_path,
            "docType": meta_info["docType"],
            "lang": meta_info["lang"],
            "version": meta_info["version"],
            "brand": brand,
            "shortLabel": meta_info["shortLabel"],
            "title": title_zh,
            "titleEn": title_en,
            "origin": origin,
            "desc": desc,
            "advantages": points,
            "applications": apps
        }

        if tab == "single":
            doc_item["productGroup"] = meta_info["productGroup"]

        if meta_info.get("mechImg"):
            doc_item["mechImg"] = meta_info["mechImg"]

        database[slug]["tabs"][tab].append(doc_item)

    # 寫入 json/tech_database.json
    out_path = os.path.join(ROOT_DIR, 'json', 'tech_database.json')
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(database, f, ensure_ascii=False, indent=2)

    print(f"✅ Generated {out_path} successfully!")
    for slug, data in database.items():
        counts = {k: len(v) for k, v in data["tabs"].items()}
        print(f"  [{slug:14s}] (hasData={data['hasData']}): {counts}")

    return database

if __name__ == '__main__':
    build_database_from_md()
