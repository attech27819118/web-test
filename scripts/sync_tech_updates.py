# -*- coding: utf-8 -*-
"""
Sync Tech Database into js/technology.js and update build_technology_subpages.py
1. 將 json/tech_database.json 內容直接同步進 js/technology.js
2. 在 js/technology.js 與 build_technology_subpages.py 加入「全螢幕放大閱讀」按鈕與模態視窗
3. 優化 Canvas 渲染解析度 (devicePixelRatio)，徹底解決「PDF 那樣大小看不清內容」問題
4. 重新建置 11 大獨立技術頁面與首頁
"""

import os
import sys
import json
import re

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(ROOT_DIR, "json", "tech_database.json")
JS_PATH = os.path.join(ROOT_DIR, "js", "technology.js")
SUBPAGES_PY = os.path.join(ROOT_DIR, "scripts", "build_technology_subpages.py")

with open(JSON_PATH, "r", encoding="utf-8") as f:
    tech_db = json.load(f)

# 讀取 js/technology.js
with open(JS_PATH, "r", encoding="utf-8") as f:
    js_content = f.read()

# 1. 替換 js/technology.js 中的 const TECH_DATABASE = { ... };
db_json_str = json.dumps(tech_db, ensure_ascii=False, indent=2)
new_db_declaration = f"const TECH_DATABASE = {db_json_str};\n"

# 定位 const TECH_DATABASE = { 的起始與結束位置
start_marker = "const TECH_DATABASE = {"
start_idx = js_content.find(start_marker)
if start_idx == -1:
    print("❌ Cannot find 'const TECH_DATABASE = {' in js/technology.js")
    sys.exit(1)

end_marker = "\n// 技術專區狀態管理"
end_idx = js_content.find(end_marker, start_idx)
if end_idx == -1:
    # 嘗試另一標記
    end_marker = "const TechState = {"
    end_idx = js_content.rfind("const TechState", start_idx)

if end_idx == -1:
    print("❌ Cannot find end marker of TECH_DATABASE in js/technology.js")
    sys.exit(1)

# 替換 TECH_DATABASE
js_updated = js_content[:start_idx] + new_db_declaration + js_content[end_idx:]

with open(JS_PATH, "w", encoding="utf-8") as f:
    f.write(js_updated)
print(f"✅ Successfully updated TECH_DATABASE in {JS_PATH}")

