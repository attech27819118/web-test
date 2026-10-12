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
          "title": "鈦（鋯）酸酯作為交聯劑反應機制",
          "titleEn": "Tyzor® Crosslinkers",
          "mechImg": "techdata/tyzor/crosslinker_mech.webp",
          "desc": "油漆與油墨的「成膜固化加速器」，藉由鈦/鋯中心與樹脂中的羥基、羧基迅速架橋形成三維網絡，低溫即可固化，大幅強化耐水、耐刮與耐溶劑表現。",
          "advantages": [
            "加速常溫或低溫烘烤固化速度，顯著縮短塗膜完全乾燥與成膜週期。",
            "與高分子官能基形成緊密三維立體網絡，顯著提升耐水、耐水煮蒸煮與高溫熱穩定性。",
            "增強漆膜表面鉛筆硬度（提升 1~2H），賦予卓越的耐摩擦與耐刮傷物理性能。",
            "大幅提升塗層耐化學品侵蝕與耐溶劑（如 MEK 擦拭次數突破 200 次）保護力。"
          ],
          "applications": [
            "塗料",
            "印刷油墨",
            "膠黏劑",
            "聚合物改性"
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
          "title": "鈦（鋯）酸酯作為催化劑反應機制",
          "titleEn": "Tyzor® Catalysts",
          "mechImg": "techdata/tyzor/catalyst_mech.webp",
          "desc": "聚酯與增塑劑合成的「綠色高效催化劑」，徹底告別有毒有機錫，能在高達 280°C 高溫下保持極高催化活性，反應快、收率高且不易發黃變色。",
          "advantages": [
            "100% 不含有機錫化合物，完全符合歐美 FDA 食品接觸與 REACH 環保法規。",
            "顯著降低反應活化能，縮短聚酯與直接酯化反應時間達 25%~40%，大幅節省能耗。",
            "在 280°C 高溫縮聚下依然維持極高催化活性，單體轉化率高且副產物極少。",
            "專用型號（如 Tyzor 436）具備超低黃變特性，產出的聚酯產品清澈透亮。"
          ],
          "applications": [
            "聚酯合成",
            "增塑劑製造",
            "酯化與酯交換反應"
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
          "title": "鈦（鋯）酸酯作為表面改性反應機制",
          "titleEn": "Tyzor® Surface Modification",
          "mechImg": "techdata/tyzor/surface_mech.webp",
          "desc": "玻璃、金屬與顏料表面的「奈米防護衣」，透過溶膠-凝膠（Sol-Gel）水解縮聚形成均勻緻密的金屬氧化物保護層，耐高溫、耐腐蝕且抗劃痕。",
          "advantages": [
            "利用 Sol-Gel 工藝在基材表面沉積均勻連續的金屬氧化物（TiO2 / ZrO2）奈米薄膜。",
            "賦予底材表面卓越的耐高溫熱氧化防護與長效耐腐蝕隔離屏障。",
            "提高表面耐刮傷與抗磨損硬度，並可依配方需求調控表面親水或疏水特性。",
            "有效增進無機填料（如碳酸鈣、高嶺土）與有機高分子基質間的偶合潤濕相容性。"
          ],
          "applications": [
            "Sol-Gel 鍍膜",
            "金屬防腐",
            "玻璃改性",
            "無機填料包覆"
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
          "title": "鈦（鋯）酸酯提高附著力反應機制",
          "titleEn": "Tyzor® Adhesion Promoters",
          "mechImg": "techdata/tyzor/adhesion_mech.webp",
          "desc": "難附著底材的「化學雙面膠」，分子兩端分別鍵合金屬/玻璃無機表面與有機樹脂塗層，搭建堅固分子橋樑，牢牢抓緊基材不脫落。",
          "advantages": [
            "在難黏基材（PP、PE、PET、金屬、玻璃）介面搭建化學鍵橋樑，顯著提升密著強度。",
            "大幅提高塗層在高濕度、鹽霧浸泡及冷熱循環環境下的乾濕態附著耐久性。",
            "顯著提升油墨在包裝塑膠薄膜上的耐膠帶剝離測試（Scotch Tape Test）堅牢度。",
            "促進漆膜硬度提升，有效防止塗層邊緣在加工衝壓或折疊時發生翹皮與分層脫落。"
          ],
          "applications": [
            "油墨印刷",
            "金屬底漆",
            "塑膠塗裝",
            "封裝膠黏"
          ]
        }
      ],
      "catalog": [
        {
          "docId": "TYZ-05",
          "filename": "Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor Adhesive Plus Coatings Line EN 202512.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "EN (英文)",
          "version": "202512",
          "brand": "Dorf Ketal",
          "shortLabel": "膠黏與塗料",
          "title": "Tyzor® 膠黏劑與塗料產品線型錄",
          "titleEn": "Brochure DK Tyzor Adhesive Plus Coatings Line",
          "desc": "塗料與膠黏劑配方的官方選型大全，完整涵蓋溶劑型與水性耐水解體系的鈦/鋯交聯促進劑，全面解決成膜慢與附著力不足的痛點。",
          "advantages": [
            "溶劑型首選 Tyzor AA-75、GBA 螯合物，提供極佳儲存穩定性與烘烤快速交聯。",
            "水性體系推薦 Tyzor TE（三乙醇胺螯合物）與 LA（乳酸銨鹽），具耐水解高穩定性。",
            "顯著改善壓敏膠高溫持粘力（Shear Adhesion）與長期抗蠕變性能。",
            "大幅提升包裝凹版油墨的耐揉搓性與耐高溫高壓水煮蒸煮（Retort Resistance）。"
          ],
          "applications": [
            "溶劑型與水性塗料",
            "壓敏膠",
            "密封膠",
            "包裝油墨"
          ]
        },
        {
          "docId": "TYZ-06",
          "filename": "Brochure DK Tyzor General CN 202608.pdf",
          "pdfPath": "techdatadb/2.Tyzor/2.Tyzor Brochure目錄/Brochure DK Tyzor General CN 202608.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "CN (簡體中文)",
          "version": "202608",
          "brand": "Dorf Ketal",
          "shortLabel": "綜合手冊 (中)",
          "title": "Tyzor® 官方完整中文版產品手冊",
          "titleEn": "Brochure DK Tyzor General CN",
          "desc": "Dorf Ketal 原廠最權威的繁體中文技術總覽，完整公開正烷基鈦/鋯、螯合物四大族群的物理常數、溶解度、金屬氧化物含量與選型指引。",
          "advantages": [
            "完整詳列 Tyzor TPT、TnBT、TOT、TE、AA-75、217、LA 全系列物理化學參數對照表。",
            "系統化拆解催化（Catalysis）、交聯（Crosslinking）、附著（Adhesion）與表面改性四大功能。",
            "清楚標註各型號金屬氧化物含量（TiO2/ZrO2 %）、黏度、閃點與溶劑相容矩陣。",
            "提供淘汰有機錫催化劑的綠色轉型路徑，以及水性耐水解體系的具體工藝建議。"
          ],
          "applications": [
            "全系列特用化學品",
            "催化合成",
            "塗料油墨",
            "橡塑工業"
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
          "shortLabel": "塗料專用型錄",
          "title": "Tyzor® 塗料專用系列產品型錄",
          "titleEn": "Brochure DK Tyzor Plus Coatings",
          "desc": "工業烤漆與防腐塗料的「固化升級指南」，不僅能降低烤漆烘烤溫度、節省烘道能耗，還能大幅拉升塗層硬度與防鏽耐鹽霧年限。",
          "advantages": [
            "有效降低烘烤溫度（如由 180°C 降至 130°C）或顯著縮短烘烤固化時間。",
            "大幅提升塗膜鉛筆硬度（提高 1~2H）與耐溶劑擦拭次數（MEK Rubs > 200次）。",
            "鋯酸酯系列（Tyzor NBZ、217）高溫固化完全無黃變，特別適用於白色與淺色烤漆。",
            "三維交聯網絡緻密，底漆耐鹽霧防腐防鏽能力顯著提升。"
          ],
          "applications": [
            "工業防腐塗料",
            "高溫烤漆",
            "卷鋼塗料",
            "汽車底漆"
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
          "shortLabel": "多元醇聚合物",
          "title": "Tyzor® 多元醇與聚合物合成型錄",
          "titleEn": "Brochure DK Tyzor for Polyols Polymers",
          "desc": "高分子聚合與多元醇合成取代傳統有機錫的專用指南，用量僅需 20~100 ppm 即可高速催化，在高溫縮聚階段結構穩定不分解。",
          "advantages": [
            "100% 不含有機錫化合物，完全符合全球最新食品包裝與環保安全規範。",
            "催化活性高於傳統錫類催化劑 2~5 倍，典型添加量僅需 20~100 ppm。",
            "耐熱溫度高達 280°C，縮聚高溫階段不揮發、不析出，維持高轉化率。",
            "專用型號 Tyzor 436 具備超低黃變特性，特別適用於淺色透明聚酯多元醇。"
          ],
          "applications": [
            "聚酯多元醇",
            "PET/PBT 切片",
            "增塑劑合成",
            "聚氨酯預聚體"
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
          "shortLabel": "膠黏與密封膠",
          "title": "Tyzor® 膠黏劑與密封膠應用技術指南",
          "titleEn": "Application Note DK Tyzor Adhesives Sealants EN",
          "desc": "壓敏膠與密封膠耐候深層固化的技術方案，添加量極少即可強化浸水剝離強度與高溫抗蠕變性，精確控制表乾與適用期。",
          "advantages": [
            "添加量僅需 0.5%~2.0%，即可顯著提升壓敏膠高溫持粘力（Shear Adhesion）與抗蠕變性。",
            "作為矽烷改性聚醚（MS Polymer）與聚氨酯無錫交聯催化劑，提供良好深層固化。",
            "顯著改善在未經前處理的鋁合金、不鏽鋼及浮法玻璃上的浸水剝離強度。",
            "有效調控膠體適用期（Pot Life）與表乾時間（Skin Formation Time）。"
          ],
          "applications": [
            "壓敏膠",
            "MS 建築密封膠",
            "聚氨酯膠黏劑",
            "電子結構膠"
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
          "shortLabel": "大宗儲運規範",
          "title": "有機鈦酸酯大宗操作與儲運工程規範",
          "titleEn": "Application Note DK Tyzor Bulk Handling Procedures EN",
          "desc": "化工廠規模化使用有機鈦酸酯的標準工程操作規程，詳述乾燥氮氣保護、儲罐材質選型、管路過濾與防潮防沉澱標準步驟。",
          "advantages": [
            "嚴格要求採用露點低於 -40°C 的乾燥氮氣封閉儲存，杜絕濕氣引發水解沉澱。",
            "儲罐及輸送管道材質建議採用 304 或 316 不鏽鋼，嚴禁使用鍍鋅鋼與銅合金。",
            "提供標準過濾器規格（建議 10~25 μm 不鏽鋼濾芯）與防爆離心泵選型指引。",
            "詳述緊急洩漏時的標準化處置流程及安全無害化中和方案。"
          ],
          "applications": [
            "工廠儲槽",
            "槽車裝卸",
            "連續聚合工程",
            "安全防護"
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
          "shortLabel": "可塑劑催化",
          "title": "可塑劑生產催化劑應用技術指南",
          "titleEn": "Application Note DK Tyzor Catalyst Plasticizer Production EN",
          "desc": "DOP 與 DOTP 可塑劑製造替代傳統硫酸與有機錫的環保工藝手冊，反應速度快、設備無酸蝕、粗酯收率高且色號極淺。",
          "advantages": [
            "反應溫度通常在 200~230°C，反應結束時產物酸值可順利降至 < 0.1 mg KOH/g。",
            "相比傳統硫酸完全無酸性設備腐蝕缺陷，催化劑用量僅需 0.02%~0.05% wt。",
            "粗酯色澤極淺（Pt-Co 色號 < 20），可直接免去繁複的鹼洗水洗與脫色製程。",
            "顯著提升粗酯產出收率，大幅降低工業廢水與廢渣排放負擔。"
          ],
          "applications": [
            "DOP",
            "DOTP",
            "DOA 可塑劑",
            "檸檬酸酯合成"
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
          "shortLabel": "紙張塗佈交聯",
          "title": "紙張塗佈耐水交聯技術指南",
          "titleEn": "Application Note DK Tyzor Crosslinking for Paper EN",
          "desc": "特種紙與紙箱表面塗佈耐水強化的無甲醛環保方案，常溫快速交聯，使塗層浸水濕摩擦次數倍增，徹底替代傳統三聚氰胺甲醛樹脂。",
          "advantages": [
            "Tyzor TE / LA 水溶性螯合物在 pH 4~9 寬範圍內均可穩定添加於塗佈漿料。",
            "乾燥成膜過程中形成不可逆交聯鍵，使塗佈層浸水濕摩擦次數提升 300% 以上。",
            "100% 不含游離甲醛，能直接取代傳統三聚氰胺甲醛（MF）交聯劑。",
            "顯著改善瓦楞紙箱與冷鏈包裝紙在潮濕冷藏環境下的耐濕抗破裂強度。"
          ],
          "applications": [
            "瓦楞紙箱",
            "冷鏈包裝",
            "特種熱敏紙",
            "PVA 塗佈紙"
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
          "shortLabel": "直接酯化反應",
          "title": "直接酯化反應催化應用技術指南",
          "titleEn": "Application Note DK Tyzor Direct Esterification EN",
          "desc": "羧酸與醇直接脫水縮合的高效催化指南，反應溫和副產物少、轉化率接近 100%，反應結束後鈍化分離簡便。",
          "advantages": [
            "高效催化多種一元、多元羧酸直接酯化，反應平穩溫和，副反應極少。",
            "相比傳統無機酸催化劑，完全無烯烴生成與酸性腐蝕缺陷。",
            "配合共沸蒸餾及時脫除副產物水，使單體酯化轉化率達到接近 100%。",
            "反應結束後可藉由微量加水快速水解鈍化並過濾去除，產物純度高。"
          ],
          "applications": [
            "脂肪酸酯",
            "合成潤滑油基礎油",
            "特種單體酯化"
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
          "shortLabel": "金屬表面前處理",
          "title": "黑色與有色金屬表面無鉻鈍化改性指南",
          "titleEn": "Application Note DK Tyzor Ferrous and Nonferrous Metal EN",
          "desc": "鋼鐵、鋁合金與鍍鋅板金屬防腐的「綠色無鉻鈍化」技術，形成緻密奈米氧化物薄膜，顯著提升塗層密著力與長效耐鹽霧防腐能力。",
          "advantages": [
            "在冷軋鋼、鋁合金及鍍鋅板表面形成均勻緻密的無機金屬氧化物鈍化膜。",
            "完全不含六價鉻等致癌有害物質，符合現代綠色環保金屬表面處理法規。",
            "顯著增強後續塗裝環氧、聚酯烤漆與金屬基材的化學鍵合密著力。",
            "有效抑制金屬在鹽霧環境下的電化學腐蝕與漆下生鏽蔓延。"
          ],
          "applications": [
            "鋼板鈍化",
            "鋁合金前處理",
            "鍍鋅鋼板",
            "無鉻防腐"
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
          "shortLabel": "玻璃表面塗層",
          "title": "玻璃表面塗層改性應用技術指南",
          "titleEn": "Application Note DK Tyzor Glass Surface Coatings EN",
          "desc": "玻璃熱噴塗與冷端塗層改性的專業技術，在高溫玻璃表面熱解沉積緻密 TiO2 薄膜，提高耐磨抗衝擊性能，並可調控光學反射特性。",
          "advantages": [
            "在 500~600°C 熱玻璃表面熱解沉積均勻連續的 TiO2 硬質氧化物奈米塗層。",
            "顯著提高玻璃瓶罐表面的抗衝擊與輸送帶摩擦刮花耐受度。",
            "作為優質 Sol-Gel 前驅體，可用於製備減反射（AR）鍍膜與自潔防污玻璃。",
            "改善常溫冷端有機塗層或絲印油墨在光滑玻璃表面上的浸水密著力。"
          ],
          "applications": [
            "建築玻璃",
            "車用玻璃",
            "玻璃瓶罐",
            "光學鍍膜"
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
          "shortLabel": "無機填料改性",
          "title": "無機填料表面改性與偶合技術指南",
          "titleEn": "Application Note DK Tyzor Inorganic Filler Modification EN",
          "desc": "碳酸鈣與二氧化矽等填料在塑料中分散不良的解方，單層分子包覆將親水轉親油，大幅降低混煉黏度、增加填充量並提升材料韌性。",
          "advantages": [
            "有機鈦分子在填料表面形成單分子吸附層，將親水表面轉化為親有機基質表面。",
            "大幅降低高填料體系（如高填充 PVC/PP）在混煉加工時的熔體黏度。",
            "防止微細填料在聚合物基質中團聚結塊，顯著改善製品外觀光澤與均勻度。",
            "顯著提高複合塑料的缺口衝擊強度與拉伸斷裂伸長率。"
          ],
          "applications": [
            "碳酸鈣",
            "高嶺土",
            "二氧化矽",
            "高填充塑料/橡膠複合材料"
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
          "shortLabel": "底塗打底劑",
          "title": "表面底漆與密著打底劑技術手冊",
          "titleEn": "Application Note DK Tyzor Surface Primers EN",
          "desc": "難附著塑料薄膜印刷前的「超薄底塗秘方」，低固含（1%~5%）噴塗即可發揮強大錨定效應，解決 OPP/PE/PET 印刷易脫墨的難題。",
          "advantages": [
            "配製成 1%~5% 低固含溶劑型底塗打底劑，塗佈量極低卻效果顯著。",
            "克服未電暈處理或低表面張力塑料薄膜印刷時易脫墨的頑固缺陷。",
            "常溫即可快速揮發成膜，無需繁複漫長的高溫烘烤熟化工藝。",
            "大幅提升面漆、膠黏劑與油墨在極端高溫高濕條件下的耐剝離強度。"
          ],
          "applications": [
            "塑料薄膜底塗",
            "難黏基材打底",
            "複合薄膜凹印"
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
          "shortLabel": "TPT 解凍指引",
          "title": "結凍 Tyzor TPT 正確解凍化解標準程序",
          "titleEn": "Application Note DK Tyzor Thawing Frozen TPT EN",
          "desc": "冬季低溫造成 TPT 結晶凝固時的官方標準處置程序，規範溫水浴或烘房解凍參數，嚴禁局部明火過熱，確保化解後催化活性 100% 不受損。",
          "advantages": [
            "Tyzor TPT 凝固點約為 17~20°C，冬季低溫易結晶凝固屬於正常物理現象。",
            "嚴禁使用明火或超過 60°C 的局部高溫加熱，避免催化劑局部熱分解變質。",
            "指導使用溫水浴、烘房或溫控加熱帶（40~50°C）進行均勻緩慢解凍。",
            "解凍後需確認液體完全清澈透明無沉澱，性能指標與原液 100% 一致。"
          ],
          "applications": [
            "工廠物料倉儲",
            "低溫儲運",
            "TPT 催化劑維護"
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
          "shortLabel": "酯交換反應",
          "title": "酯交換反應催化應用技術指南",
          "titleEn": "Application Note DK Tyzor Transesterification EN",
          "desc": "壓克力酯與特種酯類合成的高收率催化手冊，反應溫和無酸蝕、副產醇不裂解變質可高純度回收循環，色澤清澈透明。",
          "advantages": [
            "催化活性遠超傳統硫酸及對甲苯磺酸，催化用量僅需 0.1%~0.5% wt。",
            "反應溫和，有效避免副產烯烴生成，大幅提高高附加價值酯類收率。",
            "反應副產醇不發生深度裂解變質，回收醇純度高，可直接回用循環。",
            "產物色澤清澈明亮，特別適合高級壓克力單體及香精香料酯類合成。"
          ],
          "applications": [
            "壓克力酯單體",
            "高檔潤滑油合成",
            "香精香料酯"
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
          "shortLabel": "蒸氣壓曲線手冊",
          "title": "飽和蒸氣壓與溫度工程曲線手冊",
          "titleEn": "Application Note DK Tyzor Vapor Pressure vs Temperature EN",
          "desc": "減壓蒸餾工藝與半導體 CVD/ALD 氣相沉積設計的必備物性手冊，完整提供各純品型號在不同溫度下的精確飽和蒸氣壓工程數據。",
          "advantages": [
            "完整繪製 Tyzor TPT、TnBT 等各純品型號在不同溫度下的飽和蒸氣壓對照曲線。",
            "提供減壓蒸餾分離與提純工藝所需之精確真空度與沸點數據基準。",
            "為半導體及先進鍍膜的 CVD / ALD 氣相沉積提供關鍵氣相輸送工藝參數。",
            "提供儲槽安全洩壓與冷凝回收系統的設計工程計算基礎。"
          ],
          "applications": [
            "化工減壓蒸餾",
            "半導體 CVD/ALD 氣相沉積",
            "儲罐洩壓設計"
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
          "shortLabel": "Activate 422 食品接觸",
          "title": "Tyzor® ACtivate™ 422 食品接觸塑料包裝合規評估報告",
          "titleEn": "TI DK Tyzor Activate 422 Plastic Packaging for Food Contact",
          "model": "Activate 422",
          "desc": "食品飲料包裝 PET 樹脂合成的國際安全合規權威報告，完全排除傳統重金屬銻催化劑毒性，通過 FDA 與 EFSA 雙重食品接觸認證。",
          "advantages": [
            "完全通過美國 FDA 21 CFR 177.1630 及歐洲 EFSA 食品接觸法規嚴苛安全標準。",
            "耐水解配位結構，在含有微量水分的單體環境中仍能維持高催化活性。",
            "徹底排除傳統重金屬銻催化劑毒性，解決食品級聚酯的環保重金屬隱患。",
            "成品瓶片維持優異的 L* 亮度透光率，黃色指數極低（b* < 1.5）。"
          ],
          "applications": [
            "食品級 PET 瓶",
            "飲料包裝",
            "食品熱收縮膜",
            "無銻環保聚酯"
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
          "shortLabel": "Activate 422 瓶級樹脂",
          "title": "Tyzor® ACtivate™ 422 PET 瓶級樹脂固相縮聚研究報告",
          "titleEn": "TI DK Tyzor Activate 422 for PET Bottle Resins",
          "model": "Activate 422",
          "desc": "礦泉水瓶聚酯切片固相縮聚加速專用催化劑，顯著抑制異味乙醛（AA）釋出量，提高吹瓶結晶均勻度與瓶胚高透明度。",
          "advantages": [
            "固相縮聚（SSP）反應速率提升 20%~30%，快速達到高極限黏度（IV 0.84 dL/g）。",
            "瓶胚吹瓶成型時乙醛（Acetaldehyde）釋出量極低（< 1.0 ppm），確保無異味。",
            "優化冷卻結晶動力學，大幅提升預成型瓶胚（Preform）的透明度與拉伸均勻度。",
            "耐水解穩定性顯著優於傳統烷氧基鈦，催化劑用量可減少 30% 以上。"
          ],
          "applications": [
            "PET 礦泉水瓶切片",
            "固相縮聚 (SSP)",
            "吹瓶瓶胚製造"
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
          "shortLabel": "IAM 油墨專用",
          "title": "Tyzor® IAM 印刷油墨專用有機鈦技術資料",
          "titleEn": "TI DK Tyzor IAM for Ink",
          "model": "IAM",
          "desc": "包裝印刷油墨的耐刮與密著救星，大幅提高在難印塑膠薄膜上的牢度，與油墨樹脂相容性極佳，膠帶撕拉測試 100% 不掉墨。",
          "advantages": [
            "在醇類、酯類溶劑中溶解度極佳，與各類油墨連接料長期共存不增稠、不結塊。",
            "大幅提升在 OPP、BOPP、PE、PET、尼龍等塑料薄膜上的油墨密著力。",
            "百格膠帶剝離測試（Scotch Tape Test）達到 100% 不掉墨的高附著水準。",
            "油墨固化後具備優良的抗回黏（Anti-blocking）與抗摩擦刮傷性能。"
          ],
          "applications": [
            "軟包裝凹版油墨",
            "柔印油墨",
            "BOPP/PET 薄膜印刷"
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
          "shortLabel": "IAM 溶劑型油墨",
          "title": "Tyzor® IAM 溶劑型包裝印刷油墨性能實測報告",
          "titleEn": "TI DK Tyzor IAM for Solvent-Based Printing Ink",
          "model": "IAM",
          "desc": "耐高溫蒸煮袋（Retort Pouch）油墨的關鍵交聯助劑，實測耐受 121°C 沸水高壓蒸煮不脫層、-20°C 冷凍不脆裂，圖案光澤飽滿無霧影。",
          "advantages": [
            "與硝化纖維（NC）樹脂中羥基快速配位交聯，顯著加快印刷烘道固化速度。",
            "耐受高溫蒸煮（121°C 30 分鐘）耐沸水蒸煮測試，無起泡、無皺折、無脫墨。",
            "在 -20°C 低溫冷凍儲存環境下依然保持韌性附著力，抗低溫彎折揉曲。",
            "油墨印刷圖案光澤飽滿透亮，無霧影（Haze）現象。"
          ],
          "applications": [
            "耐高溫蒸煮食品袋",
            "鋁箔複合油墨",
            "冷凍包裝膜"
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
      "principles": [],
      "catalog": [
        {
          "docId": "ORI-01",
          "filename": "Brochure Orion Carbon Black CN.pdf",
          "pdfPath": "techdatadb/4.Orion/2.Orion Carbon Black 碳黑 目錄 （16）冊/Brochure Orion Carbon Black CN.pdf",
          "docType": "2. Brochure 總覽型錄",
          "lang": "CN (簡體中文)",
          "version": "原廠發行版",
          "brand": "Orion",
          "shortLabel": "特級碳黑型錄 (中)",
          "title": "Orion 特級碳黑產品總覽手冊 (中文版)",
          "titleEn": "Brochure Orion Carbon Black CN",
          "desc": "Orion Engineered Carbons 官方中文版總覽型錄，涵蓋氣黑、爐黑與燈黑完整品種，提供黑度值、著色力、吸油量全方位的選型矩陣。",
          "advantages": [
            "完整收錄氣黑（Gas Black）、爐黑（Furnace Black）與燈黑（Lamp Black）品種特性。",
            "提供黑度值（My）、著色力（Tint Strength）與吸油值（OAN）物性對照全覽。",
            "針對頂級汽車原廠漆推薦旗艦高黑度型號 Colour Black FW 200、FW 2、FW 285。",
            "提供導電抗靜電碳黑（PRINTEX 系列）與通用工業塗料經濟型解決方案。"
          ],
          "applications": [
            "汽車塗料",
            "工業塗料",
            "印刷油墨",
            "塑料母粒",
            "特種導電"
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
          "shortLabel": "特級碳黑型錄 (英)",
          "title": "Orion 特級碳黑產品總覽手冊 (英文版)",
          "titleEn": "Brochure Orion Carbon Black EN",
          "desc": "全球最詳盡的特種碳黑技術矩陣，深入解析原生粒徑、表面含氧基團與聚集體結構對加工流變、光學密度與黑相的深層影響。",
          "advantages": [
            "深入剖析粒徑大小、結構高低與後氧化表面化學三大核心參數的交互作用。",
            "詳解高表面含氧官能團（低 pH 氣黑）在高階樹脂中的優異潤濕與防絮凝機理。",
            "針對印刷油墨提供低黏度、高光澤、強藍相的專用碳黑選型指南。",
            "針對工程塑料提供高分散性、抗紫外光降解（UV Protection）與耐候型號推薦。"
          ],
          "applications": [
            "高階塗料",
            "特種油墨",
            "工程塑料",
            "合成纖維"
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
          "shortLabel": "碳黑堅牢度",
          "title": "特級碳黑耐光耐候堅牢度性能手冊 (TI 1480)",
          "titleEn": "Application Note Orion Fastness of Specialty Carbon Blacks EN",
          "desc": "特級碳黑戶外耐候防禦力的硬核數據，耐光等級達最高 8 級，陽光紫外線長年暴曬不褪色、耐酸雨與有機溶劑侵蝕，耐溫超過 300°C。",
          "advantages": [
            "特級碳黑擁有高達 8 級（藍色羊毛標準最高級）的頂級耐光耐候堅牢度。",
            "在極端戶外陽光與紫外線長期暴曬下，塗層色相完全不褪色、不變灰。",
            "具備卓越的耐酸雨、耐強鹼、耐氧化劑與有機溶劑等化學品侵蝕耐久性。",
            "耐高溫熱穩定性超過 300°C 以上，完全滿足汽車高溫烤漆與粉體塗料高溫烘烤要求。"
          ],
          "applications": [
            "戶外建築塗料",
            "重防腐防護漆",
            "汽車修補漆",
            "農用薄膜"
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
          "shortLabel": "碳黑安全裝卸",
          "title": "特級碳黑安全裝卸與工程操作指南 (TI 1451)",
          "titleEn": "Application Note Orion Handling of Carbon Black EN",
          "desc": "特種碳黑儲運、氣力輸送與防塵排氣的標準工程規範，解析粉狀與造粒珠狀流動性差異，防範粉塵爆炸並改善車間空氣品質。",
          "advantages": [
            "詳解粉狀（Powder）與珠狀/造粒（Beaded）碳黑的流動性與儲運特性差異。",
            "提供密閉式儲料倉、管路防塵氣力輸送與吸塵除塵設備的工程設計規範。",
            "防範粉塵爆炸安全指引，涵蓋防靜電接地、最小點火能量與通風防爆標準。",
            "提供投料計量防飛揚操作規程，保障車間空氣品質與操作人員健康。"
          ],
          "applications": [
            "工廠倉儲物流",
            "氣力輸送工程",
            "防爆除塵設計",
            "車間環安衛"
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
          "shortLabel": "現代塗料碳黑",
          "title": "現代塗料特級碳黑顏料技術手冊",
          "titleEn": "Application Note Orion Pigments Special Carbon Black in Modern Coatings EN",
          "desc": "現代塗料配方調配的黑度與流變平衡指南，解析粒徑越小黑度越高但黏度上升的控制關鍵，教你如何兼具極致深黑與鏡面清漆光澤。",
          "advantages": [
            "解析粒徑越小黑度越高（Jetness 提升），但比表面積增大會導致體系吸油量上升的平衡工藝。",
            "闡明後氧化氣黑（如 Special Black 4/6）如何提供優異流變流平與清漆光澤。",
            "推薦調色底漆專用粗粒徑、強著色力、耐沉降的經濟型碳黑品種。",
            "提供水性塗料分散體（PUD/壓克力）中碳黑防絮凝與長效儲存防返粗技術。"
          ],
          "applications": [
            "汽車 OEM 漆",
            "修補漆",
            "工業防護塗料",
            "木器黑漆"
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
          "shortLabel": "纖維原液著色",
          "title": "合成纖維原液著色特級碳黑技術手冊 (TI 1454)",
          "titleEn": "Application Note Orion Special Black for Fibers EN",
          "desc": "合成纖維紡絲原液著色不塞網、不斷絲的關鍵方案，超純淨低灰分，紡絲過濾壓升極緩慢，纖維色澤均勻且耐高溫水洗日曬。",
          "advantages": [
            "針對聚酯（PET）、聚醯胺（PA/尼龍）及丙綸（PP）原液著色（Spin Dyeing）設計。",
            "超高純度與極低篩餘物含量，紡絲過濾壓升值（DFP）極低，有效防止紡絲噴絲板堵孔。",
            "原液著色纖維色澤均勻飽滿，耐洗滌摩擦、耐日光暴曬牢度達到最高等級。",
            "具備優良的高剪切熱穩定性，在 280~300°C 高溫熔融紡絲擠出時不分解變質。"
          ],
          "applications": [
            "PET 聚酯纖維",
            "尼龍錦綸",
            "丙綸",
            "汽車內飾紡織品"
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
          "shortLabel": "分散製程指南",
          "title": "特級碳黑高效潤濕分散製程指引 (TI 1484)",
          "titleEn": "Application Note Orion Special Carbon Black Disperse Guideline EN",
          "desc": "碳黑研磨不發灰、不返粗的製程秘笈，傳授高分子分散劑最佳添加量計算、砂磨機氧化鋯珠選型及黑度/黏度監控曲線標準。",
          "advantages": [
            "傳授「潤濕-粉碎-穩定」三步曲工藝，詳述超分散劑對吸附層厚度的穩定機制。",
            "提供依據碳黑 BET 比表面積精確計算高分子分散劑最佳添加量（DOP 計算公式）。",
            "指導砂磨機鋯珠選型（推薦 0.4~0.8 mm 氧化鋯珠）、填充率與研磨能量密度控制。",
            "提供黑度值、光澤度、刮板細度計與流變黏度隨研磨時間變化的標準監控曲線。"
          ],
          "applications": [
            "砂磨機研磨",
            "分散劑配比計算",
            "高色素碳黑預分散"
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
          "shortLabel": "工業防護塗料",
          "title": "工業防護塗料特級碳黑選用手冊 (TI 1455)",
          "titleEn": "Application Note Orion Special Carbon Black for Industrial Coatings EN",
          "desc": "工程機械漆、船舶鋼構防腐塗料的碳黑性價比選型指南，遮蓋力強、著色力高，改善塗料長期儲存防沉降，長效耐腐蝕不變色。",
          "advantages": [
            "針對環氧底漆、聚氨酯面漆與醇酸防鏽漆推薦適配之工業級特種碳黑。",
            "提供高遮蓋力與高著色力型號（如 XPB 系列），顯著降低配方顏料添加比例。",
            "優化塗料儲存穩定性，防止碳黑與重質防鏽填料在長達 12 個月內結塊沉底。",
            "在腐蝕環境中展現強韌化學惰性，配合防鏽顏料大幅延長鹽霧防腐時效。"
          ],
          "applications": [
            "環氧防腐底漆",
            "聚氨酯面漆",
            "船舶重防腐",
            "鋼結構漆"
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
          "shortLabel": "噴墨油墨碳黑",
          "title": "數位噴墨 (Inkjet) 油墨碳黑應用指南 (TI 1482)",
          "titleEn": "Application Note Orion Special Carbon Black for Inkjet Inks EN",
          "desc": "數位噴墨微米級噴嘴不堵塞的超純淨碳黑方案，次微米極窄粒徑分佈（D99 < 150 nm），噴射流暢不斷墨，光學密度超過 1.8。",
          "advantages": [
            "超低粗顆粒殘留（篩餘物極限控制），徹底避免高速壓電式噴頭堵塞。",
            "奈米級狹窄粒徑分佈（D99 < 150 nm），提供極低的動態黏度與優異的噴射流暢性。",
            "經高純淨水洗與化學表面修飾，離子雜質與重金屬含量極低，墨水儲存期長。",
            "在相片紙、銅版紙及紡織印花上展現極高光學密度（OD > 1.8）與乾淨黑度。"
          ],
          "applications": [
            "壓電噴墨墨水",
            "紡織印花墨水",
            "廣告寫真噴墨",
            "桌面噴墨"
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
          "shortLabel": "粉體塗料碳黑",
          "title": "熱固性粉體塗料專用特級碳黑技術手冊 (TI 1456)",
          "titleEn": "Application Note Orion Special Carbon Black for Powder Coatings EN",
          "desc": "粉體塗料表面抗針孔與均勻帶電的碳黑秘訣，乾粉流動性優異、熔融擠出分散好，靜電噴塗上粉率高，烘烤固化不起泡不析出。",
          "advantages": [
            "優化碳黑表面電阻與介電性能，顯著提升粉體塗料摩擦噴槍與電暈噴槍的上粉率。",
            "在雙螺桿擠出機熔融混煉中極易均勻分散，大幅消除成膜表面的微細針孔與縮孔。",
            "高耐溫特性，在 200°C 以上高溫烘烤固化爐中不揮發、不析出、無煙氣排放。",
            "提供從高光澤鋼琴黑到全啞光皺紋粉體塗料的專屬碳黑型號搭配。"
          ],
          "applications": [
            "金屬家電粉末烤漆",
            "鋁型材粉末噴塗",
            "防腐管道粉末塗料"
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
          "shortLabel": "印刷油墨碳黑",
          "title": "包裝與出版印刷油墨碳黑技術手冊 (TI 1452)",
          "titleEn": "Application Note Orion Special Carbon Black for Printing Inks EN",
          "desc": "印刷油墨黑度與流變平衡指南，降低高速運轉墨輥黏度阻力，印品色調泛純淨藍相不泛黃，文字線條銳利且不易透印紙背。",
          "advantages": [
            "針對膠印（Offset）、凹版（Gravure）與柔版（Flexo）油墨的流變學特性量身推薦。",
            "提供低黏度、高色素裝載量的造粒特種碳黑（PRINTEX 系列），降低印刷墨輥阻力。",
            "在出版高速輪轉印刷中呈現純淨藍相底色（Bluish Undertone），文字邊緣銳利不泛黃。",
            "高結構碳黑有效防止油墨透印過紙背，改善印品在非吸收性紙張上的展色與遮蓋。"
          ],
          "applications": [
            "平版膠印油墨",
            "凹版包裝油墨",
            "柔印油墨",
            "新聞輪轉油墨"
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
          "shortLabel": "調色塗料碳黑",
          "title": "調色與底漆塗料特級碳黑技術指引 (TI 1459)",
          "titleEn": "Application Note Orion Special Carbon Black for Tinting Coating EN",
          "desc": "配製灰色與淺色塗料的「調色神器」，粗粒徑防絮凝設計，指研測試 ΔE < 0.5，徹底告別滾塗噴塗時常見的浮色發花頑疾。",
          "advantages": [
            "專為白色漆體系（如鈦白粉）調配灰色、彩色共混而設計之專用調色碳黑。",
            "粗粒徑、低比表面積設計，極大化降低與白色顏料之間的競爭吸附與絮凝返粗。",
            "指研測試（Rub-out Test）ΔE < 0.5，徹底解決塗膜滾塗或噴塗時浮色發花的頑疾。",
            "提供優異的著色力批次穩定性，保證電腦配色系統的色差極限精準度。"
          ],
          "applications": [
            "建築外牆調色乳膠漆",
            "工業底漆調色",
            "汽車灰底漆"
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
          "shortLabel": "食品包裝油墨",
          "title": "食品包裝印刷油墨特級碳黑合規指引 (TI 1453)",
          "titleEn": "Application Note Orion Special Carbon Black in Food Package Printing Ink EN",
          "desc": "食品包裝印刷的法規安全認證指南，重金屬與芳香胺殘留遠低於法規限值，完全符合 FDA 與瑞士食品條例，印品黑度純正且無氣味殘留。",
          "advantages": [
            "符合美國 FDA 21 CFR、瑞士食品包裝條例（Swiss Ordinance）及歐盟食品接觸標準。",
            "多環芳香烴（PAHs）與可萃取初級芳香胺（PAA）含量遠低於國際法規限值。",
            "重金屬（鉛、鎘、汞、六價鉻）殘留檢測符合純淨度最高安全指標。",
            "在食品軟包裝複合膜與紙盒印刷中提供極致黑度，且無溶劑氣味污染風險。"
          ],
          "applications": [
            "食品軟包裝薄膜",
            "利樂包裝盒",
            "紙杯印刷",
            "煙酒包裝"
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
          "shortLabel": "低 PAHs 環保碳黑",
          "title": "低多環芳香烴 (Low PAHs) 環保碳黑技術指南 (TI 1483)",
          "titleEn": "Application Note Orion Special Carbon Black with Low PAHS EN",
          "desc": "直接人體接觸產品的最高安全等級碳黑，通過德國 GS 認證最高類別 1 最嚴標準，總 PAHs 含量低於 1.0 ppm，安全健康無負擔。",
          "advantages": [
            "完全符合德國 GS 認證 Mark Specification AfPS GS 2019:01 PAK 類別 1 最嚴標準。",
            "針對 15 種有害多環芳香烴化合物進行深度熱裂解純化，總 PAHs 含量低於 1.0 ppm。",
            "適用於兒童玩具塑料、智慧手環矽膠腕帶、手持電子設備外殼等直接皮膚接觸製品。",
            "在保持極高純淨安全等級的同時，不犧牲著色力、黑度與塑膠加工力學性能。"
          ],
          "applications": [
            "嬰幼兒玩具",
            "穿戴裝置矽膠腕帶",
            "手持電子設備外殼",
            "食品級橡膠"
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
          "shortLabel": "FW 310 塗料應用 (中)",
          "title": "Colour Black FW 310 水性與溶劑型超高黑度炭黑 (中文版)",
          "titleEn": "TI Orion Colour Black FW 310 in Coating CN",
          "model": "FW 310",
          "desc": "高端塗料界的「黑度天花板」，平均原生粒徑僅 16 nm，黑度值 My > 300 且泛純淨強烈藍相，清漆遮蓋下展現深邃如水晶般的鏡面外觀。",
          "advantages": [
            "平均原生粒徑僅 16 nm，BET 比表面積高達 320 m²/g，揮發分約 5.0%。",
            "黑度值（My）超過 300，展現業界極致深黑度（Deepest Jetness）與強烈藍相底色（dM > 20）。",
            "表面經深度氧化處理，富含羥基與羧基含氧官能團，與高階丙烯酸、聚氨酯具極佳潤濕相容性。",
            "實測在高級汽車清漆遮蓋下展現水晶般無霧影（Haze-free）鏡面極致外觀。"
          ],
          "applications": [
            "豪車 OEM 原廠漆",
            "高級汽車修補漆",
            "頂級鋼琴漆",
            "旗艦手機外殼"
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
          "shortLabel": "FW 310 塗料應用 (英)",
          "title": "Colour Black FW 310 Deepest Blackness (英文版)",
          "titleEn": "TI Orion Colour Black FW 310 in Coating EN",
          "model": "FW 310",
          "desc": "FW 310 官方原廠英文測試報告，詳細公開水性與溶劑型 2K 聚氨酯體系的研磨珠料比與分散曲線，經 QUV 3000 小時老化光澤完全保持。",
          "advantages": [
            "官方指標：Primary particle size 16 nm, High specific surface area 320 m²/g。",
            "最高黑度數值 My > 300，清晰透亮之藍色底相（dM > 20），無泛棕發霧現象。",
            "提供水性聚氨酯分散體（PUD）與溶劑型 2K 聚氨酯體系之研磨珠料比與分散曲線。",
            "極佳之抗紫外光老化耐久度，經過 QUV-A 3000 小時測試光澤與黑度完全保持。"
          ],
          "applications": [
            "高端光學塗層",
            "水性聚氨酯分散體 (PUD)",
            "高黑電子塗層"
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
          "shortLabel": "工業 PTFE 替代方案",
          "title": "MPI 工業塗料 PTFE 取代系列手冊 (2026)",
          "titleEn": "Brochure MPI Industrial PTFE Alternatives EN 2026",
          "desc": "應對全球 PFAS 禁令的權威官方解方，100% 無氟卻能達到媲美微粉 PTFE 的抗刮耐磨與爽滑度，不損害塗層清漆光澤與重塗性。",
          "advantages": [
            "100% 符合歐盟 REACH 及美國各州嚴格的無氟（PFAS-Free）環保法規。",
            "採用專利改性高密度聚乙烯、聚醯胺與天然硬蠟複合技術，徹底替代微粉 PTFE。",
            "在金屬烤漆、木器漆與卷鋼塗層中提供等同甚至更優異的 Taber 耐磨耗數據。",
            "維持極低動態摩擦係數（COF），不損害漆膜透明度、清漆光澤度與重塗附著力。"
          ],
          "applications": [
            "工業塗料",
            "金屬烤漆",
            "罐裝塗料",
            "卷鋼塗料"
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
          "shortLabel": "特種蠟助劑型錄",
          "title": "MPI 特種微粉蠟助劑與微粉粉體總覽型錄 (2026)",
          "titleEn": "Brochure MPI Specialty Wax Additives and Fine Powders EN 2026",
          "desc": "全球微粉蠟權威 MPI 最新官方選型大典，完整涵蓋 PE 蠟、PP 蠟、巴西棕櫚蠟與聚醯胺蠟，提供耐刮、消光、抗回黏與手感改良的全方位解方。",
          "advantages": [
            "詳列聚乙烯（PE）、聚丙烯（PP）、天然巴西棕櫚蠟、聚醯胺及微粉複合蠟全系列。",
            "提供平均粒徑（D50、D90）、熔點、密度及不同塗層體系中的推薦添加量（0.5%~5%）。",
            "系統涵蓋耐磨耐刮（Slip & Mar）、消光控制（Matting）、觸感爽滑（Soft Touch）三大維度。",
            "提供溶劑型、水性塗料、UV 能量固化及熱固性粉體塗料的精準產品選型矩陣。"
          ],
          "applications": [
            "塗料",
            "油墨",
            "皮革塗飾",
            "木器傢俱",
            "粉體塗料"
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
          "shortLabel": "無氟複合材料",
          "title": "無氟 (PFAS-Free) 先進複合材料選用指南",
          "titleEn": "Application Note MPI Advanced Composite Selector Guide PFAS Free EN 2025",
          "desc": "碳纖維與先進複合材料的無氟耐磨潤滑手冊，能在高溫固化中均勻遷移至表面形成物理保護層，降低滑動摩擦阻力並提高表面抗碎石衝擊性。",
          "advantages": [
            "針對熱固性環氧樹脂、雙馬來醯亞胺（BMI）等高溫樹脂基複合材料量身打造。",
            "完全排除全氟化合物（PFAS），滿足航太與高端汽車工業最新綠色材料要求。",
            "在複合材料固化過程中均勻分散遷移至表面，顯著降低表面滑動摩擦阻力。",
            "提升複材表面抗碎石衝擊與耐磨損壽命，避免纖維裸露或微裂紋擴展。"
          ],
          "applications": [
            "碳纖維複合材料",
            "風電葉片",
            "航太材料",
            "高溫環氧樹脂基材"
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
          "shortLabel": "微粉蠟分散指引",
          "title": "微粉蠟最佳分散操作指引 (Dispersing Guide)",
          "titleEn": "Application Note MPI How to Disperse Micronized Wax EN 2024",
          "desc": "微粉蠟投料分散不結塊、無顆粒麻點的官方操作指南，嚴格規範鋸齒盤線速度、控溫在熔點以下 15~20°C，防止蠟粉高溫反聚結塊。",
          "advantages": [
            "指導採用高剪切分散機（Cowles 鋸齒盤），控制線速度在 15~20 m/s 達到快速均勻分散。",
            "詳述在清漆體系中製作預分散蠟漿（Wax Slurry）的固含比例與潤濕劑搭配。",
            "嚴格控制分散溫度在蠟熔點以下至少 15~20°C，防止蠟粉高溫軟化反聚成大團。",
            "提供刮板細度計標準檢測規程，保證蠟粉完全達到標稱微米細度，無顆粒麻點。"
          ],
          "applications": [
            "高剪切分散",
            "預分散蠟漿製作",
            "塗料油墨車間生產"
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
          "shortLabel": "MicroTouch 觸感助劑",
          "title": "MicroTouch 觸感改良助劑應用技術手冊",
          "titleEn": "Application Note MPI MicroTouch EN",
          "desc": "高檔手機外殼與車載內飾「天鵝絨/柔潤皮革觸感漆」的秘訣，賦予塗層嬰兒肌膚般溫潤觸感，硬度達 F~H 且耐 48 小時人工汗液侵蝕不起泡。",
          "advantages": [
            "由特殊高分子彈性微粉構成，賦予塗膜絲滑天鵝絨（Velvet）與柔潤皮革觸感。",
            "成膜硬度可達 F~H 鉛筆硬度，徹底解決傳統手感漆「手感好但一刮就花」的弊端。",
            "具備卓越的抗指紋、抗油污與耐人工汗液侵蝕性能，經 48 小時耐汗液測試不起泡。",
            "在雙組份聚氨酯與水性觸感塗料中極易分散，消光均勻透亮，無粗糙顆粒感。"
          ],
          "applications": [
            "手感漆",
            "天鵝絨觸感漆",
            "消費電子外殼",
            "車載內飾塑料漆"
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
          "shortLabel": "金屬罐容器塗料",
          "title": "金屬罐與容器塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Can Container Coatings EN 2026",
          "desc": "食品飲料金屬罐高速衝壓成型不破漆的專用蠟，符合 FDA 食品認證，摩擦係數極低（COF < 0.08），耐 200°C 高溫烤漆且耐高壓高溫蒸煮。",
          "advantages": [
            "完全通過 FDA 175.300 食品接觸塗層認證，適用於食品罐、飲料罐內外塗料。",
            "提供極低表面摩擦係數（COF < 0.08），耐受高速製罐衝壓、縮頸與翻邊成型加工。",
            "高熔點硬質聚乙烯蠟在罐身 200°C 高溫烤房固化過程中不起煙、不污染烘道。",
            "在高溫滅菌蒸煮鍋中維持附著力與表面滑爽，防止裝罐堆疊碰撞擦傷刮破。"
          ],
          "applications": [
            "二片飲料罐",
            "食品三片罐",
            "金屬桶外塗",
            "旋蓋塗層"
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
          "shortLabel": "能量固化油墨塗料",
          "title": "UV / 能量固化油墨與塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Energy Curable Inks and Coatings EN 2026",
          "desc": "紫外光快速固化塗料不被消光蠟阻礙引發效率的選型指南，在毫秒級固化中迅速浮於表面發揮抗刮保護，厚膜清漆透明清澈不泛白霧。",
          "advantages": [
            "專為 100% 固含 UV 單體、低黏度寡聚物與電子束（EB）固化體系優化設計。",
            "在極短的紫外光照射時間內迅速浮出表面發揮耐刮保護，不影響光引發劑固化速率。",
            "具有極高的折射率匹配性，在厚膜 UV 清漆中透明度極高，不泛白、無霧影。",
            "在高速印刷模切、折盒壓痕工藝中提供強效抗回黏與抗刮痕（Anti-mar）保護。"
          ],
          "applications": [
            "UV 能量固化塗料",
            "UV 印刷油墨",
            "電子束 (EB) 固化",
            "包裝過油光油"
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
          "shortLabel": "工業塗料選用指南",
          "title": "工業防腐與機械塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Industrial Coatings EN 2026",
          "desc": "重型機械與鋼構塗裝耐磨防碰撞的強化指南，微粉顆粒在漆膜表面形成物理防護屏障，抗重壓堆疊黏連，且完全不影響道間重塗附著力。",
          "advantages": [
            "針對環氧、聚氨酯與丙烯酸工業塗料提供耐磨抗擦、抗金屬劃傷全面解決方案。",
            "微粉蠟顆粒浮於表面形成物理屏障，有效降低輸送與裝配過程中的磨擦刮花。",
            "顯著增強塗層抗重壓黏連（Anti-blocking）性能，防止工件堆疊入庫時漆膜沾黏破損。",
            "與防腐體系相容性極佳，不影響底層與面漆的道間重塗附著力。"
          ],
          "applications": [
            "重型工程機械塗料",
            "鋼結構耐磨漆",
            "工業清漆與色漆"
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
          "shortLabel": "工業地坪耐磨塗料",
          "title": "工業地坪耐磨塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Industrial Flooring Coatings EN 2026",
          "desc": "工廠車間地坪耐叉車碾壓與抗黑輪胎印的專用指南，Taber 耐磨耗顯著降低，創造均勻微織紋防滑效果，耐磨防滑又好清潔。",
          "advantages": [
            "專為環氧自流平、聚氨酯超耐磨地坪及水性地坪清漆打造的抗磨防滑方案。",
            "大幅降低重型叉車與推車頻繁碾壓下的磨損率，Taber 耐磨耗減重顯著減少。",
            "提供均勻的微織紋防滑效果，符合工業地坪濕態防滑安全係數標準。",
            "具有極強的抗輪胎印痕性（Anti-tire mark），防止橡膠輪胎熱壓留黑痕，極易清潔。"
          ],
          "applications": [
            "環氧地坪漆",
            "聚氨酯超耐磨地坪",
            "車間防滑地坪",
            "防輪胎黑痕"
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
          "shortLabel": "粉體塗料微粉蠟",
          "title": "金屬熱固性粉體塗料專用微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Powder Coatings EN 2026",
          "desc": "金屬家電粉末烤漆消除針孔脫氣與調配砂紋織紋的必備助劑，熔融固化脫氣順暢，提升耐刮硬度，並保證夏季倉儲粉體不結塊。",
          "advantages": [
            "在粉末熔融固化時發揮優異脫氣（Degassing）效果，徹底消除厚塗產生的針孔微泡。",
            "提供從高光耐刮擦（0.5% 添加）到粗細均勻砂紋、皺紋粉體塗料的多規格選型。",
            "顯著提升金屬表面耐鉛筆硬度與耐鋼絲絨擦拭堅牢度，不易留劃痕。",
            "改善乾粉流動性與抗結塊性，確保在夏季高溫潮濕倉儲環境下粉體不結塊。"
          ],
          "applications": [
            "金屬粉末烤漆",
            "鋁型材粉末噴塗",
            "金屬傢俱烤漆",
            "皺紋砂紋粉"
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
          "shortLabel": "印刷油墨抗耐磨",
          "title": "印刷油墨抗耐磨微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide Printing Inks EN 2026",
          "desc": "包裝紙盒印刷品抗運輸碰撞刮傷的選型指南，Sutherland 摩擦次數提升 300% 以上，高剪切墨輥不飛墨不堆墨，網點清晰度飽滿。",
          "advantages": [
            "針對平版膠印、凹版軟包裝與柔版印刷油墨提供最精準的耐擦耐刮蠟粉搭配。",
            "大幅提升 Sutherland 摩擦測試儀（Rub Tester）循環次數達 300% 以上。",
            "粒徑嚴格受控（D50 3~5 μm），在高剪切墨輥上不堆墨、不飛墨，維持清晰網點。",
            "改善油墨在金屬箔、塑膠薄膜與塗布紙上的轉移性與表面滑動手感。"
          ],
          "applications": [
            "平版膠印油墨",
            "凹版包裝油墨",
            "柔印水性油墨",
            "精品紙盒印刷"
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
          "shortLabel": "木器傢俱塗料",
          "title": "木器與傢俱塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI SelectorGuide WoodCoatings EN 2026",
          "desc": "高級實木家具耐指甲劃花與呈現天然溫潤質感的必備手冊，賦予如絲般柔順手感，清漆透明清澈不泛白霧，縮短堆疊包裝等待週期。",
          "advantages": [
            "針對 NC 硝基漆、PU 聚氨酯漆與水性木器漆量身推薦消光抗刮蠟型號。",
            "賦予漆膜如絲般順滑的觸感，大幅增強抗指甲刮劃（Anti-mar）與硬幣耐劃傷性。",
            "在清漆中提供極佳透明度，保留天然木材織紋質感，不泛白、無渾濁霧霾。",
            "改善堆疊包裝抗黏連性能，縮短家具塗裝下線打包等待週期。"
          ],
          "applications": [
            "實木傢俱漆",
            "櫥櫃烤漆",
            "NC/PU 木器漆",
            "水性木器清漆"
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
          "title": "建築裝飾塗料微粉蠟選用指南",
          "titleEn": "Application Note MPI Wax SelectorGuide Architectural Coatings EN 2026",
          "desc": "室內外乳膠漆耐反覆擦洗與抗污防暗痕的強化方案，耐濕洗刷次數倍增，外牆具荷葉疏水自潔效果，髒污手痕一擦即淨。",
          "advantages": [
            "在水性丙烯酸乳膠漆與外牆塗料中作為表面抗刮防污改性劑。",
            "大幅提升漆膜耐濕擦洗循環次數（ASTM D2486），達到優級品高耐洗刷標準。",
            "微粉蠟浮於漆膜微孔表面，防止日常手痕、金屬鑰匙刮蹭留下難看暗痕。",
            "提供優異的水珠荷葉疏水效應，減少外牆雨水滲透與灰塵附著。"
          ],
          "applications": [
            "水性內外牆乳膠漆",
            "抗污塗料",
            "彈性外牆漆",
            "荷葉疏水塗層"
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
          "shortLabel": "MicroTouch 起始配方",
          "title": "MicroTouch 觸感改良起始配方指南",
          "titleEn": "Formulation Guide MPI MicroTouch EN",
          "desc": "天鵝絨觸感漆的實戰配方指南，公開添加量 3%~8% 的樹脂固化劑比例與投料工藝，百格附著力達 5B，耐酒精擦拭 500 次不發白。",
          "advantages": [
            "詳細列出達到 2~10 GU 低光澤度天鵝絨手感的具體添加比例（通常 3%~8% wt）。",
            "規範各組分（羥基丙烯酸、多異氰酸酯固化劑、溶劑）的精準投料順序與研磨轉速。",
            "實測塗膜百格附著力達 5B，耐 75% 醫用酒精擦拭 500 次完全不發白。",
            "提供溶劑型 2K PU 與環保水性體系兩套成熟的起始參考配方。"
          ],
          "applications": [
            "天鵝絨手感漆",
            "高檔消費電子塗層",
            "車載內飾漆配方"
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
          "shortLabel": "PolyGlide 1226XF",
          "title": "PolyGlide 1226XF 超細耐磨複合蠟性能研究報告",
          "titleEn": "TI MPI PolyGlide 1226XF Performance Study EN 202407",
          "model": "PolyGlide 1226XF",
          "desc": "超細粒徑（D50 約 4.0~5.5 μm）複合蠟的硬核實測報告，表面摩擦係數驟降超過 50%，提供極限 Taber 耐磨保護，且清漆清澈見底無晶點。",
          "advantages": [
            "採用專利高密度聚乙烯與特種硬質高分子複合，D50 粒徑僅約 4.0~5.5 μm。",
            "在薄膜印刷油墨與工業烤漆中展現出色的 Taber 與 Sutherland 耐磨耗保護。",
            "顯著降低表面動態摩擦係數（COF 降幅超過 50%），滑爽觸感持久不消退。",
            "在透明高光清漆中完全不影響光澤度，塗膜清澈見底、無顆粒晶點。"
          ],
          "applications": [
            "薄膜包裝油墨",
            "工業卷鋼烤漆",
            "高光清漆耐磨改性"
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
          "shortLabel": "PropylMatte 31 HD",
          "title": "PropylMatte 31 HD 與 AquaMatte 消光效率研究報告",
          "titleEn": "TI MPI PropylMatte 31 HD and AquaMatte Matting Efficiency Study EN",
          "model": "PropylMatte 31 HD",
          "desc": "聚丙烯微粉消光助劑的實測報告，徹底解決傳統二氧化矽消光粉「手摸易留光斑、耐刮硬度差」的通病，消光柔和、抗劃傷強且長久不沉死結塊。",
          "advantages": [
            "高密度改性聚丙烯微粉，消光效率卓越，提供均勻柔和的啞光/半啞光效果。",
            "克服二氧化矽消光粉「手摸易留光斑、耐刮硬度低」的缺陷，消光兼具強抗劃痕。",
            "顆粒球形度佳，對塗料體系黏度影響極小，允許高固含添加而不增稠。",
            "在木器清漆與金屬漆中展現極佳的抗沉降性，長期儲存不結死硬塊。"
          ],
          "applications": [
            "木器清漆消光",
            "金屬啞光烤漆",
            "抗光斑啞光漆"
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
          "shortLabel": "MicroKlear 418AL",
          "title": "MicroKlear KL-418AL 複合微粉蠟性能研究報告",
          "titleEn": "TI MPI MicroKlear KL-418AL Performance Study EN",
          "model": "MicroKlear 418AL",
          "desc": "巴西棕櫚蠟與氧化微粉共微粉化的複合助劑，賦予漆膜絲綢般溫潤滑爽手感，高溫重壓不黏連，且完全不影響重塗道間附著力。",
          "advantages": [
            "天然巴西棕櫚蠟（Carnauba）與精細聚乙烯蠟的專利共微粉化複合體。",
            "賦予漆膜天然絲綢般溫潤滑爽的觸感，大幅消除塗層表面乾澀感。",
            "在金屬烤漆與木器漆中展現優良的高溫抗黏連性，高溫烘乾後可迅速堆疊打包。",
            "相容性極佳，完全不影響後續道間重塗附著力，無縮孔發花風險。"
          ],
          "applications": [
            "高級木器漆",
            "卷鋼金屬漆",
            "烘烤面漆",
            "絲綢手感漆"
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
          "shortLabel": "MicroMatte 1415EZ",
          "title": "MicroMatte 1415-EZ 易分散消光助劑性能研究報告",
          "titleEn": "TI MPI MicroMatte 1415-EZ Performance Study EN 2024",
          "model": "MicroMatte 1415EZ",
          "desc": "專為易分散（EZ）設計的改性消光蠟，低速攪拌即可快速均勻潤濕分散，省去高剪切砂磨工藝，消光均勻且抗指甲劃痕性能優異。",
          "advantages": [
            "特殊表面處理技術，無需高剪切研磨機，在普通攪拌釜中即可迅速潤濕分散。",
            "提供細膩啞光消光效果，漆膜手感爽滑平整，無任何粗顆粒突起缺陷。",
            "顯著增強塗膜表面抗指甲劃傷與抗金屬物體碰撞擦痕能力。",
            "在水性與溶劑型工業塗料中均具備長效懸浮穩定性，長久儲存不分層。"
          ],
          "applications": [
            "水性與溶劑型工業塗料",
            "易分散啞光面漆"
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
          "shortLabel": "MP 22 VF (油墨耐磨)",
          "title": "MPI MP 22 VF 印刷油墨耐磨擦性能研究報告",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MP 22 VF",
          "desc": "MP 22 VF 經典高熔點微粉 PE 蠟的油墨耐磨實測數據，Sutherland 耐磨擦次數翻升 300% 以上，高速折盒裁切 100% 不掉色、不黏髒。",
          "advantages": [
            "橫向對比 MP 22 VF 在膠印與凹版油墨中的耐磨擦循環次數，抗磨損提升 300% 以上。",
            "有效保護印品表面圖案，避免在高速模切、折盒與運輸裝卸中磨擦刮傷。",
            "高剪切流變穩定性極佳，油墨黏度保持平穩，無飛墨或墨輥堆墨現象。",
            "顆粒嚴格控制（D50 約 3.0 μm），保證高速印刷網點高清晰度與飽滿光澤。"
          ],
          "applications": [
            "瓦楞紙箱油墨",
            "折疊紙盒膠印",
            "凹版塑膠油墨",
            "金屬印鐵油墨"
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
          "shortLabel": "MP-22XF (油墨耐磨)",
          "title": "MPI MP-22XF 印刷油墨超細微粉耐磨研究報告",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MP-22XF",
          "desc": "MP-22XF 超細規格微粉蠟的耐磨研究，粒徑超細透光性好，專為高網線印刷設計，提供優異耐磨保護的同時維持極高光澤度。",
          "advantages": [
            "超細微粉化處理（D50 僅約 2.0~2.5 μm），適用於高網線高精細印刷油墨。",
            "在薄層油墨印刷中展現卓越的 Sutherland 抗摩擦保護，防止圖案掉墨。",
            "超細顆粒完全不影響油墨透明度與高光澤表現，金屬箔印刷反光度極佳。",
            "提高油墨在高溫高壓包裝封口與模切折彎過程中的抗熱黏連性。"
          ],
          "applications": [
            "高精細印刷油墨",
            "金屬箔印刷",
            "薄膜包裝凹版油墨"
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
          "shortLabel": "MPP-611AL (高溫耐磨)",
          "title": "MPI MPP-611AL 高熔點硬質聚乙烯微粉性能研究報告",
          "titleEn": "TI MPI MPP-611AL Performance Study EN 202407",
          "model": "MPP-611AL",
          "desc": "超高熔點（125~130°C）硬質 HDPE 微粉蠟研究報告，金屬抗劃痕（Anti-mar）標竿，高溫烘烤不冒煙，高溫重壓堆疊 100% 抗黏連。",
          "advantages": [
            "高密度聚乙烯（HDPE）微粉化結晶，熔點高達 125~130°C，微粉硬度極高。",
            "專為高溫烘烤卷鋼塗料打造，高溫烘烤不變形、不起煙、不污染車間。",
            "展現頂級的金屬抗劃傷（Anti-mar）性能，受外力硬物擦刮不留刮痕。",
            "高溫重壓抗黏連測試中表現優異，防止卷鋼與堆疊漆膜黏結撕裂。"
          ],
          "applications": [
            "金屬卷鋼烤漆",
            "家電面板外殼烤漆",
            "高級木器清漆",
            "UV 光油"
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
          "shortLabel": "MPP-620F (油墨耐磨)",
          "title": "MPI MPP-620F 印刷油墨耐磨防刮研究報告",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-620F",
          "desc": "MPP-620F 高熔點聚乙烯蠟的耐摩擦研究，針對高速膠印與凹印油墨優化，提供長效耐磨擦壽命，耐金屬罐裝罐高溫摩擦不脫漆。",
          "advantages": [
            "高硬度聚乙烯微粉蠟，兼顧油墨表面滑度（Slip）與耐摩擦堅牢度（Rub Resistance）。",
            "在凹版印刷塑膠複合薄膜上展現出色的耐揉搓與耐折痕掉墨保護。",
            "熔點高（> 115°C），耐受金屬罐高溫封口與烘烤殺菌時的高溫高壓摩擦。",
            "分散性良好，墨斗中長時間運轉不分層、不沉澱、不結皮。"
          ],
          "applications": [
            "凹版塑料包裝油墨",
            "折疊紙盒印刷",
            "印鐵金屬罐油墨"
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
          "shortLabel": "MPP-620XF (油墨耐磨)",
          "title": "MPI MPP-620XF 超細耐磨防刮微粉蠟研究報告",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-620XF",
          "desc": "MPP-620XF 超細化聚乙烯微粉蠟的耐磨研究，顆粒更細、光澤更好，提供無暇鏡面光澤的同時大幅增強印品抗刮花耐受度。",
          "advantages": [
            "超細微粉規格（D50 僅約 2.5 μm），徹底消除普通蠟粉可能造成的霧影微粒缺陷。",
            "提供頂級印刷油墨耐磨保護，Sutherland 磨擦測試循環次數提升 300% 以上。",
            "極高光澤保持率，特別適合化妝品盒、奢侈品包裝等高光彩盒印刷。",
            "優異的墨輥抗剪切性，高速印刷長版作業不堆墨輥、印品線條銳利。"
          ],
          "applications": [
            "高級精品紙盒印刷",
            "高清晰凹印薄膜",
            "化妝品包裝印刷"
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
          "shortLabel": "MPP-635VF (高結晶耐磨)",
          "title": "MPI MPP-635VF 高結晶微粉蠟耐磨研究報告",
          "titleEn": "TI MPI MP 22 MP 620F MP 635F Printing Ink Rub Resistance Study EN 202208",
          "model": "MPP-635VF",
          "desc": "MPP-635VF 高結晶度微粉蠟的實測報告，硬度極高耐磨性極強，專為粗糙重型包裝紙箱與惡劣運輸環境抗磨抗刮而設計。",
          "advantages": [
            "超高分子量與高結晶結構，提供全系列中極高的耐物理磨損與抗劃擦保護。",
            "在粗糙瓦楞紙箱長途卡車運輸與搬運摩擦測試中，印品文字圖案完好無損。",
            "高熔點結構，有效防止夏日高溫貨櫃倉儲時油墨表面發黏回沾。",
            "在水性瓦楞紙箱油墨中潤濕分散快速，無浮蠟油花現象。"
          ],
          "applications": [
            "重型瓦楞紙箱油墨",
            "工業外包裝印刷",
            "金屬漆耐刮擦"
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
          "shortLabel": "PolyTuf 1229",
          "title": "PolyTuf 1229 耐磨與抗滑移性能研究報告",
          "titleEn": "TI MPI PolyTuf 1229 Performance Study EN",
          "model": "PolyTuf 1229",
          "desc": "高耐磨聚合物改性微粉助劑的實測報告，兼具極致抗磨損耐衝擊與持久表面滑爽，在高溫烘烤塗層中不析出、不起霜，漆膜低溫不脆裂。",
          "advantages": [
            "特殊改性高聚合物微粉體，兼具極致抗磨損耐衝擊與表面滑爽雙重機能。",
            "大幅降低滑動阻力，動態摩擦係數持久穩定，經長期磨耗依然保持潤滑。",
            "在高溫烘烤塗層與厚漿工業漆中形態穩定，不析出、不起霜。",
            "顯著增強塗膜韌性，防止漆膜在高低溫急劇變化時脆化開裂。"
          ],
          "applications": [
            "工程塑膠改性塗層",
            "工業耐磨機械漆",
            "重載防護塗層"
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
          "shortLabel": "AquaMatte (水性消光)",
          "title": "AquaMatte 與 PropylMatte 水性消光效率對比研究報告",
          "titleEn": "TI MPI AquaMatte and PropylMatte Matting Efficiency Study EN",
          "model": "AquaMatte",
          "desc": "水性專用微粉消光劑的實測報告，在水性樹脂乳液中快速自潤濕不浮粉，消光柔和清澈無白霧，浸水後塗膜不起泡、不發白、不軟化。",
          "advantages": [
            "AquaMatte 經特殊親水表面改性，在水性樹脂乳液中自潤濕迅速，不浮粉。",
            "消光效率高，提供均勻典雅的低光澤霧面效果，漆膜透光清澈無白霧。",
            "克服普通消光粉吸水膨脹的缺點，水性塗膜浸水後不起泡、不發白、不軟化。",
            "提供出色的耐擦洗與抗指甲劃痕性能，大幅延長室內水性漆耐用年限。"
          ],
          "applications": [
            "水性木器清漆",
            "水性工業漆",
            "水性皮革塗飾",
            "抗刮啞光漆"
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
          "shortLabel": "Superslip 6515AL",
          "title": "Superslip 6515AL 超滑爽耐磨性能研究報告",
          "titleEn": "TI MPI Superslip 6515AL Superslip 6515AL-EZ Performance Study EN 202412",
          "model": "Superslip 6515AL",
          "desc": "極致滑爽感（Superslip）微粉蠟的研究實測，表面動態摩擦係數斷崖式下降，手感滑如絲綢，抗金屬劃痕表現卓越，重烤不黃變。",
          "advantages": [
            "專為追求極致表面滑爽（Extreme Slip）與抗刮痕的塗料體系量身打造。",
            "動態摩擦係數（COF）降至極低水準，手摸極度滑爽無阻力，抗擦痕性能卓越。",
            "EZ 規格經過特殊改性，具備極速低剪切自均勻分散能力，加工省時省力。",
            "高溫重烤不黃變，在汽車清漆與家電外殼塗層中維持長久透明光澤。"
          ],
          "applications": [
            "汽車清漆",
            "消費電子家電外殼",
            "高光烤漆",
            "極致滑爽塗層"
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
          "shortLabel": "Fluo 300XF / Polyfluo",
          "title": "Polyfluo 190 與 Fluo 300 耐磨抗擦性能研究報告",
          "titleEn": "TI MPI Polyfluo 190 and Fluo 300 Abrasion Resistance Study EN",
          "model": "Fluo 300XF",
          "desc": "經典含氟微粉化改性聚合物的耐磨基準報告，在極端高速摩擦測試中提供最高等級耐磨防護，耐溫超過 300°C，耐劃傷硬度表現卓越。",
          "advantages": [
            "微粉化改性含氟聚合物，傳統工業塗層與油墨的極限耐磨性能參考基準。",
            "在極端嚴苛的高速摩擦循環測試中，提供塗層最高等級的耐磨防刮損保護。",
            "顯著降低表面張力與滑動阻力，耐劃傷鉛筆硬度與鋼絲絨擦拭表現卓越。",
            "耐溫性極高（熔點 > 300°C），在高溫工業卷鋼與特種防護塗料中結構穩定。"
          ],
          "applications": [
            "重型工業塗料",
            "高抗磨卷鋼塗料",
            "印刷印鐵油墨",
            "極限防護塗層"
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
          "shortLabel": "MicroTex 950 (防滑織紋)",
          "title": "MicroTex 950 織紋防滑助劑性能研究報告",
          "titleEn": "TI MPI MicroTex 950 Performance Study EN 202504",
          "model": "MicroTex 950",
          "desc": "均勻細膩啞光砂紋與防滑塗層的專用微粉，粒徑嚴格受控在 30~50 μm，創造細緻啞光砂面觸感溫潤不刺手，抗踩踏耐磨損不被刮平。",
          "advantages": [
            "粒徑分佈窄且嚴格控制在 30~50 μm 區間，創造極致均勻的啞光砂面微織紋。",
            "賦予塗層優異的物理防滑與耐磨損性能，手摸溫潤舒適，無尖銳刺手粗糙感。",
            "耐重物碰撞與抗碎石撞擊性能良好，長期踩踏踩磨後微織紋不易被磨平。",
            "在粉體塗料與厚漿工業漆中分散極為均勻，施工無團聚大顆粒瑕疵。"
          ],
          "applications": [
            "砂紋粉體塗料",
            "防滑工業地坪",
            "相機外殼皺紋漆",
            "儀表防眩塗層"
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
          "shortLabel": "擴鏈劑塗料線手冊",
          "title": "Unilink® / Clearlink® 擴鏈劑塗料產品線型錄",
          "titleEn": "Brochure DK Unilink Plus Coatings Line",
          "desc": "聚脲與聚氨酯彈性體塗層的高性能液態擴鏈劑大全，常溫操作易施工、有效延長凝膠時間，完全解決固態擴鏈劑粉塵危害與施工氣泡缺陷。",
          "advantages": [
            "常溫液態易操作，徹底告別傳統固態 MOCA / DETDA 的粉塵危害與低溫結晶結塊。",
            "立體受阻二級二胺分子結構，減緩與異氰酸酯反應速度，延長凝膠時間（Gel Time）。",
            "消除聚脲噴塗施工時表面起泡與針孔缺陷，大幅改善塗層流平性與鏡面外觀。",
            "Clearlink 1000 脂肪族擴鏈劑具卓越耐候性，長期戶外日曬紫外線完全不黃變。"
          ],
          "applications": [
            "聚脲噴塗",
            "高性能聚氨酯彈性體",
            "耐磨耐候防腐塗層"
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
          "shortLabel": "Clearlink 1000 聚脲",
          "title": "Clearlink® 1000 脂肪族擴鏈劑聚脲塗料技術資料",
          "titleEn": "TI DK Clearlink 1000 for Polyurea Coatings",
          "model": "Clearlink 1000",
          "desc": "戶外超耐候脂肪族聚脲噴塗的必備擴鏈劑，100% 杜絕日曬發黃，延長施工反應時間至數分鐘，成膜強韌且抗撕裂衝擊。",
          "advantages": [
            "100% 脂肪族受阻二級二胺結構，具備極致抗紫外線光老化與保色耐黃變性。",
            "有效調控噴塗固化速度，使操作時間延長至數分鐘，大幅降低對特殊設備的苛刻依賴。",
            "顯著增強聚脲塗層的拉伸強度（> 20 MPa）、斷裂伸長率與耐撕裂性能。",
            "大幅提升塗膜在混凝土、金屬底材上的浸水附著力與耐化學品腐蝕性能。"
          ],
          "applications": [
            "高耐候戶外聚脲",
            "保色彈性體面漆",
            "水上樂園防腐",
            "混凝土防護"
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
          "shortLabel": "Unilink 1030 彈性體",
          "title": "Unilink® 1030 澆注型聚氨酯彈性體技術資料",
          "titleEn": "TI DK Unilink 1030 Catalyst for Cast Elastomers",
          "model": "Unilink 1030",
          "desc": "礦山篩網與重載輪胎等澆注彈性體的高性能擴鏈方案，黏度上升平緩使大型模具充分充填排氣，大幅提升硬度、耐撕裂與動態疲勞壽命。",
          "advantages": [
            "作為芳香族受阻二胺擴鏈劑，特別適用於 MDI / TDI 體系澆注型聚氨酯彈性體。",
            "提供充裕的澆注操作適用期，黏度爬升平緩，保證大型模具均勻充填排氣。",
            "顯著提升彈性體的肖氏硬度、回彈性、阿克隆（Akron）耐磨耗與撕裂強度。",
            "縮短高溫硫化熟化週期，提高生產節奏並降低模具殘留應力變形。"
          ],
          "applications": [
            "重載實心輪胎",
            "礦山篩網",
            "膠輥",
            "耐磨密封件澆注"
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
          "shortLabel": "Unilink 4200 軟質泡棉",
          "title": "Unilink® 4200 軟質聚氨酯泡棉技術手冊",
          "titleEn": "TI DK Unilink 4200 Chain Extender for Flexible Polyurethane Foams",
          "model": "Unilink 4200",
          "desc": "汽車座椅與高級家具泡棉的「硬度與回彈強化劑」，顯著提升承載負荷能力與開孔率，消除閉孔收縮變形，長期耐壓陷不塌陷。",
          "advantages": [
            "在軟質聚氨酯塊狀及模塑泡棉中作為高效擴鏈劑與開孔調節劑。",
            "顯著提升泡棉的壓陷硬度（IFD）與支撐負載能力，減少聚醚多元醇用量成本。",
            "優化泡棉開孔結構，避免閉孔收縮變形，提升泡棉透氣性與尺寸穩定性。",
            "改善高回彈（HR）泡棉的落球回彈率，長期動態疲勞壓陷變形顯著降低。"
          ],
          "applications": [
            "高回彈汽車座椅泡棉",
            "高級家具沙發墊",
            "聲學吸音泡棉"
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
          "shortLabel": "Unilink 4200 彈性體塗層",
          "title": "Unilink® 4200 彈性體塗料擴鏈技術資料",
          "titleEn": "TI DK Unilink 4200 for Chain Extender for Elastomeric Coatings",
          "model": "Unilink 4200",
          "desc": "管道防腐與車廂防撞彈性塗層的高性能液態擴鏈劑，成膜平整無氣泡針孔，賦予塗膜卓越的耐重載碰撞、低溫柔韌抗裂與長效防腐壽命。",
          "advantages": [
            "在雙組份聚氨酯與聚脲彈性體塗料中提供均勻平穩的交聯固化動力學。",
            "大幅改善厚塗施工時的流平性，有效避免塗層產生氣泡、凹坑與橘皮缺陷。",
            "賦予彈性塗層卓越的抗碎石撞擊、耐重載耐磨損與低溫柔韌彎曲性能。",
            "大幅增強塗膜耐酸鹼、耐油污、耐鹽水浸泡及地下防腐環境的長效壽命。"
          ],
          "applications": [
            "地下管道防腐",
            "橋樑防水塗層",
            "耐磨工業地坪",
            "車廂耐磨防撞襯裡"
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
 * 切換特定分頁中的當前選取文件 (重要修復：切換後立即觸發 PDF Canvas 載入)
 */
function selectTechDoc(slug, tabKey, docIdx) {
    if (!TechState.activeDocIndices[slug]) {
        TechState.activeDocIndices[slug] = { 'principles': 0, 'catalog': 0, 'applications': 0, 'single': 0, 'formulation': 0 };
    }
    TechState.activeDocIndices[slug][tabKey] = docIdx;

    const catData = TECH_DATABASE[slug];
    if (!catData || !catData.tabs[tabKey]) return;
    const docs = catData.tabs[tabKey];
    if (!docs || docIdx >= docs.length) return;

    // 1. 更新 Pills 樣式
    docs.forEach((_, i) => {
        const pill = document.getElementById(`pill-${slug}-${tabKey}-${i}`);
        if (pill) {
            if (i === docIdx) {
                pill.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-blue-900 text-white shadow-2xs transition-all whitespace-nowrap";
            } else {
                pill.className = "px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all whitespace-nowrap";
            }
        }
    });

    // 2. 更新內容檢視器 (雙欄視圖)
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
                    <div class="text-xs font-bold text-slate-500 mb-3 self-start flex items-center gap-1.5">
                        <i class="fa-solid fa-atom text-blue-900"></i>
                        <span>原廠化學反應機制</span>
                    </div>
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
                <div>
                    <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        ${docTitleClean}
                    </h3>
                </div>

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
        formulation: '配方指南'
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

        // 有文件：渲染頂部 Pills 與內容檢視區
        const activeIdx = (TechState.activeDocIndices[slug] && TechState.activeDocIndices[slug][tabKey]) || 0;
        const validIdx = activeIdx < docs.length ? activeIdx : 0;
        const currentDoc = docs[validIdx];

        const pillsHtml = docs.map((doc, idx) => {
            const isActive = (idx === validIdx);
            const activeCls = isActive ? 'bg-blue-900 text-white shadow-2xs font-bold' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100';
            return `
                <button type="button" id="pill-${slug}-${tabKey}-${idx}" onclick="selectTechDoc('${slug}', '${tabKey}', ${idx})"
                        class="px-2.5 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${activeCls}">
                    ${idx + 1}. ${doc.shortLabel}
                </button>
            `;
        }).join('');

        return `
            <div id="tech-panel-${tabKey}" class="${hiddenCls}space-y-2">
                <!-- 快捷標籤列 (單行滾動) -->
                <div class="flex items-center gap-1 p-1 bg-slate-50 rounded-lg border border-slate-200 overflow-x-auto tech-pills-container">
                    ${pillsHtml}
                </div>

                <!-- 雙欄核心展示區 -->
                <div id="viewer-${slug}-${tabKey}">
                    ${buildSingleDocLayoutHtml(currentDoc, slug, tabKey)}
                </div>
            </div>
        `;
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
