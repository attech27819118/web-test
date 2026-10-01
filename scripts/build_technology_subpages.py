# -*- coding: utf-8 -*-
"""
Build Technology Subpages & Technology Index
為 11 大特用化學品產品線建立獨立技術專頁 (Independent Subpages)，
嚴格依圖示順序（橫向 1-4, 5-8, 9-11）編號與呈現。
支援「單頁模式」與「2x2 排版模式」切換，高解析度圖表與原廠 PDF 預覽下載。
"""

import os
import sys
import re
import json

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

def build_category_switcher(current_slug, is_index=False):
    """
    建立 11 個產品系列分類切換列 (純白風格，條列式清晰呈現)。
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
                           class="tech-sidebar-btn group flex items-center p-3 rounded-xl bg-blue-50/90 border-2 border-blue-600/80 text-blue-950 no-underline shadow-xs transition-all">
                            <div class="flex items-center gap-2.5 min-w-0 w-full">
                                <span class="tech-num-badge w-6 h-6 rounded-md bg-blue-900 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-2xs">
                                    {item_no}
                                </span>
                                <div class="min-w-0 flex-1">
                                    <div class="tech-btn-title text-xs sm:text-sm font-extrabold text-blue-950 truncate leading-snug">
                                        {menu_name}
                                    </div>
                                    <div class="tech-btn-sub text-xs font-semibold text-blue-800/80 truncate">
                                        {menu_sub}
                                    </div>
                                </div>
                            </div>
                        </a>'''
        else:
            card = f'''                        <a href="{url}" onclick="if(event.button===0&&!event.ctrlKey&&!event.metaKey){{event.preventDefault();switchTechCategory('{slug}');}}" data-tech-slug="{slug}"
                           class="tech-sidebar-btn group flex items-center p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-800 hover:text-blue-950 no-underline transition-all">
                            <div class="flex items-center gap-2.5 min-w-0 w-full">
                                <span class="tech-num-badge w-6 h-6 rounded-md bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors">
                                    {item_no}
                                </span>
                                <div class="min-w-0 flex-1">
                                    <div class="tech-btn-title text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-950 truncate leading-snug">
                                        {menu_name}
                                    </div>
                                    <div class="tech-btn-sub text-xs font-normal text-slate-500 group-hover:text-slate-600 truncate">
                                        {menu_sub}
                                    </div>
                                </div>
                            </div>
                        </a>'''
        cards_html.append(card)

    return f'''                <!-- 左側：技術專題產品分類 (統一白色風格，條列式清晰呈現) -->
                <aside class="tech-sidebar bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs shrink-0">
                    <div class="flex items-center justify-between pb-3 mb-2.5 border-b border-slate-100">
                        <div class="flex items-center gap-2">
                            <span class="w-2.5 h-6 bg-blue-900 rounded-full inline-block shrink-0"></span>
                            <div>
                                <h2 class="text-sm sm:text-base font-extrabold text-blue-950 leading-tight">
                                    技術分類
                                </h2>
                            </div>
                        </div>
                        <span class="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">11 大專題</span>
                    </div>
                    <!-- 條列式導覽清單：純單欄垂直條列，寬度充裕不被壓縮 -->
                    <nav class="tech-sidebar-list" aria-label="11大技術專題產品分類導覽">
{chr(10).join(cards_html)}
                    </nav>
                </aside>'''

def build_tyzor_content_section():
    """
    Tyzor 原廠專屬技術專區內容 (包含單頁模式與 2x2 排版模式切換及 Lightbox，完全依據原廠資料)。
    排版大方舒適，去除微小繁雜標記與多餘英文，字體舒適清晰。
    """
    return '''            <section class="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-7 space-y-6">
                <!-- 專題標題與頂部操作列 (簡潔大方，無冗餘頂部標籤與模式切換按鈕，與其他技術專頁完全一致) -->
                <div class="pb-5 border-b border-gray-100 space-y-3">
                    <div class="flex flex-wrap items-center justify-between gap-3.5">
                        <div class="min-w-0 py-0.5">
                            <h1 class="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-950 flex items-center gap-2.5 whitespace-nowrap">
                                <span class="w-2.5 h-6 bg-blue-900 rounded-full inline-block shrink-0"></span>
                                <span class="whitespace-nowrap tracking-tight">鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)</span>
                            </h1>
                        </div>
                        
                        <div class="shrink-0 flex items-center gap-2 sm:gap-3 ml-auto">
                            <a href="products/dorfketal/tyzor/"
                               class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                                <i class="fa-solid fa-table-list"></i>
                                <span>瀏覽 Tyzor 產品</span>
                            </a>
                            <a href="contact/?mode=detailed&inquiry=Tyzor"
                               class="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors active:scale-95">
                                <i class="fa-solid fa-flask-vial"></i>
                                <span>產品諮詢</span>
                            </a>
                        </div>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-0.5 w-full">
                        根據 Dorf Ketal 原廠技術手冊，Tyzor® 有機鈦（鋯）化合物具備催化反應、交聯改性、附著促進與表面改性四大核心性能，廣泛應用於高分子合成、油漆油墨、膠黏劑與表面處理。
                    </p>
                </div>

                <!-- ==========================================
                     模式一：單頁模式瀏覽 (Single Page View Mode)
                     ========================================== -->
                <div id="tyzor-view-single" class="space-y-5">
                    <!-- 單頁瀏覽控制列：快捷標籤切換 (加大內距與文字，舒適清晰) -->
                    <div class="flex items-center gap-1.5 p-1.5 bg-slate-50 rounded-2xl border border-slate-200 overflow-x-auto">
                        <button type="button" id="tyzor-tab-pill-0" onclick="setTechSinglePageIndex(0)" class="px-4 py-2 rounded-xl text-sm font-bold bg-blue-900 text-white shadow-xs transition-all">1. 催化劑</button>
                        <button type="button" id="tyzor-tab-pill-1" onclick="setTechSinglePageIndex(1)" class="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all">2. 交聯劑</button>
                        <button type="button" id="tyzor-tab-pill-2" onclick="setTechSinglePageIndex(2)" class="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all">3. 提高附著力</button>
                        <button type="button" id="tyzor-tab-pill-3" onclick="setTechSinglePageIndex(3)" class="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all">4. 表面改性</button>
                    </div>

                    <!-- 單頁核心展示區 (簡約清晰：左側為說明、應用與優點；右側為原廠技術圖表) -->
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                        <!-- 左欄：資料內容 -->
                        <div class="lg:col-span-6 space-y-6">
                            <div>
                                <span id="tyzor-single-category-tag" class="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold mb-2.5">
                                    類別一・催化反應
                                </span>
                                <h2 id="tyzor-single-title" class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                                    鈦（鋯）酸酯作為催化劑
                                </h2>
                            </div>

                            <!-- 說明文字 (大方排版，字體清晰舒適，去除冗餘小標題與框線) -->
                            <div>
                                <p id="tyzor-single-desc" class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                                    Tyzor有機鈦（鋯）在許多反應中，如酯合成、酯交換、縮合和加成反應，都表現出高效良好的催化性能。
                                </p>
                            </div>

                            <!-- 應用範圍 (清晰標籤，去除 9px 微型圖標) -->
                            <div class="space-y-2.5">
                                <h3 class="text-sm font-bold text-slate-900">應用範圍</h3>
                                <div id="tyzor-single-apps" class="flex flex-wrap gap-2">
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">可塑劑</span>
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">（不）飽和聚酯</span>
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">PET</span>
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">PBT</span>
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">聚酯多元醇等</span>
                                </div>
                            </div>

                            <!-- 主要優點 (清晰條列，圓形數字徽章不變形) -->
                            <div class="space-y-2.5">
                                <h3 class="text-sm font-bold text-slate-900">主要優點</h3>
                                <ul id="tyzor-single-advantages" class="space-y-3">
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">1</span>
                                        <span class="font-normal">不含任何有機錫，最終產品具有良好環保性，符合歐美環保標準。</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">2</span>
                                        <span class="font-normal">克服普通鈦酸酯催化劑不耐水等缺陷，在280℃下依舊可以保持較高催化活性（Tyzor 422, Tyzor 436）</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">3</span>
                                        <span class="font-normal">可縮短聚酯合成反應時間。</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">4</span>
                                        <span class="font-normal">克服普通鈦酸酯催化劑易黃變缺陷，Tyzor 436具有低黃變特點。</span>
                                    </li>
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">5</span>
                                        <span class="font-normal">在水、醇和單體中有良好的分散性。</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- 右欄：大尺寸高解析度圖表展示區 (保持清晰比例) -->
                        <div class="lg:col-span-6 flex flex-col items-center">
                            <div id="tyzor-single-img-container"
                                 class="relative w-full max-w-[500px] aspect-[1/1.414] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm cursor-pointer group flex items-center justify-center p-3 transition-all hover:border-blue-400 hover:shadow-md"
                                 title="點擊全螢幕放大檢視">
                                <img id="tyzor-single-img" src="techdata/tyzor/catalyst.webp" alt="鈦（鋯）酸酯技術圖表"
                                     class="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
                                     loading="lazy" oncontextmenu="return false;" draggable="false">
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>'''

def build_placeholder_content_section(item):
    """
    為未有原廠技術資料的 10 個產品線建立專業「暫無資料」獨立專頁內容 (統一白色風格)。
    只保留聯繫業務與索樣說明，不提未確認的規格說明與機制。
    """
    return f'''            <section class="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-7 space-y-6">
                <!-- 專題標題列 (不提未確認的說明，乾淨大方，字體不折行不切斷) -->
                <div class="pb-5 border-b border-gray-100">
                    <div class="flex flex-wrap items-center justify-between gap-3.5">
                        <div class="min-w-0 py-0.5">
                            <h1 class="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-950 flex items-center gap-2.5 whitespace-nowrap">
                                <span class="w-2.5 h-6 bg-blue-900 rounded-full inline-block shrink-0"></span>
                                <span class="whitespace-nowrap tracking-tight">{item["title_zh"]}</span>
                            </h1>
                        </div>
                        <div class="shrink-0 flex items-center gap-2 sm:gap-3 ml-auto">
                            <a href="{item["product_link"]}"
                               class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                                <i class="fa-solid fa-table-list"></i>
                                <span>{item["product_link_text"]}</span>
                            </a>
                            <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                               class="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs transition-colors active:scale-95">
                                <i class="fa-solid fa-flask-vial"></i>
                                <span>聯繫業務</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- 聯繫業務專用看板 (純白高雅風格，只保留聯繫業務與索樣說明) -->
                <div class="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 text-center space-y-4">
                    <div class="w-14 h-14 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center mx-auto shadow-2xs text-2xl">
                        <i class="fa-solid fa-headset"></i>
                    </div>
                    <div class="max-w-xl mx-auto space-y-2.5">
                        <span class="inline-block px-3 py-1 rounded-full bg-slate-200/80 text-slate-700 text-xs font-bold tracking-wider">
                            資料整備中
                        </span>
                        <h2 class="text-lg sm:text-xl font-extrabold text-blue-950">
                            原廠技術資料整理中，暫無公開資料
                        </h2>
                        <p class="text-sm text-slate-600 leading-relaxed font-normal">
                            如需了解相關產品規格、索取原廠技術資料或申請測試樣品，歡迎直接聯繫宏威業務團隊，我們將竭誠為您服務。
                        </p>
                    </div>
                    <div class="pt-3 flex flex-wrap items-center justify-center gap-3">
                        <a href="contact/?mode=detailed&inquiry={item["inquiry_param"]}"
                           class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all active:scale-95">
                            <i class="fa-solid fa-paper-plane"></i>
                            <span>聯繫業務索取資料</span>
                        </a>
                        <a href="{item["product_link"]}"
                           class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-all">
                            <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                            <span>{item["product_link_text"]}</span>
                        </a>
                    </div>
                </div>
            </section>'''

def build_full_tech_page_html(item, template_shell, is_index=False):
    """
    組裝完整的獨立技術專頁 HTML。
    """
    slug = item["slug"]
    title_zh = item["title_zh"]
    meta_desc = item["meta_desc"]
    canonical_url = f"{DOMAIN}/technology/" if is_index else f"{DOMAIN}/technology/{slug}/"

    # Breadcrumb
    breadcrumb_item = f'''                    <a href="technology/tyzor/" class="hover:text-blue-900 hover:underline">技術專區</a>
                    <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
                    <span id="tech-breadcrumb-current" class="text-blue-950 font-bold">{item["category_name"]}</span>'''

    switcher_html = build_category_switcher(slug, is_index=False)
    if item["has_data"]:
        content_html = build_tyzor_content_section()
    else:
        content_html = build_placeholder_content_section(item)

    # Technology Section
    tech_section = f'''    <!-- Tab: 技術專區 (Technology) - 獨立分頁呈現 (統一白色風格：左側條列式切換，右側資料顯示) -->
    <section id="tab-technology" class="tab-content active" role="tabpanel" aria-labelledby="nav-technology">
        <style>
        .tech-layout-container {{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
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
            padding: 1.25rem;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.04);
        }}
        .tech-sidebar-list {{
            display: flex !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
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
                gap: 1.75rem;
                align-items: flex-start;
            }}
            .tech-sidebar {{
                width: 370px;
                position: sticky;
                top: 5.5rem;
                max-height: calc(100vh - 6.5rem);
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
        </style>
        <div class="optimized-container px-4 py-8">
            <!-- 頂部麵包屑導航 -->
            <div class="mb-5 flex flex-wrap items-center gap-2.5 text-sm font-semibold text-slate-500">
                <a href="./" class="hover:text-blue-900 hover:underline">首頁</a>
                <i class="fa-solid fa-chevron-right text-xs text-slate-400"></i>
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

    # 快取版本破壞 (確保瀏覽器即時載入最新 JS 邏輯)
    page_html = re.sub(r'js/technology\.js\?v=[^"]*', 'js/technology.js?v=20261001_v6', page_html)
    page_html = re.sub(r'js/router\.js\?v=[^"]*', 'js/router.js?v=20261001_v6', page_html)

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

    return page_html

def build_all():
    print("🚀 開始建置 11 大特用化學品獨立技術分頁...")
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
    html = re.sub(r'js/technology\.js\?v=[^"]*', 'js/technology.js?v=20261001_v4', html)
    html = re.sub(r'js/router\.js\?v=[^"]*', 'js/router.js?v=20261001_v4', html)

    with open(root_index_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"  [ROOT] 同步更新 root index.html 中的導覽列連結與 JS 版本號")

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
        <lastmod>2026-10-01</lastmod>
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
