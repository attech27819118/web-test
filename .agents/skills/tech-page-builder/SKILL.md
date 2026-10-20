---
name: tech-page-builder
description: >-
  Build, style, update, or audit technical product pages and subpages following the ATTech 5-dimension technical documentation standard.
  Use when creating or modifying technology pages, implementing 2-column split layouts with browser bookmark tabs,
  building secure PDF canvas cover previews and fullscreen viewers, configuring Munzing-style document selectors,
  or generating static subpages with SEO and hydration matching technology.js and build_technology_subpages.py.
---

# Technical Page Builder Skill (技術專頁設計與建置規範)

本 Skill 規範材料與特用化學品專題頁面（Technology Subpages）的前端介面風格、五大維度資訊架構、雙欄翼狀佈局、PDF 封面沉浸式預覽安全機制，以及靜態頁面產生流程。所有技術專頁的開發與重構皆須嚴格比照此標準。

---

## 核心設計理念與風格準則 (Design Philosophy & Aesthetics)

1. **實事求是、誠實告知 (Zero Hallucination & Honest Fallbacks)**
   - 嚴格依據真實技術文件庫資料呈現。
   - 若某產品線在特定維度尚無公開資料，**嚴禁憑空杜撰或空白破版**，必須使用統一的「資料整理中 / 暫無公開資料」提示卡，並提供客製化諮詢與產品專區引導連結。

2. **左右雙欄翼狀佈局 (2-Column Split Architecture)**
   - **全域佈局**：左側為緊湊條列式側邊欄 (`tech-sidebar`，桌面端寬度 310px，`position: sticky`，附帶序號 Badge、英文主標題與中文副標題)；右側為主要展示區 (`tech-content-main`)。
   - **文件核心視圖**：採用 `50% : 50%` 左右雙翼結構（螢幕小於 900px 時折行）。
     - **左翼 (預覽區)**：展示高清封面（Canvas / WebP），Hover 發光微互動，點擊直接觸發全畫面沉浸式閱讀。
     - **右翼 (技術資訊區)**：包含專業摘要卡片、綠色勾選編號核心特點 (Checkmark List)、適用範疇標籤 (Pills)，以及規格諮詢/產品列表動作列。

3. **瀏覽器書籤樣式標籤列 (Browser Bookmark Tabs)**
   - 四大維度使用統一單行書籤樣式 (`tech-subtab-strip`)。
   - 頂部帶圓角 (`border-top-left-radius`, `border-top-right-radius`)、底部接合無縫線 (`margin-bottom: -1px`, `border-bottom: 2px solid #ffffff`)。
   - 啟動狀態 (`active`) 具備純白底色、深藍文字 (`#1e3a8a`) 與頂部 3px 品牌裝飾飾條 (`border-t-3 border-blue-900`)，與下方卡片邊界無縫接軌。

4. **安全沈浸式在線預覽 (Protected Document Preview)**
   - **線上高清閱讀，不開放下載**：全面停用右鍵選單 (`contextmenu` 攔截)、禁用文字選取 (`select-none`)、攔截另存與列印快捷鍵 (`Ctrl+S`, `Ctrl+P`)。
   - **全螢幕模態視窗 (`#tech-pdf-fullscreen-modal`)**：深灰黑背景 (`#0f172a`)，滿版沉浸式，支援多頁滾動、縮放放大 (+0.2)、縮小 (-0.2)、重設 100% 及 ESC 鍵快捷關閉。

5. **技術文件切換列 (Document Selector)**
   - **1. 原理機制**：採用「一塊一塊」直覺區塊按鈕 (`tech-principles-blocks-bar` + `.tech-doc-block-btn`)，點擊立即切換。
   - **2. 目錄 / 3. 單一產品技術**：維持 Munzing 風格緊湊下拉選單 (`tech-doc-selector-bar`)，單一產品支援按產品系列分組 (`<optgroup>`)，右側附「第 X / 共 Y 篇」與上一篇/下一篇導航按鈕。

---

## 三大核心維度架構 (The 3 Core Dimensions)

每個技術產品線嚴格劃分為三大核心維度：

| 維度 Key | 標籤名稱 | 圖示 (FontAwesome) | 內容定位 |
| :--- | :--- | :--- | :--- |
| `principles` | 1. 原理 | `fa-atom` | 化學反應機制圖、架橋/催化/表面改性/附著力分子作用原理（一塊一塊按鈕切換） |
| `catalog` | 2. 目錄 | `fa-list-check` | 原廠綜合型錄 (Brochures)、選型指南、物理化學參數對照表（Munzing 下拉選單） |
| `single` | 3. 單一產品技術 | `fa-flask-vial` | 個別型號技術資訊 (TI / TDS)、依產品系列分組 (`optgroup`)（Munzing 下拉選單） |

---

## 頁面結構標準範本 (HTML Blueprint)

### 1. 左右雙翼文件預覽視圖 (`tech-principles-grid`)

```html
<div class="tech-principles-grid bg-slate-50/70 rounded-xl border border-slate-200 p-3 sm:p-3.5">
    <!-- 左欄：文件封面卡片 (點擊直接全螢幕放大閱讀) -->
    <div class="h-full pr-0 sm:pr-2.5 border-b sm:border-b-0 sm:border-r border-slate-200/80 pb-2.5 sm:pb-0">
        <div class="h-full flex flex-col justify-center">
            <div id="pdf-canvas-viewer-{slug}-{tabKey}"
                 class="pdf-viewer-container group relative w-full h-[580px] sm:h-[640px] rounded-xl border border-slate-200 bg-white p-3 flex items-center justify-center overflow-hidden select-none cursor-pointer transition-all duration-200 hover:border-blue-500 hover:shadow-lg"
                 data-pdf-url="{pdfUrl}"
                 data-pdf-title="{docTitle}"
                 onclick="openPdfFullscreenModal('{pdfUrl}', '{docTitle}')"
                 title="點擊全螢幕放大閱讀"
                 oncontextmenu="return false;">
                <div class="flex flex-col items-center justify-center h-full text-slate-400 gap-2">
                    <i class="fa-solid fa-circle-notch fa-spin text-xl text-blue-900"></i>
                    <span class="text-xs font-semibold text-slate-600">文件封面載入中...</span>
                </div>
            </div>
        </div>
    </div>

    <!-- 右欄：技術重點摘要與動作列 -->
    <div class="space-y-2 pl-0 sm:pl-2.5">
        <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {docTitle}
            </h3>
        </div>

        <p class="text-sm text-slate-700 leading-relaxed font-normal bg-white p-2.5 rounded-lg border border-slate-200/80 shadow-2xs">
            {docDescription}
        </p>

        <!-- 主要技術特點 -->
        <div class="space-y-1.5">
            <div class="flex items-center gap-1.5 text-xs font-bold text-blue-950">
                <i class="fa-solid fa-circle-check text-emerald-600 text-xs"></i>
                <span>主要內容與技術特點：</span>
            </div>
            <ul class="space-y-1 text-sm text-slate-700">
                <li class="flex items-start gap-1.5">
                    <span class="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">1</span>
                    <span>{特點1}</span>
                </li>
            </ul>
        </div>

        <!-- 適用範疇標籤 -->
        <div class="space-y-1 pt-0.5">
            <span class="text-xs font-bold text-slate-700">原廠適用範疇 / 相關領域：</span>
            <div class="flex flex-wrap gap-1">
                <span class="px-2 py-0.5 rounded bg-white text-slate-700 text-xs font-medium border border-slate-200">{領域標籤}</span>
            </div>
        </div>

        <!-- 諮詢動作列 -->
        <div class="pt-2 flex flex-wrap items-center gap-2 border-t border-slate-200">
            <a href="contact/?mode=detailed&inquiry={encodedInquiry}"
               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
                <i class="fa-solid fa-envelope text-xs"></i>
                <span>索取規格諮詢 / 申請樣品</span>
            </a>
            <a href="{productLink}"
               class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
                <i class="fa-solid fa-table-list text-xs"></i>
                <span>查看相關產品列表</span>
            </a>
        </div>
    </div>
</div>
```

### 2. 無公開資料之實事求是提示卡 (`build_empty_tab_html`)

```html
<div class="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-6 text-center space-y-2.5">
    <div class="flex items-center justify-center gap-2">
        <i class="fa-solid fa-folder-open text-slate-400 text-base"></i>
        <span class="px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold">資料整理中</span>
        <span class="text-sm sm:text-base font-bold text-blue-950">原廠技術資料整理中，暫無公開{維度名稱}</span>
    </div>
    <p class="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
        目前原廠未提供此項之公開資料，我們秉持實事求是原則不進行臆測杜撰。若您需要特定規格手冊或評估樣品，歡迎直接聯繫宏威業務團隊為您服務。
    </p>
    <div class="pt-1 flex items-center justify-center gap-2.5">
        <a href="contact/?mode=detailed&inquiry={encodedInquiry}"
           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-lg shadow-2xs transition-all active:scale-95">
            <i class="fa-solid fa-paper-plane text-xs"></i>
            <span>聯繫業務索取資料</span>
        </a>
        <a href="{productLink}"
           class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-lg transition-all">
            <i class="fa-solid fa-table-list text-xs"></i>
            <span>瀏覽相關產品專區</span>
        </a>
    </div>
</div>
```

---

## 樣式關鍵規範 (CSS Rules)

以下 CSS 規範定義了技術專頁的視覺靈魂，修改時應嚴格保持：

```css
/* 左右兩欄主容器 */
.tech-layout-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: 100%;
}
@media (min-width: 900px) {
    .tech-layout-container {
        flex-direction: row;
        gap: 1.25rem;
    }
    .tech-sidebar {
        width: 310px;
        position: sticky;
        top: 5rem;
        max-height: calc(100vh - 5.5rem);
        overflow-y: auto;
    }
}

/* 瀏覽器書籤風格容器與標籤列 */
.tech-bookmark-wrapper {
    width: 100%;
    margin-top: 0.5rem;
    position: relative;
}
.tech-subtab-strip {
    display: flex;
    align-items: flex-end;
    gap: 0.375rem;
    padding-left: 0.5rem;
    margin-bottom: -1px;
    position: relative;
    z-index: 10;
}
.tech-subtab-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.375rem;
    padding: 0.625rem 1.125rem 0.5rem 1.125rem;
    border-top-left-radius: 0.625rem !important;
    border-top-right-radius: 0.625rem !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
    border: 1px solid #cbd5e1 !important;
    border-bottom: 1px solid #cbd5e1 !important;
    background: #f1f5f9 !important;
    color: #475569 !important;
    font-size: 0.8125rem;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease, border-color 0.15s ease;
    position: relative;
    z-index: 5;
    margin-bottom: 0;
}
.tech-subtab-btn:hover {
    background: #e2e8f0 !important;
    color: #0f172a !important;
}
.tech-subtab-btn.active {
    background: #ffffff !important;
    color: #1e3a8a !important;
    font-weight: 800 !important;
    border: 1px solid #cbd5e1 !important;
    border-top: 3px solid #1e3a8a !important;
    border-bottom: 2px solid #ffffff !important;
    margin-bottom: -1px !important;
    padding-bottom: calc(0.5rem + 2px) !important;
    position: relative;
    z-index: 20 !important;
    box-shadow: 0 -2px 6px -1px rgba(0, 0, 0, 0.05) !important;
}
.tech-bookmark-body {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 0 0.75rem 0.75rem 0.75rem;
    padding: 1rem;
    position: relative;
    z-index: 1;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.03);
}

/* 原理維度專用：一塊一塊技術文件切換按鈕 */
.tech-doc-block-btn {
    font-weight: 600;
    transition: all 0.15s ease;
}
.tech-doc-block-btn.active {
    background-color: #1e3a8a !important;
    color: #ffffff !important;
    border-color: #1e3a8a !important;
    font-weight: 700 !important;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
}

/* 核心雙欄翼狀網格 */
.tech-principles-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 0.875rem;
    align-items: start;
}
@media (max-width: 900px) {
    .tech-principles-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## 靜態生成與同步腳本規範 (Build Automation)

當調整技術專區資料或架構時，必須執行相應建置腳本，確保 SPA 與獨立子頁面完全一致：

1. **腳本位置**：`scripts/build_technology_subpages.py`
2. **建置步驟**：
   - 載入 `json/tech_database.json`（或 `TECH_DATABASE` 定義）。
   - 遍歷 11 大專題（`tyzor`, `carbon-black`, `maleic`, `px`, `silane`, `wax`, `adhesion`, `polyester`, `chain`, `matting`, `powder`）。
   - 產生獨立靜態子頁面目錄：`technology/{slug}/index.html`。
   - 注入獨立 Canonical URL、OpenGraph 及 SEO 描述。
   - 更新根目錄 `index.html` 的 `#tab-technology` 預設渲染內容與 JS 快取版本號。
   - 自動在 `sitemap.xml` 中登錄所有獨立子分頁網址。
   - 保留 `technology/index.html` 自動即時導向至首選專頁（`technology/tyzor/`）。

---

## 檢核清單 (Self-Audit Checklist)

每次修改技術頁面模組或重新編譯時，必須逐項核對：
- [ ] 11 大產品線側邊欄順序與圖示統一。
- [ ] 三大核心維度（原理、目錄、單一產品技術）名稱、順序與 Icon 嚴格一致。
- [ ] 桌面端側邊欄寬度為 310px，且具備 Sticky 懸浮效果。
- [ ] 單一產品技術資料 (Single) 之下拉選單正確使用 `<optgroup>` 按產品系列分組。
- [ ] 無資料分頁誠實顯示「資料整理中」，文字無臆測內容，且諮詢參數正確編碼。
- [ ] 封面點擊能正常開啟全螢幕高解析閱讀器，且右鍵選單與存檔快捷鍵已被全面攔截。
- [ ] 靜態 HTML 與 `js/technology.js` 前端水合邏輯同步無落差。
