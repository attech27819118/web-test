# -*- coding: utf-8 -*-
"""
Build Technology Subpages & Technology Index
為 11 大特用化學品產品線建立獨立技術專頁 (Independent Subpages)，
五大核心維度一覽卡片 (1.原理、2.目錄、3.應用技術、4.單一產品技術、5.配方)，
縮短縱向高度，一頁式儀表板（At-A-Glance Dashboard）高密度佈局，一目了然！
"""

import os
import sys
import re
import json
import urllib.parse

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOMAIN = "https://www.attech.com.tw"

# 11 大特用化學品專題，嚴格依據圖示順序排列
TECH_ITEMS = [
    {
        "slug": "tyzor",
        "item_no": "01",
        "menu_name": "Organic Titanates and Zirconates",
        "menu_sub": "鈦酸酯與鋯酸酯, Tyzor",
        "title_zh": "鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)",
        "title_en": "Organic Titanates & Zirconates",
        "category_name": "鈦酸酯與鋯酸酯 (Tyzor®)",
        "brand_name": "Dorf Ketal 原廠專用技術",
        "brand_tag": "Dorf Ketal",
        "product_link": "products/dorfketal/tyzor/",
        "product_link_text": "瀏覽 Tyzor 產品",
        "description": "Tyzor® 有機鈦（鋯）化合物具備高反應性與特殊配位多重功能，針對高分子合成催化、三維網絡交聯、異質基材介面結合力提升及 Sol-Gel 表面改性，提供全面工業化解決方案。",
        "has_data": True,
        "inquiry_param": "Tyzor",
        "meta_desc": "宏威應用材料 Dorf Ketal Tyzor® 有機鈦酸酯與鋯酸酯四大核心技術應用，涵蓋酯化催化劑、油墨塗料交聯劑、玻璃金屬密著促進劑與表面改性方案。"
    },
    {
        "slug": "carbon-black",
        "item_no": "02",
        "menu_name": "Special Carbon Black",
        "menu_sub": "特級碳黑 / 導電碳黑",
        "title_zh": "特級碳黑技術應用 (Carbon Black)",
        "title_en": "Special Carbon Black / 特級碳黑",
        "category_name": "特級碳黑 (Carbon Black)",
        "brand_name": "Orion Engineered Carbons 原廠技術",
        "brand_tag": "Orion",
        "product_link": "products/orion/coating/",
        "product_link_text": "瀏覽 40+ 款 Orion 碳黑",
        "has_data": False,
        "inquiry_param": "CarbonBlack-Tech",
        "meta_desc": "宏威應用材料 Orion 特級碳黑技術專題，特級碳黑與導電碳黑原廠技術資料與配方評估諮詢。"
    },
    {
        "slug": "maleic",
        "item_no": "03",
        "menu_name": "Maleic Resin / 馬林酸樹脂",
        "menu_sub": "松香改性馬林酸樹脂",
        "title_zh": "馬林酸樹脂技術應用 (Maleic Resin)",
        "title_en": "Maleic Resin / 馬林酸樹脂",
        "category_name": "馬林酸樹脂 (Maleic Resin)",
        "brand_name": "特用化學品技術專區",
        "brand_tag": "其他特化",
        "product_link": "products/others/maleic_acid_resin/",
        "product_link_text": "瀏覽馬林酸樹脂規格",
        "has_data": False,
        "inquiry_param": "Maleic-Resin-Tech",
        "meta_desc": "宏威應用材料松香改性馬林酸樹脂技術專題，原廠技術資料與配方諮詢。"
    },
    {
        "slug": "px",
        "item_no": "04",
        "menu_name": "PX Lubricant Additives",
        "menu_sub": "潤滑油添加劑 (原 ExxonMobil)",
        "title_zh": "PX 潤滑油添加劑技術應用 (PX Lubricants)",
        "title_en": "PX Lubricants / 潤滑油添加劑",
        "category_name": "PX 潤滑油添加劑",
        "brand_name": "Dorf Ketal (原 ExxonMobil) 原廠技術",
        "brand_tag": "Dorf Ketal",
        "product_link": "products/dorfketal/px/",
        "product_link_text": "瀏覽 PX 潤滑油添加劑",
        "has_data": False,
        "inquiry_param": "PX-Lubricant-Tech",
        "meta_desc": "宏威應用材料 PX 潤滑油添加劑技術專題 (原 ExxonMobil 產品線)，原廠技術資料與配方諮詢。"
    },
    {
        "slug": "silane",
        "item_no": "05",
        "menu_name": "Silane / 矽烷偶合劑",
        "menu_sub": "Dynasylan / hydrosil 系列",
        "title_zh": "矽烷偶合劑系列技術應用 (Silane)",
        "title_en": "Silane / 矽烷偶合劑",
        "category_name": "矽烷偶合劑 (Silane)",
        "brand_name": "Evonik 原廠專用技術",
        "brand_tag": "Evonik / 特化",
        "product_link": "products/others/silane/",
        "product_link_text": "瀏覽 24 款矽烷規格",
        "has_data": False,
        "inquiry_param": "Silane-Technology",
        "meta_desc": "宏威應用材料矽烷偶合劑系列技術專題，包含 Dynasylan 與 Hydrosil 水性及溶劑型矽烷技術諮詢。"
    },
    {
        "slug": "wax",
        "item_no": "06",
        "menu_name": "Micronized Wax / 微粉蠟",
        "menu_sub": "PTFE 取代 / 耐磨耐刮助劑",
        "title_zh": "微粉化蠟技術應用 (Micronized Wax)",
        "title_en": "Micronized Wax / 微粉蠟",
        "category_name": "微粉蠟 (Micronized Wax)",
        "brand_name": "Micro Powders (MPI) 原廠技術",
        "brand_tag": "Micro Powders",
        "product_link": "products/mpi/ptfe/",
        "product_link_text": "瀏覽微粉蠟與 PTFE 替代方案",
        "has_data": False,
        "inquiry_param": "MPI-Wax-Tech",
        "meta_desc": "宏威應用材料 Micro Powders (MPI) 微粉蠟技術專題，合規無氟 PTFE 取代系列技術諮詢。"
    },
    {
        "slug": "adhesion",
        "item_no": "07",
        "menu_name": "Adhesion Resin / 密著樹脂",
        "menu_sub": "氯化聚烯烴 (CPO) & 非氯系",
        "title_zh": "密著樹脂技術應用 (Adhesion Resin)",
        "title_en": "Adhesion Resin / 密著樹脂",
        "category_name": "密著促進劑 (Adhesion)",
        "brand_name": "特用化學品技術專區",
        "brand_tag": "其他特化",
        "product_link": "products/others/adhesion_promoter/",
        "product_link_text": "瀏覽密著促進劑規格",
        "has_data": False,
        "inquiry_param": "Adhesion-Promoter-Tech",
        "meta_desc": "宏威應用材料密著促進劑技術專題，涵蓋氯化聚烯烴 CPO 與非氯系架橋樹脂技術諮詢。"
    },
    {
        "slug": "polyester",
        "item_no": "08",
        "menu_name": "Polyester Resin / 聚酯樹脂",
        "menu_sub": "聚酯樹脂 (DYNAPOL/DYNACOLL替代品)",
        "title_zh": "聚酯樹脂技術應用 (Polyester Resin)",
        "title_en": "Polyester Resin / 聚酯樹脂",
        "category_name": "聚酯樹脂 (Polyester Resin)",
        "brand_name": "特用化學品技術專區",
        "brand_tag": "其他特化",
        "product_link": "products/others/polyester_resin/",
        "product_link_text": "瀏覽 37 款聚酯規格",
        "has_data": False,
        "inquiry_param": "Polyester-Resin-Tech",
        "meta_desc": "宏威應用材料飽和共聚聚酯樹脂技術專題，DYNAPOL® 與 DYNACOLL® 替代方案技術諮詢。"
    },
    {
        "slug": "chain",
        "item_no": "09",
        "menu_name": "Chain Extender / 擴鏈劑",
        "menu_sub": "Unilink & Clearlink 系列",
        "title_zh": "擴鏈劑技術應用 (Chain Extender)",
        "title_en": "Chain Extender / 擴鏈劑",
        "category_name": "擴鏈劑 (Chain Extender)",
        "brand_name": "Dorf Ketal 原廠專用技術",
        "brand_tag": "Dorf Ketal",
        "product_link": "products/dorfketal/chain/",
        "product_link_text": "瀏覽擴鏈劑規格",
        "has_data": False,
        "inquiry_param": "Chain-Extender",
        "meta_desc": "宏威應用材料 Dorf Ketal Unilink & Clearlink 系列受阻二胺擴鏈劑技術專題與諮詢。"
    },
    {
        "slug": "matting",
        "item_no": "10",
        "menu_name": "Matting Agent / 消光粉",
        "menu_sub": "二氧化矽 / 表面處理消光",
        "title_zh": "消光粉技術應用 (Matting Agent)",
        "title_en": "Matting Agent / 消光粉",
        "category_name": "消光粉 (Matting Agent)",
        "brand_name": "特用化學品技術專區",
        "brand_tag": "其他特化",
        "product_link": "products/others/matting_agent/",
        "product_link_text": "瀏覽消光粉規格",
        "has_data": False,
        "inquiry_param": "Matting-Agent-Tech",
        "meta_desc": "宏威應用材料二氧化矽消光粉技術專題與技術諮詢。"
    },
    {
        "slug": "powder",
        "item_no": "11",
        "menu_name": "Powder Coating Additive",
        "menu_sub": "粉體塗料專用功能性助劑",
        "title_zh": "粉體塗料專用助劑技術應用 (Powder Additives)",
        "title_en": "Powder Additives / 粉體助劑",
        "category_name": "粉體塗料助劑 (Powder Additives)",
        "brand_name": "特用化學品技術專區",
        "brand_tag": "其他特化",
        "product_link": "products/others/coating_additive/",
        "product_link_text": "瀏覽粉體塗料助劑規格",
        "has_data": False,
        "inquiry_param": "Powder-Additive-Tech",
        "meta_desc": "宏威應用材料粉體塗料功能性助劑技術專題與技術諮詢。"
    }
]

TECH_IMAGE_MODAL_HTML = ""

def get_tyzor_products():
    """讀取 23 款真實 Tyzor 產品資訊"""
    tyzor_json_path = os.path.join(ROOT_DIR, "json", "dorfketal", "tyzor.json")
    if os.path.exists(tyzor_json_path):
        try:
            with open(tyzor_json_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return []
    return []

def build_category_switcher(current_slug, is_index=False):
    """
    建立 11 個產品系列分類切換列 (純白風格，緊湊條列式呈現)。
    """
    cards_html = []
    for item in TECH_ITEMS:
        slug = item["slug"]
        is_active = (slug == current_slug)
        url = f"technology/{slug}/"
        item_no = item.get("item_no", "01")
        menu_name = item.get("menu_name", item["category_name"])
        menu_sub = item.get("menu_sub", item["brand_tag"])

        if is_active:
            card = f'''                        <a href="{url}" onclick="if(event.button===0&&!event.ctrlKey&&!event.metaKey){{event.preventDefault();switchTechCategory('{slug}');}}" data-tech-slug="{slug}"
                           class="tech-sidebar-btn group flex items-center p-2.5 rounded-xl bg-blue-50/90 border-2 border-blue-600/80 text-blue-950 no-underline shadow-xs transition-all">
                            <div class="flex items-center gap-2 min-w-0 w-full">
                                <span class="tech-num-badge w-5 h-5 rounded-md bg-blue-900 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                                    {item_no}
                                </span>
                                <div class="min-w-0 flex-1">
                                    <div class="tech-btn-title text-sm font-bold text-blue-950 truncate leading-snug">
                                        {menu_name}
                                    </div>
                                    <div class="tech-btn-sub text-xs font-medium text-blue-800/80 truncate">
                                        {menu_sub}
                                    </div>
                                </div>
                            </div>
                        </a>'''
        else:
            card = f'''                        <a href="{url}" onclick="if(event.button===0&&!event.ctrlKey&&!event.metaKey){{event.preventDefault();switchTechCategory('{slug}');}}" data-tech-slug="{slug}"
                           class="tech-sidebar-btn group flex items-center p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-800 hover:text-blue-950 no-underline transition-all">
                            <div class="flex items-center gap-2 min-w-0 w-full">
                                <span class="tech-num-badge w-5 h-5 rounded-md bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                                    {item_no}
                                </span>
                                <div class="min-w-0 flex-1">
                                    <div class="tech-btn-title text-sm font-bold text-slate-800 group-hover:text-blue-950 truncate leading-snug">
                                        {menu_name}
                                    </div>
                                    <div class="tech-btn-sub text-xs font-normal text-slate-500 group-hover:text-slate-600 truncate">
                                        {menu_sub}
                                    </div>
                                </div>
                            </div>
                        </a>'''
        cards_html.append(card)

    return f'''                <!-- 左側：技術專題產品分類 (緊湊精緻條列) -->
                <aside class="tech-sidebar bg-white rounded-2xl border border-slate-200 p-3.5 sm:p-4 shadow-xs shrink-0">
                    <div class="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100">
                        <div class="flex items-center gap-2">
                            <span class="w-2 h-5 bg-blue-900 rounded-full inline-block shrink-0"></span>
                            <div>
                                <h2 class="text-sm sm:text-base font-bold text-blue-950 leading-tight">
                                    技術分類
                                </h2>
                            </div>
                        </div>
                        <span class="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">11 產品線</span>
                    </div>
                    <!-- 條列式導覽清單 -->
                    <nav class="tech-sidebar-list" aria-label="11大技術專題產品分類導覽">
{chr(10).join(cards_html)}
                    </nav>
                </aside>'''

def build_subtab_nav(has_data=True, active_key="principles"):
    """
    五大核心維度純單行標籤列 (Five Tabs in 1 Line, 無多餘細節，全寬 5 等分)
    """
    tabs = [
        ("principles", "1. 原理", "fa-atom"),
        ("catalog", "2. 目錄", "fa-list-check"),
        ("applications", "3. 應用技術", "fa-industry"),
        ("single", "4. 單一產品技術", "fa-flask-vial"),
        ("formulation", "5. 配方", "fa-clipboard-list")
    ]

    buttons = []
    for key, label, icon in tabs:
        is_active = (key == active_key)
        active_cls = "active" if is_active else ""
        btn = f'''                    <button type="button" onclick="switchTechSubTab('{key}')" id="tech-subtab-{key}"
                            class="tech-subtab-btn {active_cls}">
                        <i class="fa-solid {icon} text-xs"></i>
                        <span>{label}</span>
                    </button>'''
        buttons.append(btn)

    return f'''                <!-- 瀏覽器書籤樣式：五大核心維度標籤列 -->
                <div class="tech-subtab-strip" role="tablist" aria-label="技術專題五大核心維度導覽">
{chr(10).join(buttons)}
                </div>'''

def build_tyzor_content_section():
    """
    Tyzor 原廠專屬技術專區內容（精簡緊湊、儀表板化，完全收斂在一頁內，全站統一字體大小階層）
    """
    products = get_tyzor_products()
    catalog_rows = []
    for p in products:
        name = p.get('product_name', '')
        comp = p.get('chemical_component', '').strip().replace('\n', ' ')
        cats = p.get('featured_categories', [])
        safe_url = f"products/dorfketal/tyzor/{urllib.parse.quote(name)}/"
        cat_badges = "".join([f'<span class="inline-block px-1.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80 mr-1 mb-0.5">{c}</span>' for c in cats])
        
        row = f'''                        <tr class="tech-catalog-row hover:bg-blue-50/40 transition-colors">
                            <td class="py-2.5 px-3.5 font-bold text-blue-950 whitespace-nowrap text-sm">
                                <a href="{safe_url}" class="hover:text-blue-700 hover:underline">{name}</a>
                            </td>
                            <td class="py-2.5 px-3.5 text-slate-700 text-sm">{comp}</td>
                            <td class="py-2.5 px-3.5">{cat_badges}</td>
                            <td class="py-2.5 px-3.5 text-center whitespace-nowrap">
                                <a href="{safe_url}" class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-blue-900 text-slate-700 hover:text-white rounded-md text-xs font-bold transition-all">
                                    <span>查看</span>
                                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                                </a>
                            </td>
                        </tr>'''
        catalog_rows.append(row)

    catalog_tbody = "\n".join(catalog_rows)
    subtab_nav_html = build_subtab_nav(has_data=True, active_key="principles")

    return f'''            <section class="bg-white border border-slate-200 rounded-xl shadow-xs p-3 sm:p-4 space-y-2.5">
                <!-- 專題標題與頂部操作列 (超緊湊單行化，移除冗餘諮詢按鈕，高度僅約34px) -->
                <div class="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="w-1.5 h-4 bg-blue-900 rounded-full inline-block shrink-0"></span>
                        <h1 class="text-base sm:text-lg font-bold text-blue-950 tracking-tight truncate">
                            鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)
                        </h1>
                    </div>
                    
                    <div class="shrink-0 flex items-center">
                        <a href="products/dorfketal/tyzor/"
                           class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-bold transition-colors">
                            <i class="fa-solid fa-table-list text-xs"></i>
                            <span>瀏覽 Tyzor 產品</span>
                        </a>
                    </div>
                </div>

                <!-- 瀏覽器書籤風格：標籤列與內容容器一體化 -->
                <div class="tech-bookmark-wrapper mt-1">
{subtab_nav_html}

                    <div class="tech-bookmark-body">
                        <!-- ==========================================
                             分頁一：原理 (Principles) - 左右雙欄極致一目了然 (重要資訊首屏完全可見)
                             ========================================== -->
                        <div id="tech-panel-principles" class="space-y-2">
                            <!-- 4 大機制快捷標籤 (高度僅28px) -->
                            <div class="flex items-center gap-1 p-1 bg-slate-50 rounded-lg border border-slate-200 overflow-x-auto">
                                <button type="button" id="tyzor-tab-pill-0" onclick="setTechSinglePageIndex(0)" class="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-900 text-white shadow-2xs transition-all whitespace-nowrap">1. 催化劑</button>
                                <button type="button" id="tyzor-tab-pill-1" onclick="setTechSinglePageIndex(1)" class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all whitespace-nowrap">2. 交聯劑</button>
                                <button type="button" id="tyzor-tab-pill-2" onclick="setTechSinglePageIndex(2)" class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all whitespace-nowrap">3. 提高附著力</button>
                                <button type="button" id="tyzor-tab-pill-3" onclick="setTechSinglePageIndex(3)" class="px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all whitespace-nowrap">4. 表面改性</button>
                            </div>

                    <!-- 左右雙欄核心展示區 (左欄簡介與範疇，右欄核心優點清單，重要資訊首屏一眼望盡) -->
                    <div id="tyzor-view-single" class="tech-principles-grid bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5">
                        <!-- 左欄：機制名稱、說明文字與適用範疇 -->
                        <div class="space-y-2 pr-0 sm:pr-2.5 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-2.5 sm:pb-0">
                            <div>
                                <h2 id="tyzor-single-title" class="text-base font-bold text-slate-900 tracking-tight">
                                    鈦（鋯）酸酯作為催化劑
                                </h2>
                            </div>

                            <p id="tyzor-single-desc" class="text-sm text-slate-700 leading-relaxed font-normal">
                                Tyzor有機鈦（鋯）在許多反應中，如酯合成、酯交換、縮合和加成反應，都表現出高效良好的催化性能。
                            </p>

                            <!-- 原廠反應機制示意圖 (點擊可放大檢視) -->
                            <div class="space-y-1 pt-0.5">
                                <div class="flex items-center justify-between text-xs text-slate-700 font-bold">
                                    <span class="flex items-center gap-1.5">
                                        <i class="fa-solid fa-atom text-blue-900"></i>
                                        <span>反應機制：</span>
                                    </span>
                                    
                                </div>
                                <div id="tyzor-single-mech-box" class="bg-white rounded-xl border border-slate-200 p-2 sm:p-2.5 shadow-2xs flex items-center justify-center overflow-hidden">
                                    <img id="tyzor-single-mech-img" src="techdata/tyzor/catalyst_mech.webp" alt="鈦（鋯）酸酯作為催化劑 反應機制圖"
                                         class="w-full max-h-[145px] sm:max-h-[165px] object-contain rounded">
                                </div>
                            </div>

                            
                        </div>

                        <!-- 右欄：核心優點 (使用者最看重的技術優勢直接在右側平鋪呈現) -->
                        <div class="space-y-1.5 pl-0 sm:pl-2.5">
                            <div class="flex items-center gap-1.5 text-sm font-bold text-blue-950">
                                <i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>
                                <span>主要優點與特色：</span>
                            </div>
                            <ul id="tyzor-single-advantages" class="space-y-1.5 text-sm text-slate-700 leading-relaxed">
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                                    <span>不含任何有機錫，最終產品具有良好環保性，符合歐美環保標準。</span>
                                </li>
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">2</span>
                                    <span>克服普通鈦酸酯催化劑不耐水缺陷，在280℃下依舊可以保持較高催化活性（Tyzor 422, Tyzor 436）。</span>
                                </li>
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">3</span>
                                    <span>可縮短聚酯合成反應時間。</span>
                                </li>
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">4</span>
                                    <span>克服普通鈦酸酯催化劑易黃變缺陷，Tyzor 436具有低黃變特點。</span>
                                </li>
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">5</span>
                                    <span>在水、醇和單體中有良好的分散性。</span>
                                </li>
                            </ul>
                            <div class="space-y-1.5 pt-0.5">
                                <span class="text-xs font-bold text-slate-800">原廠適用範疇：</span>
                                <div id="tyzor-single-apps" class="flex flex-wrap gap-1">
                                    <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">可塑劑</span>
                                    <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">（不）飽和聚酯</span>
                                    <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">PET</span>
                                    <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">PBT</span>
                                    <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">聚酯多元醇等</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <!-- ==========================================
                     分頁二：目錄 (Catalog) - 23款規格 (帶搜尋快篩與固定高度捲軸，一頁即覽)
                     ========================================== -->
                <div id="tech-panel-catalog" class="hidden space-y-2.5">
                    <div class="flex flex-wrap items-center justify-between gap-2 pb-1">
                        
                        <div class="relative w-full sm:w-56">
                            <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-xs text-slate-400"></i>
                            <input type="text" placeholder="搜尋型號 (如 TPT, TE)..." oninput="filterTechCatalog(this.value)"
                                   class="w-full pl-7 pr-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:outline-none transition-colors">
                        </div>
                    </div>

                    <!-- 內嵌滾動表（表頭置頂，高度約束在 340px，不撐開整頁） -->
                    <div class="overflow-x-auto overflow-y-auto max-h-[340px] rounded-xl border border-slate-200 shadow-2xs">
                        <table class="w-full text-left border-collapse text-sm">
                            <thead class="sticky top-0 bg-slate-100 z-10 border-b border-slate-200 shadow-2xs">
                                <tr class="text-slate-700 font-bold">
                                    <th class="py-2.5 px-3 whitespace-nowrap">產品型號</th>
                                    <th class="py-2.5 px-3">主要化學成分</th>
                                    <th class="py-2.5 px-3">主要應用領域</th>
                                    <th class="py-2.5 px-3 text-center whitespace-nowrap">操作</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 bg-white">
{catalog_tbody}
                            </tbody>
                        </table>
                        <div id="tech-catalog-empty" class="hidden p-6 text-center text-sm text-slate-500 font-medium">
                            無符合搜尋關鍵字的產品規格
                        </div>
                    </div>
                </div>

                <!-- ==========================================
                     分頁三：應用技術 (Applications) - 4 大範疇 2x2 雙欄卡片
                     ========================================== -->
                <div id="tech-panel-applications" class="hidden space-y-2">
                    

                    <div class="tech-apps-grid">
                        <!-- 領域 1 -->
                        <div class="bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5 space-y-1.5">
                            
                            <h4 class="text-sm sm:text-base font-bold text-slate-900">聚合催化</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                酯合成、酯交換與加成反應，不含任何有機錫，耐水耐熱至 280℃。
                            </p>
                            <div class="text-xs text-blue-950 font-semibold pt-1 border-t border-slate-200/60">
                                範疇：PET、PBT、可塑劑、聚酯多元醇
                            </div>
                        </div>

                        <!-- 領域 2 -->
                        <div class="bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5 space-y-1.5">
                            
                            <h4 class="text-sm sm:text-base font-bold text-slate-900">交聯改性</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                與 -OH, -COOH, -NH2 官能基架橋，極速常溫/烘烤交聯固化，提高耐熱與耐刮。
                            </p>
                            <div class="text-xs text-blue-950 font-semibold pt-1 border-t border-slate-200/60">
                                範疇：油漆、印刷油墨、膠黏劑、聚合物 (PVA等)
                            </div>
                        </div>

                        <!-- 領域 3 -->
                        <div class="bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5 space-y-1.5">
                            
                            <h4 class="text-sm sm:text-base font-bold text-slate-900">密著促進</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                於異質基材介面架橋接合，顯著增強硬度、耐鹽霧、耐溶劑及防腐蝕。
                            </p>
                            <div class="text-xs text-blue-950 font-semibold pt-1 border-t border-slate-200/60">
                                範疇：金屬塗料、玻璃附著塗層、塑膠底材油墨、密封膠
                            </div>
                        </div>

                        <!-- 領域 4 -->
                        <div class="bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5 space-y-1.5">
                            
                            <h4 class="text-sm sm:text-base font-bold text-slate-900">表面改性</h4>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Sol-Gel 體系形成連續緻密金屬氧化物塗層，提供防腐與親水性。
                            </p>
                            <div class="text-xs text-blue-950 font-semibold pt-1 border-t border-slate-200/60">
                                範疇：紡織整理劑、鋁銀漿表面處理、顏料表面改性
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ==========================================
                     分頁四：單一產品技術 (Single Product Tech) - 緊湊看板
                     ========================================== -->
                <div id="tech-panel-single" class="hidden space-y-2.5">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-microscope text-blue-900 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整備中</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            目前原廠暫無針對單一品項發布公開之獨立技術專刊。若您需要特定型號（如 Tyzor TE, TPT, AA 75 等）之技術資料表 (TDS) 或檢驗數據，歡迎直接與宏威業務團隊聯繫索取。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry=Tyzor-TDS"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <i class="fa-solid fa-paper-plane text-xs"></i>
                                <span>聯繫業務索取 TDS 規格書</span>
                            </a>
                            <a href="products/dorfketal/tyzor/"
                                class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                                <span>瀏覽 Tyzor 產品專區</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- ==========================================
                     分頁五：配方 (Formulation) - 緊湊看板
                     ========================================== -->
                <div id="tech-panel-formulation" class="hidden space-y-2.5">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-clipboard-list text-amber-700 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">原廠無公開配方</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠未提供公開參考配方，暫無資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            特用化學品之具體添加比例、順序與溶劑體系，高度取決於特定樹脂與加工條件，原廠未提供通用固定配方。如需針對您的系統進行配方評估與樣品測試，歡迎聯繫宏威技術顧問。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry=Tyzor-Formulation"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <i class="fa-solid fa-flask-vial text-xs"></i>
                                <span>申請技術配方評估與樣品</span>
                            </a>
                            <a href="products/dorfketal/tyzor/"
                                class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                                <span>瀏覽 Tyzor 產品專區</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>'''

def build_placeholder_content_section(item):
    """
    為未有原廠技術資料的 10 個產品線建立專業「暫無資料」獨立專頁內容 (一頁式緊湊呈現，全站統一字體大小階層)。
    """
    subtab_nav_html = build_subtab_nav(has_data=False, active_key="principles")

    return f'''            <section class="bg-white border border-slate-200 rounded-xl shadow-xs p-3 sm:p-4 space-y-2.5">
                <!-- 專題標題列 (超緊湊單行化) -->
                <div class="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                    <div class="flex items-center gap-2 min-w-0">
                        <span class="w-1.5 h-4 bg-blue-900 rounded-full inline-block shrink-0"></span>
                        <h1 class="text-base sm:text-lg font-bold text-blue-950 tracking-tight truncate">
                            {item["title_zh"]}
                        </h1>
                    </div>
                    <div class="shrink-0 flex items-center">
                        <a href="{item["product_link"]}"
                           class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-bold transition-colors">
                            <i class="fa-solid fa-table-list text-xs"></i>
                            <span>{item["product_link_text"]}</span>
                        </a>
                    </div>
                </div>

                <!-- 瀏覽器書籤風格：標籤列與內容容器一體化 -->
                <div class="tech-bookmark-wrapper mt-1">
{subtab_nav_html}

                    <div class="tech-bookmark-body">
                        <!-- 分頁一：原理 -->
                        <div id="tech-panel-principles" class="space-y-2">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-atom text-blue-900 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整備中</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            如需了解相關產品反應機制、索取原廠技術手冊或申請測試樣品，歡迎直接聯繫宏威業務團隊。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <i class="fa-solid fa-paper-plane text-xs"></i>
                                <span>聯繫業務索取資料</span>
                            </a>
                            <a href="{item["product_link"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                                <span>{item["product_link_text"]}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 分頁二：目錄 -->
                <div id="tech-panel-catalog" class="hidden space-y-2">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-list-check text-blue-900 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">產品目錄</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">瀏覽 {item["title_zh"]} 完整產品清單與規格</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            宏威應用材料官網提供完整的產品規格表、物性參數對照與樣品申請服務。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="{item["product_link"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <i class="fa-solid fa-table-list text-xs"></i>
                                <span>{item["product_link_text"]}</span>
                            </a>
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                                <span>申請規格諮詢</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 分頁三：應用技術 -->
                <div id="tech-panel-applications" class="hidden space-y-2">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-industry text-blue-900 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整備中</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            目前原廠尚未提供此品項之公開技術應用白皮書。如需特定產業應用評估，歡迎直接聯繫宏威技術顧問。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <span>聯繫業務索取資料</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 分頁四：單一產品技術 -->
                <div id="tech-panel-single" class="hidden space-y-2">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-flask-vial text-blue-900 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整備中</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            如需索取個別產品技術資料表 (TDS) 或安全資料表 (SDS)，請聯繫宏威業務團隊。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <span>聯繫業務索取 TDS</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 分頁五：配方 -->
                <div id="tech-panel-formulation" class="hidden space-y-2">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                        <div class="flex items-center justify-center gap-2">
                            <i class="fa-solid fa-clipboard-list text-amber-700 text-sm"></i>
                            <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">原廠無公開配方</span>
                            <span class="text-sm sm:text-base font-bold text-blue-950">原廠未提供公開參考配方，暫無資料</span>
                        </div>
                        <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            特用化學品配方取決於樹脂與固化體系，原廠未提供通用公開配方。如需特定系統配方評估與樣品測試，歡迎聯繫宏威技術服務團隊。
                        </p>
                        <div class="pt-1 flex items-center justify-center gap-2.5">
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                                <span>申請配方諮詢與樣品</span>
                            </a>
                        </div>
                    </div>
                </div>
                    </div>
                </div>
            </section>'''

def build_full_tech_page_html(item, template_shell, is_index=False):
    """
    組裝完整的獨立技術專頁 HTML (緊湊一頁式佈局)。
    """
    slug = item["slug"]
    title_zh = item["title_zh"]
    meta_desc = item["meta_desc"]
    canonical_url = f"{DOMAIN}/technology/" if is_index else f"{DOMAIN}/technology/{slug}/"

    breadcrumb_item = f'''                    <a href="technology/tyzor/" class="hover:text-blue-900 hover:underline">技術專區</a>
                    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
                    <span id="tech-breadcrumb-current" class="text-blue-950 font-bold">{item["category_name"]}</span>'''

    switcher_html = build_category_switcher(slug, is_index=False)
    if item["has_data"]:
        content_html = build_tyzor_content_section()
    else:
        content_html = build_placeholder_content_section(item)

    tech_section = f'''    <!-- Tab: 技術專區 (Technology) - 獨立分頁一頁式緊湊呈現 (統一白色風格：左側條列式切換，右側資料顯示) -->
    <section id="tab-technology" class="tab-content active" role="tabpanel" aria-labelledby="nav-technology">
        <style>
        .tech-layout-container {{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            width: 100%;
        }}
        .tech-sidebar {{
            width: 100%;
            flex-shrink: 0;
            box-sizing: border-box;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
        }}
        .tech-sidebar-list {{
            display: flex !important;
            flex-direction: column !important;
            gap: 0.375rem !important;
            width: 100% !important;
        }}
        .tech-content-main {{
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }}
        @media (min-width: 1024px) {{
            .tech-layout-container {{
                flex-direction: row;
                gap: 1.25rem;
                align-items: flex-start;
            }}
            .tech-sidebar {{
                width: 310px;
                position: sticky;
                top: 5rem;
                max-height: calc(100vh - 5.5rem);
                display: flex;
                flex-direction: column;
                overflow-y: auto;
            }}
            .tech-sidebar::-webkit-scrollbar {{
                width: 4px;
            }}
            .tech-sidebar::-webkit-scrollbar-track {{
                background: #f8fafc;
            }}
            .tech-sidebar::-webkit-scrollbar-thumb {{
                background: #cbd5e1;
                border-radius: 4px;
            }}
        }}
        /* 瀏覽器書籤風格容器與標籤列 (一體化設計：當前頁籤為白底無縫融入下方內容區) */
        .tech-bookmark-wrapper {{
            position: relative;
            width: 100%;
        }}
        .tech-subtab-strip {{
            display: grid !important;
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            gap: 0.375rem;
            width: 100%;
            position: relative;
            z-index: 10;
            margin-bottom: -1px !important;
        }}
        @media (max-width: 640px) {{
            .tech-subtab-strip {{
                display: flex !important;
                overflow-x: auto;
                gap: 0.25rem;
                padding-bottom: 0;
                scrollbar-width: none;
            }}
            .tech-subtab-strip::-webkit-scrollbar {{
                display: none;
            }}
            .tech-subtab-btn {{
                flex: 0 0 auto;
                white-space: nowrap;
            }}
        }}
        .tech-subtab-btn {{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.375rem;
            padding: 0.55rem 0.5rem 0.45rem 0.5rem;
            border-top-left-radius: 0.625rem !important;
            border-top-right-radius: 0.625rem !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            font-size: 0.8125rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            border: 1px solid #cbd5e1 !important;
            border-bottom: 1px solid #cbd5e1 !important;
            background: #f1f5f9 !important;
            color: #475569 !important;
            text-align: center;
            white-space: nowrap;
            position: relative;
            z-index: 5;
        }}
        .tech-subtab-btn:hover {{
            background: #e2e8f0 !important;
            border-color: #94a3b8 !important;
            color: #0f172a !important;
        }}
        .tech-subtab-btn.active {{
            background: #ffffff !important;
            color: #1e3a8a !important;
            font-weight: 800 !important;
            border-top: 3px solid #1e3a8a !important;
            border-left: 1px solid #cbd5e1 !important;
            border-right: 1px solid #cbd5e1 !important;
            border-bottom: 2px solid #ffffff !important;
            margin-bottom: -1px !important;
            position: relative;
            z-index: 20 !important;
            box-shadow: 0 -2px 6px -1px rgba(0, 0, 0, 0.04) !important;
        }}
        .tech-bookmark-body {{
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 0 0 0.875rem 0.875rem;
            padding: 1rem;
            position: relative;
            z-index: 1;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
        }}
        @media (max-width: 640px) {{
            .tech-bookmark-body {{
                padding: 0.75rem;
            }}
        }}
        /* 核心原理 2-Column Split 左右分欄雙翼佈局 (重要資訊首屏完全可見) */
        .tech-principles-grid {{
            display: grid;
            grid-template-columns: 44% 56%;
            gap: 0.875rem;
            align-items: start;
        }}
        @media (max-width: 900px) {{
            .tech-principles-grid {{
                grid-template-columns: 1fr;
            }}
        }}
        /* 應用技術 2x2 雙欄緊湊卡片網格 */
        .tech-apps-grid {{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.625rem;
        }}
        @media (max-width: 768px) {{
            .tech-apps-grid {{
                grid-template-columns: 1fr;
            }}
        }}
        </style>
        <div class="optimized-container px-3 sm:px-4 py-2.5 sm:py-3.5">
            <!-- 頂部麵包屑導航 (極簡緊湊) -->
            <div class="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <a href="./" class="hover:text-blue-900 hover:underline">首頁</a>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
{breadcrumb_item}
            </div>

            <!-- 左右兩欄格局：左側技術分類切換導覽 (條列式)，右側資料顯示區 -->
            <div class="tech-layout-container">
{switcher_html}

                <!-- 右側：資料顯示區 (統一白色風格) -->
                <main class="tech-content-main">
                    <div id="tech-content-display">
{content_html}
                    </div>
                </main>
            </div>
        </div>
    </section>'''

    # Replace section in template shell
    html = template_shell
    sec_start = html.find('id="tab-technology"')
    comment_marker = '<!-- Tab: 技術專區'
    prev_comment = html.rfind(comment_marker, 0, sec_start)
    replace_start = prev_comment if prev_comment != -1 else html.rfind('<section', 0, sec_start)

    next_sec = html.find('id="tab-partners"')
    prev_partner_comment = html.rfind('<!-- Tab 3: 合作夥伴', 0, next_sec)
    replace_end = prev_partner_comment if prev_partner_comment != -1 else html.rfind('<section', 0, next_sec)

    page_html = html[:replace_start] + tech_section + "\n    " + html[replace_end:]

    # Set tab-about inactive and tab-technology active
    page_html = page_html.replace('id="tab-about" class="tab-content active"', 'id="tab-about" class="tab-content"')
    page_html = page_html.replace('id="tab-products" class="tab-content active"', 'id="tab-products" class="tab-content"')
    page_html = page_html.replace('id="nav-about" role="tab" aria-selected="true"', 'id="nav-about" role="tab" aria-selected="false"')
    page_html = page_html.replace('id="mobile-nav-about" role="tab" aria-selected="true"', 'id="mobile-nav-about" role="tab" aria-selected="false"')

    page_html = page_html.replace('id="nav-technology" role="tab" aria-selected="false"', 'id="nav-technology" role="tab" aria-selected="true"')
    page_html = page_html.replace('id="mobile-nav-technology" role="tab" aria-selected="false"', 'id="mobile-nav-technology" role="tab" aria-selected="true"')

    # 確保導覽列「技術」連結一律指向 technology/tyzor/
    page_html = page_html.replace('href="technology/" id="nav-technology"', 'href="technology/tyzor/" id="nav-technology"')
    page_html = page_html.replace('href="technology/" id="mobile-nav-technology"', 'href="technology/tyzor/" id="mobile-nav-technology"')

    # 確保 nav-technology 與 mobile-nav-technology 顯示 active 高亮樣式
    page_html = re.sub(
        r'id="nav-about" role="tab" aria-selected="false"\s+class="nav-btn [^"]*"',
        'id="nav-about" role="tab" aria-selected="false"\n                   class="nav-btn text-slate-700 hover:text-blue-900 border-b-2 border-transparent hover:border-gray-400 px-1 pt-1 h-16 inline-flex items-center"',
        page_html
    )
    page_html = re.sub(
        r'id="nav-technology" role="tab" aria-selected="true" aria-controls="tab-technology"\s+class="nav-btn [^"]*"',
        'id="nav-technology" role="tab" aria-selected="true" aria-controls="tab-technology"\n                   class="nav-btn text-blue-950 f-weight-bold border-b-2 border-blue-900 px-1 pt-1 h-16 inline-flex items-center"',
        page_html
    )
    page_html = re.sub(
        r'id="mobile-nav-about" role="tab" aria-selected="false"\s+class="mobile-nav-btn [^"]*"',
        'id="mobile-nav-about" role="tab" aria-selected="false"\n               class="mobile-nav-btn flex-1 py-1.5 px-2 text-center rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 transition-all"',
        page_html
    )
    page_html = re.sub(
        r'id="mobile-nav-technology" role="tab" aria-selected="true"\s+class="mobile-nav-btn [^"]*"',
        'id="mobile-nav-technology" role="tab" aria-selected="true"\n               class="mobile-nav-btn flex-1 py-1.5 px-2 text-center rounded-lg text-xs font-bold transition-all bg-blue-900 text-white shadow-xs"',
        page_html
    )

    # 快取版本破壞
    page_html = re.sub(r'js/technology\.js\?v=[^"]*', 'js/technology.js?v=20261006_v2', page_html)
    page_html = re.sub(r'js/router\.js\?v=[^"]*', 'js/router.js?v=20261006_v2', page_html)

    # Update Title, Meta Description & Canonical
    page_title = f"{title_zh} | 宏威應用材料 ATTech Materials"
    page_html = re.sub(r'<title[^>]*>.*?</title>', f'<title id="web-title">{page_title}</title>', page_html)
    page_html = re.sub(r'<meta\s+name="description"\s+content="[^"]*"', f'<meta name="description" content="{meta_desc}"', page_html)
    page_html = re.sub(r'<link\s+rel="canonical"\s+href="[^"]*"', f'<link rel="canonical" href="{canonical_url}"', page_html)
    page_html = re.sub(r'<meta\s+property="og:title"\s+content="[^"]*"', f'<meta property="og:title" content="{page_title}"', page_html)
    page_html = re.sub(r'<meta\s+property="og:url"\s+content="[^"]*"', f'<meta property="og:url" content="{canonical_url}"', page_html)
    page_html = re.sub(r'<meta\s+property="og:description"\s+content="[^"]*"', f'<meta property="og:description" content="{meta_desc}"', page_html)

    # Set data-tech-slug on body
    page_html = page_html.replace('<body class="', f'<body data-tech-slug="{slug}" class="')

    # 完全移除燈箱視窗 HTML
    if 'id="tech-image-modal"' in page_html:
        m_start = page_html.find('<!-- ==========================================\n         技術專頁：原廠技術圖表全螢幕燈箱')
        if m_start == -1:
            m_start = page_html.find('<div id="tech-image-modal"')
        m_end = page_html.find('</body>', m_start)
        if m_start != -1 and m_end != -1:
            page_html = page_html[:m_start] + page_html[m_end:]

    return page_html

def build_all():
    print("🚀 開始建置 11 大特用化學品獨立技術分頁（一頁式緊湊儀表板）...")
    with open(os.path.join(ROOT_DIR, 'index.html'), 'r', encoding='utf-8') as f:
        template_shell = f.read()

    # 1. 產生 11 個獨立子頁面資料夾與 index.html
    for item in TECH_ITEMS:
        slug = item["slug"]
        sub_dir = os.path.join(ROOT_DIR, 'technology', slug)
        os.makedirs(sub_dir, exist_ok=True)
        sub_file = os.path.join(sub_dir, 'index.html')

        sub_html = build_full_tech_page_html(item, template_shell, is_index=False)
        with open(sub_file, 'w', encoding='utf-8') as sf:
            sf.write(sub_html)
        print(f"  [SUBPAGE] 建立獨立分頁: technology/{slug}/index.html ({len(sub_html)} bytes, has_data={item['has_data']})")

    # 2. 產生 technology/index.html (作為自動即時轉向至 technology/tyzor/ 的首頁引導頁面)
    redirect_html = '''<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="refresh" content="0; url=tyzor/">
    <link rel="canonical" href="https://www.attech.com.tw/technology/tyzor/">
    <title>技術專區 | 宏威應用材料 ATTech Materials</title>
    <script>
        (function () {
            var baseHref = '/';
            if (window.location.hostname.endsWith('github.io')) {
                var repo = window.location.pathname.split('/').filter(Boolean)[0];
                if (repo) baseHref = '/' + repo + '/';
            }
            var target = baseHref + 'technology/tyzor/' + window.location.search + window.location.hash;
            window.location.replace(target);
        })();
    </script>
</head>
<body style="background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px;box-sizing:border-box;">
    <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;padding:32px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05);text-align:center;max-width:420px;width:100%;">
        <div style="width:48px;height:48px;border-radius:12px;background:#eff6ff;color:#1e3a8a;display:flex;align-items:center;justify-content:center;margin:0 auto 16px auto;font-size:24px;font-weight:bold;">AT</div>
        <h2 style="color:#0f172a;font-size:18px;margin:0 0 8px 0;font-weight:700;">前往技術專區</h2>
        <p style="color:#64748b;font-size:14px;margin:0 0 20px 0;line-height:1.6;">頁面正在自動導向至 Tyzor® 鈦酸酯與鋯酸酯技術專頁...</p>
        <a href="tyzor/" style="display:inline-block;background:#1e3a8a;color:#ffffff;text-decoration:none;padding:10px 24px;border-radius:10px;font-size:14px;font-weight:600;">直接點擊前往</a>
    </div>
</body>
</html>
'''
    with open(os.path.join(ROOT_DIR, 'technology', 'index.html'), 'w', encoding='utf-8') as mf:
        mf.write(redirect_html)
    print(f"  [MAIN] 更新技術專區自動轉向頁: technology/index.html ({len(redirect_html)} bytes -> 自動導向 technology/tyzor/)")

    # 3. 同步更新根目錄 index.html 的 tab-technology 與 JS 版本號
    sync_root_index_technology()

    # 4. 同步更新 sitemap.xml
    update_sitemap()
    print("🎉 11 項技術獨立分頁已全部建置完成！")

def sync_root_index_technology():
    root_index_path = os.path.join(ROOT_DIR, 'index.html')
    with open(root_index_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # 確保導覽列指至 technology/tyzor/
    html = html.replace('href="technology/" id="nav-technology"', 'href="technology/tyzor/" id="nav-technology"')
    html = html.replace('href="technology/" id="mobile-nav-technology"', 'href="technology/tyzor/" id="mobile-nav-technology"')

    # 確保快取版本破壞
    html = re.sub(r'js/technology\.js\?v=[^"]*', 'js/technology.js?v=20261006_v2', html)
    html = re.sub(r'js/router\.js\?v=[^"]*', 'js/router.js?v=20261006_v2', html)

    # 替換 tab-technology 為最新緊湊一頁式版本
    tyzor_item = TECH_ITEMS[0]
    tyzor_content = build_tyzor_content_section()
    switcher_html = build_category_switcher("tyzor", is_index=False)
    breadcrumb_item = '''                    <a href="technology/tyzor/" class="hover:text-blue-900 hover:underline">技術專區</a>
                    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
                    <span id="tech-breadcrumb-current" class="text-blue-950 font-bold">鈦酸酯與鋯酸酯 (Tyzor®)</span>'''

    tech_section_inactive = f'''    <!-- Tab: 技術專區 (Technology) - 一頁式緊湊呈現 (統一白色風格：左側條列式切換，右側資料顯示) -->
    <section id="tab-technology" class="tab-content" role="tabpanel" aria-labelledby="nav-technology">
        <style>
        .tech-layout-container {{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            width: 100%;
        }}
        .tech-sidebar {{
            width: 100%;
            flex-shrink: 0;
            box-sizing: border-box;
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 1rem;
            padding: 1rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
        }}
        .tech-sidebar-list {{
            display: flex !important;
            flex-direction: column !important;
            gap: 0.375rem !important;
            width: 100% !important;
        }}
        .tech-content-main {{
            flex: 1 1 0%;
            min-width: 0;
            width: 100%;
        }}
        @media (min-width: 1024px) {{
            .tech-layout-container {{
                flex-direction: row;
                gap: 1.25rem;
                align-items: flex-start;
            }}
            .tech-sidebar {{
                width: 310px;
                position: sticky;
                top: 5rem;
                max-height: calc(100vh - 5.5rem);
                display: flex;
                flex-direction: column;
                overflow-y: auto;
            }}
            .tech-sidebar::-webkit-scrollbar {{
                width: 4px;
            }}
            .tech-sidebar::-webkit-scrollbar-track {{
                background: #f8fafc;
            }}
            .tech-sidebar::-webkit-scrollbar-thumb {{
                background: #cbd5e1;
                border-radius: 4px;
            }}
        }}
        /* 瀏覽器書籤風格容器與標籤列 (一體化設計：當前頁籤為白底無縫融入下方內容區) */
        .tech-bookmark-wrapper {{
            position: relative;
            width: 100%;
        }}
        .tech-subtab-strip {{
            display: grid !important;
            grid-template-columns: repeat(5, minmax(0, 1fr)) !important;
            gap: 0.375rem;
            width: 100%;
            position: relative;
            z-index: 10;
            margin-bottom: -1px !important;
        }}
        @media (max-width: 640px) {{
            .tech-subtab-strip {{
                display: flex !important;
                overflow-x: auto;
                gap: 0.25rem;
                padding-bottom: 0;
                scrollbar-width: none;
            }}
            .tech-subtab-strip::-webkit-scrollbar {{
                display: none;
            }}
            .tech-subtab-btn {{
                flex: 0 0 auto;
                white-space: nowrap;
            }}
        }}
        .tech-subtab-btn {{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.375rem;
            padding: 0.55rem 0.5rem 0.45rem 0.5rem;
            border-top-left-radius: 0.625rem !important;
            border-top-right-radius: 0.625rem !important;
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            font-size: 0.8125rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.15s ease;
            border: 1px solid #cbd5e1 !important;
            border-bottom: 1px solid #cbd5e1 !important;
            background: #f1f5f9 !important;
            color: #475569 !important;
            text-align: center;
            white-space: nowrap;
            position: relative;
            z-index: 5;
        }}
        .tech-subtab-btn:hover {{
            background: #e2e8f0 !important;
            border-color: #94a3b8 !important;
            color: #0f172a !important;
        }}
        .tech-subtab-btn.active {{
            background: #ffffff !important;
            color: #1e3a8a !important;
            font-weight: 800 !important;
            border-top: 3px solid #1e3a8a !important;
            border-left: 1px solid #cbd5e1 !important;
            border-right: 1px solid #cbd5e1 !important;
            border-bottom: 2px solid #ffffff !important;
            margin-bottom: -1px !important;
            position: relative;
            z-index: 20 !important;
            box-shadow: 0 -2px 6px -1px rgba(0, 0, 0, 0.04) !important;
        }}
        .tech-bookmark-body {{
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 0 0 0.875rem 0.875rem;
            padding: 1rem;
            position: relative;
            z-index: 1;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
        }}
        @media (max-width: 640px) {{
            .tech-bookmark-body {{
                padding: 0.75rem;
            }}
        }}
        /* 核心原理 2-Column Split 左右分欄雙翼佈局 (重要資訊首屏完全可見) */
        .tech-principles-grid {{
            display: grid;
            grid-template-columns: 44% 56%;
            gap: 0.875rem;
            align-items: start;
        }}
        @media (max-width: 900px) {{
            .tech-principles-grid {{
                grid-template-columns: 1fr;
            }}
        }}
        /* 應用技術 2x2 雙欄緊湊卡片網格 */
        .tech-apps-grid {{
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.625rem;
        }}
        @media (max-width: 768px) {{
            .tech-apps-grid {{
                grid-template-columns: 1fr;
            }}
        }}
        </style>
        <div class="optimized-container px-3 sm:px-4 py-2.5 sm:py-3.5">
            <!-- 頂部麵包屑導航 (極簡緊湊) -->
            <div class="mb-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500">
                <a href="./" class="hover:text-blue-900 hover:underline">首頁</a>
                <i class="fa-solid fa-chevron-right text-[10px] text-slate-400"></i>
{breadcrumb_item}
            </div>

            <!-- 左右兩欄格局：左側技術分類切換導覽 (條列式)，右側資料顯示區 -->
            <div class="tech-layout-container">
{switcher_html}

                <!-- 右側：資料顯示區 (統一白色風格) -->
                <main class="tech-content-main">
                    <div id="tech-content-display">
{tyzor_content}
                    </div>
                </main>
            </div>
        </div>
    </section>'''

    sec_start = html.find('id="tab-technology"')
    comment_marker = '<!-- Tab: 技術專區'
    prev_comment = html.rfind(comment_marker, 0, sec_start)
    replace_start = prev_comment if prev_comment != -1 else html.rfind('<section', 0, sec_start)

    next_sec = html.find('id="tab-partners"')
    prev_partner_comment = html.rfind('<!-- Tab 3: 合作夥伴', 0, next_sec)
    replace_end = prev_partner_comment if prev_partner_comment != -1 else html.rfind('<section', 0, next_sec)

    if replace_start != -1 and replace_end != -1:
        html = html[:replace_start] + tech_section_inactive + "\n\n        " + html[replace_end:]

    # 完全移除燈箱視窗 HTML
    if 'id="tech-image-modal"' in html:
        m_start = html.find('<!-- ==========================================\n         技術專頁：原廠技術圖表全螢幕燈箱')
        if m_start == -1:
            m_start = html.find('<div id="tech-image-modal"')
        m_end = html.find('</body>', m_start)
        if m_start != -1 and m_end != -1:
            html = html[:m_start] + html[m_end:]

    with open(root_index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  [ROOT] 同步更新 root index.html 中的導覽列連結、JS 版本號與 tab-technology 緊湊佈局")

def update_sitemap():
    sitemap_path = os.path.join(ROOT_DIR, 'sitemap.xml')
    if not os.path.exists(sitemap_path):
        return
    with open(sitemap_path, 'r', encoding='utf-8') as f:
        xml = f.read()

    added_urls = []
    main_tech_url = f"{DOMAIN}/technology/"
    if f"<loc>{main_tech_url}</loc>" not in xml:
        added_urls.append(main_tech_url)

    for item in TECH_ITEMS:
        url = f"{DOMAIN}/technology/{item['slug']}/"
        if f"<loc>{url}</loc>" not in xml:
            added_urls.append(url)

    if added_urls:
        about_loc = f"<loc>{DOMAIN}/about/</loc>"
        pos = xml.find(about_loc)
        if pos != -1:
            end_url_pos = xml.find('</url>', pos) + len('</url>')
            new_blocks = []
            for u in added_urls:
                block = f'''
    <url>
        <loc>{u}</loc>
        <lastmod>2026-10-05</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.85</priority>
    </url>'''
                new_blocks.append(block)
            xml = xml[:end_url_pos] + "".join(new_blocks) + xml[end_url_pos:]
            with open(sitemap_path, 'w', encoding='utf-8') as f:
                f.write(xml)
            print(f"✅ 已在 sitemap.xml 中加入 {len(added_urls)} 個獨立技術子分頁 URL！")

if __name__ == '__main__':
    build_all()
