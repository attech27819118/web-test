/**
 * ====================================================================
 * ATTech Web - Technology Module (js/technology.js)
 * 技術專區：11 大特用化學品專題、單頁模式與 2x2 排版切換、高解析圖表與 PDF 預覽
 * ====================================================================
 */

// 11 大產品系列分類（嚴格依照官方圖示順序橫向 1-4, 5-8, 9-11 排序）
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
        hasData: false
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
        hasData: false
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
        hasData: false
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
        hasData: false
    }
];

// Tyzor 4 大核心技術圖表資料（完全依據 techdata/tyzor 原廠技術資料撰寫，無推測內容）
const TYZOR_TECH_ITEMS = [
    {
        id: 1,
        key: 'catalyst',
        categoryTag: '類別一・催化反應',
        subTag: 'Esterification & Transesterification',
        title: '鈦（鋯）酸酯作為催化劑',
        titleEn: 'Tyzor® Catalysts',
        img: 'techdata/tyzor/catalyst.webp',
        pdf: 'techdata/tyzor/鈦（鋯）酸酯作為催化劑.pdf',
        desc: 'Tyzor有機鈦（鋯）在許多反應中，如酯合成、酯交換、縮合和加成反應，都表現出高效良好的催化性能。',
        applications: ['可塑劑', '（不）飽和聚酯', 'PET', 'PBT', '聚酯多元醇等'],
        advantages: [
            '不含任何有機錫，最終產品具有良好環保性，符合歐美環保標準。',
            '克服普通鈦酸酯催化劑不耐水等缺陷，在280℃下依舊可以保持較高催化活性（Tyzor 422, Tyzor 436）',
            '可縮短聚酯合成反應時間。',
            '克服普通鈦酸酯催化劑易黃變缺陷，Tyzor 436具有低黃變特點。',
            '在水、醇和單體中有良好的分散性。'
        ]
    },
    {
        id: 2,
        key: 'crosslinker',
        categoryTag: '類別二・交聯改性',
        subTag: 'Crosslinking & Network Bridging',
        title: '鈦（鋯）酸酯作為交聯劑',
        titleEn: 'Tyzor® Crosslinkers',
        img: 'techdata/tyzor/crosslinker.webp',
        pdf: 'techdata/tyzor/鈦（鋯）酸酯作為交聯劑.pdf',
        desc: 'Tyzor 有機鈦（鋯）作為交聯劑，以提高油漆、油墨、膠黏劑、聚合物（PVA等）的物理化學性能。',
        applications: ['油漆', '油墨', '膠黏劑', '聚合物（PVA等）'],
        advantages: [
            '提高固化速度',
            '提高耐水性、耐熱性',
            '提高硬度與耐刮性能'
        ]
    },
    {
        id: 3,
        key: 'adhesion',
        categoryTag: '類別三・附著促進',
        subTag: 'Adhesion Promotion & Interface Coupling',
        title: '鈦（鋯）酸酯提高附著力',
        titleEn: 'Tyzor® Adhesion Promoters',
        img: 'techdata/tyzor/adhesion.webp',
        pdf: 'techdata/tyzor/鈦（鋯）酸酯提高附著力.pdf',
        desc: 'Tyzor有機鈦（鋯）能夠提高油漆、塗料、油墨、密封膠等產品對於不同基材，如金屬、塑膠、玻璃等基材的附著力。Tyzor產品通過在兩種不同的基材架“橋”，從而將兩種不同的基材在介面處連結起來。如無/有機材料和高分子。',
        applications: ['油漆', '塗料', '油墨', '密封膠'],
        advantages: [
            '提高塗料耐高溫性、耐溶劑、抗腐蝕性及耐刮性',
            '能與聚合物、玻璃和金屬塗層上如-OH和-COOH相互作用，促進塗層與底材的交聯。提高塗料對底材的附著力',
            '可提高塗層的硬度、耐鹽霧性、耐腐蝕性'
        ]
    },
    {
        id: 4,
        key: 'surface',
        categoryTag: '類別四・表面改性',
        subTag: 'Surface Modification & Sol-Gel Process',
        title: '鈦（鋯）酸酯作為表面改性',
        titleEn: 'Tyzor® Surface Modification',
        img: 'techdata/tyzor/surface_treatment.webp',
        pdf: 'techdata/tyzor/鈦（鋯）酸酯作為表面改性.pdf',
        desc: 'Tyzor有機鈦（鋯）能用於改善無機和有機材料的表面性能。Tyzor系列產品被單獨或者混合其他材料一同加入到溶膠-凝膠Sol-Gel體系，會形成一個連續的金屬氧化物塗層，從而改善產品表面性能。',
        applications: ['紡織整理劑', '鋁銀漿表面處理', '顏料表面處理等'],
        advantages: [
            '改善防腐性能',
            '改善耐刮、耐熱性能',
            '改善表面親水性能'
        ]
    }
];

// 技術專區內部狀態管理
const TechState = {
    activeCategory: 'tyzor',
    viewMode: 'single', // 'single' (單頁模式) 或 'grid' (2x2 排版模式)
    singlePageIndex: 0,  // 0 到 3
    isZoomed: false
};

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
            btn.className = "tech-sidebar-btn group flex items-center p-3 rounded-xl bg-blue-50/90 border-2 border-blue-600/80 text-blue-950 no-underline shadow-xs transition-all";
            if (numBadge) numBadge.className = "tech-num-badge w-6 h-6 rounded-md bg-blue-900 text-white text-xs font-black flex items-center justify-center shrink-0 shadow-2xs";
            if (titleEl) titleEl.className = "tech-btn-title text-xs sm:text-sm font-extrabold text-blue-950 truncate leading-snug";
            if (subEl) subEl.className = "tech-btn-sub text-xs font-semibold text-blue-800/80 truncate";
        } else {
            btn.className = "tech-sidebar-btn group flex items-center p-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-800 hover:text-blue-950 no-underline transition-all";
            if (numBadge) numBadge.className = "tech-num-badge w-6 h-6 rounded-md bg-slate-100 group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 transition-colors";
            if (titleEl) titleEl.className = "tech-btn-title text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-950 truncate leading-snug";
            if (subEl) subEl.className = "tech-btn-sub text-xs font-normal text-slate-500 group-hover:text-slate-600 truncate";
        }
    });

    // 2. 更新頂部麵包屑
    const breadcrumbCurrent = document.getElementById('tech-breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.innerText = cat.name;
    }

    // 3. 渲染右側內容區塊
    renderTechRightContent(cat);

    // 4. 更新 URL (若為 SPA 模式)
    if (updateUrl && typeof updateUrlRoute === 'function') {
        try {
            updateUrlRoute(true);
        } catch (err) {
            console.warn('URL route update skipped:', err);
        }
    }
}

/**
 * 渲染右側技術內容
 */
function renderTechRightContent(cat) {
    const mainContainer = document.getElementById('tech-content-display');
    if (!mainContainer) return;

    if (cat.hasData && cat.slug === 'tyzor') {
        mainContainer.innerHTML = buildTyzorContentHtml();
        updateTyzorViewDisplay();
    } else {
        mainContainer.innerHTML = buildPlaceholderContentHtml(cat);
    }
}

/**
 * 切換 Tyzor 排版模式 (單頁模式 vs 2x2 排版模式)
 */
function setTechViewMode(mode) {
    TechState.viewMode = mode;
    updateTyzorViewDisplay();
}

/**
 * 切換 Tyzor 單頁模式當前索引 (0 ~ 3)
 */
function setTechSinglePageIndex(index) {
    if (index < 0) index = 0;
    if (index >= TYZOR_TECH_ITEMS.length) index = TYZOR_TECH_ITEMS.length - 1;
    TechState.singlePageIndex = index;
    updateTyzorViewDisplay();
}

function nextTechSinglePage() {
    let nextIdx = TechState.singlePageIndex + 1;
    if (nextIdx >= TYZOR_TECH_ITEMS.length) nextIdx = 0; // 循環或到底
    setTechSinglePageIndex(nextIdx);
}

function prevTechSinglePage() {
    let prevIdx = TechState.singlePageIndex - 1;
    if (prevIdx < 0) prevIdx = TYZOR_TECH_ITEMS.length - 1;
    setTechSinglePageIndex(prevIdx);
}

/**
 * 更新 Tyzor 畫面呈現 (根據 singlePageIndex)
 */
function updateTyzorViewDisplay() {
    const singleContainer = document.getElementById('tyzor-view-single');
    if (!singleContainer) return;

    renderSinglePageItem(TechState.singlePageIndex);
}

/**
 * 渲染單頁模式之特定項目
 */
function renderSinglePageItem(idx) {
    const item = TYZOR_TECH_ITEMS[idx];
    if (!item) return;

    // 更新 4 個單頁切換 Tab 按鈕的高亮
    TYZOR_TECH_ITEMS.forEach((it, i) => {
        const tabBtn = document.getElementById(`tyzor-tab-pill-${i}`);
        if (tabBtn) {
            if (i === idx) {
                tabBtn.className = "px-4 py-2 rounded-xl text-sm font-bold bg-blue-900 text-white shadow-xs transition-all";
            } else {
                tabBtn.className = "px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all";
            }
        }
    });

    // 更新圖片
    const imgEl = document.getElementById('tyzor-single-img');
    if (imgEl) {
        imgEl.src = resolveAssetUrl(item.img);
        imgEl.alt = item.title;
    }

    // 更新標題與分類 (乾淨簡約，去除過小微型英文字體)
    const catTagEl = document.getElementById('tyzor-single-category-tag');
    if (catTagEl) catTagEl.innerText = item.categoryTag;

    const titleEl = document.getElementById('tyzor-single-title');
    if (titleEl) titleEl.innerText = item.title;

    // 更新說明文字 (完全依據原廠資料)
    const descEl = document.getElementById('tyzor-single-desc');
    if (descEl) descEl.innerText = item.desc;

    // 更新應用範圍標籤 (依據原廠資料，字體舒適，無多餘小圖示)
    const appsEl = document.getElementById('tyzor-single-apps');
    if (appsEl && item.applications) {
        appsEl.innerHTML = item.applications.map(app => `
            <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">
                ${app}
            </span>
        `).join('');
    }

    // 更新主要優點列表 (依據原廠資料，字體舒適易讀，序號圓圈清晰)
    const advEl = document.getElementById('tyzor-single-advantages');
    if (advEl && item.advantages) {
        advEl.innerHTML = item.advantages.map((adv, aIdx) => `
            <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">
                    ${aIdx + 1}
                </span>
                <span class="font-normal">${adv}</span>
            </li>
        `).join('');
    }

    // 更新放大彈窗綁定
    const zoomTrigger = document.getElementById('tyzor-single-img-container');
    if (zoomTrigger) {
        zoomTrigger.onclick = function () {
            openTechImageModal(item.img, item.title, item.pdf);
        };
    }
}

/**
 * 產生 Tyzor 專屬技術區塊 HTML
 */
function buildTyzorContentHtml() {
    const tabShortLabels = ['催化劑', '交聯劑', '提高附著力', '表面改性'];
    // 建立 4 個分頁 Pill 按鈕 (字體加大至 14px，舒適清晰)
    const pillsHtml = TYZOR_TECH_ITEMS.map((item, idx) => `
        <button type="button" id="tyzor-tab-pill-${idx}" onclick="setTechSinglePageIndex(${idx})"
                class="px-4 py-2 rounded-xl text-sm font-semibold transition-all ${idx === 0 ? 'bg-blue-900 text-white shadow-xs' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100'}">
            ${idx + 1}. ${tabShortLabels[idx]}
        </button>
    `).join('');



    return `
        <!-- Tyzor 技術專題簡潔大方卡片 -->
        <section class="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-7 space-y-6">
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
                    ${pillsHtml}
                </div>

                <!-- 單頁核心展示區 (簡約清晰：左側為說明、應用與優點；右側為原廠技術圖表) -->
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                    <!-- 左欄：資料內容 -->
                    <div class="lg:col-span-6 space-y-6">
                        <div>
                            <span id="tyzor-single-category-tag" class="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-900 text-xs font-bold mb-2.5">
                                ${TYZOR_TECH_ITEMS[0].categoryTag}
                            </span>
                            <h2 id="tyzor-single-title" class="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                                ${TYZOR_TECH_ITEMS[0].title}
                            </h2>
                        </div>

                        <!-- 說明文字 (大方排版，字體清晰舒適，去除冗餘小標題與框線) -->
                        <div>
                            <p id="tyzor-single-desc" class="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                                ${TYZOR_TECH_ITEMS[0].desc}
                            </p>
                        </div>

                        <!-- 應用範圍 (清晰標籤，去除 9px 微型圖標) -->
                        <div class="space-y-2.5">
                            <h3 class="text-sm font-bold text-slate-900">應用範圍</h3>
                            <div id="tyzor-single-apps" class="flex flex-wrap gap-2">
                                ${TYZOR_TECH_ITEMS[0].applications.map(app => `
                                    <span class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200/60">
                                        ${app}
                                    </span>
                                `).join('')}
                            </div>
                        </div>

                        <!-- 主要優點 (清晰條列，圓形數字徽章不變形) -->
                        <div class="space-y-2.5">
                            <h3 class="text-sm font-bold text-slate-900">主要優點</h3>
                            <ul id="tyzor-single-advantages" class="space-y-3">
                                ${TYZOR_TECH_ITEMS[0].advantages.map((adv, aIdx) => `
                                    <li class="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                                        <span class="w-6 h-6 min-w-[24px] aspect-square rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs border border-emerald-300">
                                            ${aIdx + 1}
                                        </span>
                                        <span class="font-normal">${adv}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>

                    <!-- 右欄：大尺寸高解析度圖表展示區 (保持清晰比例) -->
                    <div class="lg:col-span-6 flex flex-col items-center">
                        <div id="tyzor-single-img-container"
                             class="relative w-full max-w-[500px] aspect-[1/1.414] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm cursor-pointer group flex items-center justify-center p-3 transition-all hover:border-blue-400 hover:shadow-md"
                             title="點擊全螢幕放大檢視">
                            <img id="tyzor-single-img" src="${resolveAssetUrl(TYZOR_TECH_ITEMS[0].img)}" alt="鈦（鋯）酸酯技術圖表"
                                 class="w-full h-full object-contain select-none transition-transform duration-300 group-hover:scale-[1.02]"
                                 loading="lazy" oncontextmenu="return false;" draggable="false">
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * 產生未開放公開資料產品之暫無資料高質感版面
 */
function buildPlaceholderContentHtml(cat) {
    return `
        <section class="bg-white border border-slate-200 rounded-2xl shadow-xs p-5 sm:p-7 space-y-6">
            <!-- 專題標題列 (不提未確認的說明，乾淨大方，字體不折行不切斷) -->
            <div class="pb-5 border-b border-gray-100">
                <div class="flex flex-wrap items-center justify-between gap-3.5">
                    <div class="min-w-0 py-0.5">
                        <h1 class="text-lg sm:text-xl lg:text-2xl font-extrabold text-blue-950 flex items-center gap-2.5 whitespace-nowrap">
                            <span class="w-2.5 h-6 bg-blue-900 rounded-full inline-block shrink-0"></span>
                            <span class="whitespace-nowrap tracking-tight">${cat.titleZh}</span>
                        </h1>
                    </div>
                    <div class="shrink-0 flex items-center gap-2 sm:gap-3 ml-auto">
                        <a href="${cat.productLink}"
                           class="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition-colors">
                            <i class="fa-solid fa-table-list"></i>
                            <span>${cat.productLinkText}</span>
                        </a>
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
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
                    <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.name)}"
                       class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-all active:scale-95">
                        <i class="fa-solid fa-paper-plane"></i>
                        <span>聯繫業務索取資料</span>
                    </a>
                    <a href="${cat.productLink}"
                       class="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-all">
                        <i class="fa-solid fa-arrow-up-right-from-square text-xs"></i>
                        <span>${cat.productLinkText}</span>
                    </a>
                </div>
            </div>
        </section>
    `;
}

/**
 * 全螢幕 Lightbox 燈箱開關與縮放功能
 */
function openTechImageModal(imgSrc, title, pdfUrl) {
    const modal = document.getElementById('tech-image-modal');
    const modalImg = document.getElementById('tech-image-modal-img');
    const modalTitle = document.getElementById('tech-image-modal-title');
    const modalPdfBtn = document.getElementById('tech-image-modal-pdf-btn');

    if (!modal || !modalImg) return;

    modalImg.src = resolveAssetUrl(imgSrc);
    modalImg.alt = title || '技術說明圖表';

    if (modalTitle) modalTitle.innerText = title || '原廠技術說明圖表';

    if (modalPdfBtn) {
        if (pdfUrl) {
            modalPdfBtn.href = resolveAssetUrl(pdfUrl);
            modalPdfBtn.download = `${title || 'tech_doc'}.pdf`;
            modalPdfBtn.classList.remove('hidden');
        } else {
            modalPdfBtn.classList.add('hidden');
        }
    }

    TechState.isZoomed = false;
    resetTechModalZoom();

    modal.style.display = 'flex';
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeTechImageModal(e) {
    if (e && e.target && e.target.closest('#tech-image-modal-content')) return;

    const modal = document.getElementById('tech-image-modal');
    if (!modal) return;

    modal.style.display = 'none';
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function toggleTechModalZoom() {
    TechState.isZoomed = !TechState.isZoomed;
    const modalImg = document.getElementById('tech-image-modal-img');
    const container = document.getElementById('tech-image-container');
    const zoomText = document.getElementById('tech-modal-zoom-text');
    const zoomIcon = document.getElementById('tech-modal-zoom-icon');

    if (!modalImg || !container) return;

    if (TechState.isZoomed) {
        container.style.overflow = 'auto';
        modalImg.style.maxHeight = 'none';
        modalImg.style.maxWidth = 'none';
        modalImg.style.width = '100%';
        modalImg.style.height = 'auto';
        modalImg.style.cursor = 'zoom-out';
        if (zoomText) zoomText.innerText = "最適視窗檢視";
        if (zoomIcon) zoomIcon.className = "fa-solid fa-compress";
    } else {
        resetTechModalZoom();
    }
}

function resetTechModalZoom() {
    TechState.isZoomed = false;
    const modalImg = document.getElementById('tech-image-modal-img');
    const container = document.getElementById('tech-image-container');
    const zoomText = document.getElementById('tech-modal-zoom-text');
    const zoomIcon = document.getElementById('tech-modal-zoom-icon');

    if (container) container.style.overflow = 'hidden';
    if (modalImg) {
        modalImg.style.maxHeight = 'calc(100vh - 120px)';
        modalImg.style.maxWidth = '100%';
        modalImg.style.width = 'auto';
        modalImg.style.height = 'auto';
        modalImg.style.cursor = 'zoom-in';
    }
    if (zoomText) zoomText.innerText = "放大滾動閱讀";
    if (zoomIcon) zoomIcon.className = "fa-solid fa-magnifying-glass-plus";
}

/**
 * 鍵盤左右鍵切換單頁模式、ESC 關閉彈窗
 */
window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('tech-image-modal');
    if (modal && !modal.classList.contains('hidden') && modal.style.display !== 'none') {
        if (e.key === 'Escape' || e.key === 'Esc') {
            closeTechImageModal();
            return;
        }
    }

    // 若在技術分頁中的單頁模式下，支援鍵盤左右方向鍵切換
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab && activeTab.id === 'tab-technology') {
        if (TechState.activeCategory === 'tyzor' && TechState.viewMode === 'single') {
            if (e.key === 'ArrowLeft') {
                prevTechSinglePage();
            } else if (e.key === 'ArrowRight') {
                nextTechSinglePage();
            }
        }
    }
});

// 當 DOM 載入完成或腳本就緒時初始化技術專區 (方案 B：動態即時接管)
function initTechnologyModule() {
    const display = document.getElementById('tech-content-display');
    if (!display) return;
    const currentSlug = document.body.getAttribute('data-tech-slug') || 'tyzor';
    switchTechCategory(currentSlug, false);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTechnologyModule);
} else {
    initTechnologyModule();
}
