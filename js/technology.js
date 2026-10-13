/**
 * ====================================================================
 * ATTech Web - Technology Module (js/technology.js)
 * 技術專區：11 大特用化學品專題、五大核心維度 (1.原理 2.目錄 3.應用技術 4.單一產品技術 5.配方)
 * 嚴格實事求是：依據 techdatadb 原廠資料庫檔案呈現
 * 比照原理分類架構與排版，線上瀏覽文件，且不開放下載
 * 無原廠公開資料之分頁誠實標示「暫無資料」，絕不憑空杜撰
 * ====================================================================
 */

// 11 大產品系列分類
const TECH_CATEGORIES = [
    {
        slug: "tyzor",
        itemNo: "01",
        name: "Organic Titanates and Zirconates",
        sub: "鈦酸酯與鋯酸酯, Tyzor",
        brandTag: "Dorf Ketal",
        brandBadge: "Dorf Ketal 原廠專用技術",
        titleZh: "鈦酸酯與鋯酸酯四大核心技術應用 (Tyzor®)",
        productLink: "products/dorfketal/tyzor/",
        productLinkText: "瀏覽 Tyzor 產品",
        desc: "Tyzor® 有機鈦（鋯）化合物具備高反應性與多重配位特性，廣泛應用於高分子合成催化、三維網絡交聯、異質基材介面強化，以及 Sol-Gel 表面改性，為工業化提供全面解決方案。",
        hasData: true
    },
    {
        slug: "carbon-black",
        itemNo: "02",
        name: "Special Carbon Black",
        sub: "特級碳黑 / 導電碳黑",
        brandTag: "Orion",
        brandBadge: "Orion Engineered Carbons 原廠技術",
        titleZh: "特級碳黑技術應用 (Carbon Black)",
        productLink: "products/orion/coating/",
        productLinkText: "瀏覽 40+ 款 Orion 碳黑",
        desc: "Orion Engineered Carbons 為全球特級碳黑領導品牌，提供卓越黑度、分散流變性與耐候堅牢度，廣泛應用於高階塗料、油墨與塑料。",
        hasData: true
    },
    {
        slug: "maleic",
        itemNo: "03",
        name: "Maleic Resin / 馬林酸樹脂",
        sub: "松香改性馬林酸樹脂",
        brandTag: "其他特化",
        brandBadge: "特用化學品技術專區",
        titleZh: "馬林酸樹脂技術應用 (Maleic Resin)",
        productLink: "products/others/maleic_acid_resin/",
        productLinkText: "瀏覽馬林酸樹脂規格",
        desc: "松香改性馬林酸樹脂系列，提供優異之硬度、光澤度、快乾性與耐黃變特性。",
        hasData: false
    },
    {
        slug: "px",
        itemNo: "04",
        name: "PX Lubricant Additives",
        sub: "潤滑油添加劑 (原 ExxonMobil)",
        brandTag: "Dorf Ketal",
        brandBadge: "Dorf Ketal (原 ExxonMobil) 原廠技術",
        titleZh: "PX 潤滑油添加劑技術應用 (PX Lubricants)",
        productLink: "products/dorfketal/px/",
        productLinkText: "瀏覽 PX 潤滑油添加劑",
        desc: "Dorf Ketal (原 ExxonMobil 產品線) 特種潤滑油合成酯添加劑技術專題。",
        hasData: false
    },
    {
        slug: "silane",
        itemNo: "05",
        name: "Silane / 矽烷偶合劑",
        sub: "Dynasylan / hydrosil 系列",
        brandTag: "Evonik / 特化",
        brandBadge: "Evonik 原廠專用技術",
        titleZh: "矽烷偶合劑系列技術應用 (Silane)",
        productLink: "products/others/silane/",
        productLinkText: "瀏覽 24 款矽烷規格",
        desc: "矽烷偶合劑技術專題，涵蓋水性與溶劑型有機官能基矽烷於複合材料與表面改性應用。",
        hasData: false
    },
    {
        slug: "wax",
        itemNo: "06",
        name: "Micronized Wax / 微粉蠟",
        sub: "PTFE 取代 / 耐磨耐刮助劑",
        brandTag: "Micro Powders",
        brandBadge: "Micro Powders (MPI) 原廠技術",
        titleZh: "微粉化蠟技術應用 (Micronized Wax)",
        productLink: "products/mpi/ptfe/",
        productLinkText: "瀏覽微粉蠟與 PTFE 替代方案",
        desc: "Micro Powders (MPI) 全球微粉化蠟技術權威，提供合規無氟 PFAS-Free PTFE 替代方案、耐磨耐刮、消光爽滑及觸感改性劑。",
        hasData: true
    },
    {
        slug: "adhesion",
        itemNo: "07",
        name: "Adhesion Resin / 密著樹脂",
        sub: "氯化聚烯烴 (CPO) & 非氯系",
        brandTag: "其他特化",
        brandBadge: "特用化學品技術專區",
        titleZh: "密著樹脂技術應用 (Adhesion Resin)",
        productLink: "products/others/adhesion_promoter/",
        productLinkText: "瀏覽密著促進劑規格",
        desc: "氯化聚烯烴 (CPO) 與非氯系特種密著樹脂技術應用。",
        hasData: false
    },
    {
        slug: "polyester",
        itemNo: "08",
        name: "Polyester Resin / 聚酯樹脂",
        sub: "聚酯樹脂 (DYNAPOL/DYNACOLL替代品)",
        brandTag: "其他特化",
        brandBadge: "特用化學品技術專區",
        titleZh: "聚酯樹脂技術應用 (Polyester Resin)",
        productLink: "products/others/polyester_resin/",
        productLinkText: "瀏覽 37 款聚酯規格",
        desc: "飽和共聚聚酯樹脂技術專題，提供高附著、柔韌性與優異耐化學品塗料樹脂。",
        hasData: false
    },
    {
        slug: "chain",
        itemNo: "09",
        name: "Chain Extender / 擴鏈劑",
        sub: "Unilink & Clearlink 系列",
        brandTag: "Dorf Ketal",
        brandBadge: "Dorf Ketal 原廠專用技術",
        titleZh: "擴鏈劑技術應用 (Chain Extender)",
        productLink: "products/dorfketal/chain/",
        productLinkText: "瀏覽擴鏈劑規格",
        desc: "Dorf Ketal Unilink® 與 Clearlink® 受阻二級二胺擴鏈劑技術，專用於聚脲 (Polyurea) 與高性能聚氨酯彈性體體系。",
        hasData: true
    },
    {
        slug: "matting",
        itemNo: "10",
        name: "Matting Agent / 消光粉",
        sub: "二氧化矽 / 表面處理消光",
        brandTag: "其他特化",
        brandBadge: "特用化學品技術專區",
        titleZh: "消光粉技術應用 (Matting Agent)",
        productLink: "products/others/matting_agent/",
        productLinkText: "瀏覽消光粉規格",
        desc: "特種沉澱與氣相二氧化矽消光粉技術專題。",
        hasData: false
    },
    {
        slug: "powder",
        itemNo: "11",
        name: "Powder Coating Additive",
        sub: "粉體塗料專用功能性助劑",
        brandTag: "其他特化",
        brandBadge: "特用化學品技術專區",
        titleZh: "粉體塗料專用助劑技術應用 (Powder Additives)",
        productLink: "products/others/coating_additive/",
        productLinkText: "瀏覽粉體塗料助劑規格",
        desc: "熱固性粉體塗料專用功能性助劑技術專區。",
        hasData: false
    }
];

// 原廠技術資料庫 (完整整合自 techdatadb，嚴格實事求是)
const TECH_DATABASE = {
  "tyzor": {
    "slug": "tyzor",
    "hasData": true,
    "tabs": {
      "principles": [
        {
          "docId": "TYZ-01",
          "filename": "鈦（鋯）酸酯作為交聯劑.pdf",
          "pdfPath": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為交聯劑.pdf",
          "docType": "1. 原理機制",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "交聯劑機制",
          "title": "鈦（鋯）酸酯作為交聯劑",
          "titleEn": "Tyzor® Crosslinkers",
          "mechImg": "techdatadb/2.Tyzor/1.原理/crosslinker_mech.webp",
          "origin": "Alan & Thomas Technologies 技術資料（Page 5）：鈦（鋯）酸酯作為交聯劑",
          "desc": "說明 Tyzor 有機鈦（鋯）作為交聯劑，在 100~250°C 加熱條件下與聚合物活性基團反應，提高塗料、油墨、膠黏劑與聚合物的物理化學性能。",
          "advantages": [
            "在 100~250°C 加熱條件下，與聚合物羥基（HO-polymer）發生反應形成交聯網狀結構。",
            "提高漆膜與膠層的固化速度。",
            "顯著提高耐水性、耐熱性，並提升硬度與耐刮性能。"
          ],
          "applications": [
            "油漆",
            "油墨",
            "膠黏劑",
            "聚合物（如 PVA）"
          ]
        },
        {
          "docId": "TYZ-02",
          "filename": "鈦（鋯）酸酯作為催化劑.pdf",
          "pdfPath": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為催化劑.pdf",
          "docType": "1. 原理機制",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "催化劑機制",
          "title": "鈦（鋯）酸酯作為催化劑",
          "titleEn": "Tyzor® Catalysts",
          "mechImg": "techdatadb/2.Tyzor/1.原理/catalyst_mech.webp",
          "origin": "Alan & Thomas Technologies 技術資料（Page 4）：鈦（鋯）酸酯作為催化劑",
          "desc": "介紹 Tyzor 有機鈦（鋯）在酯合成、酯交換、縮合和加成反應中的高效催化性能，為不含有機錫的環保催化方案。",
          "advantages": [
            "不含任何有機錫，最終產品具良好環保性，符合歐美環保標準。",
            "克服普通鈦酸酯催化劑不耐水等缺陷，在 280°C 下依舊可以保持較高催化活性（如 Tyzor 422、Tyzor 436）。",
            "可縮短聚酯合成反應時間，且 Tyzor 436 具備低黃變特點，在水、醇和單體中有良好的分散性。"
          ],
          "applications": [
            "可塑劑",
            "（不）飽和聚酯",
            "PET",
            "PBT",
            "聚酯多元醇"
          ]
        },
        {
          "docId": "TYZ-03",
          "filename": "鈦（鋯）酸酯作為表面改性.pdf",
          "pdfPath": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯作為表面改性.pdf",
          "docType": "1. 原理機制",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "表面改性機制",
          "title": "鈦（鋯）酸酯作為表面改性",
          "titleEn": "Tyzor® Surface Modification",
          "mechImg": "techdatadb/2.Tyzor/1.原理/surface_mech.webp",
          "origin": "Alan & Thomas Technologies 技術資料（Page 7）：鈦（鋯）酸酯作為表面改性",
          "desc": "說明 Tyzor 有機鈦（鋯）單獨或混合其他材料加入溶膠-凝膠（Sol-Gel）體系，經水解或 350°C 以上熱解形成連續金屬氧化物塗層以改性表面。",
          "advantages": [
            "經水解（Hydrolysis）或大於 350°C 熱解（Pyrolysis）轉化為緻密的二氧化鈦（TiO2）薄膜。",
            "於基材表面形成連續的金屬氧化物塗層，顯著改善表面防腐性能。",
            "有效改善基材表面的耐刮性能、耐熱性能以及表面親水性能。"
          ],
          "applications": [
            "紡織整理劑",
            "鋁銀漿表面處理",
            "顏料表面處理"
          ]
        },
        {
          "docId": "TYZ-04",
          "filename": "鈦（鋯）酸酯提高附著力.pdf",
          "pdfPath": "techdatadb/2.Tyzor/1.原理/鈦（鋯）酸酯提高附著力.pdf",
          "docType": "1. 原理機制",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "附著力機制",
          "title": "鈦（鋯）酸酯提高附著力",
          "titleEn": "Tyzor® Adhesion Promoters",
          "mechImg": "techdatadb/2.Tyzor/1.原理/adhesion_mech.webp",
          "origin": "Alan & Thomas Technologies 技術資料（Page 6）：鈦（鋯）酸酯提高附著力",
          "desc": "說明 Tyzor 有機鈦（鋯）在無機底材與高分子材料間架橋鍵合，顯著提升各類塗料、油墨與密封膠對不同基材的附著力。",
          "advantages": [
            "透過有機鈦在底材表面（-OH）與聚合物分子間架橋鍵結（Polymer Adhered to Substrate via Ti），緊密連結異質介面。",
            "能與聚合物、玻璃和金屬塗層上的 -OH 及 -COOH 相互作用，促進塗層與底材的交聯。",
            "提高塗料耐高溫性、耐溶劑性、抗腐蝕性、耐刮性、硬度及耐鹽霧性。"
          ],
          "applications": [
            "油漆",
            "塗料",
            "油墨",
            "密封膠（金屬",
            "塑膠",
            "玻璃等基材）"
          ]
        }
      ],
      "catalog": [
        {
          "docId": "TYZ-05",
          "filename": "Brochure DK Tyzor General CN 202608.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor General CN 202608.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "CN (簡體中文)",
          "version": "202608",
          "brand": "Dorf Ketal",
          "shortLabel": "有機鈦鋯產品綜合目錄",
          "title": "Tyzor™ 有機鈦（鋯）酸酯 產品目錄",
          "titleEn": "Brochure DK Tyzor General CN",
          "origin": "Alan & Thomas Technologies 產品目錄 (2026/08): Tyzor™ 有機鈦（鋯）酸酯",
          "desc": "綜述 Tyzor 有機鈦酸酯與鋯酸酯系列產品，涵蓋四個核心反應功能（催化、交聯、表面改性、附著力促進）與全系列型號物理化學參數。",
          "advantages": [
            "涵蓋高活性烷氧基鈦酸酯（TPT、TnBT、TOT）、螯合型鈦酸酯（AA75、TE、AA105、LA）與有機鋯酸酯（NPZ、NBZ）體系。",
            "詳解催化酯化/酯交換、聚合物交聯、Sol-Gel 表面改性與異質介面附著力增強等四大多功能機制。",
            "彙整各型號之活性金屬含量、比重、黏度、閃點及溶劑相容性，提供完整選型依據。"
          ],
          "applications": [
            "塗料",
            "印刷油墨",
            "接著劑與密封膠",
            "酯化合成催化",
            "玻璃與金屬表面改性處理"
          ]
        },
        {
          "docId": "TYZ-06",
          "filename": "Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "202512",
          "brand": "Dorf Ketal",
          "shortLabel": "膠黏與密封膠應用",
          "title": "Tyzor® Adhesives and Sealants Application Guide",
          "titleEn": "Brochure DK Tyzor Adhesive Plus Coatings Line",
          "origin": "Dorf Ketal Application Guide (2025/12): Tyzor® Adhesives and Sealants",
          "desc": "提供 Tyzor 系列鈦酸酯在單組份矽膠（RTV-1）、MS Polymer、聚氨酯及壓克力接著劑與密封膠中的選型與固化參數。",
          "advantages": [
            "詳細列出 Tyzor 726、795、KE-6、9000 等型號之固化時間、不沾手時間（Tack Free Time）與表乾時間（Skin Formation Time）。",
            "針對矽膠（RTV-1）、改性矽烷（STP / MS Polymer）與水性壓克力體系，評估固化速率、耐濕敏感度與顏色影響程度。",
            "標註各型號耐低溫冷凍性（如 KE-6 凝固點 -35°C、9000 達 -40°C），便利極端氣候環境下的施工與儲運。"
          ],
          "applications": [
            "單組份室溫硫化矽膠（RTV-1）",
            "改性聚矽氧烷（MS Polymer / STP）",
            "壓克力樹脂接著劑",
            "汽車與建築工業密封膠"
          ]
        },
        {
          "docId": "TYZ-07",
          "filename": "Brochure DK Tyzor Plus Coatings EN 202512.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor Plus Coatings EN 202512.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "202512",
          "brand": "Dorf Ketal",
          "shortLabel": "塗料系列產品",
          "title": "Tyzor® Product Guide",
          "titleEn": "Brochure DK Tyzor Plus Coatings",
          "origin": "Dorf Ketal Product Guide (2025/12): Tyzor® Product Guide",
          "desc": "介紹 Tyzor 全系列鈦酸酯與鋯酸酯在塗料、油墨、鑄造樹脂與聚酯瓶級樹脂中的產品特性、技術功能與牌號推薦。",
          "advantages": [
            "涵蓋純烷氧基鈦酸酯（TPT、TnBT）、乙醯丙酮螯合物（AA 系列）及水性三乙醇胺螯合物（TE 系列）在溶劑型與水性體系中的應用對照。",
            "詳細說明在金屬底漆、耐高溫塗料、印刷油墨耐磨性及常溫/低溫固化交聯中的技術效益。",
            "說明 Tyzor PC-64 在降低瓶級聚酯聚合溫度、維持優異色澤（b* 值）與降低乙醛含量方面的具體特點。"
          ],
          "applications": [
            "工業塗料",
            "金屬防腐底漆",
            "包裝印刷油墨",
            "常溫與高溫交聯塗層",
            "瓶級聚酯樹脂聚合"
          ]
        },
        {
          "docId": "TYZ-08",
          "filename": "Brochure DK Tyzor for Polyols Polymers EN 202602.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor for Polyols Polymers EN 202602.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "202602",
          "brand": "Dorf Ketal",
          "shortLabel": "多元醇與聚合物催化劑",
          "title": "Tyzor® Catalysts for Polyols and Polymers",
          "titleEn": "Brochure DK Tyzor for Polyols Polymers",
          "origin": "Dorf Ketal Product Brochure (2026/02): Tyzor® Catalysts for Polyols and Polymers",
          "desc": "專注於 Tyzor 鈦與鋯催化劑在聚酯多元醇、增塑劑、聚酯樹脂及聚烯烴合成中的催化性能與製程優勢。",
          "advantages": [
            "提供極高的催化反應速率，大幅縮短批次縮聚反應時間並提升生產裝置產能。",
            "不含重金屬錫，為完全符合 REACH 及現代環保法規之無錫綠色催化技術。",
            "提供高產率、易後處理且耐水解穩定的聚合催化劑選型（如 TnBT、BTP 等）。"
          ],
          "applications": [
            "聚酯多元醇合成",
            "可塑劑直接酯化",
            "PET/PBT 聚酯縮聚",
            "環保聚合物聚合催化"
          ]
        }
      ],
      "applications": [
        {
          "docId": "TYZ-09",
          "filename": "Application Note DK Tyzor Adhesives Sealants EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Adhesives Sealants EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "膠黏劑與密封膠應用",
          "title": "Tyzor® Organic Titanates and Zirconates in Adhesives and Sealants",
          "titleEn": "Application Note DK Tyzor Adhesives Sealants EN",
          "origin": "Dorf Ketal Technical Note: SC0057 12/11",
          "desc": "說明 Tyzor 鈦酸酯與鋯酸酯在矽膠、壓克力、聚氨酯及熱熔膠中作為交聯劑、催化劑與附著力促進劑的作用機理與應用數據。",
          "advantages": [
            "作為中性交聯催化劑用於單組份（RTV-1）矽膠，提供快速固化且避免金屬腐蝕。",
            "促進壓克力與聚氨酯接著劑對玻璃、金屬及難黏塑膠底材的化學鍵合與耐水接著強度。",
            "調節聚合物網絡密度，顯著提高密封膠固化後的耐熱性、剪切強度與耐溶劑侵蝕能力。"
          ],
          "applications": [
            "RTV-1 矽膠密封膠",
            "壓克力感壓膠",
            "聚氨酯結構膠",
            "金屬/玻璃黏著封裝"
          ]
        },
        {
          "docId": "TYZ-10",
          "filename": "Application Note DK Tyzor Bulk Handling Procedures EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Bulk Handling Procedures EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "大宗儲運操作規範",
          "title": "Bulk Handling Procedures for Tyzor® Organic Titanates",
          "titleEn": "Application Note DK Tyzor Bulk Handling Procedures EN",
          "origin": "Dorf Ketal Technical Note: SC0052 11/11",
          "desc": "說明 Tyzor 有機鈦酸酯大宗槽車運輸、儲存設施、管線材質、惰性氣體保護與黏度/低溫凝固特性的工程安全規範。",
          "advantages": [
            "鈦酸酯遇微量濕氣易水解生成二氧化鈦白沉澱，儲存與卸料系統必須配備乾燥氮氣（露點 < -40°C）覆蓋保護。",
            "推薦採用碳鋼或不鏽鋼管線與儲槽，避免使用鋁、銅或含水分填料之密封襯墊。",
            "提供各型號布氏黏度對溫度關係與凝固點特性，指導寒冷季節伴熱保溫與管線防凝固工程。"
          ],
          "applications": [
            "化工廠大宗化學品儲存槽區",
            "流體輸送管路工程",
            "鈦酸酯安全裝卸與氮封系統設計"
          ]
        },
        {
          "docId": "TYZ-11",
          "filename": "Application Note DK Tyzor Catalyst Plasticizer Production EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Catalyst Plasticizer Production EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "可塑劑生產催化應用",
          "title": "Tyzor® Organic Titanates as Catalysts in Plasticizer Production",
          "titleEn": "Application Note DK Tyzor Catalyst Plasticizer Production EN",
          "origin": "Dorf Ketal Technical Note: SC0050 01/12",
          "desc": "介紹 Tyzor 有機鈦酸酯在鄰苯二甲酸酯、己二酸酯及偏苯三酸酯等增塑劑直接酯化製程中的催化反應動力學與產能提升效益。",
          "advantages": [
            "相較於傳統硫酸或對甲苯磺酸酸催化劑，無酸腐蝕問題且副反應少，粗酯酸值低。",
            "催化反應轉化率高達 99.5% 以上，反應溫度可適度提升以大幅縮短反應週期。",
            "產物水洗中和與脫色製程簡單，顯著減少廢水產生與增塑劑成品色度（APHA 低）。"
          ],
          "applications": [
            "DOP/DINP/DOTP 增塑劑合成",
            "己二酸二辛酯（DOA）生產",
            "高溫環保增塑劑製造"
          ]
        },
        {
          "docId": "TYZ-12",
          "filename": "Application Note DK Tyzor Crosslinking for Paper EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Crosslinking for Paper EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "紙張應用耐水交聯",
          "title": "Tyzor® Titanates for Crosslinking in Paper Applications",
          "titleEn": "Application Note DK Tyzor Crosslinking for Paper EN",
          "origin": "Dorf Ketal Technical Note: SC0061 01/12",
          "desc": "說明 Tyzor 螯合型鈦酸酯在造紙施膠劑、瓦楞紙箱接著劑及 PVA/澱粉塗層中作為耐水交聯劑的機理與配方技術。",
          "advantages": [
            "與聚乙烯醇（PVA）和澱粉中的羥基發生多點配位交聯，顯著提升紙板黏合層的耐水解性能。",
            "用於牛皮紙層壓（Kraft paper laminates）及瓦楞紙板，防止受潮開膠與剝離強度下降。",
            "水性螯合型號（如 Tyzor TE、Tyzor LA）在酸性與中性水溶液中具良好穩定性，可直接在線添加於施膠液。"
          ],
          "applications": [
            "瓦楞紙板接著劑",
            "牛皮紙層壓膠",
            "紙張表面施膠劑",
            "耐水性紙製品塗布"
          ]
        },
        {
          "docId": "TYZ-13",
          "filename": "Application Note DK Tyzor Direct Esterification EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Direct Esterification EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "直接酯化反應催化",
          "title": "Direct Esterification Catalysis with Tyzor® Organic Titanates",
          "titleEn": "Application Note DK Tyzor Direct Esterification EN",
          "origin": "Dorf Ketal Technical Note: SC0049 03/12",
          "desc": "探討 Tyzor 有機鈦酸酯在羧酸與醇直接酯化反應中的催化機理、反應轉化率及操作溫度與加料量影響。",
          "advantages": [
            "催化芳香族與脂肪族單元酸、二元酸（如己二酸、對苯二甲酸）之直接酯化，轉化率迅速達到 99% 以上。",
            "加料量極低（典型添加量 0.01%~0.1% 基於反應物重量），極具工業成本優勢。",
            "消除強酸催化劑引起的副反應（如脫水醚化、烯烴生成）及設備腐蝕，保持高產物純度與優異色澤。"
          ],
          "applications": [
            "酯類合成化學品",
            "聚酯單體合成",
            "合成潤滑油基礎油",
            "特種脂肪酸酯"
          ]
        },
        {
          "docId": "TYZ-14",
          "filename": "Application Note DK Tyzor Ferrous and Nonferrous Metal EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Ferrous and Nonferrous Metal EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "金屬表面鈍化防腐",
          "title": "Tyzor® Organic Titanates and Zirconates for Ferrous and Nonferrous Metals",
          "titleEn": "Application Note DK Tyzor Ferrous and Nonferrous Metal EN",
          "origin": "Dorf Ketal Technical Note: SC0108 05/12",
          "desc": "彙整 Tyzor 鈦酸酯與鋯酸酯在鐵金屬與非鐵金屬表面處理、抗腐蝕轉化膜及金屬塗層附著力提升中的多重功能。",
          "advantages": [
            "與金屬表面天然氧化層（-OH）發生化學鍵合，形成厚度僅奈米級但極為緻密的金屬-氧-鈦/鋯耐蝕鈍化膜。",
            "顯著提升有機塗料與接著劑在鋁、鋼、鍍鋅鋼板及銅等金屬底材上的附著強度與耐鹽霧剝落性。",
            "可取代傳統毒性鉻酸鹽表面處理工藝，提供環保無鉻的金屬前處理轉化解決方案。"
          ],
          "applications": [
            "鋁合金及冷軋鋼板無鉻鈍化",
            "金屬烤漆前處理底漆",
            "防腐蝕金屬表面防護",
            "耐高溫塗層"
          ]
        },
        {
          "docId": "TYZ-15",
          "filename": "Application Note DK Tyzor Glass Surface Coatings EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Glass Surface Coatings EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "玻璃表面塗層改性",
          "title": "Tyzor® Organic Titanates and Zirconates in Glass Surface Coatings",
          "titleEn": "Application Note DK Tyzor Glass Surface Coatings EN",
          "origin": "Dorf Ketal Technical Note: SC0046 11/11",
          "desc": "說明 Tyzor 鈦酸酯在玻璃熱端瓶罐噴塗、平板玻璃化學氣相沉積（CVD）與表面硬化抗刮塗層中的應用與熱解反應。",
          "advantages": [
            "在玻璃製瓶熱端退火前（500~600°C）噴塗，熱解生成極薄且均勻的二氧化鈦硬質氧化物塗層。",
            "大幅提升玻璃製品的抗刮磨強度（Scratch resistance）並增強後續冷端潤滑劑的接著鍵合。",
            "用於平板玻璃與光學玻璃的 CVD 製程，可精準調節塗層厚度以獲得特定反射率與光學干涉特性。"
          ],
          "applications": [
            "玻璃瓶罐熱端硬化塗布",
            "平板建築玻璃抗反射/隔熱膜",
            "光學元件保護薄膜"
          ]
        },
        {
          "docId": "TYZ-16",
          "filename": "Application Note DK Tyzor Inorganic Filler Modification EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Inorganic Filler Modification EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "無機填料表面改性",
          "title": "Inorganic Filler Modification with Tyzor® Organic Titanates",
          "titleEn": "Application Note DK Tyzor Inorganic Filler Modification EN",
          "origin": "Dorf Ketal Technical Note: SC0048 12/11",
          "desc": "研究 Tyzor 鈦酸酯作為偶聯劑改性碳酸鈣、高嶺土、二氧化矽及滑石粉等無機填料，改善其在高分子樹脂中的分散性與填充率。",
          "advantages": [
            "鈦酸酯分子一端與無機填料表面的羥基反應，另一端有機長鏈改善與有機聚合物基質的相容性。",
            "顯著降低填料-樹脂混合體系的熔融黏度與混煉阻力，允許大幅提升廉價無機填料的添加比例。",
            "增強複合材料的衝擊強度、拉伸強度與耐熱變形溫度，並防止填料在塗料體系中沉底硬結。"
          ],
          "applications": [
            "高填充熱塑性與熱固性塑膠改性",
            "防腐塗料填料分散",
            "橡膠填料偶聯",
            "母粒加工製造"
          ]
        },
        {
          "docId": "TYZ-17",
          "filename": "Application Note DK Tyzor Surface Primers EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Surface Primers EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "表面底塗劑打底",
          "title": "Tyzor® Organic Titanates as Surface Primers",
          "titleEn": "Application Note DK Tyzor Surface Primers EN",
          "origin": "Dorf Ketal Technical Note: SC0045 11/11",
          "desc": "介紹 Tyzor 鈦酸酯稀釋溶液作為底漆（Primers）應用於金屬、塑膠及氟碳聚合物表面，促使油漆、油墨與橡膠牢固接著的技術工藝。",
          "advantages": [
            "作為薄層底漆塗布於金屬、聚烯烴（PE/PP）、聚酯（PET）及難黏氟聚合物表面，經微量濕氣水解乾燥後形成活性接著層。",
            "提供分子級交聯橋接，將後續塗布的油漆、印刷油墨或橡膠硫化塗層牢牢鎖定於底材上。",
            "耐溶劑擦拭與耐高低溫冷熱循環老化性能優異，顯著降低介面脫層剝離風險。"
          ],
          "applications": [
            "金屬烤漆底漆",
            "塑膠薄膜印刷前處理",
            "橡膠金屬接著黏合",
            "難黏基材底塗劑"
          ]
        },
        {
          "docId": "TYZ-18",
          "filename": "Application Note DK Tyzor Thawing Frozen TPT EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Thawing Frozen TPT EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "冷凍TPT解凍指南",
          "title": "Thawing Procedures for Frozen Tyzor® TPT",
          "titleEn": "Application Note DK Tyzor Thawing Frozen TPT EN",
          "origin": "Dorf Ketal Technical Note: SC0051 11/11",
          "desc": "針對 Tyzor TPT 凝固點較高（18°C）之物理特性，提供儲存、運輸凝固後安全解凍與避免產品變質的操作規範。",
          "advantages": [
            "Tyzor TPT 凝固點為 18°C（64°F），在低於室溫環境下易結晶固化，但結晶時體積不膨脹，不會脹破包裝鋼桶。",
            "解凍時必須嚴格控制加熱溫度（建議水浴或熱風烘房溫度不高於 50°C），切忌使用局部直火烘烤以防局部過熱分解。",
            "解凍過程中必須嚴格維持容器密封，嚴防空氣中濕氣侵入導致水解混濁與鈦沉澱。"
          ],
          "applications": [
            "Tyzor TPT 倉庫儲存管理",
            "冬季低溫運輸解凍操作",
            "化工廠配料槽加料前處理"
          ]
        },
        {
          "docId": "TYZ-19",
          "filename": "Application Note DK Tyzor Transesterification EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Transesterification EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "酯交換反應催化",
          "title": "Transesterification Catalysis with Tyzor® Organic Titanates",
          "titleEn": "Application Note DK Tyzor Transesterification EN",
          "origin": "Dorf Ketal Technical Note: SC0053 11/11",
          "desc": "深入探討 Tyzor 有機鈦酸酯在丙烯酸酯、甲基丙烯酸酯、聚碳酸酯及生物柴油等酯交換反應中的高效催化動力學與工藝條件。",
          "advantages": [
            "催化酯與高級醇之間的烷氧基交換反應，反應轉化率快速達到 98% 以上。",
            "相比強酸或強鹼催化劑，反應條件溫和且副反應極少，不會引發丙烯酸單體自聚或雙鍵破壞。",
            "產物純度高、分離提純工藝簡單，大幅降低中和水洗產生的廢鹽與乳化損耗。"
          ],
          "applications": [
            "特種（甲基）丙烯酸酯單體合成",
            "聚碳酸酯酯交換聚合",
            "生質柴油製備",
            "精細化學品酯類交換"
          ]
        },
        {
          "docId": "TYZ-20",
          "filename": "Application Note DK Tyzor Vapor Pressure vs Temperature EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 /Application Note DK Tyzor Vapor Pressure vs Temperature EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "飽和蒸氣壓與溫度曲線",
          "title": "Tyzor® Organic Titanates Vapor Pressure vs. Temperature",
          "titleEn": "Application Note DK Tyzor Vapor Pressure vs Temperature EN",
          "origin": "Dorf Ketal Technical Note: SC0054 11/11",
          "desc": "彙整 Tyzor 乙基、正丙基、異丙基、正丁基及異丁基鈦酸酯在不同溫度下之飽和蒸氣壓工程數據對照曲線圖表。",
          "advantages": [
            "提供 Tyzor TPT、TnBT、TOT、TE 等不同烷氧基純品型號在 50°C 至 250°C 區間之蒸氣壓（mbar）工程曲線。",
            "為化工減壓蒸餾純化提供精確的真空度與沸點對照計算基準。",
            "為化學氣相沉積（CVD/ALD）與氣相輸送製程提供氣化溫度與蒸氣流量控制之關鍵物理熱力學參數。"
          ],
          "applications": [
            "鈦酸酯減壓蒸餾精餾塔設計",
            "半導體/光電 CVD 氣相沉積沈積工程",
            "儲罐呼吸閥安全計算"
          ]
        }
      ],
      "single": [
        {
          "docId": "TYZ-21",
          "filename": "TI DK Tyzor Activate 422 Plastic Packaging for Food Contact EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor Activate 422/TI DK Tyzor Activate 422 Plastic Packaging for Food Contact EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "422 食品接觸塑膠包裝",
          "title": "Tyzor® ACtivate™ 422 Titanate Catalyst Plastic Packaging for Food Contact",
          "titleEn": "TI DK Tyzor Activate 422 Plastic Packaging for Food Contact",
          "model": "Activate 422",
          "productGroup": "Activate 422",
          "origin": "Dorf Ketal Application Data Sheet: SC0118 04/13",
          "desc": "介紹 ACtivate 422 鈦酸酯催化劑在食品接觸級 PET 塑膠包裝中的法規符合性、高催化活性與提升產能特點。",
          "advantages": [
            "完全符合美國 FDA 21 CFR 177.1630 與歐盟 EU Regulation 10/2011 食品接觸塑膠材料法規要求。",
            "作為高活性酯化催化劑可提高酯化速率達 20%（允許降低反應溫度以控制二甘醇 DEG 含量）；熔融縮聚產能可提升高達 15%。",
            "具備優異耐水解穩定性，可直接添加於 PTA/MEG 漿料或直接注入酯化釜中，並能降低乙醛（AA）與端羧基含量以滿足風味敏感包裝要求。"
          ],
          "applications": [
            "食品接觸級 PET 瓶",
            "食品塑膠包裝材料",
            "風味敏感飲料包裝樹脂生產"
          ]
        },
        {
          "docId": "TYZ-22",
          "filename": "TI DK Tyzor Activate 422 for PET Bottle Resins EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor Activate 422/TI DK Tyzor Activate 422 for PET Bottle Resins EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "422 瓶級聚酯樹脂催化",
          "title": "Tyzor® ACtivate™ 422 Titanate Catalyst for PET Bottle Resins",
          "titleEn": "TI DK Tyzor Activate 422 for PET Bottle Resins",
          "model": "Activate 422",
          "productGroup": "Activate 422",
          "origin": "Dorf Ketal Application Data Sheet: DKLSC019 SC0114 05/13",
          "desc": "詳述 ACtivate 422 在 PET 瓶級樹脂中改善聚酯結晶動力學、降低共聚單體 IPA 用量及提升射出成型效率的技術數據。",
          "advantages": [
            "改變樹脂結晶特性（DSC 曲線顯示升溫結晶起始點升高、冷卻結晶起始點降低），可減少高達 40% 的間苯二甲酸（IPA）用量。",
            "瓶胚射出成型溫度可降低達 10°C（18°F），成型週期縮短高達 8%，顯著降低加工能耗與瓶胚應力開裂。",
            "應用於耐熱充填（Hot-Fill）瓶樹脂可降低收縮率，允許更高充填溫度或瓶身輕量化，並大幅降低乙醛、低聚物與霧度。"
          ],
          "applications": [
            "水瓶與碳酸飲料瓶（CSD）",
            "耐熱充填瓶（Hot-Fill Bottle）",
            "PET 瓶胚射出成型與節能生產"
          ]
        },
        {
          "docId": "TYZ-23",
          "filename": "TI DK Tyzor IAM for Ink EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor IAM/TI DK Tyzor IAM for Ink EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "IAM 油墨專用交聯劑",
          "title": "Tyzor® IAM Organic Titanate for Ink",
          "titleEn": "TI DK Tyzor IAM for Ink",
          "model": "IAM",
          "productGroup": "IAM",
          "origin": "Dorf Ketal Technical Bulletin: Issued July 2010 (Tyzor® IAM Organic Titanate)",
          "desc": "說明 Tyzor IAM 鈦-磷酸鹽複合物在包裝印刷油墨中作為附著力促進劑與交聯劑的特點，不釋放乙醯丙酮且具極高耐水解穩定性。",
          "advantages": [
            "特別針對印刷油墨開發，不含乙醯丙酮（acetylacetone），在高溫蒸煮烘乾過程中不釋放刺激性氣味。",
            "添加量僅 1%~4% 即可顯著增強油墨對聚烯烴（OPP/PE）及聚酯（PET）薄膜的附著牢度，通過 OPP 膠帶剝離測試。",
            "耐水解穩定性遠高於普通鈦螯合物，油墨調配後儲存穩定性佳，且顯著提升耐熱封性與耐化學品溶劑擦拭性。"
          ],
          "applications": [
            "凹版印刷油墨",
            "柔版印刷油墨",
            "複合軟包裝薄膜印刷",
            "食品包裝外層油墨"
          ]
        },
        {
          "docId": "TYZ-24",
          "filename": "TI DK Tyzor IAM for Solvent-Based Printing Ink EN.pdf",
          "pdfPath": "techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)/TI_Tyzor IAM/TI DK Tyzor IAM for Solvent-Based Printing Ink EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "IAM 溶劑型油墨交聯",
          "title": "Tyzor® IAM for Solvent-Based Printing Inks",
          "titleEn": "TI DK Tyzor IAM for Solvent-Based Printing Ink",
          "model": "IAM",
          "productGroup": "IAM",
          "origin": "Dorf Ketal Technical Bulletin: Tyzor® IAM for Solvent-Based Printing Inks",
          "desc": "提供 Tyzor IAM 在溶劑型硝化棉（NC）印刷油墨中對比不同添加量（1%~4%）之附著力、耐磨耗與流動黏度表現的實驗數據。",
          "advantages": [
            "評估 1% 至 4% 添加量在硝化棉油墨中的表現，2%~3% 即達到優異的薄膜接著強度與耐刮耐磨性。",
            "在乙酸乙酯、乙醇等常規酯醇溶劑中溶解性與相容性極佳，不引起油墨體系膠化增稠。",
            "固化後漆膜柔韌抗衝擊，耐受包裝後加工熱封刀頭高溫夾燙而不黏刀脫墨。"
          ],
          "applications": [
            "溶劑型硝化棉凹版油墨",
            "聚醯胺印刷油墨",
            "軟性複合包裝印刷"
          ]
        }
      ],
      "formulation": []
    }
  },
  "carbon-black": {
    "slug": "carbon-black",
    "hasData": true,
    "tabs": {
      "principles": [
        {
          "docId": "ORI-P01",
          "filename": "平均原生粒徑.pdf",
          "pdfPath": "techdatadb/4.Orion/1.原理/平均原生粒徑.pdf",
          "docType": "1. 原理機制",
          "lang": "TW (繁體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "平均原生粒徑機制",
          "title": "碳黑重要技術指標：平均原生粒徑與比表面積原理",
          "titleEn": "Carbon Black Primary Particle Size & Specific Surface Area (BET)",
          "origin": "Alan & Thomas Technologies 技術資料：碳黑重要技術指標（一、平均原生粒徑）",
          "desc": "探討碳黑原生粒徑（Primary Particle Size）與 BET 比表面積之物理作用機制。粒徑大小直接決定光學黑度（Jetness）、色調底相（Undertone）、著色力及抗紫外線能力，並深入剖析微細粒徑對塗料油墨潤濕分散流變特性的關鍵影響。",
          "advantages": [
            "黑度與原生粒徑直接相關：粒徑越小（10~20 nm），BET 比表面積越大，光線吸收率越高，呈現之黑度越深邃且抗紫外線老化性能更佳。",
            "色相與底色調控：微細小粒徑碳黑展現高級深藍色相（Blue Undertone），而粗粒徑大粒徑碳黑則偏向棕色調（Brown Tone）。",
            "凝聚體比表面積效應：原生粒子熔結成凝聚體後，微細粒子依然保持極高有效比表面積，對塗膜提供頂級著色力與光學反射密度。",
            "分散工藝關聯性：比表面積越大，分子間吸引力越強且吸油量增加，需搭配適當高分子分散劑與研磨剪切力以確保最佳展色穩定性。"
          ],
          "applications": [
            "頂級汽車原廠漆",
            "高光修補漆",
            "高光學密度噴墨油墨",
            "抗UV耐候塑料母粒",
            "防腐防護塗料"
          ]
        },
        {
          "docId": "ORI-P02",
          "filename": "结構.pdf",
          "pdfPath": "techdatadb/4.Orion/1.原理/结構.pdf",
          "docType": "1. 原理機制",
          "lang": "TW (繁體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "聚集體結構形態",
          "title": "碳黑重要技術指標：聚集體立體結構形態與吸油值原理",
          "titleEn": "Carbon Black Aggregate Structure & Oil Absorption (OAN)",
          "origin": "Alan & Thomas Technologies 技術資料：碳黑重要技術指標（二、結構）",
          "desc": "解析色素碳黑原生凝聚體（Aggregate）之化學鍵結立體形態與鏈枝結構發育度。闡明高結構與低結構碳黑在吸油量（OAN）、流變黏度、分散行為、塗層光澤度及導電性能上的本質差異與選型依據。",
          "advantages": [
            "原生化學鍵熔結：碳黑在反應爐高溫區由原生粒子熔結為不可逆原生凝聚體，以鏈狀或葡萄串狀形態存在，構成碳黑的立體結構基礎。",
            "高結構特徵與性能：高結構碳黑具備大量鏈枝與孔隙空間，吸油值（OAN）高、抗絮凝穩定性好，利於賦予複合材料優異抗靜電與導電網絡。",
            "低結構特徵與性能：低結構碳黑聚集體緊湊、吸油值低，在液態塗料與油墨中黏度增稠小，具備高顏料填充負載量與極致鏡面高光澤。",
            "流變與加工性指導：結構度直接主導塗料油墨的屈服值與流平性，為控制配方黏度與塗裝作業流動性的核心參數。"
          ],
          "applications": [
            "高光汽車烤漆",
            "低黏度高填量色漿",
            "導電防靜電塗層",
            "平版膠印油墨",
            "工程塑料著色母粒"
          ]
        },
        {
          "docId": "ORI-P03",
          "filename": "表面處理.pdf",
          "pdfPath": "techdatadb/4.Orion/1.原理/表面處理.pdf",
          "docType": "1. 原理機制",
          "lang": "TW (繁體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "表面氧化化學處理",
          "title": "碳黑重要技術指標：表面化學處理、揮發分與酸鹼度 (pH) 原理",
          "titleEn": "Carbon Black Surface Treatment, Volatiles & pH Chemistry",
          "origin": "Alan & Thomas Technologies 技術資料：碳黑重要技術指標（三、表面處理）",
          "desc": "闡述特級碳黑後氧化表面處理機制，解析羧基、酚羥基、內酯基與醌基等含氧極性官能基之分布。深入說明揮發分含量（Volatile Content）與 pH 酸鹼度對極性體系潤濕相容性、高分子分散劑錨定鍵合及抗絮凝返粗的決定性作用。",
          "advantages": [
            "調整極性與潤濕性：表面後氧化引入豐富含氧極性官能基（羧基、酚羥基、內酯基），大幅降低介面張力，使微細粒徑碳黑在極性溶劑中快速潤濕。",
            "揮發分與官能基指標：揮發分含量直接反映表面含氧基團數量，揮發分越高代表極性越強，與水性分散樹脂相容展色性更卓越。",
            "酸鹼性 (pH) 轉變機制：一般未處理爐黑呈鹼性（pH > 7），經深度後處理之色素碳黑轉為酸性（pH 3~5），能與分散劑之鹼性胺基錨定基團形成超強鍵結。",
            "防止返粗與提升光澤：強固的極性介面保護層能徹底防止儲存過程中的絮凝返粗與色差漂移，大幅提升塗膜的光澤度與漆膜通透感。"
          ],
          "applications": [
            "水性高光工業漆",
            "汽車烤漆原廠漆",
            "極性溶劑型高級油墨",
            "高展色奈米色漿",
            "UV光固化塗料"
          ]
        },
        {
          "docId": "ORI-P04",
          "filename": "製程差異.pdf",
          "pdfPath": "techdatadb/4.Orion/1.原理/製程差異.pdf",
          "docType": "1. 原理機制",
          "lang": "TW (繁體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "三大核心製程工藝",
          "title": "顏料碳黑三大核心製造工藝差異：爐黑、氣黑與燈黑",
          "titleEn": "Manufacturing Processes of Pigment Blacks: Furnace, Gas, and Lamp Black",
          "origin": "Alan & Thomas Technologies 技術資料：碳黑重要技術指標（四、製程差異）",
          "desc": "比較爐黑工藝（Furnace Black）、氣黑工藝（Gas Black）與燈黑工藝（Lamp Black）之反應爐結構、燃燒熱解機理及表面化學特性。詳解不同工藝對碳黑粒徑分布、聚集體結構、酸鹼值及終端漆膜色調特徵的決定性影響。",
          "advantages": [
            "爐黑工藝 (Furnace Black)：在密閉反應爐中高溫缺氧裂解，粒徑調控範圍寬廣（15~80 nm），產量大且結構多元，廣泛應用於塑料、合成皮革、電線電纜與工業防護領域。",
            "氣黑工藝 (Gas Black)：採用多孔扇形火焰於冷卻水鼓沉積，原生粒徑超細（10~30 nm）且天然富含酸性表面含氧基團（pH 3~5），具備極致超深黑度、強著色力與清澈深藍底相。",
            "燈黑工藝 (Lamp Black)：於敞開燃燒盤緩慢燃燒沉積，粒徑粗大且分佈寬，抗浮色發花（Rub-out）能力卓越，為建築與工業調色漆提供中性純灰與抗指研發花標竿。",
            "工藝決定應用特性：製程直接決定碳黑的化學純度、表面官能基與物理晶體結構，為各類高階塗料、油墨及工程塑料提供精準客製化材料選型。"
          ],
          "applications": [
            "頂級汽車原廠面漆",
            "高級包裝凹版油墨",
            "建築外牆調色乳膠漆",
            "合成皮革PU塗飾",
            "工程塑料色母粒"
          ]
        }
      ],
      "catalog": [
        {
          "docId": "ORI-01",
          "filename": "Brochure Orion Carbon Black CN.pdf",
          "pdfPath": "techdatadb/4.Orion/2.Orion Carbon Black 碳黑 目錄 （16）冊/Brochure Orion Carbon Black CN.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "CN (簡體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "特種碳黑產品技術指標(中)",
          "title": "特种炭黑 产品技术指标 / 亚太地区",
          "titleEn": "Brochure Orion Carbon Black CN",
          "origin": "Orion S.A. 產品手冊: 特种炭黑 产品技术指标 / 亚太地区",
          "desc": "彙編 Orion 亞太地區供應之全系列特種碳黑產品物理化學指標，涵蓋氣黑、爐黑及燈黑在塗料、油墨與塑料中的關鍵參數。",
          "advantages": [
            "完整列出各牌號之 BET 比表面積、吸油值（OAN）、黑度值（My/Mc）及原生粒徑對照表。",
            "依據氣黑（Gas Black）、爐黑（Furnace Black）及燈黑（Lamp Black）不同製程工藝劃分性能特點與著色強度。",
            "針對不同極性溶劑、水性樹脂及聚合物體系提供後處理（氧化表面）與未後處理牌號推薦。"
          ],
          "applications": [
            "汽車面漆/修補漆",
            "工業防腐塗料",
            "包裝印刷油墨",
            "塑料色母粒",
            "合成纖維紡絲著色"
          ]
        },
        {
          "docId": "ORI-02",
          "filename": "Brochure Orion Carbon Black EN.pdf",
          "pdfPath": "techdatadb/4.Orion/2.Orion Carbon Black 碳黑 目錄 （16）冊/Brochure Orion Carbon Black EN.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "特種碳黑產品技術指標(英)",
          "title": "Specialty Carbon Blacks Technical Data Asia Pacific",
          "titleEn": "Brochure Orion Carbon Black EN",
          "origin": "Orion S.A. Technical Brochure: Specialty Carbon Blacks Technical Data Asia Pacific",
          "desc": "提供 Orion 亞太市場特種碳黑全系列產品技術規範、分析方法（ASTM）及在塗料、油墨與高分子中的牌號矩陣。",
          "advantages": [
            "詳細記載 OAN/COAN 結構吸油值、揮發份含量（Volatile Content）及 pH 值對流變性與相容性的影響。",
            "依應用領域細分為超高黑度（High Jetness）、中黑度及著色型（Tinting）專用等級。",
            "標註粒狀（Beads）與粉狀（Powder）形態的物性差異，指導工廠分散研磨設備選型。"
          ],
          "applications": [
            "溶劑型與水性工業塗料",
            "噴墨墨水",
            "膠印/柔版/凹版油墨",
            "導電塑料與抗靜電複合材料"
          ]
        }
      ],
      "applications": [
        {
          "docId": "ORI-03",
          "filename": "Application Note Orion Fastness of Specialty Carbon Blacks EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Fastness of Specialty Carbon Blacks EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "特種碳黑耐光耐候堅牢度",
          "title": "Fastness and Resistance Properties of Specialty Carbon Blacks",
          "titleEn": "Application Note Orion Fastness of Specialty Carbon Blacks EN",
          "origin": "Orion Technical Information: TI 1480 (OEC-TI 1480-10/2022)",
          "desc": "評估特種碳黑顏料在極端光照、耐候、高溫熱穩定性及耐酸鹼化學品介質侵蝕下的牢度與耐抗性能。",
          "advantages": [
            "碳黑由無定形碳組成，具備耐日光、耐紫外線（UV）及耐候老化的極致牢度（耐光等級達最高級 Blue Wool 8 級）。",
            "具備卓越的熱穩定性，在惰性氣氛下高溫耐受超過 1000°C，遠勝所有有機黑色顏料。",
            "耐強酸、耐強鹼及有機溶劑浸泡侵蝕，在嚴苛腐蝕環境下不褪色、不遷移、不滲色。"
          ],
          "applications": [
            "高階汽車塗料",
            "建築外牆氟碳塗料",
            "高耐候農膜",
            "極端高溫工業設備防護塗層"
          ]
        },
        {
          "docId": "ORI-04",
          "filename": "Application Note Orion Handling of Carbon Black EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Handling of Carbon Black EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "碳黑安全裝卸指南",
          "title": "Handling of Carbon Black",
          "titleEn": "Application Note Orion Handling of Carbon Black EN",
          "origin": "Orion Technical Information: TI 1451",
          "desc": "提供特種碳黑粉體與顆粒在大宗儲存、氣力輸送、除塵防爆及粉塵健康安全防護方面的工程操作指導規範。",
          "advantages": [
            "詳細分析碳黑顆粒（Beads）與粉狀（Powder）的流動性、堆積密度與輸送壓降差異。",
            "提供筒倉卸料、螺旋輸送、氣力輸送管路設計與防架橋、防粉塵飛揚的最佳實踐。",
            "明確粉塵防爆防護分區標準、接地靜電釋放要求與個人防護裝備（PPE）操作規範。"
          ],
          "applications": [
            "塗料油墨廠碳黑投料系統",
            "塑料色母粒中央供料系統",
            "密閉式氣力輸送工程設計"
          ]
        },
        {
          "docId": "ORI-05",
          "filename": "Application Note Orion Pigments Special Carbon Black in Modern Coatings EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Pigments Special Carbon Black in Modern Coatings EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "現代塗料碳黑顏料應用",
          "title": "Carbon Black Pigments in Modern Coating Systems",
          "titleEn": "Application Note Orion Pigments Special Carbon Black in Modern Coatings EN",
          "origin": "Orion Industry Information: Carbon Black Pigments in Modern Coating Systems (© 2012)",
          "desc": "全面說明碳黑在溶劑型、水性、粉末及輻射固化現代塗料中的分散機理、光學黑度、藍相色相與流變特性。",
          "advantages": [
            "深入解析原生粒徑、聚集體結構與表面化學（揮發份/氧化官能基）對黑度（Jetness）與藍相色調（Undertone）的決定性作用。",
            "探討潤濕分散劑與碳黑表面酸性/中性官能基的相互作用機制，預防浮色發花與絮凝返粗。",
            "分析水性化與高固體份塗料體系中黏度建立與長期儲存穩定性的控制策略。"
          ],
          "applications": [
            "汽車 OEM 漆與修補漆",
            "高階工業面漆",
            "水性木器漆",
            "粉末塗料"
          ]
        },
        {
          "docId": "ORI-06",
          "filename": "Application Note Orion Special Black for Fibers EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Black for Fibers EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "合成纖維原液著色碳黑",
          "title": "Specialty Carbon Blacks for Fibers",
          "titleEn": "Application Note Orion Special Black for Fibers EN",
          "origin": "Orion Technical Information: TI 1377",
          "desc": "介紹特種碳黑在聚酯（PET）、尼龍（PA）及聚丙烯（PP）合成纖維原液著色紡絲中的過濾性、紡絲穩定性與深黑度表現。",
          "advantages": [
            "具備超高純淨度與極低灰分雜質，顯著降低熔融紡絲濾壓值（DFP, Delta Filter Pressure），大幅延長紡絲組件濾網壽命。",
            "聚集體分佈均勻且易於分散，徹底避免化纖高速牽伸過程中的斷頭（Filament Breakage）與毛絲現象。",
            "賦予纖維均勻深邃的色澤與優異的耐洗滌、耐摩擦牢度，並兼具抗紫外線光老化保護功能。"
          ],
          "applications": [
            "聚酯纖維（PET）",
            "尼龍纖維（PA6/PA66）",
            "聚丙烯（PP）紡絲",
            "土工布與汽車內飾織物"
          ]
        },
        {
          "docId": "ORI-07",
          "filename": "Application Note Orion Special Carbon Black Disperse Guideline EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black Disperse Guideline EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "塗料碳黑潤濕分散指南",
          "title": "Short Dispersion Guideline for Specialty Carbon Blacks in Coatings",
          "titleEn": "Application Note Orion Special Carbon Black Disperse Guideline EN",
          "origin": "Orion Technical Information: TI 1375",
          "desc": "提供特種碳黑在塗料生產中預分散、研磨設備選擇（珠磨機）、研磨介質充填率及分散劑最佳添加量之實用工藝。",
          "advantages": [
            "詳細規範三步驟分散流程：潤濕（Wetting）、機械解聚研磨（Deagglomeration）與穩定化（Stabilization）。",
            "推薦珠磨機研磨珠尺寸（0.4~1.2 mm 氧化鋯珠）、填裝比率（70%~80%）及線速度控制參數。",
            "提供階梯流動法（Flow Point Method）精確測定分散劑最佳用量，防止添加過量或不足導致降黏失效。"
          ],
          "applications": [
            "塗料研磨色漿製備",
            "高階黑漆量產製程控制",
            "砂磨分散工藝最佳化"
          ]
        },
        {
          "docId": "ORI-08",
          "filename": "Application Note Orion Special Carbon Black for Industrial Coatings EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Industrial Coatings EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "工業防護塗料專用碳黑",
          "title": "Specialty Carbon Blacks for Industrial Coatings",
          "titleEn": "Application Note Orion Special Carbon Black for Industrial Coatings EN",
          "origin": "Orion Technical Information: TI 1458",
          "desc": "探討特種碳黑在一般工業漆、工程機械、農機防腐及金屬烤漆中平衡黑度、遮蓋力、流變性與經濟成本的選型方案。",
          "advantages": [
            "針對農機、工程機械及金屬結構提供高耐候、優異防腐與高耐刮之專用碳黑牌號推薦。",
            "分析爐黑與氣黑在環氧底漆、聚氨酯面漆及醇酸調和漆中的流變相容性與抗流掛平衡。",
            "提供兼顧良好遮蓋力與高光澤度的經濟型配色解決方案，降低配方整體顏料成本。"
          ],
          "applications": [
            "重防腐工業塗料",
            "工程機械與卡車烤漆",
            "鋼結構防腐底漆",
            "五金金屬面漆"
          ]
        },
        {
          "docId": "ORI-09",
          "filename": "Application Note Orion Special Carbon Black for Inkjet Inks EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Inkjet Inks EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "數位噴墨墨水專用碳黑",
          "title": "Specialty Carbon Blacks for Superior Pigmented Inkjet Inks",
          "titleEn": "Application Note Orion Special Carbon Black for Inkjet Inks EN",
          "origin": "Orion Technical Information: TI 1291",
          "desc": "詳述特種碳黑在數位噴墨墨水（Inkjet）中奈米級分散粒徑、極窄粒徑分佈、超低黏度與噴頭防堵塞可靠性技術。",
          "advantages": [
            "要求分散後平均粒徑 D50 < 100 nm 且無大於 1 μm 粗粒子，確保連續噴印無堵塞（Nozzle Clogging）。",
            "嚴格控制多價金屬離子（如 Ca2+、Mg2+、Fe3+）與可溶性鹽含量，確保墨水極佳的水相膠體穩定性。",
            "在高剪切噴射條件下保持低黏度與快速自修復流變特性，賦予印花高光學密度（Optical Density）與銳利邊緣。"
          ],
          "applications": [
            "水性桌上與工業噴墨墨水",
            "UV 固化數位噴墨墨水",
            "紡織數位印花墨水"
          ]
        },
        {
          "docId": "ORI-10",
          "filename": "Application Note Orion Special Carbon Black for Powder Coatings EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Powder Coatings EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "粉體塗料專用碳黑",
          "title": "Specialty Carbon Blacks for Powder Coatings",
          "titleEn": "Application Note Orion Special Carbon Black for Powder Coatings EN",
          "origin": "Orion Technical Information: TI 1293",
          "desc": "評估特種碳黑在聚酯/TGIC、聚酯/HAA、環氧及聚酯/環氧混合型粉末塗料中的熔融擠出分散、黑度與帶電性能。",
          "advantages": [
            "評估螺桿擠出機剪切混合過程中的碳黑解聚難易度，推薦易分散粒狀與粉狀等級。",
            "控制粉末塗料靜電噴塗施工中的摩擦帶電（Tribo）與電暈帶電（Corona）性能，提升第一道上粉率。",
            "在固化烘烤過程中展現極佳熱穩定性，消除針孔、縮孔缺陷，維持高光澤與深黑外觀。"
          ],
          "applications": [
            "家電粉末塗料",
            "建築鋁型材粉末噴塗",
            "汽車輪轂與底盤粉末塗層"
          ]
        },
        {
          "docId": "ORI-11",
          "filename": "Application Note Orion Special Carbon Black for Printing Inks EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Printing Inks EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "印刷油墨專用碳黑",
          "title": "Specialty Carbon Black for Printing Inks",
          "titleEn": "Application Note Orion Special Carbon Black for Printing Inks EN",
          "origin": "Orion Industry Information: Specialty Carbon Black for Printing Inks",
          "desc": "介紹特種碳黑在膠印（平版）、凹版、柔版及絲網印刷油墨中的流變性、流動度、著色力與印刷光澤度要求。",
          "advantages": [
            "針對單張紙與輪轉膠印油墨的高黏度高剪切特性，提供優異長度（Length/Tack）與抗乳化平衡。",
            "針對液體油墨（凹版/柔版）提供低黏度、高著色力及卓越的醇酯溶劑釋放性。",
            "確保油墨印品具有高光澤度、優異耐摩擦性（Rub Resistance）與清晰明銳的網點還原性。"
          ],
          "applications": [
            "書刊與商業膠印油墨",
            "食品與藥品包裝柔版/凹版油墨",
            "網版印刷厚膜油墨"
          ]
        },
        {
          "docId": "ORI-12",
          "filename": "Application Note Orion Special Carbon Black for Tinting Coating EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black for Tinting Coating EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "調色與底漆專用碳黑",
          "title": "Specialty Carbon Blacks for Tinting Applications",
          "titleEn": "Application Note Orion Special Carbon Black for Tinting Coating EN",
          "origin": "Orion Technical Information: TI 1459",
          "desc": "探討碳黑在建築調色漆與工業混色漆中作為調色顏料（Tinting）的著色力穩定性、抗浮色發花（Rub-out）與色相控制。",
          "advantages": [
            "採用中等至較大粒徑、寬結構分佈的燈黑（Lamp Black）與爐黑，大幅降低調色系統浮色發花風險。",
            "展現優異的著色力（Tinting Strength）穩定性，批次間色差 ΔE 極小，滿足高精準電腦調色機要求。",
            "具備中性偏藍 Undertone，與二氧化鈦白色顏料混合時呈現明亮清透的純灰色調而不偏偏黃偏紅。"
          ],
          "applications": [
            "建築內外牆調色基礎漆",
            "工業調色系統通用色漿",
            "水性與溶劑型灰色面漆"
          ]
        },
        {
          "docId": "ORI-13",
          "filename": "Application Note Orion Special Carbon Black in Food Package Printing Ink EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black in Food Package Printing Ink EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "食品包裝油墨碳黑合規",
          "title": "Carbon Black Pigment for Food Packaging Printing Inks",
          "titleEn": "Application Note Orion Special Carbon Black in Food Package Printing Ink EN",
          "origin": "Orion Technical Information: TI 1453",
          "desc": "說明特種碳黑在食品接觸包裝印刷油墨中的合規要求，重點評估純淨度、重金屬限值及多環芳烴（PAH）與初級芳香胺殘留。",
          "advantages": [
            "符合瑞士條例（Swiss Ordinance SR 817.023.21）及歐洲印刷油墨協會（EuPIA）排除名單規定。",
            "嚴格控制低甲苯萃取物（Toluene Extract）、超低鎘、鉛、汞、六價鉻等重金屬含量。",
            "確保印刷油墨在複合食品包裝外層不發生化學物質向食品內容物遷移超標。"
          ],
          "applications": [
            "食品接觸軟包裝印刷油墨",
            "紙盒外包裝水性印刷",
            "衛生敏感包裝印品"
          ]
        },
        {
          "docId": "ORI-14",
          "filename": "Application Note Orion Special Carbon Black with Low PAHS EN.pdf",
          "pdfPath": "techdatadb/4.Orion/3.Orion Application Note/Application Note Orion Special Carbon Black with Low PAHS EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "低多環芳烴環保碳黑",
          "title": "Carbon Blacks with Low Amount of Polycyclic Aromatic Hydrocarbons (PAHs)",
          "titleEn": "Application Note Orion Special Carbon Black with Low PAHS EN",
          "origin": "Orion Technical Information: TI 1483",
          "desc": "介紹符合德國 GS 標誌、歐盟 REACH 附錄 XVII 及各國消費品嚴格安全法規之超低多環芳烴（Low PAHs）特種碳黑系列。",
          "advantages": [
            "經特殊燃燒工藝與深度高溫純化處理，將 18 種管控多環芳烴（PAHs）總量降至極低水準（< 1 ppm）。",
            "完全符合德國 AfPS GS 2019:01 PAK 認證 Category 1 最高等級（可長期接觸人體皮膚或放入口中之玩具標準）。",
            "在維持超低 PAHs 安全指標的同時，完全保持傳統碳黑的高黑度、優異機械力學與抗老化性能。"
          ],
          "applications": [
            "兒童玩具及母嬰用品橡膠塑料配件",
            "電動工具包膠手柄",
            "消費性電子產品護套",
            "皮膚接觸密封件"
          ]
        }
      ],
      "single": [
        {
          "docId": "ORI-15",
          "filename": "TI Orion Colour Black FW 310 in Coating CN.pdf",
          "pdfPath": "techdatadb/4.Orion/4.Orion Carbon Black 碳黑 單一產品/TI Orion Colour Black FW 310 in Coating CN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "CN (簡體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "FW 310 超高黑度塗料(中)",
          "title": "COLOUR BLACK FW 310 水性和溶剂型涂料用超高黑度特种炭黑",
          "titleEn": "TI Orion Colour Black FW 310 in Coating CN",
          "model": "FW 310",
          "productGroup": "FW 310",
          "origin": "Orion 技术信息: TI 1485 (TI 1485)",
          "desc": "介紹 Colour Black FW 310 後處理高色素爐黑在汽車面漆與高檔工業塗料中實現超深黑度（Ultra-High Jetness）與深藍相的技術特性。",
          "advantages": [
            "原生粒徑僅 13 nm，經高程度後表面氧化處理，賦予塗層無與倫比的超高黑度值（My > 300）與強烈深藍相（dM > 0）。",
            "表面富含氧官能基，在高極性溶劑及水性丙烯酸/聚氨酯分散液中展現絕佳的潤濕性與相容性。",
            "展現優異抗絮凝與耐光老化穩定性，滿足頂級豪華汽車外觀面漆最嚴苛的光澤與鏡面黑度要求。"
          ],
          "applications": [
            "豪華汽車面漆",
            "汽車修補漆",
            "高端消費電子高光黑色外殼",
            "鋼琴黑裝飾塗料"
          ]
        },
        {
          "docId": "ORI-16",
          "filename": "TI Orion Colour Black FW 310 in Coating EN.pdf",
          "pdfPath": "techdatadb/4.Orion/4.Orion Carbon Black 碳黑 單一產品/TI Orion Colour Black FW 310 in Coating EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "FW 310 超高黑度塗料(英)",
          "title": "COLOUR BLACK FW 310 Carbon Black with Deepest Blackness for Water-Borne and Solvent-Borne Coatings",
          "titleEn": "TI Orion Colour Black FW 310 in Coating EN",
          "model": "FW 310",
          "productGroup": "FW 310",
          "origin": "Orion Technical Information: TI 1485 (OEC-TI 1485)",
          "desc": "提供 Colour Black FW 310 在水性與溶劑型高光面漆中的光學黑度分析數據（L*、My、Mc）、色漿分散配方與流變穩定性測試。",
          "advantages": [
            "具備極低 L* 明度值與極高著色力，為現代水性及溶劑型頂級黑漆提供標竿級的色度深度。",
            "提供詳細的色漿研磨起始配方建議，指導高分子分散劑與研磨樹脂比例以獲得牛頓流體流變特性。",
            "經高溫烘烤與加速老化測試證明其黑度持久不衰退，表面無發霧（Haze）現象。"
          ],
          "applications": [
            "水性汽車面漆",
            "溶劑型高級汽車修補漆",
            "高裝飾性黑色工業烤漆"
          ]
        }
      ],
      "formulation": []
    }
  },
  "maleic": {
    "slug": "maleic",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "px": {
    "slug": "px",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "silane": {
    "slug": "silane",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "wax": {
    "slug": "wax",
    "hasData": true,
    "tabs": {
      "principles": [],
      "catalog": [
        {
          "docId": "MPI-01",
          "filename": "Brochure MPI Industrial PTFE Alternatives EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/2.Brochure MPI 微粉蠟 目錄15 冊/Brochure MPI Industrial PTFE Alternatives EN 2026.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "無氟 PTFE 替代方案手冊",
          "title": "PTFE Replacements / Industrial PTFE Alternatives (Brochure)",
          "titleEn": "Brochure MPI Industrial PTFE Alternatives EN 2026",
          "origin": "Micro Powders Brochure (08/26): PTFE Replacements",
          "desc": "彙編 Micro Powders 全面替代聚四氟乙烯（PTFE）的微粉蠟添加劑產品線，因應全球 PFAS 環保監管並提供同等抗刮耐磨性能。",
          "advantages": [
            "採用天然蠟、合成蠟與奈米氧化鋁/陶瓷複合工程技術，達成 100% 性能、零 PTFE（Zero PTFE）。",
            "Taber 耐磨耗試驗證明 PolyTuf 1229、MPP-611AL、SuperGlide 等磨耗失重（mg）達到或超越傳統 PTFE 改性蠟。",
            "具備全球多國化學品名錄認證與食品接觸法規合規性（FDA 21CFR、EU 10/2011）。"
          ],
          "applications": [
            "工業塗料",
            "罐裝塗料",
            "卷材塗料",
            "印刷油墨",
            "木器漆等無 PFAS 環保配方轉型"
          ]
        },
        {
          "docId": "MPI-02",
          "filename": "Brochure MPI Specialty Wax Additives and Fine Powders EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/2.Brochure MPI 微粉蠟 目錄15 冊/Brochure MPI Specialty Wax Additives and Fine Powders EN 2026.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "特種微粉蠟與助劑總覽",
          "title": "Specialty Wax Additives and Fine Powders (Brochure)",
          "titleEn": "Brochure MPI Specialty Wax Additives and Fine Powders EN 2026",
          "origin": "Micro Powders Technical Brochure (08/26): Specialty Wax Additives and Fine Powders",
          "desc": "綜述 Micro Powders 微粉蠟粉體、水性分散體及乳液產品系列，涵蓋耐磨耐刮、消光、防滑、觸感與手感全方位表面改性功能。",
          "advantages": [
            "完整劃分聚乙烯蠟（PE）、聚丙烯蠟（PP）、天然巴西棕櫚蠟、聚四氟乙烯複合蠟及天然生物基可降解蠟體系。",
            "提供耐刮耐磨、降低摩擦係數（COF）、抗沾黏（Anti-blocking）、消光及柔軟觸感（Soft touch）五大多功能機制。",
            "提供微粉蠟粒徑（平均粒徑與最大粒徑 D99）精確規格與不同塗膜厚度匹配。"
          ],
          "applications": [
            "油漆與塗料",
            "印刷油墨與光油（OPV）",
            "工業木器漆",
            "粉末塗料",
            "皮革與塑膠塗層"
          ]
        }
      ],
      "applications": [
        {
          "docId": "MPI-03",
          "filename": "Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2025",
          "brand": "Micro Powders",
          "shortLabel": "無氟先進複合材料",
          "title": "Advanced Composite Selector Guide PFAS-Free",
          "titleEn": "Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025",
          "origin": "Micro Powders Selector Guide (03/2025): Advanced Composite Selector Guide PFAS-Free",
          "desc": "提供無 PFAS（PFAS-Free）先進複合微粉蠟選型，著重於奈米氧化鋁複合系列在超薄塗膜中的耐刮與耐磨增強。",
          "advantages": [
            "採用莫氏硬度 9 的奈米氧化鋁（300 nm 粒子）牢固錨定於蠟顆粒中，兼具蠟的光滑性與陶瓷的極限抗磨性。",
            "專為超薄塗膜（Ultra-thin film coatings < 5 μm）設計，奈米顆粒均勻分佈於塗層表面不影響光澤與透明度。",
            "推薦 MPP-611AL、MP-28AL、Superslip 6515AL 等牌號，全面取代含氟表面改性劑。"
          ],
          "applications": [
            "罐裝與容器塗料（Can & Container）",
            "卷材塗料（Coil）",
            "薄膜印刷光油",
            "工業精密防護塗層"
          ]
        },
        {
          "docId": "MPI-04",
          "filename": "Application Note MPI How to Disperse Micronized Wax EN 2024.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI How to Disperse Micronized Wax EN 2024.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2024",
          "brand": "Micro Powders",
          "shortLabel": "微粉蠟潤濕分散指南",
          "title": "How to Disperse Micronized Wax",
          "titleEn": "Application Note MPI How to Disperse Micronized Wax EN 2024",
          "origin": "Micro Powders Technical Guide (2024): How to Disperse Micronized Wax",
          "desc": "介紹微粉化蠟在溶劑型、水性及無溶劑體系中的分散工藝要點，包括高剪切分散機葉輪選擇、線速度、加料順序與消泡控制。",
          "advantages": [
            "推薦採用鋸齒形 Cowles 分散盤，控制葉輪線速度在 15~20 m/s 產生足夠剪切渦流。",
            "規範液體加料順序：先加入溶劑與潤濕劑，在攪拌狀態下緩慢均勻投入微粉蠟，最後加入乳液或基料樹脂。",
            "監控研磨分散溫度不可超過蠟的熔點或軟化點，避免高溫導致蠟顆粒熔化再結晶結塊。"
          ],
          "applications": [
            "水性塗料色漿與蠟漿調配",
            "溶劑型烤漆預分散",
            "油墨製造車間攪拌分散工藝"
          ]
        },
        {
          "docId": "MPI-05",
          "filename": "Application Note MPI MicroTouch EN.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI MicroTouch EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "MicroTouch 觸感改性助劑",
          "title": "MicroTouch from Micro Powders",
          "titleEn": "Application Note MPI MicroTouch EN",
          "origin": "Micro Powders Application Note: MicroTouch Soft Touch Additives",
          "desc": "介紹 MicroTouch 高分子聚氨酯微球在塗料中賦予表面獨特觸感（玫瑰花瓣、橡膠質感、絨毛感、卵石手感）之微觀結構與配方技術。",
          "advantages": [
            "以脂肪族聚氨酯交聯微球為基礎，提供 Rose Petal（玫瑰花瓣感）、Rubbery（橡膠彈性质感）、Fuzzy（絨毛感）及 Pebbly（卵石顆粒感）四種手感維度。",
            "具備卓越彈性回彈力，在日常按壓與摩擦下不破損，塗層耐刮傷與耐指甲劃痕性能優異。",
            "兼具優異的消光均勻性，光澤隨入射角變化平緩，不產生白霧發花現象。"
          ],
          "applications": [
            "消費電子產品外殼手感漆",
            "汽車內飾儀表板塗料",
            "化妝品包裝盒手感塗層",
            "特種木器皮革面漆"
          ]
        },
        {
          "docId": "MPI-06",
          "filename": "Application Note MPI SelectorGuide Can Container Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Can Container Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "金屬製罐與容器塗料",
          "title": "Can & Container Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Can Container Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Can & Container Coatings",
          "desc": "專為金屬製罐與容器塗料提供微粉蠟選型矩陣，滿足高速二片罐/三片罐生產線上的極限耐磨、滑爽性、防沾黏與食品接觸法規。",
          "advantages": [
            "提供極低動態與靜態摩擦係數（COF），使金屬罐身在輸送帶及模具沖壓過程中具備極佳滑爽通過性（Mobility）。",
            "塗膜經高溫蒸煮殺菌（Retort resistance）後仍維持優異的耐抗性，無蠟析出起霧或接著力下降。",
            "推薦符合美國 FDA 21CFR 及歐洲 EU 10/2011 的 PTFE 替代牌號（如 Superslip 6515AL、MicroGlide 系列）。"
          ],
          "applications": [
            "飲料罐內外塗料",
            "食品罐蓋密封漆",
            "氣霧罐金屬塗裝",
            "金屬瓶蓋沖壓保護塗層"
          ]
        },
        {
          "docId": "MPI-07",
          "filename": "Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "光固化油墨與塗料",
          "title": "Energy Curable Inks & Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Energy Curable Inks & Coatings",
          "desc": "針對 UV 與電子束（EB）輻射固化油墨與塗料，提供快速固化條件下微粉蠟浮升移位、抗擦傷、耐磨損及消光效果之選型依據。",
          "advantages": [
            "針對 UV 瞬間固化特性優化蠟微粒密度與流變性，確保蠟粉能在毫秒級固化前及時移位至表面形成保護層。",
            "顯著提高 UV 固化漆膜與油墨的耐摩擦（Sutherland rub）、耐刮傷及抗沾黏性，解決熱堆疊黏連難題。",
            "提供不降低 UV 固化速率且透明度高的專用等級（如 Polyfluo、MicroMatte 1011UVW、AquaPoly）。"
          ],
          "applications": [
            "UV 柔版與膠印油墨",
            "UV 紙張罩光油（OPV）",
            "UV 木器與塑膠塗料",
            "電子束（EB）固化塗層"
          ]
        },
        {
          "docId": "MPI-08",
          "filename": "Application Note MPI SelectorGuide Industrial Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Industrial Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "工業防護塗料",
          "title": "Industrial Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Industrial Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Industrial Coatings",
          "desc": "彙編一般工業防腐漆、五金金屬塗料、工程設備及塑膠外殼塗料中改善潤滑性、耐磨性、抗結塊與表面織紋之蠟添加劑推薦。",
          "advantages": [
            "涵蓋聚乙烯、聚丙烯、醯胺蠟及陶瓷改性蠟，針對不同膜厚（10~100 μm）提供對應粒徑規格。",
            "顯著降低金屬工件搬運組裝過程中的擦傷率（Mar resistance），並大幅改善包裝堆疊抗沾黏性能。",
            "提供不同織紋效果（細緻沙面至粗糙砂紋）專用質地添加劑（如 PropylTex、NatureTex）。"
          ],
          "applications": [
            "工程機械金屬烤漆",
            "五金家電外殼塗料",
            "塑膠玩具與電器外殼面漆",
            "工業防護防腐塗料"
          ]
        },
        {
          "docId": "MPI-09",
          "filename": "Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "工業地坪耐磨防滑塗料",
          "title": "Industrial Floor Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Industrial Floor Coatings",
          "desc": "針對環氧樹脂、聚氨酯及聚天門冬氨酸酯工業地坪塗料，提供控制防滑摩擦係數、耐磨耗、抗黑鞋印痕與耐水疏水之選型。",
          "advantages": [
            "提供精確粒徑分佈之聚合物顆粒（如 PropylTex HD、Spherex 200），構建均勻微觀凹凸以達到法定防滑摩擦係數。",
            "大幅改善行走推車輪胎滾動下的耐磨耗與抗擦黑印痕性能（Scuff & Mar resistance）。",
            "不破壞底塗接著力，重塗附著性佳，並顯著增強地坪表面的防潑水與防污易清潔特性。"
          ],
          "applications": [
            "環氧自流平地坪",
            "聚氨酯超耐磨地坪",
            "車庫止滑地坪塗料",
            "商業商場步行防滑面漆"
          ]
        },
        {
          "docId": "MPI-10",
          "filename": "Application Note MPI SelectorGuide Powder Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Powder Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "粉體塗料專用微粉蠟",
          "title": "Powder Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Powder Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Powder Coatings",
          "desc": "介紹粉末塗料專用微粉蠟添加劑，涵蓋熔融擠出脫氣（Degassing）、邊緣覆蓋（Edge Coverage）、消光及不同立體織紋效果之選型矩陣。",
          "advantages": [
            "充當高效脫氣劑，促進厚膜烘烤固化時揮發氣體順暢排出，徹底消除針孔與氣泡缺陷。",
            "改善粉末塗料在銳角邊緣部位的流變包裹性（Edge Coverage），防止邊緣薄漆生鏽腐蝕。",
            "提供由平滑消光至垂紋、沙紋、皺紋等多樣化外觀質感的專用蠟粉（如 MicroTex 950、PropylTex）。"
          ],
          "applications": [
            "建築鋁門窗粉末塗料",
            "金屬機箱機櫃粉末噴塗",
            "戶外景觀五金粉末烤漆",
            "家電粉末塗裝"
          ]
        },
        {
          "docId": "MPI-11",
          "filename": "Application Note MPI SelectorGuide Printing Inks EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide Printing Inks EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "印刷油墨與罩光油",
          "title": "Printing Inks & OPVs Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide Printing Inks EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Printing Inks & OPVs",
          "desc": "綜述在柔印、凹印、膠印及光油（OPV）中提升耐磨擦（Rub resistance）、滑爽流平、防刮痕及抗高溫熱封黏連之微粉蠟解決方案。",
          "advantages": [
            "針對紙張、塑膠薄膜及金屬箔等不同印刷基材提供最優匹配粒徑（NPIRI 研磨細度 < 2.0）。",
            "經 Sutherland Rub 摩擦儀測試，添加 0.5%~2.0% 即可顯著降低油墨脫墨掉粉與表面刮痕。",
            "兼顧優良的光學光澤度與透明度，不引發印品混濁失真，耐後加工高溫熱封夾燙。"
          ],
          "applications": [
            "柔版印刷油墨",
            "凹版塑膠薄膜油墨",
            "平版膠印油墨",
            "水性與 UV 罩光清漆（OPV）"
          ]
        },
        {
          "docId": "MPI-12",
          "filename": "Application Note MPI SelectorGuide WoodCoatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI SelectorGuide WoodCoatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "木器與家具塗料",
          "title": "Wood Coatings Selector Guide",
          "titleEn": "Application Note MPI SelectorGuide WoodCoatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Wood Coatings",
          "desc": "介紹木器漆專用微粉蠟在溶劑型硝基/聚氨酯木器漆及水性木器塗料中改善耐刮擦、手感柔滑度、消光清晰度與防潑水性能的應用矩陣。",
          "advantages": [
            "與消光二氧化矽協同使用，消除傳統木器漆消光粉下沉死結現象，維持優異的罐內防沉性與重分散性。",
            "顯著提升木器表面的手感絲滑度（Soft silk feel）與防指甲劃痕、抗硬幣刮傷（Mar resistance）能力。",
            "賦予木器塗層表面優異的疏水防荷葉效應，阻止茶水、咖啡及酒精液體滲入木材織紋造成斑漬。"
          ],
          "applications": [
            "高級實木家具塗料",
            "木質地板耐磨面漆",
            "櫥櫃修飾漆",
            "水性戶外木結構防腐木油"
          ]
        },
        {
          "docId": "MPI-13",
          "filename": "Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "2026",
          "brand": "Micro Powders",
          "shortLabel": "建築裝飾塗料",
          "title": "Architectural Coatings Selector Guide",
          "titleEn": "Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026",
          "origin": "Micro Powders Selector Guide (R-03/26): Architectural Coatings",
          "desc": "針對室內外建築塗料，提供微粉蠟在低 VOC 乳膠漆中精確控制光澤、增強耐擦洗抗拋光（Burnish resistance）、抗沾污與耐水性的選型。",
          "advantages": [
            "大幅提高平光與蛋殼光內牆乳膠漆的耐擦洗次數（Scrub cycles）與抗摩擦拋光光澤上升現象（Burnish resistance）。",
            "提升外牆建築塗料的抗髒污附著力（Dirt Pick-up Resistance, DPUR），雨水沖刷自清潔效果卓越。",
            "水性化乳液與改性微粉蠟具備優異罐內儲存穩定性，不分層、不破乳，不影響調色顏料展色力。"
          ],
          "applications": [
            "內牆高耐擦洗乳膠漆",
            "外牆耐候自清潔塗料",
            "建築裝飾灰泥",
            "水性建築木器底面漆"
          ]
        },
        {
          "docId": "MPI-14",
          "filename": "Formulation Guide MPI MicroTouch EN.pdf",
          "pdfPath": "techdatadb/5. MPI/3.Application Note MPI  wax/Formulation Guide MPI MicroTouch EN.pdf",
          "docType": "3. Application Note 應用技術手冊",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "MicroTouch 觸感漆配方",
          "title": "MicroTouch Soft Touch Additives Formulation Guide",
          "titleEn": "Formulation Guide MPI MicroTouch EN",
          "origin": "Micro Powders Formulation Guide (10/2018): MicroTouch Soft Touch Additives",
          "desc": "提供 MicroTouch 在不同樹脂體系中的起始配方、添加比例（典型 5%~15%）及在 20°、60°、85° 光澤度衰減數據對照。",
          "advantages": [
            "詳細列出在水性與溶劑型雙組份聚氨酯中添加 11.5% MicroTouch 時，60° 光澤由 72.9 大幅降至 4.3 左右的顯著消光曲線。",
            "提供觸感與手感在不同樹脂塗膜厚度下的調校配方，確保手感與塗層附著力取得平衡。",
            "明確指南分散製程無須劇烈研磨，僅需中等剪切分散即可均勻分佈於塗料體系中。"
          ],
          "applications": [
            "手感塗料起始配方設計",
            "高級電子產品外殼噴塗",
            "車載飾件霧面軟觸塗裝"
          ]
        }
      ],
      "single": [
        {
          "docId": "MPI-15",
          "filename": "TI MPI PolyGlide 1226XF Performance Study EN 202407.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI Polyglide 1226 XF/TI MPI PolyGlide 1226XF Performance Study EN 202407.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202407",
          "brand": "Micro Powders",
          "shortLabel": "PolyGlide 1226XF 耐磨性能研究",
          "title": "PolyGlide 1226XF Product Performance Study",
          "titleEn": "TI MPI PolyGlide 1226XF Performance Study EN 202407",
          "model": "PolyGlide 1226XF",
          "productGroup": "Poly 耐磨系列",
          "origin": "Micro Powders Product Performance Study (07/2024): PolyGlide 1226XF",
          "desc": "評估 PolyGlide 1226XF 聚烯烴/複合微粉蠟在硬質聚氨酯塗層中大幅降低摩擦係數（COF）與提升滑爽耐磨性能的實驗報告。",
          "advantages": [
            "針對硬質聚氨酯水性塗層，添加 2% PolyGlide 1226XF 可使 ASTM D1894 靜態與動態摩擦係數（COF）大幅降低。",
            "性能表現全面匹敵並優於含 PTFE 的傳統對標品 Polyfluo 150，為 100% 無氟的滑爽增強解決方案。",
            "顆粒均勻超微細化，不損害塗層原有高透明度與光澤，表面滑爽手感持久穩定。"
          ],
          "applications": [
            "工業塗料表面滑爽耐磨改性",
            "卷材薄膜防護",
            "無 PTFE 水性木器與塑膠面漆"
          ]
        },
        {
          "docId": "MPI-16",
          "filename": "TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI PropylMatte 31 HD/TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "PropylMatte 31HD 消光效率研究",
          "title": "A Comparison of Matting Efficiency and COF Using AquaMatte® 22, AquaMatte 26HD, AquaMatte 31 and PropylMatte 31HD",
          "titleEn": "TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN",
          "model": "PropylMatte 31 HD",
          "productGroup": "Matte 消光系列",
          "origin": "Micro Powders Application Study 1501 (04/15): AquaMatte® 22, 26HD, 31 and PropylMatte 31HD",
          "desc": "對比氧化聚乙烯蠟（AquaMatte 系列）與改性聚丙烯蠟（PropylMatte 31HD）在水性聚氨酯體系中的消光效率與摩擦係數（COF）。",
          "advantages": [
            "經重力密度改性（密度調諧至 1.07 g/cc），徹底杜絕蠟微粒在水性及 UV 體系中上浮漂析問題。",
            "AquaMatte 22 與 26HD 提供極低摩擦係數（最高滑爽度，靜態 COF 低至 0.032~0.037）。",
            "PropylMatte 31HD 提供優異消光效率的同時維持較高摩擦阻力（適合防滑啞光要求）。"
          ],
          "applications": [
            "水性木器消光面漆",
            "水性工業金屬漆",
            "皮革防滑消光塗布",
            "水性 UV 罩光漆"
          ]
        },
        {
          "docId": "MPI-17",
          "filename": "TI MPI MicroKlear KL-418AL Performance Study EN.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MicroKlear 418 AL/TI MPI MicroKlear KL-418AL Performance Study EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "MicroKlear 418AL 產品性能研究",
          "title": "New Product Performance Study – MicroKlear 418AL",
          "titleEn": "TI MPI MicroKlear KL-418AL Performance Study EN",
          "model": "MicroKlear 418AL",
          "productGroup": "特種微粉系列",
          "origin": "Micro Powders Application Study: MicroKlear 418AL",
          "desc": "評估奈米氧化鋁增強巴西棕櫚蠟複合微粉 MicroKlear 418AL 在水性聚氨酯塗層中提升鉛筆硬度與耐刮傷性的對比研究。",
          "advantages": [
            "以天然巴西棕櫚蠟（Carnauba wax）為基質，複合 300 nm 莫氏硬度 9 的奈米氧化鋁顆粒。",
            "保持天然棕櫚蠟高光澤、高透明度與極佳手感的同時，將塗層抗鉛筆劃痕硬度（Pencil Scratch）提升數個等級。",
            "密度優化為 1.04 g/cc，有效防止純無機奈米氧化鋁在儲存過程中易發生的重質沉底硬結結塊。"
          ],
          "applications": [
            "水性高級木器高光清漆",
            "汽車裝飾修復面漆",
            "薄膜防護透明塗層",
            "精密儀器外殼塗料"
          ]
        },
        {
          "docId": "MPI-18",
          "filename": "TI MPI MicroMatte 1415-EZ Performance Study EN 2024.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_Micromatte 1415 EZ/TI MPI MicroMatte 1415-EZ Performance Study EN 2024.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "2024",
          "brand": "Micro Powders",
          "shortLabel": "MicroMatte 1415-EZ 產品性能研究",
          "title": "MicroMatte 1415-EZ Product Performance Study",
          "titleEn": "TI MPI MicroMatte 1415-EZ Performance Study EN 2024",
          "model": "MicroMatte 1415EZ",
          "productGroup": "Matte 消光系列",
          "origin": "Micro Powders Product Performance Study (04/2024): MicroMatte 1415-EZ",
          "desc": "評估改性合成微粉蠟 MicroMatte 1415-EZ 在建築塗料中提升抗耐磨拋光（Burnish）、抗髒污附著（DPUR）與易分散性（EZ）之測試。",
          "advantages": [
            "具備卓越抗拋光性能，經 400 次耐刷洗測試後，60° 光澤上升變化量（Delta Gloss）僅 3.29 個單位。",
            "抗髒污吸附性能（Dirt Pick Up Resistance, DPUR）優異，在經受污漬染色與清洗後色差 Delta E 僅 2.8。",
            "特殊表面易分散（EZ）處理，無需高剪切研磨即可迅速在水性乳膠漆中均勻潤濕分散。"
          ],
          "applications": [
            "內牆高階平光與蛋殼光乳膠漆",
            "外牆耐候抗污塗料",
            "高耐磨建築裝飾面漆"
          ]
        },
        {
          "docId": "MPI-19",
          "filename": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MP 22 VF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202208",
          "brand": "Micro Powders",
          "shortLabel": "MP-22 VF 油墨耐磨擦研究",
          "title": "MP-22 VF Printing Ink Rub Resistance Study (Study 1402)",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MP 22 VF",
          "productGroup": "MP-22 系列",
          "origin": "Micro Powders Application Study: 1402 (02/15 Rev 1 / 2022/08)",
          "desc": "評估超微細合成蠟 MP-22 VF 在水性印刷油墨中提升耐摩擦（Sutherland Rub Resistance）性能的實驗研究。",
          "advantages": [
            "研究評估 MP-22 合成微粉蠟（平均粒徑 8~10 μm，熔點 102~106°C）在水性油墨配方中的耐擦抗磨性。",
            "經 Sutherland 摩擦測試機百次摩擦驗證，添加 MP-22 顯著消除油墨層剝落擦掉與背印蹭髒缺陷。",
            "相比普通聚乙烯蠟，提供更加滑爽的表面手感，並有效維持印品的色澤純度與印刷網點清晰度。"
          ],
          "applications": [
            "水性包裝印刷油墨",
            "凹版與柔版薄膜印刷",
            "紙張耐磨印刷塗層"
          ]
        },
        {
          "docId": "MPI-20",
          "filename": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MP-22XF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202208",
          "brand": "Micro Powders",
          "shortLabel": "MP-22XF 油墨耐磨擦研究",
          "title": "MP-22XF Printing Ink Rub Resistance Study (Study 1402)",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MP-22XF",
          "productGroup": "MP-22 系列",
          "origin": "Micro Powders Application Study: 1402 (02/15 Rev 1 / 2022/08)",
          "desc": "評估特細微粉級 MP-22XF 合成蠟在薄膜印刷油墨中改善耐刮抗磨性與超微細分散穩定性的性能表現。",
          "advantages": [
            "針對超細粒徑規格（XF 級，最大粒徑更小），提供極高的比表面積與迅速的印刷膜面均勻分佈。",
            "在高速輪轉印刷條件下提供持久耐摩擦性，顯著減少印品裁切、堆疊與物流運輸過程中的刮傷。",
            "測試證明其性能差異可有效推廣至其他蠟改性表面塗層體系中，適應薄膜高速印刷要求。"
          ],
          "applications": [
            "高速柔版印刷油墨",
            "凹版包裝薄膜印刷",
            "標籤印刷光油"
          ]
        },
        {
          "docId": "MPI-21",
          "filename": "TI MPI MPP-611AL Performance Study EN 202407.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-611AL/TI MPI MPP-611AL Performance Study EN 202407.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202407",
          "brand": "Micro Powders",
          "shortLabel": "MPP-611AL 高溫耐磨研究",
          "title": "MPP-611AL Product Performance Study",
          "titleEn": "TI MPI MPP-611AL Performance Study EN 202407",
          "model": "MPP-611AL",
          "productGroup": "MPP 系列",
          "origin": "Micro Powders Product Performance Study (07/2024): MPP-611AL",
          "desc": "介紹高密度聚乙烯結合 300 nm 奈米氧化鋁複合微粉 MPP-611AL 在水性聚氨酯塗層中突破性提升抗刮耐磨（鉛筆硬度）之數據。",
          "advantages": [
            "採用高密度聚乙烯（HDPE）複合莫氏硬度 9 的 300 nm 奈米氧化鋁，為安全、易分散的非奈米級粉末載體。",
            "泰伯線性磨耗（Taber linear abrasion）與鉛筆刮擦硬度測試顯示，抗刮性能相較純聚乙烯蠟產生飛躍性提升。",
            "密度調配為 0.99 g/cc，徹底消除高比重純氧化鋁奈米粉在塗料槽中快速沉底板結的工程頑疾。"
          ],
          "applications": [
            "工業耐磨防腐面漆",
            "水性木器耐刮清漆",
            "金屬保護烤漆",
            "高耐久塑膠外殼塗層"
          ]
        },
        {
          "docId": "MPI-22",
          "filename": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-620F/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202208",
          "brand": "Micro Powders",
          "shortLabel": "MPP-620F 油墨耐磨擦研究",
          "title": "MPP-620F Printing Ink Rub Resistance Study (Study 1402)",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-620F",
          "productGroup": "MPP 系列",
          "origin": "Micro Powders Application Study: 1402 (02/15 Rev 1 / 2022/08)",
          "desc": "評估中等分子量聚乙烯微粉蠟 MPP-620F 在水性印刷油墨中抵抗磨損與提升滑爽耐磨的對比測試報告。",
          "advantages": [
            "測試中分子量聚乙烯蠟 MPP-620F（平均粒徑 7~9 μm，最大粒徑 31 μm）在水性油墨配方中的抗磨表現。",
            "於 Sutherland 磨擦儀測試中展現優異抗脫墨性，抗磨損改善效果顯著優於未添加蠟的對照基準組。",
            "聚乙烯蠟聚合物鏈結構提供優異韌性與低表面能，兼具防沾黏與優良的印刷膜光澤保持性。"
          ],
          "applications": [
            "水性紙箱柔印油墨",
            "膠印油墨",
            "包裝瓦楞紙印刷保護",
            "水性上光油"
          ]
        },
        {
          "docId": "MPI-23",
          "filename": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-620XF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202208",
          "brand": "Micro Powders",
          "shortLabel": "MPP-620XF 油墨耐磨擦研究",
          "title": "MPP-620XF Printing Ink Rub Resistance Study (Study 1402)",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-620XF",
          "productGroup": "MPP 系列",
          "origin": "Micro Powders Application Study: 1402 (02/15 Rev 1 / 2022/08)",
          "desc": "評估極細中分子量聚乙烯微粉蠟 MPP-620XF 在薄膜印刷油墨中之高研磨細度、抗刮擦與分散表現。",
          "advantages": [
            "採用更嚴苛的超微細分級工藝（XF 規格），提供極低刮板細度值（Hegman 細度高），防止印刷版輥磨損。",
            "在 Sutherland 耐磨擦試驗中，極細顆粒能更緊密平整鋪展於印膜表層，形成均勻強韌的耐磨防護膜。",
            "保證優異流平流動性，在薄膜高速印刷中不起霧、不飛墨，維持印品鮮豔對比度。"
          ],
          "applications": [
            "凹版塑膠薄膜印刷油墨",
            "精細網點柔印油墨",
            "高檔包裝標籤光油"
          ]
        },
        {
          "docId": "MPI-24",
          "filename": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_MPP-635VF/TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202208",
          "brand": "Micro Powders",
          "shortLabel": "MPP-635VF 油墨耐磨擦研究",
          "title": "MPP-635VF Printing Ink Rub Resistance Study (Study 1402)",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-635VF",
          "productGroup": "MPP 系列",
          "origin": "Micro Powders Application Study: 1402 (02/15 Rev 1 / 2022/08)",
          "desc": "評估高分子量高硬度聚乙烯微粉蠟 MPP-635VF 在水性油墨中對抗重度摩擦磨損的卓越耐擦拭性能。",
          "advantages": [
            "採用更高分子量聚乙烯原料（平均粒徑 8~10 μm），賦予蠟微粒極高的耐磨韌性與熔融支撐強度。",
            "在 Sutherland 摩擦試驗中展現四款受測產品中最頂級的耐磨抗脫墨壽命，大幅超越低分子量聚乙烯。",
            "提升油墨在高溫堆疊儲存時的抗黏連（Anti-block）表現，防止紙張包裝受壓黏結破壞。"
          ],
          "applications": [
            "重包裝紙袋印刷油墨",
            "金屬罐外裝印刷",
            "高耐磨出版印刷",
            "戶外海報油墨"
          ]
        },
        {
          "docId": "MPI-25",
          "filename": "TI MPI PolyTuf 1229 Performance Study EN.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_PolyTuf 1229/TI MPI PolyTuf 1229 Performance Study EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "PolyTuf 1229 耐磨性能研究",
          "title": "PolyTuf™ 1229 Product Performance Study",
          "titleEn": "TI MPI PolyTuf 1229 Performance Study EN",
          "model": "PolyTuf 1229",
          "productGroup": "Poly 耐磨系列",
          "origin": "Micro Powders Product Performance Study (03/2023): PolyTuf™ 1229",
          "desc": "評估雙重高性能陶瓷改性低密度聚乙烯微粉蠟 PolyTuf 1229 在硬質聚氨酯塗層中取代 PTFE 之耐磨性能報告。",
          "advantages": [
            "採用低密度聚乙烯（LDPE）結合兩種不同高性能陶瓷複合物，完全不含 PTFE 但具極限耐磨性。",
            "ASTM D4060 泰伯磨耗測試（2500 次循環）顯示，失重量僅 22.3 mg，耐磨表現超越含氟產品 Polyfluo 900（提升 10.8%）。",
            "ASTM D3363 鉛筆硬度測試顯示顯著增強抗劃痕強度，為金屬及木器漆提供領先的環保耐磨升級方案。"
          ],
          "applications": [
            "硬質聚氨酯塗層",
            "工業金屬防護烤漆",
            "耐磨木器漆",
            "無 PTFE 環保高性能塗裝"
          ]
        },
        {
          "docId": "MPI-26",
          "filename": "TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_PropylMatte 31/TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "AquaMatte 水性消光效率研究",
          "title": "AquaMatte and PropylMatte Matting Efficiency Study (Study 1501)",
          "titleEn": "TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN",
          "model": "AquaMatte",
          "productGroup": "Matte 消光系列",
          "origin": "Micro Powders Application Study: 1501 (04/15)",
          "desc": "深入評估氧化聚乙烯微粉蠟（AquaMatte 22、26HD、31）與聚丙烯微粉蠟（PropylMatte 31HD）在水性體系中消光與流變特性。",
          "advantages": [
            "AquaMatte 系列在水性體系中展現優異消光效率，能在降低光澤的同時保持漆膜極高通透度與細膩質感。",
            "26HD 與 31HD 經重力改性（密度 1.07 g/cc），徹底解決普通蠟粉密度偏低（0.89~0.96 g/cc）造成的長期上浮聚集問題。",
            "提供不同滑爽係數選擇：AquaMatte 22 賦予最極致滑爽手感（COF 最低），PropylMatte 31HD 則兼具消光與適度防滑阻尼。"
          ],
          "applications": [
            "水性木器家具消光漆",
            "水性工業金屬漆",
            "皮革霧面面漆",
            "紙張消光保護塗料"
          ]
        },
        {
          "docId": "MPI-27",
          "filename": "TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI MPI_Superslip 6515 AL/TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202412",
          "brand": "Micro Powders",
          "shortLabel": "Superslip 6515AL 耐磨滑爽研究",
          "title": "Superslip 6515AL & Superslip 6515AL-EZ Product Performance Study",
          "titleEn": "TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412",
          "model": "Superslip 6515AL",
          "productGroup": "特種微粉系列",
          "origin": "Micro Powders Product Performance Study (12/2024): Superslip 6515AL & Superslip 6515AL-EZ",
          "desc": "評估高密度聚乙烯、醯胺蠟與奈米氧化鋁三元複合微粉蠟 Superslip 6515AL 及易分散版 6515AL-EZ 在薄膜塗層中取代 PTFE 的表現。",
          "advantages": [
            "三元複合配方結合奈米氧化鋁的高硬度與 HDPE/醯胺蠟的優異滑爽度，完全不含 PTFE。",
            "耐磨耗性能較傳統含氟 Polyfluo 150 提升 10%，同時維持極低且相當的摩擦係數（COF）。",
            "6515AL-EZ 經專利表面處理，在水性體系中極易潤濕分散，徹底解決常規複合蠟在水相中分散困難的痛點。"
          ],
          "applications": [
            "製罐塗料（Can Coatings）",
            "卷材塗料（Coil Coatings）",
            "超薄膜防護塗層",
            "食品包裝金屬塗裝"
          ]
        },
        {
          "docId": "MPI-28",
          "filename": "TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI_MPI Fluo 300XF/TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Micro Powders",
          "shortLabel": "Polyfluo 與 Fluo 300 耐磨對比研究",
          "title": "A Comparison of Abrasion Resistance Using Polyfluo® 190 and Fluo 300",
          "titleEn": "TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN",
          "model": "Fluo 300XF",
          "productGroup": "Poly 耐磨系列",
          "origin": "Micro Powders Application Study: 1502 (04/15 Rev 2)",
          "desc": "評估 PTFE 改性聚乙烯複合蠟 Polyfluo 190 與 100% 純 PTFE 微粉 Fluo 300 在水性聚氨酯分散液中的耐磨損性及經濟效益對比。",
          "advantages": [
            "水性聚氨酯添加 0.5%、1.0% 及 1.5% 劑量測試顯示，Polyfluo 190 耐磨耗性能略優於 100% 純 PTFE 的 Fluo 300。",
            "實驗確立 Polyfluo 190 的最佳添加劑量約為 1.0%，能以大幅低於純 PTFE 產品的原料成本獲得更優耐磨性。",
            "相比高密度純 PTFE（2.2 g/cc），Polyfluo 190（0.99 g/cc）在液體塗料中沉底風險顯著降低。"
          ],
          "applications": [
            "工業木器塗料",
            "金屬防護塗層",
            "塑料耐磨塗裝",
            "印刷油墨耐刮擦改性"
          ]
        },
        {
          "docId": "MPI-29",
          "filename": "TI MPI MicroTex 950 Performance Study EN 202504.pdf",
          "pdfPath": "techdatadb/5. MPI/4.MPI  wax 單一產品/TI_MPI Microtex 950/TI MPI MicroTex 950 Performance Study EN 202504.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "202504",
          "brand": "Micro Powders",
          "shortLabel": "MicroTex 950 織紋防滑研究",
          "title": "MicroTex® 950 Product Performance Study",
          "titleEn": "TI MPI MicroTex 950 Performance Study EN 202504",
          "model": "MicroTex 950",
          "productGroup": "特種微粉系列",
          "origin": "Micro Powders Product Performance Study (04/2025): MicroTex® 950",
          "desc": "評估無 PFAS 改性聚烯烴粉末塗料織紋添加劑 MicroTex 950 在不同樹脂體系中取代 PTFE 織紋劑（Fluo 750TX）之性能研究。",
          "advantages": [
            "為 100% 不含 PFAS 的改性聚烯烴微粉，密度 1.22 g/cc，專為取代含氟織紋劑 Fluo 750TX 設計。",
            "建議添加量為配方總重的 4.0%~6.0%，可在粉末塗層中構建均勻細膩的微觀織紋（Fine Texture）並顯著消光。",
            "通過衝擊試驗（ASTM D2794）、錐軸彎曲（ASTM D522）及百格附著力（ASTM D3359）測試，塗膜機械韌性優異。"
          ],
          "applications": [
            "粉末塗料（聚酯/TGIC",
            "聚酯/HAA",
            "環氧/聚酯混合體系）",
            "金屬機箱沙面織紋漆",
            "戶外五金防滑織紋塗裝"
          ]
        }
      ],
      "formulation": []
    }
  },
  "adhesion": {
    "slug": "adhesion",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "polyester": {
    "slug": "polyester",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "chain": {
    "slug": "chain",
    "hasData": true,
    "tabs": {
      "principles": [],
      "catalog": [
        {
          "docId": "UNI-01",
          "filename": "Brochure DK Unilink Plus Coatings Line EN 202512.pdf",
          "pdfPath": "techdatadb/3.unilink/2.Unilink Clearlink擴鏈劑目錄/Brochure DK Unilink Plus Coatings Line EN 202512.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "202512",
          "brand": "Dorf Ketal",
          "shortLabel": "擴鏈劑塗料系列產品",
          "title": "Clearlink® & Unilink® Chain Extenders Product Guide",
          "titleEn": "Brochure DK Unilink Plus Coatings Line",
          "origin": "Dorf Ketal Product Guide (2025/12): Clearlink® & Unilink® Chain Extenders",
          "desc": "彙編 Clearlink 脂肪族與 Unilink 芳香族受阻二級二胺擴鏈劑產品線，說明其在聚氨酯/聚脲噴塗、彈性體及泡棉中之反應動力學控制特性。",
          "advantages": [
            "受阻二級二胺結構（Secondary Diamine）顯著延緩與異氰酸酯（-NCO）的反應速度，提供充裕的操作流平時間。",
            "Clearlink 1000 專注於脂肪族高耐候不黃變體系；Unilink 4200 適用於芳香族高強度彈性體與泡棉。",
            "液態低黏度易於計量泵送，且 Ames 試驗為陰性（低毒性），改善現場施工勞安環境。"
          ],
          "applications": [
            "聚脲防腐噴塗塗層",
            "澆注聚氨酯彈性體",
            "高回彈軟質泡棉",
            "車輛耐磨防撞襯裡"
          ]
        }
      ],
      "applications": [],
      "single": [
        {
          "docId": "UNI-02",
          "filename": "TI DK Clearlink 1000 for Polyurea Coatings EN 201707.pdf",
          "pdfPath": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Clearlink 1000/TI DK Clearlink 1000 for Polyurea Coatings EN 201707.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "201707",
          "brand": "Dorf Ketal",
          "shortLabel": "Clearlink 1000 聚脲塗層擴鏈劑",
          "title": "CLEARLINK® 1000 Aliphatic Amine Chain Extender for Polyurea Coatings",
          "titleEn": "TI DK Clearlink 1000 for Polyurea Coatings",
          "model": "Clearlink 1000",
          "productGroup": "Clearlink 1000",
          "origin": "Dorf Ketal Application Data Sheet: SC0031 09/11 (Rev 2017/07)",
          "desc": "介紹 Clearlink 1000 脂肪族二級二胺擴鏈劑在聚脲噴塗塗料中延長膠凝時間、提供顏色穩定性與耐候性的具體測試配方與力學數據。",
          "advantages": [
            "配合異佛爾酮二異氰酸酯（IPDI）體系，隨添加量自 10% 增至 40%，膠凝時間自 < 1 秒精確延長至 11 秒，不沾手時間延長至 20 秒。",
            "脂肪族分子結構具備極佳的光穩定性與耐候性，戶外日曬紫外線下不變色不黃變。",
            "塗層展現優異抗張強度（最高達 2005 psi）、斷裂伸長率（480%~545%）與抗撕裂性能。"
          ],
          "applications": [
            "戶外耐候聚脲噴塗",
            "淺色/透明裝飾性防腐塗層",
            "景觀防水與耐磨面漆"
          ]
        },
        {
          "docId": "UNI-03",
          "filename": "TI DK Unilink 1030 Catalyst for Cast Elastomers EN.pdf",
          "pdfPath": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 1030/TI DK Unilink 1030 Catalyst for Cast Elastomers EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "Unilink 1030 澆注彈性體催化劑",
          "title": "UNILINK® 1030 Polyurethane Catalyst for Cast Elastomers",
          "titleEn": "TI DK Unilink 1030 Catalyst for Cast Elastomers",
          "model": "Unilink 1030",
          "productGroup": "Unilink 1030",
          "origin": "Dorf Ketal Application Data Sheet: SC0081 02/13",
          "desc": "介紹 Unilink 1030 專利鋯螯合物聚氨酯催化劑在聚酯澆注彈性體中取代汞催化劑之延遲快速固化（Snap Cure）特性與性能對照。",
          "advantages": [
            "為溶解於反應性二醇溶劑中的專利鋯螯合物（含鋯量 11.1 wt%），專為取代毒性汞（Mercury）催化劑而設計。",
            "提供極為類似汞催化劑的延遲快速固化特性（Delayed 'Snap Cure'），在模具充填階段維持低黏度流動，一旦凝膠則急遽硬化以利快速脫模。",
            "反應性二醇溶劑完全鍵入聚氨酯骨架無殘留，選擇性催化凝膠反應（水/發泡反應性極低），色澤極淺適合淺色製品。"
          ],
          "applications": [
            "聚酯多元醇澆注型聚氨酯彈性體（Cast Elastomers）",
            "無汞環保彈性體製造",
            "顏色關鍵型聚氨酯模塑製品"
          ]
        },
        {
          "docId": "UNI-04",
          "filename": "TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams EN.pdf",
          "pdfPath": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 4200/TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "Unilink 4200 軟質泡棉擴鏈劑",
          "title": "UNILINK® 4200 Aromatic Diamine Chain Extender for Flexible Polyurethane Foams",
          "titleEn": "TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams",
          "model": "Unilink 4200",
          "productGroup": "Unilink 4200",
          "origin": "Dorf Ketal Application Data Sheet: SC0027 09/11",
          "desc": "探討 Unilink 4200 芳香族受阻二胺擴鏈劑在塊狀軟泡與高回彈（HR）冷模塑泡棉中降低密度、提升承載與撕裂強度的實驗數據。",
          "advantages": [
            "在 TDI 軟質塊狀高回彈泡棉中，添加 1~5 php Unilink 4200 可將泡棉密度由 43 kg/m3 降至 35 kg/m3，同時抗張強度自 172 升至 200 kPa。",
            "撕裂強度大幅躍升（由 367 N/m 提升至 507 N/m），25% 壓陷硬度（IFD）由 172 提升至 241 kPa。",
            "使泡棉泡孔更微細均勻且微孔沿發泡方向伸長率降低，顯著提升壓縮強度與尺寸穩定性，並軟化冷模塑泡棉手感。"
          ],
          "applications": [
            "軟質塊狀泡棉（Slabstock Foam）",
            "冷模塑高回彈泡棉（Cold Molded HR Foam）",
            "汽車座椅與家具泡棉"
          ]
        },
        {
          "docId": "UNI-05",
          "filename": "TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings EN.pdf",
          "pdfPath": "techdatadb/3.unilink/4. Unilink Clearlink擴鏈劑單一產品應用技術資料/TI Unilink 4200/TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings EN.pdf",
          "docType": "4. TI 單一產品技術資料",
          "lang": "EN (英文)",
          "version": "原廠發行版",
          "brand": "Dorf Ketal",
          "shortLabel": "Unilink 4200 彈性體塗層擴鏈劑",
          "title": "UNILINK® 4200 Aromatic Diamine Chain Extender for Elastomeric Coatings",
          "titleEn": "TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings",
          "model": "Unilink 4200",
          "productGroup": "Unilink 4200",
          "origin": "Dorf Ketal Application Data Sheet: SC0028 10/11",
          "desc": "介紹 Unilink 4200 在聚氨酯與聚脲彈性體塗層中延緩凝膠速度、改善流平與層間附著力及提升動態力學性能的表現。",
          "advantages": [
            "受阻二級芳香族二胺結構具備較低反應活性，在雙組份聚氨酯/聚脲噴塗中提供優異的施工活化期與平整流平性。",
            "與多種多元醇及異氰酸酯相容性良好，配方師可藉由引入高官能度多元醇自由調節交聯密度。",
            "液態常溫流動易於泵送，對微量濕氣相對不敏感且 Ames 測試為陰性，固化塗層兼具高硬度、抗衝擊與耐磨耗。"
          ],
          "applications": [
            "聚氨酯/聚脲彈性體保護塗料",
            "工業耐磨防腐地坪",
            "卡車貨斗防撞襯裡（Bed Liners）",
            "管道外防腐塗層"
          ]
        }
      ],
      "formulation": []
    }
  },
  "matting": {
    "slug": "matting",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  },
  "powder": {
    "slug": "powder",
    "hasData": false,
    "tabs": {
      "principles": [],
      "catalog": [],
      "applications": [],
      "single": [],
      "formulation": []
    }
  }
};

// 技術專區狀態管理
const TechState = {
    activeCategory: 'tyzor',
    activeSubTab: 'principles', // 'principles', 'catalog', 'applications', 'single', 'formulation'
    activeDocIndices: {
        'tyzor': { 'principles': 0, 'catalog': 0, 'applications': 0, 'single': 0, 'formulation': 0 },
        'carbon-black': { 'principles': 0, 'catalog': 0, 'applications': 0, 'single': 0, 'formulation': 0 },
        'wax': { 'principles': 0, 'catalog': 0, 'applications': 0, 'single': 0, 'formulation': 0 },
        'chain': { 'principles': 0, 'catalog': 0, 'applications': 0, 'single': 0, 'formulation': 0 }
    }
};

/**
 * 智慧取得特定產品線最佳的預設子分頁 (優先維持當前或選擇有文件的分頁，杜絕空白頁面)
 */
function getBestSubTabForCategory(slug) {
    const catData = TECH_DATABASE[slug];
    if (!catData || !catData.tabs) return 'principles';

    // 若當前選取的 subTab 在目標類別中有文件，維持當前選取
    if (TechState.activeSubTab && catData.tabs[TechState.activeSubTab] && catData.tabs[TechState.activeSubTab].length > 0) {
        return TechState.activeSubTab;
    }

    // 依自然順序 (1.原理 -> 2.目錄 -> 3.應用技術 -> 4.單一產品技術 -> 5.配方) 搜尋首個有資料的維度分頁
    const candidates = ['principles', 'catalog', 'applications', 'single', 'formulation'];
    for (const tabKey of candidates) {
        if (catData.tabs[tabKey] && catData.tabs[tabKey].length > 0) {
            return tabKey;
        }
    }
    return 'principles';
}

/**
 * 安全解析靜態資源 URL (支援 baseHref)
 */
function resolveAssetUrl(relPath) {
    if (!relPath) return '';
    if (relPath.startsWith('http://') || relPath.startsWith('https://') || relPath.startsWith('data:')) {
        return relPath;
    }
    const baseHref = window.APP_BASE_HREF || '/';
    const cleanPath = relPath.replace(/^\.?\//, '');
    return (baseHref + cleanPath).replace(/\/+/g, '/');
}

/**
 * 安全編碼文件 URL (保留斜線但轉義空格與中文)
 */
function getEncodedPdfUrl(relPath) {
    if (!relPath) return '';
    const cleanPath = relPath.replace(/^\.?\//, '');
    const segments = cleanPath.split('/');
    const encodedSegments = segments.map(seg => encodeURIComponent(seg));
    const finalPath = encodedSegments.join('/');
    return resolveAssetUrl(finalPath) + '#toolbar=0&navpanes=0';
}

/**
 * 切換技術專區五大維度子分頁
 */
function switchTechSubTab(subTabKey) {
    TechState.activeSubTab = subTabKey;
    const subTabs = ['principles', 'catalog', 'applications', 'single', 'formulation'];

    subTabs.forEach(key => {
        const btn = document.getElementById(`tech-subtab-${key}`);
        const panel = document.getElementById(`tech-panel-${key}`);

        if (btn) {
            if (key === subTabKey) {
                btn.className = "tech-subtab-btn active";
            } else {
                btn.className = "tech-subtab-btn";
            }
        }

        if (panel) {
            if (key === subTabKey) {
                panel.classList.remove('hidden');
                // 若包含未渲染的 PDF 容器，觸發渲染
                const viewer = panel.querySelector('.pdf-viewer-container');
                if (viewer && !viewer.querySelector('canvas')) {
                    const pdfUrl = viewer.getAttribute('data-pdf-url');
                    if (pdfUrl && viewer.id) {
                        renderPdfDocumentToContainer(viewer.id, pdfUrl);
                    }
                }
            } else {
                panel.classList.add('hidden');
            }
        }
    });
}

/**
 * 建立五大子分頁單行標籤列 HTML
 */
function buildSubTabNavHtml(activeKey, hasData = true) {
    const tabs = [
        { key: 'principles', label: '1. 原理', icon: 'fa-atom' },
        { key: 'catalog', label: '2. 目錄', icon: 'fa-list-check' },
        { key: 'applications', label: '3. 應用技術', icon: 'fa-industry' },
        { key: 'single', label: '4. 單一產品技術', icon: 'fa-flask-vial' },
        { key: 'formulation', label: '5. 配方', icon: 'fa-clipboard-list' }
    ];

    return `
        <div class="tech-subtab-strip" role="tablist" aria-label="技術專題五大核心維度導覽">
            ${tabs.map(tab => {
        const isActive = (tab.key === activeKey);
        const activeCls = isActive ? "active" : "";
        return `
                    <button type="button" onclick="switchTechSubTab('${tab.key}')" id="tech-subtab-${tab.key}"
                            class="tech-subtab-btn ${activeCls}">
                        <i class="fa-solid ${tab.icon} text-xs"></i>
                        <span>${tab.label}</span>
                    </button>
                `;
    }).join('')}
        </div>
    `;
}

/**
 * 切換特定分頁中的當前選取文件 (Munzing 風格下拉選單連動，立即觸發 PDF Canvas 載入)
 */
function selectTechDoc(slug, tabKey, docIdx) {
    if (!TechState.activeDocIndices[slug]) {
        TechState.activeDocIndices[slug] = {
            'principles': 0,
            'catalog': 0,
            'applications': 0,
            'single': 0,
            'formulation': 0
        };
    }
    TechState.activeDocIndices[slug][tabKey] = docIdx;

    const catData = TECH_DATABASE[slug];
    if (!catData || !catData.tabs[tabKey]) return;
    const docs = catData.tabs[tabKey];
    if (!docs || docIdx >= docs.length) return;

    // 1. 同步更新下拉式選單值 (Munzing 下拉式卷軸選單)
    const selectElem = document.getElementById(`doc-select-${slug}-${tabKey}`);
    if (selectElem && selectElem.value !== String(docIdx)) {
        selectElem.value = String(docIdx);
    }

    // 2. 更新篇數指示器與 Prev/Next 按鈕狀態
    const countElem = document.getElementById(`doc-count-current-${slug}-${tabKey}`);
    if (countElem) {
        countElem.textContent = String(docIdx + 1);
    }
    const prevBtn = document.getElementById(`doc-prev-btn-${slug}-${tabKey}`);
    const nextBtn = document.getElementById(`doc-next-btn-${slug}-${tabKey}`);
    if (prevBtn) prevBtn.disabled = (docIdx <= 0);
    if (nextBtn) nextBtn.disabled = (docIdx >= docs.length - 1);

    // 3. 更新內容檢視器 (雙欄視圖：左欄 PDF Canvas 線上預覽 + 右欄技術摘要重點)
    const viewerContainer = document.getElementById(`viewer-${slug}-${tabKey}`);
    if (viewerContainer) {
        const doc = docs[docIdx];
        viewerContainer.innerHTML = buildSingleDocLayoutHtml(doc, slug, tabKey);

        // 重要修復：立即為新選取的文件觸發 PDF.js 渲染任務
        const newViewer = viewerContainer.querySelector('.pdf-viewer-container');
        if (newViewer) {
            const pdfUrl = newViewer.getAttribute('data-pdf-url');
            if (pdfUrl && newViewer.id) {
                renderPdfDocumentToContainer(newViewer.id, pdfUrl);
            }
        }
    }
}

/**
 * 快速前後切換文件 (上一篇 / 下一篇)
 */
function navigateTechDoc(slug, tabKey, step) {
    const catData = TECH_DATABASE[slug];
    if (!catData || !catData.tabs[tabKey]) return;
    const docs = catData.tabs[tabKey];
    if (!docs || docs.length <= 1) return;

    const currentIdx = (TechState.activeDocIndices[slug] && TechState.activeDocIndices[slug][tabKey]) || 0;
    const newIdx = currentIdx + step;
    if (newIdx >= 0 && newIdx < docs.length) {
        selectTechDoc(slug, tabKey, newIdx);
    }
}

// 全域快取 PDF.js 渲染任務與 PDF Document 物件
const techPdfRenderTasks = {};
const techPdfDocCache = {};

/**
 * 使用 PDF.js 將 PDF 多頁渲染至 Canvas 容器 (完全防右鍵另存新檔、高解析度抗模糊、流暢滾動)
 */
async function renderPdfDocumentToContainer(containerId, pdfUrl) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (techPdfRenderTasks[containerId]) {
        techPdfRenderTasks[containerId].cancelled = true;
    }
    const currentTask = { cancelled: false };
    techPdfRenderTasks[containerId] = currentTask;

    const cleanPdfUrl = pdfUrl.split('#')[0];

    try {
        if (typeof window.pdfjsLib === 'undefined') {
            console.warn('PDF.js 未就緒');
            return;
        }

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = (window.APP_BASE_HREF || '/') + 'js/vendor/pdf.worker.min.js';

        let pdf = techPdfDocCache[cleanPdfUrl];
        if (!pdf) {
            const loadingTask = window.pdfjsLib.getDocument(cleanPdfUrl);
            pdf = await loadingTask.promise;
            techPdfDocCache[cleanPdfUrl] = pdf;
        }
        if (currentTask.cancelled) return;

        // 僅渲染第 1 頁作為技術文件封面 (Cover)，計算等比例縮放，絕不拉伸變形
        const page = await pdf.getPage(1);
        if (currentTask.cancelled) return;

        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;
        if (!containerWidth || containerWidth < 200) {
            containerWidth = container.offsetWidth || Math.min(520, window.innerWidth - 48);
        }
        if (!containerHeight || containerHeight < 300) {
            containerHeight = container.offsetHeight || (window.innerWidth >= 640 ? 640 : 580);
        }
        const availWidth = Math.max(200, containerWidth - 24);
        const availHeight = Math.max(300, containerHeight - 24);

        const unscaledViewport = page.getViewport({ scale: 1 });

        // 嚴格等比例縮放：取寬與高容納比率的較小者，保證完整保留原文件版面比例，完全不拉伸
        const scaleW = availWidth / unscaledViewport.width;
        const scaleH = availHeight / unscaledViewport.height;
        const fitScale = Math.min(scaleW, scaleH);

        const dpr = window.devicePixelRatio || 1;
        const viewport = page.getViewport({ scale: fitScale * dpr });

        const canvasWrapper = document.createElement('div');
        canvasWrapper.className = 'cover-canvas-wrapper w-full h-full flex items-center justify-center p-2 select-none pointer-events-none';
        canvasWrapper.setAttribute('oncontextmenu', 'return false;');
        canvasWrapper.setAttribute('draggable', 'false');

        const canvas = document.createElement('canvas');
        canvas.className = 'rounded-lg shadow-sm border border-slate-200 bg-white block transition-transform duration-200 group-hover:scale-[1.01] pointer-events-none select-none';
        canvas.style.userSelect = 'none';
        canvas.style.webkitUserSelect = 'none';
        const cssW = Math.floor(unscaledViewport.width * fitScale);
        const cssH = Math.floor(unscaledViewport.height * fitScale);
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        canvas.style.maxWidth = '100%';
        canvas.style.maxHeight = '100%';
        canvas.style.objectFit = 'contain';
        canvas.style.aspectRatio = `${unscaledViewport.width} / ${unscaledViewport.height}`;

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({
            canvasContext: context,
            viewport: viewport
        }).promise;

        if (currentTask.cancelled) return;

        // 移除載入轉圈文字及可能存在的舊 canvas
        container.querySelectorAll('.loading-spinner, .text-slate-400, .cover-canvas-wrapper').forEach(el => el.remove());

        // 插入封面 Canvas
        canvasWrapper.appendChild(canvas);
        container.appendChild(canvasWrapper);
    } catch (err) {
        console.error('PDF.js cover render error:', err);
    }
}

async function renderPdfFullscreen(container, pdfUrl, scaleMultiplier = 1.0) {
    const cleanPdfUrl = pdfUrl.split('#')[0];
    currentModalScaleMultiplier = scaleMultiplier;
    currentModalPdfUrl = pdfUrl;

    const zoomIndicator = document.getElementById('tech-modal-zoom-val');
    if (zoomIndicator) {
        zoomIndicator.textContent = `${Math.round(scaleMultiplier * 100)}%`;
    }

    try {
        if (typeof window.pdfjsLib === 'undefined') {
            container.innerHTML = `<iframe src="${cleanPdfUrl}#toolbar=0&navpanes=0" class="w-full h-full border-0"></iframe>`;
            return;
        }

        window.pdfjsLib.GlobalWorkerOptions.workerSrc = (window.APP_BASE_HREF || '/') + 'js/vendor/pdf.worker.min.js';

        let pdf = techPdfDocCache[cleanPdfUrl];
        if (!pdf) {
            const loadingTask = window.pdfjsLib.getDocument(cleanPdfUrl);
            pdf = await loadingTask.promise;
            techPdfDocCache[cleanPdfUrl] = pdf;
        }

        container.innerHTML = '';
        const modalWidth = container.clientWidth || window.innerWidth || 1200;
        // 全畫面模式下，提供寬廣舒適的滿版閱讀視野 (桌面滿版達 1180px，自適應且支援放大縮小)
        const baseTargetWidth = Math.min(1180, Math.max(680, modalWidth - 64));
        const targetWidth = Math.max(320, baseTargetWidth * scaleMultiplier);
        const dpr = window.devicePixelRatio || 1;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const unscaledViewport = page.getViewport({ scale: 1 });
            const scale = targetWidth / unscaledViewport.width;
            const finalScale = Math.max(1.0, scale);
            const viewport = page.getViewport({ scale: finalScale * dpr });

            const canvasWrapper = document.createElement('div');
            canvasWrapper.className = 'w-full flex flex-col items-center mb-8 select-none';
            canvasWrapper.setAttribute('oncontextmenu', 'return false;');
            canvasWrapper.setAttribute('draggable', 'false');

            const pageLabel = document.createElement('div');
            pageLabel.className = 'text-[11px] font-bold text-slate-400 mb-2 px-3 py-0.5 rounded-full bg-slate-900 border border-slate-800 shadow-sm';
            pageLabel.textContent = `第 ${pageNum} 頁 / 共 ${pdf.numPages} 頁`;

            const canvas = document.createElement('canvas');
            canvas.className = 'rounded-md shadow-2xl bg-white block max-w-none border border-slate-700/60';
            canvas.style.pointerEvents = 'none';
            canvas.style.userSelect = 'none';
            canvas.style.webkitUserSelect = 'none';
            canvas.style.width = Math.floor(unscaledViewport.width * finalScale) + 'px';
            canvas.style.height = Math.floor(unscaledViewport.height * finalScale) + 'px';

            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;

            canvasWrapper.appendChild(pageLabel);
            canvasWrapper.appendChild(canvas);
            container.appendChild(canvasWrapper);
        }
    } catch (err) {
        console.error('Fullscreen render error:', err);
        container.innerHTML = `
            <div class="text-center py-16 text-slate-400">
                <i class="fa-solid fa-triangle-exclamation text-3xl text-amber-500 mb-3"></i>
                <p class="text-base font-semibold">文件載入失敗，請檢查網路連線或稍後重試。</p>
            </div>
        `;
    }
}

/**
 * 全螢幕放大縮放控制
 */
function changeFullscreenZoom(delta) {
    let newMultiplier = currentModalScaleMultiplier + delta;
    newMultiplier = Math.max(0.5, Math.min(3.0, newMultiplier));
    const container = document.getElementById('tech-modal-pdf-container');
    if (container && currentModalPdfUrl) {
        renderPdfFullscreen(container, currentModalPdfUrl, newMultiplier);
    }
}

function resetFullscreenZoom() {
    const container = document.getElementById('tech-modal-pdf-container');
    if (container && currentModalPdfUrl) {
        renderPdfFullscreen(container, currentModalPdfUrl, 1.0);
    }
}

/**
 * 開啟 PDF 全螢幕滿版檢視模態視窗 (真正全畫面滿版閱讀，支援縮放與鍵盤導航)
 */
function openPdfFullscreenModal(pdfUrl, title) {
    let modal = document.getElementById('tech-pdf-fullscreen-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'tech-pdf-fullscreen-modal';
        modal.style.cssText = 'position:fixed!important;top:0!important;left:0!important;right:0!important;bottom:0!important;width:100vw!important;height:100vh!important;margin:0!important;padding:0!important;z-index:99999!important;background:#0f172a!important;display:flex!important;flex-direction:column!important;box-sizing:border-box!important;';
        modal.setAttribute('oncontextmenu', 'return false;');
        modal.innerHTML = `
            <div class="tech-modal-inner relative w-screen h-screen flex flex-col bg-slate-900 overflow-hidden"
                 style="z-index:100000!important;width:100vw!important;height:100vh!important;max-width:100vw!important;max-height:100vh!important;border-radius:0!important;border:none!important;"
                 onclick="event.stopPropagation();">
                
                <!-- 頂部滿版操作列 -->
                <div class="flex items-center justify-between px-3 sm:px-6 py-2.5 bg-slate-900 border-b border-slate-800 shrink-0 gap-3 text-white"
                     style="z-index:100001!important;">
                    <div class="flex items-center gap-2.5 sm:gap-3 min-w-0 pr-2">
                        <span class="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                            <i class="fa-solid fa-file-pdf text-sm"></i>
                        </span>
                        <div class="min-w-0">
                            <h3 id="tech-modal-title" class="text-sm sm:text-base font-bold text-white truncate leading-snug">技術文件全畫面閱讀</h3>
                            
                        </div>
                    </div>
                    
                    <!-- 縮放工具列與關閉按鈕 -->
                    <div class="flex items-center gap-2 sm:gap-3 shrink-0">
                        <div class="flex items-center bg-slate-800 border border-slate-700 rounded-lg p-0.5 shadow-sm text-slate-300">
                            <button type="button" onclick="changeFullscreenZoom(-0.2)" title="縮小"
                                    class="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors cursor-pointer">
                                <i class="fa-solid fa-magnifying-glass-minus text-xs"></i>
                            </button>
                            <button type="button" onclick="resetFullscreenZoom()" title="重設為 100%"
                                    class="px-2 sm:px-2.5 h-7 sm:h-8 text-xs font-bold text-slate-200 hover:bg-slate-700 rounded transition-colors cursor-pointer">
                                <span id="tech-modal-zoom-val">100%</span>
                            </button>
                            <button type="button" onclick="changeFullscreenZoom(0.2)" title="放大"
                                    class="w-7 sm:w-8 h-7 sm:h-8 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 rounded transition-colors cursor-pointer">
                                <i class="fa-solid fa-magnifying-glass-plus text-xs"></i>
                            </button>
                        </div>

                        <button type="button" onclick="closePdfFullscreenModal()"
                                class="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-colors cursor-pointer">
                            <i class="fa-solid fa-xmark text-sm"></i>
                            <span>關閉 (ESC)</span>
                        </button>
                    </div>
                </div>

                <!-- 全畫面滿版 PDF 渲染容器 -->
                <div id="tech-modal-pdf-container"
                     class="flex-1 w-full h-full overflow-y-auto overflow-x-auto p-4 sm:p-8 bg-slate-950 flex flex-col items-center select-none"
                     style="scroll-behavior: smooth;"
                     oncontextmenu="return false;">
                    <div class="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                        <i class="fa-solid fa-circle-notch fa-spin text-2xl text-blue-400"></i>
                        <span class="text-sm font-semibold text-slate-300">全畫面高解析文件載入中...</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 綁定 ESC 鍵關閉
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePdfFullscreenModal();
        });
    }

    modal.classList.remove('hidden');
    modal.style.setProperty('display', 'flex', 'important');
    modal.style.setProperty('z-index', '99999', 'important');
    document.body.style.overflow = 'hidden';

    const titleEl = document.getElementById('tech-modal-title');
    if (titleEl) titleEl.textContent = title || '原廠技術文件';

    const container = document.getElementById('tech-modal-pdf-container');
    if (container) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full py-16 text-slate-400 gap-2">
                <i class="fa-solid fa-circle-notch fa-spin text-2xl text-blue-400"></i>
                <span class="text-sm font-semibold text-slate-300">正在以高解析度渲染全畫面文件...</span>
            </div>
        `;
        renderPdfFullscreen(container, pdfUrl, 1.0);
    }
}

function closePdfFullscreenModal() {
    const modal = document.getElementById('tech-pdf-fullscreen-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.style.setProperty('display', 'none', 'important');
    }
    document.body.style.overflow = '';
}

// 全面攔截在 PDF 預覽與技術專區的右鍵選單與快捷鍵另存
document.addEventListener('contextmenu', function (e) {
    if (e.target.closest('.pdf-viewer-container') || e.target.closest('.tech-principles-grid') || e.target.closest('#tech-pdf-fullscreen-modal')) {
        e.preventDefault();
        return false;
    }
}, true);

window.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S' || e.key === 'p' || e.key === 'P')) {
        const viewer = document.querySelector('.pdf-viewer-container') || document.getElementById('tech-pdf-fullscreen-modal');
        if (viewer) {
            e.preventDefault();
            return false;
        }
    }
});


/**
 * 建立單一文件左右雙欄檢視視圖 HTML (比照原理排版架構，線上預覽不開放下載)
 */
function buildSingleDocLayoutHtml(doc, slug, tabKey) {
    const cat = TECH_CATEGORIES.find(c => c.slug === slug) || { name: '特用化學品', productLink: 'products/' };
    const pdfUrl = getEncodedPdfUrl(doc.pdfPath);
    const isTyzorPrinciple = (slug === 'tyzor' && tabKey === 'principles' && doc.mechImg);
    const escapedTitle = (doc.title || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');

    let previewBoxHtml = '';
    if (isTyzorPrinciple) {
        // 圖 2：Tyzor 反應機制圖 (純靜態展示，不需要點擊放大支援)
        previewBoxHtml = `
            <div class="h-full flex flex-col justify-center">
                <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs flex flex-col items-center justify-center min-h-[460px] sm:min-h-[560px] overflow-hidden select-none" oncontextmenu="return false;">
                    
                    <img src="${resolveAssetUrl(doc.mechImg)}" alt="${doc.title} 反應機制圖"
                         class="w-full max-h-[420px] sm:max-h-[500px] object-contain rounded select-none pointer-events-none"
                         draggable="false">
                </div>
            </div>
        `;
    } else {
        const viewerId = `pdf-canvas-viewer-${slug}-${tabKey}`;
        previewBoxHtml = `
            <div class="h-full flex flex-col justify-center">
                <div id="${viewerId}"
                     class="pdf-viewer-container group relative w-full h-[580px] sm:h-[640px] rounded-xl border border-slate-200 bg-white p-3 flex items-center justify-center overflow-hidden select-none cursor-pointer transition-all duration-200 hover:border-blue-500 hover:shadow-lg"
                     data-pdf-url="${pdfUrl}"
                     data-pdf-title="${escapedTitle}"
                     onclick="openPdfFullscreenModal('${pdfUrl}', '${escapedTitle}')"
                     title="點擊封面全螢幕放大閱讀"
                     oncontextmenu="return false;"
                     onselectstart="return false;">
                    
                    <div class="loading-spinner flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                        <i class="fa-solid fa-circle-notch fa-spin text-xl text-blue-900"></i>
                        <span class="text-xs font-semibold text-slate-600">文件封面載入中...</span>
                    </div>
                </div>
            </div>
        `;
    }

    const advantagesHtml = (doc.advantages || []).map((adv, idx) => `
        <li class="flex items-start gap-1.5">
            <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">${idx + 1}</span>
            <span>${adv}</span>
        </li>
    `).join('');

    const applicationsHtml = (doc.applications || []).map(app => `
        <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">${app}</span>
    `).join('');

    const docTitleClean = (doc.title || '').replace(/"/g, '&quot;');
    const inquiryParam = encodeURIComponent(`${cat.name}-${doc.title || ''}`);
    const productLink = cat.productLink || 'products/';

    return `
        <div class="tech-principles-grid bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5">
            <!-- 左欄：線上文件封面預覽 (點擊封面直接全螢幕放大閱讀，徹底防止右鍵另存) -->
            <div class="h-full pr-0 sm:pr-2.5 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-2.5 sm:pb-0">
                ${previewBoxHtml}
            </div>

            <!-- 右欄：文件檔案屬性與技術重點摘要 (依圖 1 指示：移除被劃掉的語言/版本標籤與檔案名字串) -->
            <div class="space-y-2 pl-0 sm:pl-2.5">
                <!--<div>
                    <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        ${docTitleClean}
                    </h3>
                    
                </div>-->

                <p class="text-sm text-slate-700 leading-relaxed font-normal bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
                    ${doc.desc || doc.summary || ''}
                </p>

                ${advantagesHtml ? `
                <!-- 主要技術特點 -->
                <div class="space-y-1.5">
                    <div class="flex items-center gap-1.5 text-xs font-bold text-blue-950">
                        <i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>
                        <span>主要內容與技術特點：</span>
                    </div>
                    <ul class="space-y-1 text-sm text-slate-700">
                        ${advantagesHtml}
                    </ul>
                </div>
                ` : ''}

                ${applicationsHtml ? `
                <!-- 適用範疇標籤 -->
                <div class="space-y-1 pt-0.5">
                    <span class="text-xs font-bold text-slate-700">原廠適用範疇 / 相關領域：</span>
                    <div class="flex flex-wrap gap-1">
                        ${applicationsHtml}
                    </div>
                </div>
                ` : ''}

                <!-- 諮詢動作列 -->
                <div class="pt-2 flex flex-wrap items-center gap-2 border-t border-slate-200">
                    <a href="contact/?mode=detailed&inquiry=${inquiryParam}"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                        <i class="fa-solid fa-envelope text-xs"></i>
                        <span>索取規格諮詢 / 申請樣品</span>
                    </a>
                    <a href="${productLink}"
                       class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                        <i class="fa-solid fa-table-list text-xs"></i>
                        <span>查看相關產品列表</span>
                    </a>
                </div>
            </div>
        </div>
    `;
}

/**
 * 建立無公開資料提示區塊 HTML (實事求是、誠實告知、不杜撰)
 */
function buildEmptyTabHtml(cat, tabKey) {
    const tabNames = {
        principles: '原理機制',
        catalog: '總覽目錄',
        applications: '應用技術資料',
        single: '單一產品技術資料',
        formulation: '配方'
    };
    const name = tabNames[tabKey] || '技術資料';
    const catName = cat.name || '特用化學品';
    const inquiryParam = encodeURIComponent(catName);
    const productLink = cat.productLink || 'products/';

    return `
        <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 text-center space-y-2.5">
            <div class="flex items-center justify-center gap-2">
                <i class="fa-solid fa-folder-open text-slate-400 text-base"></i>
                <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整理中</span>
                <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開${name}</span>
            </div>
            <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                目前原廠未提供此項之公開資料，我們秉持實事求是原則不進行臆測杜撰。若您需要特定規格手冊或評估樣品，歡迎直接聯繫宏威業務團隊為您服務。
            </p>
            <div class="pt-1 flex items-center justify-center gap-2.5">
                <a href="contact/?mode=detailed&inquiry=${inquiryParam}"
                   class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                    <i class="fa-solid fa-paper-plane text-xs"></i>
                    <span>聯繫業務索取資料</span>
                </a>
                <a href="${productLink}"
                   class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                    <i class="fa-solid fa-table-list text-xs"></i>
                    <span>瀏覽相關產品專區</span>
                </a>
            </div>
        </div>
    `;
}

function buildCategoryContentHtml(cat) {
    const slug = cat.slug;
    const catData = TECH_DATABASE[slug] || { tabs: {} };
    const subTabs = ['principles', 'catalog', 'applications', 'single', 'formulation'];

    const panelsHtml = subTabs.map(tabKey => {
        const docs = catData.tabs[tabKey] || [];
        const isHidden = (TechState.activeSubTab !== tabKey);
        const hiddenCls = isHidden ? 'hidden ' : '';

        if (docs.length === 0) {
            return `
                <div id="tech-panel-${tabKey}" class="${hiddenCls}space-y-2">
                    ${buildEmptyTabHtml(cat, tabKey)}
                </div>
            `;
        }

        const activeIdx = (TechState.activeDocIndices[slug] && TechState.activeDocIndices[slug][tabKey]) || 0;
        const validIdx = activeIdx < docs.length ? activeIdx : 0;
        const currentDoc = docs[validIdx];

        if (docs.length > 1) {
            let optionsHtml = '';
            if (tabKey === 'single') {
                // 單一產品：依相同產品系列分組 optgroup
                const groups = {};
                const groupNames = [];
                docs.forEach((doc, idx) => {
                    const grp = doc.productGroup || '其他';
                    if (!groups[grp]) {
                        groups[grp] = [];
                        groupNames.push(grp);
                    }
                    groups[grp].push({ doc, idx });
                });

                optionsHtml = groupNames.map(grpName => {
                    const list = groups[grpName];
                    const optLines = list.map(({ doc, idx }) => {
                        const selectedAttr = (idx === validIdx) ? ' selected' : '';
                        return `<option value="${idx}"${selectedAttr}>${doc.shortLabel || doc.title}</option>`;
                    }).join('');
                    return `<optgroup label="── ${grpName} (${list.length} 篇) ──">${optLines}</optgroup>`;
                }).join('');
            } else {
                // 一般條列 option
                optionsHtml = docs.map((doc, idx) => {
                    const selectedAttr = (idx === validIdx) ? ' selected' : '';
                    return `<option value="${idx}"${selectedAttr}>${doc.shortLabel || doc.title}</option>`;
                }).join('');
            }

            return `
                <div id="tech-panel-${tabKey}" class="${hiddenCls}space-y-3">
                    <!-- 下拉式卷軸選單列 (Munzing 風格：精緻簡潔、完全不佔據兩側版面空間) -->
                    <div class="tech-doc-selector-bar bg-slate-50 border border-slate-200/90 rounded-xl p-2.5 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shadow-2xs">
                        <div class="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                            <label for="doc-select-${slug}-${tabKey}" class="flex items-center gap-1.5 text-xs font-bold text-slate-800 shrink-0">
                                <i class="fa-solid fa-file-lines text-blue-900 text-sm"></i>
                                <span>選擇技術文件：</span>
                            </label>
                            <div class="relative flex-1 min-w-0 max-w-full sm:max-w-xl">
                                <select id="doc-select-${slug}-${tabKey}" onchange="selectTechDoc('${slug}', '${tabKey}', parseInt(this.value, 10))"
                                        class="w-full bg-white hover:bg-slate-50/50 border border-slate-300 hover:border-blue-500 focus:border-blue-900 focus:ring-2 focus:ring-blue-100 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs cursor-pointer transition-all truncate">
                                    ${optionsHtml}
                                </select>
                            </div>
                        </div>

                        <!-- 篇數統計與上一篇/下一篇快速切換按鈕 -->
                        <div class="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-slate-200/60">
                            <span class="text-xs font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200 shadow-2xs">
                                第 <strong id="doc-count-current-${slug}-${tabKey}" class="text-blue-950 font-bold">${validIdx + 1}</strong> / ${docs.length} 篇
                            </span>
                            <div class="flex items-center gap-1">
                                <button type="button" id="doc-prev-btn-${slug}-${tabKey}" onclick="navigateTechDoc('${slug}', '${tabKey}', -1)"
                                        ${validIdx === 0 ? 'disabled' : ''}
                                        class="w-8 h-8 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-900 flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
                                        title="上一篇技術文件">
                                    <i class="fa-solid fa-chevron-left text-xs"></i>
                                </button>
                                <button type="button" id="doc-next-btn-${slug}-${tabKey}" onclick="navigateTechDoc('${slug}', '${tabKey}', 1)"
                                        ${validIdx === docs.length - 1 ? 'disabled' : ''}
                                        class="w-8 h-8 rounded-lg bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-900 flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs"
                                        title="下一篇技術文件">
                                    <i class="fa-solid fa-chevron-right text-xs"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 100% 滿版雙欄核心展示區 -->
                    <div id="viewer-${slug}-${tabKey}" class="w-full">
                        ${buildSingleDocLayoutHtml(currentDoc, slug, tabKey)}
                    </div>
                </div>
            `;
        } else {
            // 僅 1 篇文件時直接滿版展示
            return `
                <div id="tech-panel-${tabKey}" class="${hiddenCls}space-y-2">
                    <div id="viewer-${slug}-${tabKey}" class="w-full">
                        ${buildSingleDocLayoutHtml(currentDoc, slug, tabKey)}
                    </div>
                </div>
            `;
        }
    }).join('');

    return `
        <section class="bg-white border border-slate-200 rounded-xl shadow-xs p-3 sm:p-4 space-y-2.5">
            <!-- 專題標題與頂部操作列 (依圖 1 指示：改成產品類別名稱 cat.name) -->
            <div class="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div class="flex items-center gap-2 min-w-0">
                    <span class="w-1.5 h-4 bg-blue-900 rounded-full inline-block shrink-0"></span>
                    <h1 class="text-base sm:text-lg font-bold text-blue-950 tracking-tight truncate">
                        ${cat.name}
                    </h1>
                </div>
                
                <div class="shrink-0 flex items-center">
                    <a href="${cat.productLink}"
                       class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-bold transition-colors">
                        <i class="fa-solid fa-table-list text-xs"></i>
                        <span>${cat.productLinkText}</span>
                    </a>
                </div>
            </div>

           
            

            <!-- 瀏覽器書籤風格容器 -->
            <div class="tech-bookmark-wrapper mt-1">
                ${buildSubTabNavHtml(TechState.activeSubTab, cat.hasData)}

                <div class="tech-bookmark-body">
                    ${panelsHtml}
                </div>
            </div>
        </section>
    `;
}

/**
 * 切換技術產品分類 (11 大專題)
 */
function switchTechCategory(slug, updateUrl = true) {
    const cat = TECH_CATEGORIES.find(c => c.slug === slug);
    if (!cat) return;

    TechState.activeCategory = slug;
    if (typeof AppState !== 'undefined') {
        AppState.activeTechCategory = slug;
    }

    // 1. 更新左側 Sidebar 按鈕樣式
    document.querySelectorAll('.tech-sidebar-btn').forEach(btn => {
        const btnSlug = btn.getAttribute('data-tech-slug');
        const numBadge = btn.querySelector('.tech-num-badge');
        const titleEl = btn.querySelector('.tech-btn-title');
        const subEl = btn.querySelector('.tech-btn-sub');

        if (btnSlug === slug) {
            btn.className = "tech-sidebar-btn group flex items-center p-2.5 rounded-xl bg-blue-50/90 border-2 border-blue-600/80 text-blue-950 no-underline shadow-xs transition-all";
            if (numBadge) numBadge.className = "tech-num-badge w-5 h-5 rounded-md bg-blue-900 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-2xs";
            if (titleEl) titleEl.className = "tech-btn-title text-sm font-bold text-blue-950 truncate leading-snug";
            if (subEl) subEl.className = "tech-btn-sub text-xs font-medium text-blue-800/80 truncate";
        } else {
            btn.className = "tech-sidebar-btn group flex items-center p-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-800 hover:text-blue-950 no-underline transition-all";
            if (numBadge) numBadge.className = "tech-num-badge w-5 h-5 rounded-md bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors";
            if (titleEl) titleEl.className = "tech-btn-title text-sm font-bold text-slate-800 group-hover:text-blue-950 truncate leading-snug";
            if (subEl) subEl.className = "tech-btn-sub text-xs font-normal text-slate-500 group-hover:text-slate-600 truncate";
        }
    });

    // 2. 更新頂部麵包屑
    const breadcrumbCurrent = document.getElementById('tech-breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.innerText = cat.name;
    }

    // 3. 渲染右側內容區塊
    const mainContainer = document.getElementById('tech-content-display');
    if (mainContainer) {
        mainContainer.innerHTML = buildCategoryContentHtml(cat);
        const bestTab = getBestSubTabForCategory(slug);
        switchTechSubTab(bestTab);
    }

    // 4. 更新 URL (若為 SPA 模式)
    if (updateUrl && typeof updateUrlRoute === 'function') {
        try {
            updateUrlRoute(true);
        } catch (err) {
            console.warn('URL route update skipped:', err);
        }
    }
}

// 當 DOM 載入完成或腳本就緒時初始化技術專區
function initTechnologyModule() {
    const display = document.getElementById('tech-content-display');
    if (!display) return;
    const currentSlug = document.body.getAttribute('data-tech-slug') || 'tyzor';

    // 若頁面已由伺服器或靜態建置產生完成 (獨立子頁面)，維持既有 DOM 完整性，僅同步狀態與啟動首頁 PDF 封面渲染！
    const visiblePanel = display.querySelector('.tech-bookmark-body > div:not(.hidden)');
    if (visiblePanel) {
        TechState.activeCategory = currentSlug;
        const panelId = visiblePanel.id || '';
        const currentTabKey = panelId.replace('tech-panel-', '');
        if (currentTabKey) {
            TechState.activeSubTab = currentTabKey;
        }
        const activeViewer = visiblePanel.querySelector('.pdf-viewer-container');
        if (activeViewer && !activeViewer.querySelector('canvas')) {
            const pdfUrl = activeViewer.getAttribute('data-pdf-url');
            if (pdfUrl && activeViewer.id) {
                renderPdfDocumentToContainer(activeViewer.id, pdfUrl);
            }
        }
        return;
    }

    // SPA 模式或主頁模式下需要動態渲染
    switchTechCategory(currentSlug, false);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTechnologyModule);
} else {
    initTechnologyModule();
}
