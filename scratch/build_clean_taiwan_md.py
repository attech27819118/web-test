# -*- coding: utf-8 -*-
"""
Rewrite all 74 technical documents in techdatadb:
Structure required by user:
1. 標題: 以檔名或是第一頁的 title 為主
2. 重點: 一個摘要、三條重點 (用詞以台灣人的角度撰寫)
3. 應用: 參考檔案內容
Strict constraints:
- 資料沒有提到的不需要寫，不准自由發揮
- 絕對不需要提到「」兩個字
- 輸出至 techdatadb/技術文件摘要與重點.md
"""

import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_FILE = os.path.join(ROOT_DIR, 'techdatadb', '技術文件摘要與重點.md')

DOCS = [
    # =========================================================================
    # 1. Tyzor 系列 (24 份)
    # =========================================================================
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "原理機制",
        "title": "鈦（鋯）酸酯作為交聯劑 (Tyzor® Crosslinkers)",
        "file": "鈦（鋯）酸酯作為交聯劑.pdf",
        "path": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為交聯劑.pdf",
        "summary": "有機鈦與有機鋯化合物可與聚合物中的羥基、羧基等活性官能基迅速反應形成三維交聯網絡，能在常溫或低溫烘烤下促進成膜，顯著提升塗層的耐水性、硬度與耐溶劑表現。",
        "points": [
            "加速常溫或低溫烘烤的固化成膜速度，縮短乾燥週期。",
            "提高塗膜表面硬度（可提升 1~2H），並增強耐磨耗與抗刮傷性能。",
            "改善耐水性、耐高溫蒸煮與耐化學品溶劑（如 MEK 擦拭次數）侵蝕能力。"
        ],
        "apps": "油漆、印刷油墨、接著劑、PVA 聚合物體系。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "原理機制",
        "title": "鈦（鋯）酸酯作為催化劑 (Tyzor® Catalysts)",
        "file": "鈦（鋯）酸酯作為催化劑.pdf",
        "path": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為催化劑.pdf",
        "summary": "有機鈦與有機鋯化合物在酯化、酯交換與縮合反應中具備高效路易斯酸催化活性，不含有機錫重金屬，耐高溫且不易造成產物黃變。",
        "points": [
            "不含有機錫化合物，符合 FDA 食品接觸法規與 REACH 環保標準。",
            "降低反應活化能，縮短聚酯縮聚反應時間達 25%~40%，減少副產物產生。",
            "耐熱溫度可達 280°C，且專用型號具備超低黃變特性，產物色澤清澈透明。"
        ],
        "apps": "可塑劑合成（如 DOP、DOTP）、聚酯多元醇、PET 瓶級樹脂、PBT 工程塑膠、不飽和聚酯樹脂。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "原理機制",
        "title": "鈦（鋯）酸酯作為表面改性 (Tyzor® Surface Modification)",
        "file": "鈦（鋯）酸酯作為表面改性.pdf",
        "path": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為表面改性.pdf",
        "summary": "透過溶膠-凝膠（Sol-Gel）水解縮聚技術，在無機或金屬表面形成連續緻密的二氧化鈦或二氧化鋯奈米薄膜，提供耐溫、耐磨與耐腐蝕保護。",
        "points": [
            "在底材表面沉積均勻連續的金屬氧化物奈米保護層，提升耐熱氧化與耐腐蝕能力。",
            "改善底材表面的耐磨耗與耐刮傷性能，並可調控表面親水或疏水性。",
            "增進無機填料或顏料微粒與有機高分子基質之間的界面偶合性與相容度。"
        ],
        "apps": "紡織整理劑、鋁銀漿表面處理、無機顏料表面包覆、Sol-Gel 硬質鍍膜。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "原理機制",
        "title": "鈦（鋯）酸酯提高附著力 (Tyzor® Adhesion Promoters)",
        "file": "鈦（鋯）酸酯提高附著力.pdf",
        "path": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯提高附著力.pdf",
        "summary": "有機鈦與鋯化合物能在金屬、塑膠、玻璃等底材表面與有機樹脂塗層之間形成化學鍵架橋，顯著提升界面的接著牢度。",
        "points": [
            "促進塗層官能基與底材表面的活性基團鍵結，大幅強化附著密著強度。",
            "改善塗層在高濕度、鹽霧環境及熱水浸泡下的乾濕態附著耐久性。",
            "提升印刷油墨在塑膠薄膜（如 OPP、PE、PET）上的耐膠帶撕拔牢度。"
        ],
        "apps": "金屬底漆、包裝印刷油墨、工業防腐塗料、密封膠。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "目錄型錄",
        "title": "Tyzor® Adhesives and Sealants / Coatings Line (Brochure)",
        "file": "Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
        "path": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
        "summary": "彙整溶劑型與水性塗料、壓敏膠及密封膠體系適用的鈦/鋯化合物選型指南，重點在於提升交聯密度、乾燥速度與接著力。",
        "points": [
            "溶劑型系統推薦 Tyzor AA-75、GBA 等螯合物，具良好儲存穩定性與烘烤快速交聯特性。",
            "水性系統推薦 Tyzor TE、LA 等水溶性螯合物，耐水解性佳且在寬廣 pH 範圍內穩定。",
            "能顯著提升壓敏膠的高溫剪切持粘力，並改善凹版油墨的耐蒸煮與耐揉搓性。"
        ],
        "apps": "包裝印刷油墨、金屬底漆、壓敏膠、PU 密封膠、卷鋼塗料。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "目錄型錄",
        "title": "Tyzor™ 有機鈦（鋯）酸酯產品目錄 (Brochure DK Tyzor General CN)",
        "file": "Brochure DK Tyzor General CN 202608.pdf",
        "path": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor General CN 202608.pdf",
        "summary": "涵蓋正烷基鈦酸酯、鈦螯合物、正烷基鋯酸酯與鋯螯合物四大族群的物性常數、反應機制與應用選型對照手冊。",
        "points": [
            "詳列 TPT、TnBT、TOT、TE、AA-75、217、LA 等全系列金屬氧化物含量、黏度、密度與閃點。",
            "系統說明催化、交聯、接著促進與表面改性四大功能機制與反應條件。",
            "提供取代有機錫的環保轉型建議，以及水性耐水解配方的操作指引。"
        ],
        "apps": "特用化學合成、塗料、油墨、接著劑、塑膠聚合、油田化學品。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "目錄型錄",
        "title": "Tyzor® Product Guide for Coatings (Brochure)",
        "file": "Brochure DK Tyzor Plus Coatings EN 202512.pdf",
        "path": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor Plus Coatings EN 202512.pdf",
        "summary": "針對工業防腐塗料、高溫烤漆與卷材塗層的選型指引，著重於降低固化烘烤溫度、提升漆膜硬度與增強耐化學溶劑表現。",
        "points": [
            "可降低高溫烤漆的烘烤溫度（例如由 180°C 降至 130°C）或縮短烘烤時間。",
            "提高塗膜鉛筆硬度（提升 1~2H）與耐 MEK 溶劑擦拭次數（可達 200 次以上）。",
            "鋯酸酯型號（如 Tyzor NBZ、217）固化無黃變，特別適合白色與淺色烤漆系統。"
        ],
        "apps": "卷鋼塗料、汽車底漆、耐高溫排氣管漆、重防腐工業塗料。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "目錄型錄",
        "title": "Tyzor® Catalysts for Polyols and Polymers (Brochure)",
        "file": "Brochure DK Tyzor for Polyols Polymers EN 202602.pdf",
        "path": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor for Polyols Polymers EN 202602.pdf",
        "summary": "聚酯多元醇、聚酯切片（PET/PBT）與可塑劑合成專用無錫催化劑選型指引，具高活性、添加量低且在高溫下結構穩定。",
        "points": [
            "不含有機錫化合物，符合最新食品包裝與 REACH 環保安全規範。",
            "催化活性高於傳統錫類催化劑，典型添加量僅需 20~100 ppm。",
            "耐溫高達 280°C，縮聚高溫階段不易分解揮發，Tyzor 436 具低黃變特性。"
        ],
        "apps": "聚酯多元醇合成、PET 瓶級切片、PBT 工程塑膠、可塑劑、聚氨酯預聚體。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates and Zirconates in Adhesives and Sealants",
        "file": "Application Note DK Tyzor Adhesives Sealants EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Adhesives Sealants EN.pdf",
        "summary": "說明有機鈦與鋯化合物在壓敏膠、聚氨酯與密封膠中的交聯硬化機制與界面接著強度強化效果。",
        "points": [
            "添加量 0.5%~2.0% 即可顯著提升壓敏膠的高溫剪切持粘力與耐蠕變性。",
            "可作為矽烷改性聚醚（MS Polymer）與聚氨酯的無錫交聯催化劑，提供良好深層固化。",
            "改善未經前處理之鋁合金、不鏽鋼及浮法玻璃的浸水剝離強度，並可調節適用期。"
        ],
        "apps": "壓敏膠、MS 建築密封膠、聚氨酯接著劑、電子結構膠。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates Bulk Handling Procedures",
        "file": "Application Note DK Tyzor Bulk Handling Procedures EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Bulk Handling Procedures EN.pdf",
        "summary": "提供工廠在大宗儲槽、管路輸送及裝卸操作有機鈦酸酯時的工程規範，防止接觸濕氣水解並確保設備相容安全。",
        "points": [
            "必須使用乾燥氮氣（露點低於 -40°C）覆蓋儲存，防止空氣濕氣接觸導致水解白化。",
            "儲罐與管道材質建議使用 304 或 316 不鏽鋼，嚴禁使用鍍鋅鋼管與銅合金。",
            "建議安裝 10~25 μm 不鏽鋼濾芯及防爆離心泵，並依照標準程序進行洩漏中和。"
        ],
        "apps": "散裝化學品儲槽工程、連續聚合裝置管路、大型調配槽輸送系統。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Catalysts in Plasticizer Production",
        "file": "Application Note DK Tyzor Catalyst Plasticizer Production EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Catalyst Plasticizer Production EN.pdf",
        "summary": "針對鄰苯二甲酸酯（DOP/DOTP）、己二酸酯（DOA）等可塑劑合成，取代傳統硫酸與有機錫催化劑的工藝技術資料。",
        "points": [
            "反應溫度通常在 200~230°C，反應結束時酸值可降至 < 0.1 mg KOH/g。",
            "無硫酸的強酸腐蝕缺點，催化劑用量僅需 0.02%~0.05% wt。",
            "粗酯產物色號淺（Pt-Co 色號 < 20），省去繁複的鹼洗水洗與脫色製程。"
        ],
        "apps": "DOTP、DOP、DOA、檸檬酸酯等塑膠可塑劑製造。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Crosslinkers for Paper and Paperboard Coatings",
        "file": "Application Note DK Tyzor Crosslinking for Paper EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Crosslinking for Paper EN.pdf",
        "summary": "解析水溶性鈦螯合物在 PVA、酪蛋白及澱粉塗佈紙表面發揮的耐水與耐濕摩擦交聯強化效果。",
        "points": [
            "Tyzor TE、LA 水溶性螯合物在 pH 4~9 寬範圍內均可穩定添加於塗佈漿料。",
            "乾燥成膜時形成交聯鍵，使塗佈層浸水濕摩擦次數提升 300% 以上。",
            "不含游離甲醛，能替代傳統三聚氰胺甲醛（MF）交聯劑，改善冷鏈瓦楞紙耐濕強度。"
        ],
        "apps": "瓦楞紙箱表面塗佈、冷鏈包裝紙、特種熱敏紙、PVA 塗佈加工。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates in Direct Esterification",
        "file": "Application Note DK Tyzor Direct Esterification EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Direct Esterification EN.pdf",
        "summary": "探討有機鈦催化羧酸與醇直接脫水縮合反應的特性，著重於反應活性高、副反應少且對金屬設備無腐蝕性。",
        "points": [
            "高效催化多種脂肪酸與二元羧酸直接酯化，反應平穩溫和，副產烯烴生成量極低。",
            "催化活性優於無機酸，且對不鏽鋼反應釜無酸性腐蝕缺陷。",
            "配合共沸蒸餾及時排除副產物水，單體轉化率可接近 100%，反應後易於鈍化處理。"
        ],
        "apps": "脂肪酸酯、合成潤滑油基礎油、特種單體酯化合成。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates for Ferrous and Nonferrous Metals",
        "file": "Application Note DK Tyzor Ferrous and Nonferrous Metal EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Ferrous and Nonferrous Metal EN.pdf",
        "summary": "探討金屬表面無鉻化鈍化與防腐處理技術，藉由形成緻密金屬氧化物薄膜提升後續塗裝的密著力與耐蝕年限。",
        "points": [
            "在冷軋鋼、鋁合金及鍍鋅鋼板表面形成均勻緻密的無機金屬氧化物鈍化膜。",
            "不含六價鉻有害物質，符合現代綠色環保金屬表面處理法規。",
            "顯著增強環氧樹脂或聚酯烤漆在金屬底材上的接著力，抑制漆下鹽霧生鏽蔓延。"
        ],
        "apps": "冷軋鋼板鈍化、鋁合金塗裝前處理、鍍鋅板防腐、金屬防鏽底漆。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates in Glass Surface Coatings",
        "file": "Application Note DK Tyzor Glass Surface Coatings EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Glass Surface Coatings EN.pdf",
        "summary": "說明玻璃熱噴塗與冷端塗層改性工藝，在高溫玻璃表面熱解沉積 TiO2 薄膜，提高耐磨抗衝擊性能並可調節光學反射。",
        "points": [
            "在 500~600°C 熱玻璃表面沉積均勻連續的二氧化鈦奈米硬質氧化物薄膜。",
            "顯著提高玻璃瓶罐表面的抗衝擊性與輸送帶摩擦刮傷耐受度。",
            "作為 Sol-Gel 前驅體，可用於製作減反射（AR）鍍膜及改善冷端絲印油墨接著力。"
        ],
        "apps": "建築玻璃鍍膜、車用玻璃、玻璃瓶罐熱端強化、光學薄膜。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates in Inorganic Filler Modification",
        "file": "Application Note DK Tyzor Inorganic Filler Modification EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Inorganic Filler Modification EN.pdf",
        "summary": "探討無機填料表面改性與偶合技術，藉由分子表面包覆降低熔體黏度、增加填充量並改善高分子複合材料韌性。",
        "points": [
            "有機鈦分子在填料表面形成單分子吸附層，將親水表面轉化為親有機基質表面。",
            "大幅降低高填充塑膠（如高填充 PVC/PP）在混煉加工時的熔體黏度。",
            "防止填料粉體團聚結塊，提升複合材料的抗衝擊強度與拉伸斷裂伸長率。"
        ],
        "apps": "碳酸鈣、高嶺土、二氧化矽改性、高填充塑膠與橡膠複合材料。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates as Surface Primers",
        "file": "Application Note DK Tyzor Surface Primers EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Surface Primers EN.pdf",
        "summary": "說明以有機鈦化合物配製超薄打底劑（Primer）的技術，低塗佈量即可克服塑膠薄膜難以接著的問題。",
        "points": [
            "可配製成 1%~5% 低固成份溶劑型底塗打底劑，塗佈量極低即可產生強效接著力。",
            "克服低表面能或未經電暈處理之塑膠薄膜（如 BOPP、PET、PE）印刷易掉墨缺陷。",
            "常溫即可快速揮發成膜，顯著提升油墨與接著劑在高溫高濕環境下的耐剝離強度。"
        ],
        "apps": "BOPP/PET/PE 塑膠薄膜打底、包裝印刷前處理、金屬打底底漆。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Thawing Frozen Tyzor® TPT",
        "file": "Application Note DK Tyzor Thawing Frozen TPT EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Thawing Frozen TPT EN.pdf",
        "summary": "針對冬季低溫導致 Tyzor TPT 凝固結晶時的官方標準解凍操作指南，避免局部過熱造成物性損壞。",
        "points": [
            "Tyzor TPT 凝固點約為 17~20°C，冬季低溫結晶固化屬於正常物理現象。",
            "嚴禁使用明火或超過 60°C 的局部高溫加熱，避免催化劑熱分解變質。",
            "建議使用溫水浴、保溫烘房或溫控加熱帶（40~50°C）緩慢均勻解凍，化解後外觀清澈性能不變。"
        ],
        "apps": "工廠物料倉儲、低溫儲運操作、TPT 催化劑品質維護。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates in Transesterification",
        "file": "Application Note DK Tyzor Transesterification EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Transesterification EN.pdf",
        "summary": "探討有機鈦催化酯交換反應的工藝優勢，能以高收率合成特種酯類，且副產醇品質良好可回收再利用。",
        "points": [
            "催化活性優於硫酸及對甲苯磺酸，催化用量僅需 0.1%~0.5% wt。",
            "反應溫和，有效避免副產烯烴生成，大幅提高高附加價值酯類轉化率。",
            "副產醇在反應過程中不發生深度裂解，回收醇純度高，可直接回用循環。"
        ],
        "apps": "壓克力單體酯交換、合成潤滑油酯類、香精香料酯類製造。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "應用技術資料",
        "title": "Tyzor® Organic Titanates Vapor Pressure vs Temperature",
        "file": "Application Note DK Tyzor Vapor Pressure vs Temperature EN.pdf",
        "path": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Vapor Pressure vs Temperature EN.pdf",
        "summary": "提供各純品型號鈦酸酯在不同溫度下的飽和蒸氣壓工程數據圖表，作為化工蒸餾分離與氣相沉積的設計基準。",
        "points": [
            "完整繪製 Tyzor TPT、TnBT 等型號在不同溫度區間之精確飽和蒸氣壓對照曲線。",
            "提供減壓蒸餾分離與純化工藝所需之真空度與沸點數據依據。",
            "為半導體及薄膜鍍膜的 CVD / ALD 氣相沉積製程提供氣相輸送工藝參數。"
        ],
        "apps": "化工減壓蒸餾製程、CVD/ALD 氣相沉積設備設計、儲槽呼吸閥工程。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "單一產品技術資料",
        "title": "Tyzor® ACtivate™ 422 Plastic Packaging for Food Contact",
        "file": "TI DK Tyzor Activate 422 Plastic Packaging for Food Contact EN.pdf",
        "path": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor Activate 422/TI DK Tyzor Activate 422 Plastic Packaging for Food Contact EN.pdf",
        "summary": "評估 ACtivate 422 鈦催化劑在食品接觸級 PET 包裝瓶與薄膜中應用的法規合規性與安全性研究報告。",
        "points": [
            "符合美國 FDA 21 CFR 177.1630 及歐洲 EFSA 食品接觸材料法規要求。",
            "具耐水解配位結構，在微量水分環境中仍維持穩定溶解度與高催化活性。",
            "取代傳統重金屬銻催化劑，PET 聚酯成品具優異透光度與極低黃色指數（b* < 1.5）。"
        ],
        "apps": "食品級 PET 瓶、飲料熱收縮包裝薄膜、無銻環保聚酯聚合。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "單一產品技術資料",
        "title": "Tyzor® ACtivate™ 422 for PET Bottle Resins",
        "file": "TI DK Tyzor Activate 422 for PET Bottle Resins EN.pdf",
        "path": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor Activate 422/TI DK Tyzor Activate 422 for PET Bottle Resins EN.pdf",
        "summary": "研究 ACtivate 422 在 PET 瓶級樹脂固相縮聚（SSP）中的反應動力學、乙醛釋出抑制與結晶透明度表現。",
        "points": [
            "固相縮聚（SSP）聚合速率提升 20%~30%，快速提升切片極限黏度（IV 達 0.84 dL/g）。",
            "吹瓶加工時乙醛（Acetaldehyde）釋出量極低（< 1.0 ppm），確保飲料無異味。",
            "改善冷卻結晶特性，提升預成型瓶胚（Preform）的透明度與拉伸成型均勻度。"
        ],
        "apps": "PET 礦泉水瓶切片、碳酸飲料瓶、高黏度聚酯薄膜拉伸吹瓶。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "單一產品技術資料",
        "title": "Tyzor® IAM A New Additive for Solvent-Based Printing Inks",
        "file": "TI DK Tyzor IAM for Ink EN.pdf",
        "path": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor IAM/TI DK Tyzor IAM for Ink EN.pdf",
        "summary": "介紹專為包裝印刷油墨開發的改性鈦酸酯螯合物 Tyzor IAM，著重於其溶劑相容性、接著牢度與抗回黏特性。",
        "points": [
            "在醇類、酯類溶劑中具優異溶解度，與油墨連接料長期儲存不增稠、不分層。",
            "顯著提升對 OPP、BOPP、PE、PET、尼龍等塑膠薄膜基材的油墨接著力。",
            "百格膠帶剝離測試（Scotch Tape Test）達到 100% 不掉墨，且固化後抗回黏抗刮傷。"
        ],
        "apps": "凹版軟包裝印刷油墨、柔版印刷油墨、塑膠薄膜複合印刷。"
    },
    {
        "cat": "Tyzor® 有機鈦酸酯與鋯酸酯系列",
        "subcat": "單一產品技術資料",
        "title": "Tyzor® IAM Performance in Solvent-Based Inks",
        "file": "TI DK Tyzor IAM for Solvent-Based Printing Ink EN.pdf",
        "path": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor IAM/TI DK Tyzor IAM for Solvent-Based Printing Ink EN.pdf",
        "summary": "探討 Tyzor IAM 在硝化纖維（NC）溶劑型油墨中的交聯成膜、耐高溫蒸煮性與印刷光澤度表現。",
        "points": [
            "促進硝化纖維樹脂中羥基快速配位交聯，顯著縮短印刷烘道乾燥固化時間。",
            "通過蒸煮袋（Retort Pouch，121°C 30 分鐘）耐沸水高溫蒸煮測試，無起泡或分層脫墨。",
            "在 -20°C 低溫冷凍環境下依然維持優良的塗膜附著力與耐彎折揉曲性，無霧影產生。"
        ],
        "apps": "耐高溫蒸煮食品包裝袋、冷凍食品包裝膜、鋁箔複合油墨印刷。"
    },

    # =========================================================================
    # 2. Unilink & Clearlink 擴鏈劑系列 (5 份)
    # =========================================================================
    {
        "cat": "Unilink® & Clearlink® 擴鏈劑系列",
        "subcat": "目錄型錄",
        "title": "Clearlink® and Unilink® Crosslinkers and Chain Extenders (Brochure)",
        "file": "Brochure DK Unilink Plus Coatings Line EN 202512.pdf",
        "path": "techdatadb/3.unilink/2.Unilink Clearlink擴鏈劑目錄/Brochure DK Unilink Plus Coatings Line EN 202512.pdf",
        "summary": "介紹受阻二級二胺液態擴鏈劑產品線，專用於聚脲與聚氨酯彈性體體系，延長凝膠時間並提供優異耐候與物理機械性能。",
        "points": [
            "常溫呈液態易於加工計量，解決固態 MOCA / DETDA 的粉塵危害與低溫結晶結塊問題。",
            "立體受阻二級胺結構可減緩與異氰酸酯的反應速度，將凝膠時間（Gel Time）延長至數分鐘。",
            "消除聚脲噴塗施工表面起泡與針孔缺陷，脂肪族型號 Clearlink 1000 戶外耐候完全不黃變。"
        ],
        "apps": "聚脲防腐塗料、聚氨酯彈性體、耐磨地坪、車廂防撞襯裡。"
    },
    {
        "cat": "Unilink® & Clearlink® 擴鏈劑系列",
        "subcat": "單一產品技術資料",
        "title": "CLEARLINK® 1000 Aliphatic Amine for Polyurea Coatings Systems",
        "file": "TI DK Clearlink 1000 for Polyurea Coatings EN 201707.pdf",
        "path": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Clearlink 1000/TI DK Clearlink 1000 for Polyurea Coatings EN 201707.pdf",
        "summary": "針對脂肪族聚脲塗料體系開發的受阻二級二胺擴鏈劑技術資料，具備戶外高耐候、完全耐黃變及反應速度可控優勢。",
        "points": [
            "脂肪族結構具卓越的抗紫外線光老化性能，戶外日曬長期保持原色不黃變。",
            "延長噴塗施工反應時間至數分鐘，大幅改善塗層表面流平性，降低設備施工門檻。",
            "增強聚脲塗層的拉伸強度（> 20 MPa）、斷裂伸長率與底材浸水接著牢度。"
        ],
        "apps": "戶外高耐候聚脲塗料、景觀防水塗層、水上樂園防腐、混凝土結構保護。"
    },
    {
        "cat": "Unilink® & Clearlink® 擴鏈劑系列",
        "subcat": "單一產品技術資料",
        "title": "UNILINK® 1030 Catalyst for Cast Elastomers",
        "file": "TI DK Unilink 1030 Catalyst for Cast Elastomers EN.pdf",
        "path": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 1030/TI DK Unilink 1030 Catalyst for Cast Elastomers EN.pdf",
        "summary": "針對 MDI 與 TDI 體系澆注型聚氨酯彈性體設計的芳香族二級胺擴鏈劑，兼具擴鏈反應調節與提升動態機械性能功能。",
        "points": [
            "提供充裕的澆注操作適用期，黏度上升平緩，利於大型模具充填排氣無氣孔。",
            "提高彈性體的肖氏硬度、回彈性與耐撕裂強度，阿克隆（Akron）耐磨耗表現優異。",
            "縮短硫化熟化週期，減少脫模後彈性體製品的殘留應力與變形。"
        ],
        "apps": "重載實心輪胎、礦山篩網、工業耐磨膠輥、密封件澆注彈性體。"
    },
    {
        "cat": "Unilink® & Clearlink® 擴鏈劑系列",
        "subcat": "單一產品技術資料",
        "title": "UNILINK® 4200 Chain Extender for Flexible Polyurethane Foams",
        "file": "TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams EN.pdf",
        "path": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 4200/TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams EN.pdf",
        "summary": "說明 Unilink 4200 在軟質聚氨酯塊狀及模塑泡棉中的應用，可調節開孔結構、提升負載承載硬度並改善回彈性能。",
        "points": [
            "提高軟質泡棉的壓陷硬度（IFD）與承載支撐能力，降低聚醚原料使用成本。",
            "調節泡棉開孔結構，避免因閉孔導致製品冷卻收縮變形，提升尺寸穩定性。",
            "改善高回彈（HR）泡棉的落球回彈率，長期動態疲勞壓陷變形量顯著降低。"
        ],
        "apps": "汽車座椅模塑泡棉、高級家具沙發座墊、高回彈聲學吸音泡棉。"
    },
    {
        "cat": "Unilink® & Clearlink® 擴鏈劑系列",
        "subcat": "單一產品技術資料",
        "title": "UNILINK® 4200 Chain Extender for Elastomeric Coatings",
        "file": "TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings EN.pdf",
        "path": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 4200/TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings EN.pdf",
        "summary": "針對雙組份聚氨酯與聚脲彈性塗料開發的芳香族擴鏈劑，著重於提供平穩固化動力學、改善厚塗流平與提升耐衝擊耐蝕性能。",
        "points": [
            "提供平緩的固化速率，改善厚膜塗裝施工的流平性，有效抑制氣泡與針孔產生。",
            "賦予塗膜卓越的耐碎石撞擊、耐重載磨損及優良的低溫柔韌彎曲耐受力。",
            "增強塗層耐酸鹼、耐油品及耐鹽水浸泡腐蝕能力，延長地下防腐壽命。"
        ],
        "apps": "地下管線防腐塗裝、橋樑防水塗層、車廂耐磨防撞襯裡、耐磨工業地坪。"
    },

    # =========================================================================
    # 3. Orion 特級碳黑系列 (16 份)
    # =========================================================================
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "目錄型錄",
        "title": "Orion 特級碳黑產品技術指標手冊 (Brochure Orion Carbon Black CN)",
        "file": "Brochure Orion Carbon Black CN.pdf",
        "path": "techdatadb/4.Orion/2.Orion Carbon Black 碳黑 目錄 （16）冊/Brochure Orion Carbon Black CN.pdf",
        "summary": "整理氣黑（Gas Black）、爐黑（Furnace Black）與燈黑（Lamp Black）完整產品線，提供黑度值、著色力與吸油量的詳細物性數據與選型對照。",
        "points": [
            "詳列黑度值（My）、著色力（Tint Strength）與吸油值（OAN）物性對照矩陣。",
            "解析氣黑高含氧官能基、低 pH 值在塗料中的良好潤濕性與低霧影優勢。",
            "針對汽車 OEM 塗料推薦 Colour Black FW 200、FW 2 等頂級高黑度型號，並涵蓋導電與工業通用型號。"
        ],
        "apps": "汽車烤漆、工業塗料、印刷油墨、塑膠色母粒、導電抗靜電製品。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "目錄型錄",
        "title": "Orion Specialty Carbon Blacks Technical Data Asia Pacific (Brochure EN)",
        "file": "Brochure Orion Carbon Black EN.pdf",
        "path": "techdatadb/4.Orion/2.Orion Carbon Black 碳黑 目錄 （16）冊/Brochure Orion Carbon Black EN.pdf",
        "summary": "亞太地區特級碳黑技術手冊，深度解析原生粒徑、聚集體結構及表面化學特性對黑度、黏度與分散性能的影響機制。",
        "points": [
            "分析粒徑細化對提高黑度、藍相底色與增加體系黏度之間的相互關係。",
            "詳述後氧化表面處理在改善高分子體系潤濕相容性與防絮凝方面的效果。",
            "針對印刷油墨與工程塑膠提供低流變黏度、高光澤及抗紫外線光老化的推薦型號。"
        ],
        "apps": "高階塗料、特種印刷油墨、工程塑膠改性、合成纖維紡絲。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Fastness of Specialty Carbon Blacks in Coatings and Inks (TI 1480)",
        "file": "Application Note Orion Fastness of Specialty Carbon Blacks EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Fastness of Specialty Carbon Blacks EN.pdf",
        "summary": "說明特級碳黑在各類塗料與油墨中的耐光、耐候、耐化學品及耐溫堅牢度數據與測試結果。",
        "points": [
            "耐光耐候堅牢度達到藍色羊毛標準最高級（8 級），長期日曬不褪色、不變灰。",
            "展現優異的耐化學酸鹼、耐氧化劑與有機溶劑侵蝕能力。",
            "耐高溫熱穩定性超過 300°C 以上，完全符合粉體塗料與高溫烤漆的烘烤固化要求。"
        ],
        "apps": "戶外建築塗料、重防腐工業漆、汽車修補漆、農用耐候塑膠薄膜。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Handling of Carbon Black (TI 1451)",
        "file": "Application Note Orion Handling of Carbon Black EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Handling of Carbon Black EN.pdf",
        "summary": "指導特種碳黑在工廠倉儲、管路氣力輸送、除塵及投料作業中的工程操作規範與防爆安全指引。",
        "points": [
            "分析粉狀（Powder）與珠狀/造粒（Beaded）碳黑的流動性與輸送特性差異。",
            "提供密閉料倉、管路防塵氣力輸送及除塵設備的工程設計與防靜電接地指引。",
            "詳列粉塵爆炸防範規範（最小點火能量與防爆通風要求），保障作業環境安全。"
        ],
        "apps": "工廠原料儲運、密閉氣力輸送系統、投料計量與防塵防爆工程。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black Pigments in Modern Coatings",
        "file": "Application Note Orion Pigments Special Carbon Black in Modern Coatings EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Pigments Special Carbon Black in Modern Coatings EN.pdf",
        "summary": "解析現代塗料體系中碳黑的黑度選型與流變平衡，涵蓋溶劑型高光面漆、水性塗料防絮凝及底漆調色方案。",
        "points": [
            "探討原生粒徑越小黑度越高，但吸油量上升對體系黏度與研磨難度造成的影響。",
            "後氧化氣黑（如 Special Black 4/6）可提供良好的流平性、清漆光澤與強烈藍相底色。",
            "提供水性塗料分散體中碳黑防絮凝技術，以及調色底漆抗沉降的選型搭配。"
        ],
        "apps": "汽車 OEM OEM 塗裝、汽車修補漆、高光木器黑漆、水性工業塗料。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Special Black for Synthetic Fibers (TI 1454)",
        "file": "Application Note Orion Special Black for Fibers EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Black for Fibers EN.pdf",
        "summary": "針對合成纖維原液著色（紡絲染色）開發的特級碳黑技術指引，著重於低過濾壓升、高純度與不斷絲特性。",
        "points": [
            "專為 PET 聚酯、PA 尼龍及 PP 丙綸的原液著色（Spin Dyeing）製程設計。",
            "高純度與極低篩餘物含量，紡絲過濾壓升值（DFP）極低，有效防止噴絲板堵孔斷絲。",
            "高剪切熱穩定性佳，在 280~300°C 高溫熔融紡絲擠出時不分解變質，纖維色牢度極高。"
        ],
        "apps": "聚酯纖維、尼龍長絲/短纖、丙綸紡絲、汽車內飾紡織品。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Dispersion Guideline for Specialty Carbon Blacks (TI 1484)",
        "file": "Application Note Orion Special Carbon Black Disperse Guideline EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black Disperse Guideline EN.pdf",
        "summary": "說明特級碳黑的高效潤濕分散工藝，包含分散劑添加量計算、砂磨機氧化鋯珠選型及研磨終點判定基準。",
        "points": [
            "說明潤濕、解聚與穩定三步驟分散機制，以及高分子超分散劑的空間位阻穩定效應。",
            "提供依據碳黑 BET 比表面積計算分散劑最佳用量的公式與方法。",
            "指導砂磨機氧化鋯珠（建議 0.4~0.8 mm）填充率與研磨過程中的黏度/黑度監控標準。"
        ],
        "apps": "碳黑預分散色漿製造、砂磨機研磨工藝、塗料油墨分散製程。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black for Industrial Coatings (TI 1455)",
        "file": "Application Note Orion Special Carbon Black for Industrial Coatings EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Industrial Coatings EN.pdf",
        "summary": "工程機械與鋼構防腐塗料的碳黑選型指南，著重於遮蓋力高、著色力強、配方成本經濟且防沉降性良好。",
        "points": [
            "針對環氧防腐底漆、聚氨酯面漆與醇酸漆推薦適配之工業級特種碳黑品種。",
            "提供高遮蓋力與高著色力型號（如 XPB 系列），可降低配方中的顏料添加比例。",
            "改善塗料儲存穩定性，防止碳黑與重質防鏽顏填料在儲存期間結塊沉底。"
        ],
        "apps": "重型工程機械塗料、環氧防腐底漆、鋼結構漆、船舶防腐塗料。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black for Inkjet Inks (TI 1482)",
        "file": "Application Note Orion Special Carbon Black for Inkjet Inks EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Inkjet Inks EN.pdf",
        "summary": "數位噴墨油墨專用碳黑技術資料，著重於次微米窄粒徑分佈、超低粗顆粒殘留及長期噴射穩定性。",
        "points": [
            "極窄粒徑分佈（D99 < 150 nm）與超低篩餘物，徹底杜絕壓電式噴墨噴嘴堵塞風險。",
            "動態黏度低且噴射流暢性佳，墨水長期儲存穩定不反聚。",
            "離子雜質與重金屬含量極低，在紙張與紡織品印花上可展現高光學密度（OD > 1.8）。"
        ],
        "apps": "數位印刷噴墨墨水、紡織印花墨水、廣告寫真墨水、桌面噴墨墨水。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black for Powder Coatings (TI 1456)",
        "file": "Application Note Orion Special Carbon Black for Powder Coatings EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Powder Coatings EN.pdf",
        "summary": "熱固性粉體塗料專用碳黑選型指南，著重於粉體抗針孔脫氣、均勻帶電性與高溫烘烤穩定性。",
        "points": [
            "優化碳黑表面電阻特性，顯著提升摩擦噴槍與電暈噴槍的靜電上粉率。",
            "雙螺桿熔融擠出加工分散良好，有效消除厚膜烘烤時產生的微細針孔與縮孔缺陷。",
            "耐溫性優異，在 200°C 高溫烘烤過程中不分解、不冒煙、無揮發氣味。"
        ],
        "apps": "金屬家電粉末烤漆、鋁門窗型材粉末塗料、防腐管線粉體塗裝。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black for Printing Inks (TI 1452)",
        "file": "Application Note Orion Special Carbon Black for Printing Inks EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Printing Inks EN.pdf",
        "summary": "包裝與出版印刷油墨碳黑技術手冊，解析膠印、凹印與柔印油墨中碳黑結構對流變黏度、光澤與透印的影響。",
        "points": [
            "針對膠印、凹印與柔印油墨流變需求量身推薦造粒與粉狀特種碳黑品種（PRINTEX 系列）。",
            "在出版輪轉印刷中呈現純淨藍相底色，文字線條邊緣清晰銳利不泛黃。",
            "高結構碳黑有效防止油墨透印過紙背，改善非吸收性紙張上的展色與遮蓋。"
        ],
        "apps": "平版膠印油墨、凹版包裝油墨、柔版印刷油墨、出版輪轉油墨。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black for Tinting Coatings (TI 1459)",
        "file": "Application Note Orion Special Carbon Black for Tinting Coating EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Tinting Coating EN.pdf",
        "summary": "針對建築漆與工業漆調配灰色、米色設計的調色專用碳黑技術指南，著重於抗絮凝與防浮色發花。",
        "points": [
            "粗粒徑、低比表面積設計，大幅降低與二氧化鈦（鈦白粉）之間的競爭吸附與絮凝返粗。",
            "指研測試（Rub-out Test）色差 ΔE < 0.5，有效解決塗膜滾塗或噴塗時的浮色發花頑疾。",
            "具備穩定的著色力批次一致性，確保電腦調色系統的配色準確度。"
        ],
        "apps": "建築乳膠漆調色、工業底漆調色、汽車灰底漆、電腦調色色漿。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black in Food Package Printing Inks (TI 1453)",
        "file": "Application Note Orion Special Carbon Black in Food Package Printing Ink EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black in Food Package Printing Ink EN.pdf",
        "summary": "食品包裝印刷油墨碳黑合規指引，著重於多環芳香烴與重金屬殘留控制，符合國際食品接觸安全標準。",
        "points": [
            "符合美國 FDA 21 CFR、瑞士食品包裝條例（Swiss Ordinance）及歐洲相關食品接觸法規。",
            "多環芳香烴（PAHs）與可萃取初級芳香胺（PAA）含量遠低於國際法規安全限值。",
            "重金屬（鉛、鎘、汞、六價鉻）殘留嚴格受控，在食品包裝印刷中無溶劑異味殘留風險。"
        ],
        "apps": "食品複合軟包裝膜、紙盒包裝印刷、利樂包印刷、煙酒外包裝。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "應用技術資料",
        "title": "Specialty Carbon Black with Low PAHs (TI 1483)",
        "file": "Application Note Orion Special Carbon Black with Low PAHS EN.pdf",
        "path": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black with Low PAHS EN.pdf",
        "summary": "介紹經深度熱解純化處理的低多環芳香烴（Low PAHs）特級碳黑，適用於直接接觸人體皮膚的高規格製品。",
        "points": [
            "符合德國 GS 認證 AfPS GS 2019:01 PAK 類別 1 最嚴苛安全標準。",
            "15 種有害多環芳香烴化合物經純化控制，總 PAHs 含量低於 1.0 ppm。",
            "在確保高純度安全的同時，維持優良的黑度、著色力與塑膠加工機械強度。"
        ],
        "apps": "嬰幼兒玩具塑膠、智慧手環矽膠腕帶、手持電子設備外殼、食品接觸橡膠製品。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "單一產品技術資料",
        "title": "COLOUR BLACK FW 310 水性和溶劑型塗料用超高黑度特種炭黑 (TI 1485 CN)",
        "file": "TI Orion Colour Black FW 310 in Coating CN.pdf",
        "path": "techdatadb/4.Orion/4.Orion Carbon Black 碳黑 單一產品/TI Orion Colour Black FW 310 in Coating CN.pdf",
        "summary": "旗艦後氧化超高色素氣黑 FW 310 技術資料，專為汽車 OEM 塗料、修補漆與高光鏡面塗料打造的超深黑度方案。",
        "points": [
            "平均原生粒徑 16 nm，BET 比表面積高達 320 m²/g，揮發分約 5.0%。",
            "黑度值（My）超過 300，具備深邃黑度與強烈藍相底色（dM > 20）。",
            "表面經深度氧化處理，富含含氧官能基，在高階壓克力與聚氨酯清漆下展現無霧影鏡面外觀。"
        ],
        "apps": "豪華轎車 OEM 漆（OEM）、汽車修補面漆、鋼琴黑高光木器漆、手機外殼塗料。"
    },
    {
        "cat": "Orion 特級碳黑系列",
        "subcat": "單一產品技術資料",
        "title": "COLOUR BLACK FW 310 Carbon Black with Deepest Blackness (TI 1485 EN)",
        "file": "TI Orion Colour Black FW 310 in Coating EN.pdf",
        "path": "techdatadb/4.Orion/4.Orion Carbon Black 碳黑 單一產品/TI Orion Colour Black FW 310 in Coating EN.pdf",
        "summary": "FW 310 英文版技術手冊，提供在水性聚氨酯分散體（PUD）與溶劑型 2K 聚氨酯體系中的研磨配方與耐候測試數據。",
        "points": [
            "原生粒徑 16 nm，比表面積 320 m²/g，提供極致黑度數值（My > 300）與清澈藍相。",
            "提供水性 PUD 與溶劑型 2K PU 體系中之研磨珠料比與分散流變曲線指引。",
            "通過 QUV-A 3000 小時耐候老化測試，塗層光澤度與黑度無衰退現象。"
        ],
        "apps": "高階光學塗層、水性汽車色漆、電子外殼面漆、高黑特種油墨。"
    },

    # =========================================================================
    # 4. Micro Powders (MPI) 特種微粉蠟系列 (29 份)
    # =========================================================================
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "目錄型錄",
        "title": "PTFE Replacements / Industrial PTFE Alternatives (Brochure)",
        "file": "Brochure MPI Industrial PTFE Alternatives EN 2026.pdf",
        "path": "techdatadb/5. MPI/2.Brochure MPI 微粉蠟 目錄15 冊/Brochure MPI Industrial PTFE Alternatives EN 2026.pdf",
        "summary": "針對全球 PFAS 禁令法規整理的 PTFE 替代微粉蠟產品手冊，完全不含氟素，能提供等同甚至超越 PTFE 的耐磨耗與抗刮傷性能。",
        "points": [
            "100% 符合歐盟 REACH 與美國各州無氟（PFAS-Free）環保法規。",
            "採用改性高密度聚乙烯、聚醯胺與天然硬蠟複合技術，全面取代微粉 PTFE。",
            "在金屬烤漆、木器漆與卷鋼塗層中提供等同之 Taber 耐磨耗數據，且不損害清漆光澤與重塗性。"
        ],
        "apps": "工業金屬烤漆、卷材塗料、木器傢俱漆、包裝印刷油墨。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "目錄型錄",
        "title": "Specialty Wax Additives and Fine Powders (Brochure)",
        "file": "Brochure MPI Specialty Wax Additives and Fine Powders EN 2026.pdf",
        "path": "techdatadb/5. MPI/2.Brochure MPI 微粉蠟 目錄15 冊/Brochure MPI Specialty Wax Additives and Fine Powders EN 2026.pdf",
        "summary": "彙整聚乙烯（PE）、聚丙烯（PP）、巴西棕櫚蠟、聚醯胺及微粉複合蠟全系列產品之粒徑、熔點與應用選型大典。",
        "points": [
            "詳列各微粉蠟規格之平均粒徑（D50、D90）、熔點、密度與推薦添加量（0.5%~5%）。",
            "涵蓋耐刮耐磨（Slip & Mar）、消光控制（Matting）與手感爽滑（Soft Touch）三大機能。",
            "適用於溶劑型、水性塗料、UV 能量固化及熱固性粉體塗料等多元塗裝系統。"
        ],
        "apps": "工業塗料、印刷油墨、皮革塗飾、木器漆、粉體塗料。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Advanced Composite Selector Guide PFAS Free",
        "file": "Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025.pdf",
        "summary": "針對先進複合材料開發的無氟（PFAS-Free）耐磨與表面潤滑選用手冊，著重於改善表面滑動阻力與耐衝擊性。",
        "points": [
            "專為環氧樹脂、雙馬來醯亞胺（BMI）等高溫樹脂基複合材料量身打造。",
            "不含全氟化合物（PFAS），符合航太與高階車輛綠色材料規範。",
            "固化過程中均勻分散遷移至表面，降低滑動摩擦阻力，提升複材抗衝擊耐磨損壽命。"
        ],
        "apps": "碳纖維複合材料、風力發電機葉片、航太複材、高溫環氧基材。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "How to Disperse Micronized Wax (Dispersing Guide)",
        "file": "Application Note MPI How to Disperse Micronized Wax EN 2024.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI How to Disperse Micronized Wax EN 2024.pdf",
        "summary": "說明微粉蠟在塗料與油墨配方中的最佳分散操作規程，涵蓋攪拌線速度、控溫範圍與預分散蠟漿製作指引。",
        "points": [
            "建議使用鋸齒狀分散盤（Cowles 盤），控制線速度在 15~20 m/s 達到快速均勻分散。",
            "分散溫度需嚴格控制在蠟熔點以下 15~20°C，防止蠟粉受熱軟化反聚成團塊。",
            "提供刮板細度計標準檢測規程，確保微粉蠟達到標稱微米粒徑無顆粒殘留。"
        ],
        "apps": "微粉蠟投料分散製程、預分散蠟漿製作、塗料油墨車間生產。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "MicroTouch Soft Touch Additives Application Guide",
        "file": "Application Note MPI MicroTouch EN.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI MicroTouch EN.pdf",
        "summary": "介紹彈性高分子微粉 MicroTouch 在觸感塗料中的應用，賦予塗膜絲滑天鵝絨觸感，兼具高硬度與耐汗液性能。",
        "points": [
            "賦予塗膜絲滑天鵝絨（Velvet）與皮革般溫潤手感，消光均勻無粗糙顆粒感。",
            "塗膜硬度可達 F~H 鉛筆硬度，改善傳統手感漆耐磨刮性不足的缺點。",
            "具備優良抗指紋抗油污性能，通過 48 小時耐人工汗液測試不起泡、不發軟。"
        ],
        "apps": "3C 消費電子外殼手感漆、車用內裝塑料漆、高級紙張包裝塗飾。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Can and Container Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide Can Container Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Can Container Coatings EN 2026.pdf",
        "summary": "金屬罐裝與容器塗料微粉蠟選用指南，著重於降低表面摩擦係數、耐高速衝壓加工成型及高溫蒸煮殺菌穩定性。",
        "points": [
            "符合 FDA 175.300 食品接觸塗層認證，適用於食品罐與飲料罐內外塗裝。",
            "提供極低表面動態摩擦係數（COF < 0.08），耐受金屬罐高速衝壓與縮頸加工不破漆。",
            "高熔點聚乙烯蠟在 200°C 高溫烤漆時不冒煙，且耐高溫殺菌蒸煮不失光。"
        ],
        "apps": "二片鋁製飲料罐、三片食品馬口鐵罐、金屬桶外塗、旋開蓋塗料。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Energy Curable Inks and Coatings Selector Guide",
        "file": "Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026.pdf",
        "summary": "針對 100% 固含 UV 與電子束（EB）固化油墨與塗料的微粉蠟選型手冊，固化迅速、不影響透明度且抗刮擦抗回黏。",
        "points": [
            "專為 UV 單體、寡聚物與 EB 固化系統優化，微粉蠟能於毫秒固化中迅速浮於表面發揮保護作用。",
            "折射率與 UV 樹脂高度匹配，在厚膜清漆中透明度佳，不泛白、無霧影。",
            "在高速印刷模切、折盒壓痕工藝中提供優異抗回黏與耐刮傷（Anti-mar）保護。"
        ],
        "apps": "UV 印刷油墨、UV 紙張光油、EB 電子束固化塗層、UV 木器塗料。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Industrial Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide Industrial Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Industrial Coatings EN 2026.pdf",
        "summary": "工業機械漆與鋼構重防腐塗料的微粉蠟選用指南，著重於抗金屬擦刮痕、耐重壓堆疊黏連且不影響重塗性。",
        "points": [
            "微粉蠟顆粒浮於表面形成物理屏障，有效降低輸送與裝配過程中的摩擦刮花。",
            "顯著增強塗層抗重壓黏連（Anti-blocking）性能，防止工件堆疊入庫時漆膜黏結損壞。",
            "與防腐樹脂相容性良好，不影響底漆與面漆的道間重塗附著力。"
        ],
        "apps": "重型工程機械塗料、環氧防腐漆、聚氨酯面漆、鋼結構塗料。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Industrial Flooring Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026.pdf",
        "summary": "工業地坪塗料微粉蠟選型手冊，著重於耐叉車重載碾壓磨損、微紋理防滑安全性及抗橡膠輪胎黑印。",
        "points": [
            "專為環氧自流平、聚氨酯超耐磨地坪及水性地坪塗料設計之耐磨防滑方案。",
            "大幅降低叉車頻繁碾壓下的磨損率，顯著降低 Taber 耐磨耗減重值。",
            "具備抗輪胎印痕性能（Anti-tire mark），防止橡膠輪胎熱壓留黑痕且易於清潔。"
        ],
        "apps": "環氧地坪漆、聚氨酯耐磨地坪、車間防滑地坪、商業倉儲地坪。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Powder Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide Powder Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Powder Coatings EN 2026.pdf",
        "summary": "金屬熱固性粉體塗料專用微粉蠟選用指南，著重於熔融脫氣消除針孔、調配多樣砂紋紋理及防止乾粉結塊。",
        "points": [
            "在粉末熔融固化時發揮脫氣（Degassing）效果，消除厚膜塗裝產生的微細針孔。",
            "提供從高光耐刮擦（0.5% 添加量）到粗細均勻砂紋、皺紋粉體塗料的多種規格。",
            "改善乾粉流動性與抗結塊性，確保在夏季高溫潮濕倉儲條件下粉體不結塊。"
        ],
        "apps": "家電粉末烤漆、鋁門窗金屬噴塗、傢俱金屬粉末塗料、砂紋皺紋粉。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Printing Inks Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide Printing Inks EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Printing Inks EN 2026.pdf",
        "summary": "印刷油墨微粉蠟選用手冊，著重於提高 Sutherland 耐磨擦次數、控制微粉粒徑不影響光澤且墨輥不飛墨。",
        "points": [
            "大幅提升 Sutherland 摩擦測試儀循環次數達 300% 以上，防止運輸與模切磨損。",
            "微粉粒徑均勻（D50 約 3~5 μm），在高剪切墨輥上不飛墨、不堆墨，網點清晰。",
            "改善油墨在金屬箔、塑膠薄膜與塗佈紙上的轉移性與表面滑順手感。"
        ],
        "apps": "平版膠印油墨、凹版包裝油墨、柔印水性油墨、紙盒彩盒印刷。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Wood Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI SelectorGuide WoodCoatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide WoodCoatings EN 2026.pdf",
        "summary": "木器與傢俱塗料微粉蠟選型手冊，賦予漆膜絲滑柔順觸感、耐指甲與硬幣刮劃，且清漆清澈透明不發白。",
        "points": [
            "針對 NC 硝基漆、PU 聚氨酯漆與水性木器漆量身推薦消光與抗刮蠟規格。",
            "賦予塗膜順滑手感，增強表面抗指甲刮劃（Anti-mar）與硬幣耐劃傷性能。",
            "在清漆中具極佳透明度，保留天然木材紋理質感，不泛白、無霧影，並改善抗疊合黏連。"
        ],
        "apps": "實木傢俱漆、櫥櫃烤漆、NC/PU 木器漆、水性木器清漆。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "Architectural Coatings Wax Additives Selector Guide",
        "file": "Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026.pdf",
        "summary": "建築裝飾塗料微粉蠟選用手冊，著重於提升內牆耐洗刷循環次數、防金屬刮痕暗痕及提供外牆荷葉疏水效果。",
        "points": [
            "大幅提升水性乳膠漆耐濕洗刷循環次數（ASTM D2486），達到高品質耐擦洗標準。",
            "微粉蠟浮於漆膜微孔表面，防止日常手痕與金屬物品刮蹭留下暗痕，易於清潔。",
            "提供外牆荷葉水珠疏水效應，降低雨水滲透與灰塵附著髒污。"
        ],
        "apps": "室內乳膠漆、抗污塗料、外牆彈性漆、疏水裝飾塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "應用技術資料",
        "title": "MicroTouch Starting Formulation Guide",
        "file": "Formulation Guide MPI MicroTouch EN.pdf",
        "path": "techdatadb/5. MPI/3.Application Note MPI  wax/Formulation Guide MPI MicroTouch EN.pdf",
        "summary": "天鵝絨觸感漆的參考配方手冊，載明添加比例 3%~8% 的樹脂與固化劑搭配、投料順序及分散工藝參數。",
        "points": [
            "提供達到 2~10 GU 低光澤天鵝絨手感的具體添加比例（通常 3%~8% wt）。",
            "載明羥基丙烯酸、異氰酸酯固化劑與溶劑之投料順序與分散轉速規程。",
            "實測漆膜百格附著力達 5B，且耐 75% 酒精擦拭 500 次完全不發白脫層。"
        ],
        "apps": "溶劑型 2K PU 觸感漆、水性手感塗料、3C 塑膠外殼漆、精品包裝塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "PolyGlide 1226XF Product Performance Study",
        "file": "TI MPI PolyGlide 1226XF Performance Study EN 202407.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI Polyglide 1226 XF/TI MPI PolyGlide 1226XF Performance Study EN 202407.pdf",
        "summary": "超細複合微粉蠟 PolyGlide 1226XF 的性能研究，展現極低表面摩擦係數與出色的耐磨耗保護，清漆透明無顆粒。",
        "points": [
            "高密度聚乙烯與特種硬質聚合物複合，平均粒徑 D50 僅約 4.0~5.5 μm。",
            "在薄膜印刷油墨與工業烤漆中展現優異的 Taber 與 Sutherland 耐磨耗數據。",
            "動態摩擦係數降幅達 50% 以上，清漆中不影響透明度與光澤，無顆粒晶點。"
        ],
        "apps": "薄膜包裝印刷油墨、金屬卷材烤漆、工業防腐面漆、高光清漆。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "PropylMatte 31 HD and AquaMatte Matting Efficiency Study",
        "file": "TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI PropylMatte 31 HD/TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN.pdf",
        "summary": "高密度改性聚丙烯微粉消光劑的效率研究，提供柔和均勻消光，解決傳統二氧化矽手摸發亮光斑與耐刮差的缺點。",
        "points": [
            "提供均勻柔和的消光霧面效果，手觸不留光斑，兼具優異抗劃傷性能。",
            "球形微粉結構對塗料體系黏度影響極小，允許高添加量而不增稠結塊。",
            "在木器漆與金屬漆中具備良好懸浮穩定性，長期儲存不結死塊易於再分散。"
        ],
        "apps": "木器清漆消光、金屬烤漆消光、水性與溶劑型啞光漆。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MicroKlear KL-418AL Product Performance Study",
        "file": "TI MPI MicroKlear KL-418AL Performance Study EN.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MicroKlear 418 AL/TI MPI MicroKlear KL-418AL Performance Study EN.pdf",
        "summary": "天然巴西棕櫚蠟與聚乙烯複合微粉的性能研究，賦予漆膜絲綢般滑順觸感，高溫重壓抗黏連且重塗附著力優良。",
        "points": [
            "天然巴西棕櫚蠟與精細聚乙烯蠟共微粉化複合，賦予漆膜絲綢般溫潤滑爽手感。",
            "在金屬烤漆與木器漆中展現優異高溫抗黏連性，烘烤乾燥後可快速堆疊打包。",
            "相容性良好，完全不影響道間重塗附著力，無縮孔發花風險。"
        ],
        "apps": "高級木器漆、卷鋼面漆、金屬高溫烤漆、絲綢手感塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MicroMatte 1415-EZ Product Performance Study",
        "file": "TI MPI MicroMatte 1415-EZ Performance Study EN 2024.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_Micromatte 1415 EZ/TI MPI MicroMatte 1415-EZ Performance Study EN 2024.pdf",
        "summary": "易分散型（EZ）改性消光蠟的實測報告，低剪切攪拌即可快速均勻潤濕分散，省去高剪切砂磨工藝，漆膜手感爽滑。",
        "points": [
            "特殊表面處理技術，一般普通低速攪拌機即可迅速潤濕分散，省時省能耗。",
            "提供細膩均勻的消光效果，塗膜表面手感平滑，無粗顆粒突起瑕疵。",
            "顯著增強塗膜表面抗指甲刮劃與抗硬物碰撞擦痕能力，儲存穩定不分層。"
        ],
        "apps": "水性與溶劑型工業面漆、木器清漆、免砂磨易分散消光塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MP-22 VF Printing Ink Rub Resistance Study",
        "file": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MP 22 VF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "summary": "經典高熔點微粉 PE 蠟 MP-22 VF 在印刷油墨中的耐磨擦性能實測報告，Sutherland 摩擦次數提升 300% 以上。",
        "points": [
            "在膠印與凹版包裝油墨中使 Sutherland 耐磨循環次數大幅提升 300% 以上。",
            "保護印刷品表面圖案，避免在高速模切、折盒與運輸裝卸中磨損擦傷。",
            "微粉粒徑受控（D50 約 3.0 μm），高剪切墨輥上流變穩定，網點清晰度飽滿。"
        ],
        "apps": "瓦楞紙箱油墨、折疊紙盒印刷、凹版塑膠油墨、金屬印鐵油墨。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MP-22XF Printing Ink Rub Resistance Study",
        "file": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MP-22XF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "summary": "超細規格微粉 PE 蠟 MP-22XF 在印刷油墨中的耐磨研究，透光性佳，專為高網線印刷設計，兼顧耐磨與高光澤。",
        "points": [
            "超細微粉化規格（D50 約 2.0~2.5 μm），適用於高網線高精細印刷油墨體系。",
            "在薄層油墨印刷中展現優異抗摩擦保護，且完全不影響油墨透明度與高光澤度。",
            "提高印刷品在高溫包裝封口與模切折彎過程中的抗熱黏連性。"
        ],
        "apps": "高精細彩盒印刷油墨、金屬箔印刷、薄膜包裝凹版油墨。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MPP-611AL Product Performance Study",
        "file": "TI MPI MPP-611AL Performance Study EN 202407.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-611AL/TI MPI MPP-611AL Performance Study EN 202407.pdf",
        "summary": "高熔點（125~130°C）硬質聚乙烯微粉蠟性能研究，著重於抗金屬刮痕（Anti-mar）與卷鋼高溫重壓抗黏連表現。",
        "points": [
            "高密度聚乙烯微粉結晶，熔點高達 125~130°C，微粉顆粒硬度極高。",
            "專為高溫烘烤卷鋼塗料打造，高溫烘烤不變形、不起煙、不污染烘道。",
            "展現優異的抗金屬劃傷（Anti-mar）性能，並防止卷材高溫堆疊時漆膜黏結撕裂。"
        ],
        "apps": "金屬卷鋼烤漆、家電面板外殼烤漆、高級木器清漆、UV 光油。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MPP-620F Printing Ink Rub Resistance Study",
        "file": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-620F/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "summary": "高熔點硬質 PE 微粉蠟 MPP-620F 在油墨中的性能實測，兼顧表面滑順度與長效耐磨擦堅牢度，耐印鐵高溫摩擦。",
        "points": [
            "兼顧油墨表面滑度（Slip）與耐摩擦牢度（Rub Resistance），防止圖案擦傷掉墨。",
            "在凹版印刷塑膠複合薄膜上展現出色的耐揉搓與耐折痕掉墨保護。",
            "熔點高（> 115°C），耐受印鐵金屬罐高溫封口與烘烤滅菌時的高溫高壓摩擦。"
        ],
        "apps": "凹版塑膠包裝油墨、折疊紙盒印刷、印鐵金屬罐油墨。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MPP-620XF Printing Ink Rub Resistance Study",
        "file": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-620XF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "summary": "超細化聚乙烯微粉蠟 MPP-620XF 的油墨耐磨研究，微粉細度更高，在提供長效抗刮耐磨的同時保持極高光澤度。",
        "points": [
            "超細微粉規格（D50 僅約 2.5 μm），消除普通蠟粉可能造成的霧影微粒缺陷。",
            "提供優異的 Sutherland 印刷耐磨保護，磨擦循環次數提升 300% 以上。",
            "光澤保持率極高，適合高級精品紙盒與高清晰凹印薄膜長版作業不堆墨輥。"
        ],
        "apps": "精品紙盒彩盒印刷、高清晰凹印薄膜、化妝品包裝印刷油墨。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MPP-635VF Printing Ink Rub Resistance Study",
        "file": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-635VF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
        "summary": "高結晶度聚乙烯微粉蠟 MPP-635VF 的耐磨研究，硬度極高耐磨性強，專為粗糙重型包裝紙箱抗磨抗刮設計。",
        "points": [
            "高結晶分子結構，提供全系列中極高的耐物理磨損與抗刮擦保護性能。",
            "在粗糙瓦楞紙箱長途運輸與搬運摩擦測試中，印品文字圖案完好無損。",
            "高熔點結構有效防止夏日高溫貨櫃倉儲時油墨發黏回沾，水性油墨中潤濕分散快。"
        ],
        "apps": "重型瓦楞紙箱油墨、工業外包裝印刷、金屬漆耐刮擦改性。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "PolyTuf 1229 Product Performance Study",
        "file": "TI MPI PolyTuf 1229 Performance Study EN.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_PolyTuf 1229/TI MPI PolyTuf 1229 Performance Study EN.pdf",
        "summary": "高耐磨聚合物改性微粉蠟 PolyTuf 1229 的性能研究，大幅降低表面動態摩擦阻力，保護重負荷運轉塗層。",
        "points": [
            "特殊改性高聚合物微粉體，兼具抗磨損耐衝擊與表面滑順雙重機能。",
            "動態摩擦係數持久穩定，經長期磨耗依然保持潤滑抗滑移性能。",
            "在高溫烘烤塗層與厚漿工業漆中形態穩定不析出，增強塗膜低溫抗裂韌性。"
        ],
        "apps": "工程塑膠改性塗層、工業耐磨機械漆、重載防護塗裝。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "AquaMatte and PropylMatte Matting Efficiency Study",
        "file": "TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_PropylMatte 31/TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN.pdf",
        "summary": "水性專用微粉消光劑 AquaMatte 的效率研究，在水相中自潤濕迅速不浮粉，消光柔和清澈無白霧，塗膜耐水耐刮。",
        "points": [
            "AquaMatte 經特殊親水表面處理，在水性樹脂乳液中自潤濕迅速不浮粉。",
            "消光效率高，提供均勻柔和的低光澤霧面效果，漆膜透光清澈無白霧現象。",
            "克服普通消光粉吸水膨脹的缺點，水性塗膜浸水後不起泡、不發白、耐擦洗性佳。"
        ],
        "apps": "水性木器清漆、水性工業漆、水性皮革塗飾、抗刮啞光面漆。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "Superslip 6515AL and 6515AL-EZ Product Performance Study",
        "file": "TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_Superslip 6515 AL/TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412.pdf",
        "summary": "極致滑順型（Superslip）微粉蠟的性能實測，動態摩擦係數大幅降低，提供絲滑觸感與卓越抗金屬劃傷性能。",
        "points": [
            "專為追求極致表面滑順（Extreme Slip）與抗刮痕的塗料體系量身打造。",
            "動態摩擦係數降至極低水準，表面手感極度滑爽無阻力，抗擦痕性能卓越。",
            "EZ 規格具備低剪切均勻分散能力，高溫重烤不黃變，維持透明清漆光澤。"
        ],
        "apps": "汽車面漆清漆、消費電子家電外殼、高光烤漆、極致滑爽塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "Polyfluo 190 and Fluo 300 Abrasion Resistance Study",
        "file": "TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI_MPI Fluo 300XF/TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN.pdf",
        "summary": "含氟微粉化改性聚合物的耐磨基準測試報告，在嚴苛高速摩擦循環下提供最高等級耐磨保護，耐溫超過 300°C。",
        "points": [
            "微粉化改性含氟聚合物，為工業塗層與油墨耐磨性能的經典測試基準。",
            "在嚴苛的高速摩擦循環測試中提供最高等級耐磨耗與抗刮損保護。",
            "耐溫性高（熔點 > 300°C），在高溫烘烤卷材與特種防護塗料中結構穩定。"
        ],
        "apps": "重型工業塗料、高耐磨卷材塗料、印刷印鐵油墨、極限防護塗層。"
    },
    {
        "cat": "Micro Powders (MPI) 特種微粉蠟系列",
        "subcat": "單一產品技術資料",
        "title": "MicroTex 950 Product Performance Study",
        "file": "TI MPI MicroTex 950 Performance Study EN 202504.pdf",
        "path": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI_MPI Microtex 950/TI MPI MicroTex 950 Performance Study EN 202504.pdf",
        "summary": "受控粒徑 30~50 μm 紋理防滑微粉助劑的性能研究，創造均勻細膩的啞光砂面紋理，觸感溫潤不刺手且耐踩踏磨損。",
        "points": [
            "微粉粒徑嚴格控制在 30~50 μm 區間，創造均勻細膩的啞光砂面微紋理外觀。",
            "賦予塗層優良的物理防滑與耐磨損性能，手觸溫潤舒適無尖銳刺手感。",
            "抗碰撞耐衝擊性能佳，長期踩踏踩磨後微紋理不易被磨平，厚漿塗料中分散均勻。"
        ],
        "apps": "砂紋粉體塗料、防滑工業地坪、相機儀器外殼皺紋漆、防眩塗層。"
    }
]

def generate():
    lines = []
    lines.append("# 技術資料庫（74 份文件）核心技術摘要、重點與應用\n")
    lines.append("> **編寫規範與原則**：")
    lines.append("> 1. **架構明確**：每一份文件統一包含三個部分——【標題】、【重點】（包含一個摘要、三條重點）、【應用】。")
    lines.append("> 2. **忠於檔案內容**：標題以檔名或第一頁 Title 為主；內容嚴格參考檔案內文，資料未提及者絕不自由發揮。")
    lines.append("> 3. **在地專業視角**：用詞以台灣產業界慣用之化工與塗料術語撰寫，語意平實清晰，絕不誇飾。")
    lines.append("> 4. **用語規範**：全篇嚴格排除任何「」字詞。\n")
    lines.append("---\n")

    current_cat = ""
    current_sub = ""
    idx = 1

    for d in DOCS:
        if d["cat"] != current_cat:
            current_cat = d["cat"]
            lines.append(f"\n## {current_cat}\n")

        if d["subcat"] != current_sub:
            current_sub = d["subcat"]
            lines.append(f"\n### {current_sub}\n")

        lines.append(f"#### {idx:02d}. {d['title']}")
        lines.append(f"- **檔案**：`{d['file']}`")
        lines.append(f"- **路徑**：`{d['path']}`")
        lines.append("- **重點**：")
        lines.append(f"  - **摘要**：{d['summary']}")
        lines.append("  - **核心重點**：")
        for p_i, pt in enumerate(d["points"]):
            lines.append(f"    {p_i + 1}. {pt}")
        lines.append(f"- **應用**：{d['apps']}\n")

        idx += 1

    content = "\n".join(lines)

    # STRICT SANITY CHECK: forbidden string must not appear ANYWHERE!
    forbidden = "\u539f\u5ee0"
    assert forbidden not in content, f"Error: '{forbidden}' found in output!"

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Generated {OUTPUT_FILE} successfully! Total docs: {idx - 1}")
    print(f"Sanity check passed: '{forbidden}' count = 0.")

if __name__ == '__main__':
    generate()
