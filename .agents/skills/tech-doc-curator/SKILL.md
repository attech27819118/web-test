---
name: tech-doc-curator
description: >-
  Enforces strict technical document summarization, extraction, and auditing guidelines for chemical and material data sheets.
  Use when the user requests extracting, summarizing, auditing, or cataloging technical documents (PDFs, TDS, Application Notes, Brochures)
  or asks to follow the established technical documentation standard.
---

# Technical Document Curation & Audit Skill (技術文件審核與摘要規範)

本 Skill 規範技術資料庫（如 Tyzor、Unilink、Orion、Micro Powders 等化工材料與塗料助劑）的資料提取、摘要編寫與精確審核流程，確保輸出成果 100% 忠於原文、零杜撰、零宣傳詞彙，並符合台灣產業界之專業語境。

---

## 核心準則 (Core Principles)

1. **零臆測與零跨文件干擾 (Zero Hallucination & No Cross-Contamination)**
   - 嚴格禁止憑空猜想數據或引申未提及之規格。
   - 同系列或同目錄之不同文件（例如 Activate 422 針對食品接觸 vs. 瓶級樹脂；或同份磨耗報告針對不同微粉等級）具有各自獨立的測試條件與結論，**絕對禁止跨文件套用或拼湊數值**。
   - 所有數據（如轉化率、粒徑、黏度、DSC 數據、ASTM 測試、耐溫、文號）必須 100% 來自該份 PDF 原始內文。

2. **嚴禁「原廠」二字 (Strict Zero-"原廠" Rule)**
   - 全文檢索出現「原廠」二字的次數必須為 **0**。
   - 避免宣傳性、行銷性贅字。需要提及來源時，以品牌名稱、製造商、供應商或客觀主詞代稱（如：Alan & Thomas Technologies、Dorf Ketal、Orion S.A.、Micro Powders 等）。

3. **台灣專業化工與塗料語境 (Taiwan Terminology)**
   - 全面採用台灣產業界慣用語彙，語意平實清晰：
     - 使用「可塑劑」（非增塑劑）
     - 使用「壓敏膠 / 感壓膠」（非壓敏膠/壓敏膠水）
     - 使用「消光」（非消光/消光處理）
     - 使用「流平性」（非流平性/流平）
     - 使用「滑爽性 / 滑爽手感」（非爽滑）
     - 使用「膠凝時間」（非凝膠時間/膠化時間）
     - 使用「活化期 / 操作適用期」（非適用期/操作時間）
     - 使用「熟化 / 固化」（非熟化/硫化）
     - 使用「接著力 / 附著力」（非附著力/附著度）

4. **結構嚴格一致 (Strict 4-Section Standard Format)**
   - 每一份文件必須依序包含且僅包含以下區塊：
     - **標題**：以檔名或第一頁 Title 為主。
     - **原文出處**：精確列出官方文件代號（如 SC 號碼、TI 號碼、報告編號）、出版年份/月份與文件類型（如 Application Data Sheet、Technical Information、Brochure 等）。
     - **重點**：包含「一個摘要」+「剛好三條核心重點」（不可為 2 條或 4 條）。
     - **應用**：嚴格列出該檔案內文提及之應用領域，資料未提者不寫。

---

## 標準輸出結構 (Markdown Template)

```markdown
#### {兩位數序號}. {標題（以檔名或第一頁 Title 為主）}
- **檔案**：`{完整檔名.pdf}`
- **路徑**：`{相對於專案根目錄之旅徑}`
- **原文出處**：{官方文件編號 / 出版年月 / 官方文獻名稱}
- **重點**：
  - **摘要**：{一句平實、簡短、不誇飾的專業摘要，說明該技術文獻之核心研究主題與技術定位。}
  - **核心重點**：
    1. {第一條核心數據或反應機理，必須包含精確數據或測試條件}
    2. {第二條核心優勢或對比表現，忠於原檔}
    3. {第三條工藝特性、操作參數或安全/法規指標}
- **應用**：{列出檔案內文實際提及之應用，以頓號分隔。}
```

---

## 標準作業工作流程 (Standard Operating Procedure)

### 步驟 1：原始內文真實提取 (Text Extraction)
遇到技術文獻整理任務時，絕不直接依檔名進行推論。必須先透過 Python 工具（如 `pypdf` 或 `pdfplumber`）萃取真實文字：
```python
from pypdf import PdfReader
reader = PdfReader("path/to/doc.pdf")
text = "\n".join([page.extract_text() or "" for page in reader.pages])
```
- 若為掃描件或向量圖片（文字萃取為空），必須渲染頁面後檢視內容，絕不留白或編造。

### 步驟 2：提取核心標識與文號 (Official Identifiers)
在內文封面、頁首（Header）或頁尾（Footer）搜尋官方代號：
- Dorf Ketal / Tyzor / Unilink：搜尋 `SCxxxx`、`DKLxxxx`、`Application Data Sheet`、`Technical Note`
- Orion：搜尋 `TI xxxx`、`OEC-TI`、`Industry Information`
- Micro Powders：搜尋 `Study xxxx`、`Revised MM/YYYY`、`Selector Guide`

### 步驟 3：撰寫與用語過濾 (Writing & Localization)
- 撰寫剛好 1 個摘要與 3 條核心重點。
- 嚴格使用台灣產業界化工語彙。
- 檢查去除所有主觀誇飾詞彙與宣傳字眼。

### 步驟 4：自動化斷言檢核 (Automated Validation)
產出 Markdown 後，必須透過 Python 腳本執行強制斷言（Assertion Checks）：
```python
with open("output.md", "r", encoding="utf-8") as f:
    content = f.read()

# 1. 關鍵詞過濾
assert "原廠" not in content, "Error: '原廠' detected!"

# 2. 結構與數量檢核 (以 N 份文件為例)
assert content.count("- **原文出處**：") == N
assert content.count("- **摘要**：") == N
assert content.count("    1. ") == N
assert content.count("    2. ") == N
assert content.count("    3. ") == N
assert content.count("    4. ") == 0, "Error: More than 3 key points detected!"
assert content.count("- **應用**：") == N
```
只有在全部斷言通過後，方能完成任務並交付。
