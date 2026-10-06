/**
 * ====================================================================
 * ATTech Web - Technology Module (js/technology.js)
 * 技術專區：11 大特用化學品專題、五大核心維度一覽卡片式導航
 * (1. 原理 | 2. 目錄 | 3. 應用技術 | 4. 單一產品技術 | 5. 配方)
 * 一頁式儀表板（At-A-Glance Dashboard）高密度佈局，一目了然！
 * 嚴格實事求是：有原廠資料如實呈現，無公開資料誠實標示「資料整備中」
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

// Tyzor 4 大核心技術原理（完全依據 techdata/tyzor 原廠技術資料撰寫，無推測內容）
const TYZOR_TECH_ITEMS = [
    {
        id: 1,
        key: 'catalyst',
        subTag: 'Esterification & Transesterification',
        title: '鈦（鋯）酸酯作為催化劑',
        titleEn: 'Tyzor® Catalysts',
        mechImg: 'techdata/tyzor/catalyst_mech.webp',
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
        subTag: 'Crosslinking & Network Bridging',
        title: '鈦（鋯）酸酯作為交聯劑',
        titleEn: 'Tyzor® Crosslinkers',
        mechImg: 'techdata/tyzor/crosslinker_mech.webp',
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
        subTag: 'Adhesion Promotion & Interface Coupling',
        title: '鈦（鋯）酸酯提高附著力',
        titleEn: 'Tyzor® Adhesion Promoters',
        mechImg: 'techdata/tyzor/adhesion_mech.webp',
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
        subTag: 'Surface Modification & Sol-Gel Process',
        title: '鈦（鋯）酸酯作為表面改性',
        titleEn: 'Tyzor® Surface Modification',
        mechImg: 'techdata/tyzor/surface_mech.webp',
        desc: 'Tyzor有機鈦（鋯）能用於改善無機和有機材料的表面性能。Tyzor系列產品被單獨或者混合其他材料一同加入到溶膠-凝膠Sol-Gel體系，會形成一個連續的金屬氧化物塗層，從而改善產品表面性能。',
        applications: ['紡織整理劑', '鋁銀漿表面處理', '顏料表面處理等'],
        advantages: [
            '改善防腐性能',
            '改善耐刮、耐熱性能',
            '改善表面親水性能'
        ]
    }
];

// Tyzor 23 款原廠真實規格目錄（完全依據 json/dorfketal/tyzor.json，無任何杜撰）
const TYZOR_PRODUCTS_CATALOG = [
    { name: "Tyzor 436", chemical: "特殊鈦酸酯螯合物、纖維級 (介質：醇/水)", categories: ["通用催化劑", "PET/PBT 催化劑"] },
    { name: "Tyzor 422", chemical: "特殊鈦酸酯螯合物、專利級 (瓶片及薄膜樹脂)", categories: ["通用催化劑", "PET/PBT 催化劑"] },
    { name: "Tyzor PC 64", chemical: "特殊鈦酸酯螯合物 (瓶片及薄膜樹脂)", categories: ["通用催化劑", "PET/PBT 催化劑"] },
    { name: "Tyzor BTP", chemical: "聚鈦酸丁酯", categories: ["玻璃", "通用催化劑", "PET/PBT 催化劑", "塗料", "防腐蝕保護"] },
    { name: "Tyzor TnBT LC", chemical: "鈦酸正丁酯-低色度", categories: ["PET/PBT 催化劑"] },
    { name: "Tyzor D 140", chemical: "鈦酸正丁酯", categories: ["通用催化劑", "PET/PBT 催化劑"] },
    { name: "Tyzor 9000", chemical: "特殊鈦酸酯螯合物", categories: ["膠黏劑與密封膠", "塗料", "通用催化劑"] },
    { name: "Tyzor TnBT", chemical: "鈦酸正丁酯", categories: ["塗料", "防腐蝕保護", "通用催化劑", "玻璃"] },
    { name: "Tyzor TOT", chemical: "鈦酸四辛酯", categories: ["塗料", "防腐蝕保護", "通用催化劑", "玻璃"] },
    { name: "Tyzor TPT", chemical: "鈦酸四異丙酯", categories: ["塗料", "玻璃", "通用催化劑"] },
    { name: "Tyzor TE", chemical: "水性鈦酸酯螯合物", categories: ["通用催化劑", "膠黏劑與密封膠", "油墨", "塗料", "防腐蝕保護"] },
    { name: "Tyzor LA", chemical: "水性鈦乳酸螯合物 (50% 有效成分，介質：水)", categories: ["膠黏劑與密封膠", "塗料", "油墨", "通用催化劑"] },
    { name: "Tyzor TLF 11010", chemical: "水性鈦乳酸螯合物", categories: ["通用催化劑"] },
    { name: "Tyzor 726", chemical: "特殊鈦酸酯螯合物", categories: ["膠黏劑與密封膠"] },
    { name: "Tyzor KE 6", chemical: "特殊鈦酸酯螯合物", categories: ["膠黏劑與密封膠"] },
    { name: "Tyzor 217", chemical: "水性鋯乳酸螯合物 (介質：水)", categories: ["膠黏劑與密封膠", "塗料", "油墨"] },
    { name: "Tyzor AA 75", chemical: "乙醯丙酮鈦酸酯螯合物", categories: ["油墨", "塗料", "防腐蝕保護"] },
    { name: "Tyzor AA 105", chemical: "乙醯丙酮鈦酸酯螯合物", categories: ["油墨", "塗料"] },
    { name: "Tyzor IAM", chemical: "磷酸鹽鈦酸酯螯合物", categories: ["油墨"] },
    { name: "Tyzor GBA", chemical: "特殊鈦酸酯螯合物", categories: ["油墨", "塗料", "玻璃"] },
    { name: "Tyzor 212", chemical: "水性鋯酸酯螯合物", categories: ["油墨", "塗料"] },
    { name: "Tyzor NBZ", chemical: "鋯酸正丁酯", categories: ["塗料", "防腐蝕保護"] },
    { name: "Tyzor NPZ", chemical: "鋯酸正丙酯", categories: ["塗料"] }
];

// 技術專區內部狀態管理
const TechState = {
    activeCategory: 'tyzor',
    activeSubTab: 'principles', // 'principles', 'catalog', 'applications', 'single', 'formulation'
    viewMode: 'single',
    singlePageIndex: 0,
    isZoomed: false
};

/**
 * 即時過濾 Tyzor 產品目錄表格
 */
function filterTechCatalog(query) {
    const q = (query || '').toLowerCase().trim();
    const rows = document.querySelectorAll('.tech-catalog-row');
    let visibleCount = 0;
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        if (!q || text.includes(q)) {
            row.style.display = '';
            visibleCount++;
        } else {
            row.style.display = 'none';
        }
    });
    const emptyMsg = document.getElementById('tech-catalog-empty');
    if (emptyMsg) {
        emptyMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }
}

/**
 * 切換技術專區五大維度子分頁（自帶摘要卡片式）
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
            } else {
                panel.classList.add('hidden');
            }
        }
    });
}

/**
 * 建立五大子分頁純單行標籤列 HTML (1 行排版結束，無小細節干擾，極致爭取展示空間)
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
 * 切換技術產品分類 (11 大專題)
 */
function switchTechCategory(slug, updateUrl = true) {
    const cat = TECH_CATEGORIES.find(c => c.slug === slug);
    if (!cat) return;

    TechState.activeCategory = slug;
    if (typeof AppState !== 'undefined') {
        AppState.activeTechCategory = slug;
    }

    // 1. 更新左側 Sidebar 按鈕樣式 (緊湊)
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

    // 同步子分頁顯示狀態
    switchTechSubTab(TechState.activeSubTab);
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
    if (nextIdx >= TYZOR_TECH_ITEMS.length) nextIdx = 0;
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

    TYZOR_TECH_ITEMS.forEach((it, i) => {
        const tabBtn = document.getElementById(`tyzor-tab-pill-${i}`);
        if (tabBtn) {
            if (i === idx) {
                tabBtn.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-blue-900 text-white shadow-2xs transition-all whitespace-nowrap";
            } else {
                tabBtn.className = "px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-900 hover:bg-slate-100 transition-all whitespace-nowrap";
            }
        }
    });

    const titleEl = document.getElementById('tyzor-single-title');
    if (titleEl) titleEl.innerText = item.title;

    const descEl = document.getElementById('tyzor-single-desc');
    if (descEl) descEl.innerText = item.desc;

    const mechImgEl = document.getElementById('tyzor-single-mech-img');
    const mechBoxEl = document.getElementById('tyzor-single-mech-box');
    if (mechImgEl && item.mechImg) {
        mechImgEl.src = resolveAssetUrl(item.mechImg);
        mechImgEl.alt = `${item.title} 反應機制圖`;
    }
    // 移除燈箱功能：圖片僅靜態顯示
    if (mechBoxEl) {
        mechBoxEl.style.cursor = 'default';
        mechBoxEl.onclick = null;
    }

    const appsEl = document.getElementById('tyzor-single-apps');
    if (appsEl && item.applications) {
        appsEl.innerHTML = item.applications.map(app => `
            <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">
                ${app}
            </span>
        `).join('');
    }

    const advEl = document.getElementById('tyzor-single-advantages');
    if (advEl && item.advantages) {
        advEl.innerHTML = item.advantages.map((adv, aIdx) => `
            <li class="flex items-start gap-1.5">
                <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ${aIdx + 1}
                </span>
                <span>${adv}</span>
            </li>
        `).join('');
    }
}

/**
 * 產生 Tyzor 專屬技術區塊 HTML（包含五大維度一覽卡片與緊湊視圖）
 */
function buildTyzorContentHtml() {
    const tabShortLabels = ['催化劑', '交聯劑', '提高附著力', '表面改性'];
    const pillsHtml = TYZOR_TECH_ITEMS.map((item, idx) => `
        <button type="button" id="tyzor-tab-pill-${idx}" onclick="setTechSinglePageIndex(${idx})"
                class="px-2.5 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${idx === 0 ? 'bg-blue-900 text-white shadow-2xs font-bold' : 'text-slate-600 hover:text-blue-900 hover:bg-slate-100'}">
            ${idx + 1}. ${tabShortLabels[idx]}
        </button>
    `).join('');

    const catalogRowsHtml = TYZOR_PRODUCTS_CATALOG.map(p => {
        const safeUrl = `products/dorfketal/tyzor/${encodeURIComponent(p.name)}/`;
        const badges = p.categories.map(c => `
            <span class="inline-block px-1.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/80 mr-1 mb-0.5">${c}</span>
        `).join('');

        return `
            <tr class="tech-catalog-row hover:bg-blue-50/40 transition-colors">
                <td class="py-2.5 px-3.5 font-bold text-blue-950 whitespace-nowrap text-sm">
                    <a href="${safeUrl}" class="hover:text-blue-700 hover:underline">${p.name}</a>
                </td>
                <td class="py-2.5 px-3.5 text-slate-700 text-sm">${p.chemical}</td>
                <td class="py-2.5 px-3.5">${badges}</td>
                <td class="py-2.5 px-3.5 text-center whitespace-nowrap">
                    <a href="${safeUrl}" class="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-100 hover:bg-blue-900 text-slate-700 hover:text-white rounded-md text-xs font-bold transition-all">
                        <span>查看</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                </td>
            </tr>
        `;
    }).join('');

    return `
        <section class="bg-white border border-slate-200 rounded-xl shadow-xs p-3 sm:p-4 space-y-2.5">
            <!-- 專題標題與頂部操作列 (超緊湊單行化，高度僅約34px) -->
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
                ${buildSubTabNavHtml(TechState.activeSubTab, true)}

                <div class="tech-bookmark-body">
                    <!-- ==========================================
                         分頁一：原理 (Principles) - 左右雙欄極致一目了然
                         ========================================== -->
                    <div id="tech-panel-principles" class="${TechState.activeSubTab === 'principles' ? '' : 'hidden '}space-y-2">
                <!-- 4 大機制快捷標籤 (高度僅28px) -->
                <div class="flex items-center gap-1 p-1 bg-slate-50 rounded-lg border border-slate-200 overflow-x-auto">
                    ${pillsHtml}
                </div>

                <!-- 左右雙欄核心展示區 -->
                <div id="tyzor-view-single" class="tech-principles-grid bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5">
                    <!-- 左欄：機制名稱、說明文字、反應機制圖與適用範疇 -->
                    <div class="space-y-2 pr-0 sm:pr-2.5 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-2.5 sm:pb-0">
                        <div>
                            <h2 id="tyzor-single-title" class="text-base font-bold text-slate-900 tracking-tight">
                                ${TYZOR_TECH_ITEMS[0].title}
                            </h2>
                        </div>

                        <p id="tyzor-single-desc" class="text-sm text-slate-700 leading-relaxed font-normal">
                            ${TYZOR_TECH_ITEMS[0].desc}
                        </p>

                            <!-- 原廠反應機制示意圖 -->
                            <div class="space-y-1 pt-0.5">
                                <div class="flex items-center text-xs text-slate-700 font-bold">
                                    <span class="flex items-center gap-1.5">
                                        <i class="fa-solid fa-atom text-blue-900"></i>
                                        <span>反應機制：</span>
                                    </span>
                                </div>
                                <div id="tyzor-single-mech-box" class="relative bg-white rounded-xl border border-slate-200 p-2 sm:p-2.5 shadow-2xs flex items-center justify-center overflow-hidden">
                                    <img id="tyzor-single-mech-img" src="${resolveAssetUrl(TYZOR_TECH_ITEMS[0].mechImg)}" alt="${TYZOR_TECH_ITEMS[0].title} 反應機制圖"
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
                            ${TYZOR_TECH_ITEMS[0].advantages.map((adv, aIdx) => `
                                <li class="flex items-start gap-1.5">
                                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                                        ${aIdx + 1}
                                    </span>
                                    <span>${adv}</span>
                                </li>
                            `).join('')}
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
                 分頁二：目錄 (Catalog) - 帶即時搜尋與固定滾動
                 ========================================== -->
            <div id="tech-panel-catalog" class="${TechState.activeSubTab === 'catalog' ? '' : 'hidden '}space-y-2.5">
                <div class="flex flex-wrap items-center justify-between gap-2 pb-1">
                    
                    <div class="relative w-full sm:w-56">
                        <i class="fa-solid fa-magnifying-glass absolute left-2.5 top-2.5 text-xs text-slate-400"></i>
                        <input type="text" placeholder="搜尋型號 (如 TPT, TE)..." oninput="filterTechCatalog(this.value)"
                               class="w-full pl-7 pr-2.5 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:outline-none transition-colors">
                    </div>
                </div>

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
                            ${catalogRowsHtml}
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
            <div id="tech-panel-applications" class="${TechState.activeSubTab === 'applications' ? '' : 'hidden '}space-y-2">
                

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
                 分頁四：單一產品技術 (Single Product Tech)
                 ========================================== -->
            <div id="tech-panel-single" class="${TechState.activeSubTab === 'single' ? '' : 'hidden '}space-y-2.5">
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
                 分頁五：配方 (Formulation)
                 ========================================== -->
            <div id="tech-panel-formulation" class="${TechState.activeSubTab === 'formulation' ? '' : 'hidden '}space-y-2.5">
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
                </div>
            </div>
        </section>
    `;
}

/**
 * 產生未開放公開資料產品之暫無資料高質感版面 (一頁式緊湊呈現)
 */
function buildPlaceholderContentHtml(cat) {
    return `
        <section class="bg-white border border-slate-200 rounded-xl shadow-xs p-3 sm:p-4 space-y-2.5">
            <!-- 專題標題列 (超緊湊單行化) -->
            <div class="flex items-center justify-between gap-3 pb-2 border-b border-slate-100">
                <div class="flex items-center gap-2 min-w-0">
                    <span class="w-1.5 h-4 bg-blue-900 rounded-full inline-block shrink-0"></span>
                    <h1 class="text-base sm:text-lg font-bold text-blue-950 tracking-tight truncate">
                        ${cat.titleZh}
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

            <!-- 瀏覽器書籤風格：標籤列與內容容器一體化 -->
            <div class="tech-bookmark-wrapper mt-1">
                ${buildSubTabNavHtml(TechState.activeSubTab, false)}

                <div class="tech-bookmark-body">
                    <!-- 分頁一：原理 -->
                    <div id="tech-panel-principles" class="${TechState.activeSubTab === 'principles' ? '' : 'hidden '}space-y-2">
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
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                            <i class="fa-solid fa-paper-plane text-xs"></i>
                            <span>聯繫業務索取資料</span>
                        </a>
                        <a href="${cat.productLink}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                            <span>${cat.productLinkText}</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 分頁二：目錄 -->
            <div id="tech-panel-catalog" class="${TechState.activeSubTab === 'catalog' ? '' : 'hidden '}space-y-2.5">
                <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                    <div class="flex items-center justify-center gap-2">
                        <i class="fa-solid fa-list-check text-blue-900 text-sm"></i>
                        <span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold">產品目錄</span>
                        <span class="text-sm sm:text-base font-bold text-blue-950">瀏覽 ${cat.titleZh} 完整產品清單與規格</span>
                    </div>
                    <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                        宏威應用材料官網提供完整的產品規格表、物性參數對照與樣品申請服務。
                    </p>
                    <div class="pt-1 flex items-center justify-center gap-2.5">
                        <a href="${cat.productLink}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                            <i class="fa-solid fa-table-list text-xs"></i>
                            <span>${cat.productLinkText}</span>
                        </a>
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                            <span>申請規格諮詢</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 分頁三：應用技術 -->
            <div id="tech-panel-applications" class="${TechState.activeSubTab === 'applications' ? '' : 'hidden '}space-y-2">
                <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                    <div class="flex items-center justify-center gap-2">
                        <i class="fa-solid fa-industry text-blue-900 text-sm"></i>
                        <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整備中</span>
                        <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫送公開資料</span>
                    </div>
                    <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                        目前原廠尚未提供此品項之公開技術應用白皮書。如需特定產業應用評估，歡迎直接聯繫宏威技術顧問。
                    </p>
                    <div class="pt-1 flex items-center justify-center gap-2.5">
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                            <span>聯繫業務索取資料</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 分頁四：單一產品技術 -->
            <div id="tech-panel-single" class="${TechState.activeSubTab === 'single' ? '' : 'hidden '}space-y-2.5">
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
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                            <span>聯繫業務索取 TDS</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 分頁五：配方 -->
            <div id="tech-panel-formulation" class="${TechState.activeSubTab === 'formulation' ? '' : 'hidden '}space-y-2.5">
                <div class="rounded-xl border border-slate-200 bg-slate-50/70 p-3.5 sm:p-4 text-center space-y-2">
                    <div class="flex items-center justify-center gap-2">
                        <i class="fa-solid fa-clipboard-list text-amber-700 text-sm"></i>
                        <span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">原廠無公開配方</span>
                        <span class="text-sm sm:text-base font-bold text-blue-950">原廠未提供公開參考配方，暫無資料</span>
                    </div>
                    <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                        特用化學品配方取決於樹脂與固化體系，原廠未提供通用公開配方。如需特定系統配方評估與樣品測試，歡迎聯繫宏威技術服務團隊。
                    </p>
                    <div class="pt-1 flex items-center justify-center gap-2.5">
                        <a href="contact/?mode=detailed&inquiry=${encodeURIComponent(cat.slug)}"
                           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                            <span>申請配方諮詢與樣品</span>
                        </a>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </section>
    `;
}

/**
 * 鍵盤左右鍵切換單頁模式
 */
window.addEventListener('keydown', (e) => {
    const activeTab = document.querySelector('.tab-content.active');
    if (activeTab && activeTab.id === 'tab-technology') {
        if (TechState.activeCategory === 'tyzor' && TechState.activeSubTab === 'principles') {
            if (e.key === 'ArrowLeft') {
                prevTechSinglePage();
            } else if (e.key === 'ArrowRight') {
                nextTechSinglePage();
            }
        }
    }
});

// 當 DOM 載入完成或腳本就緒時初始化技術專區
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
