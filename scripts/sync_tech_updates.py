# -*- coding: utf-8 -*-
"""
ATTech 技術專區 - 一鍵全自動同步與建置腳本 (One-Click Master Sync & Build)
執行本腳本即可一鍵完成四合一自動化：
1. [萃取] 讀取 techdatadb/技術文件摘要與重點.md 生成最新 json/tech_database.json
2. [編譯] 生成 11 大獨立技術靜態網頁 (technology/{slug}/index.html)
3. [入口] 同步更新根目錄首頁 index.html 與 sitemap.xml
4. [同步] 自動轉換版型並注入資料庫至前端 js/technology.js
"""

import os
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT_DIR, "scripts"))

from build_tech_json import build_database_from_md
from build_technology_subpages import build_all

if __name__ == '__main__':
    md_file = os.path.join(ROOT_DIR, 'techdatadb', '技術文件摘要與重點.md')
    if os.path.exists(md_file):
        print("📦 [1/4] 從 techdatadb/技術文件摘要與重點.md 萃取最新資料庫...", flush=True)
        build_database_from_md()
        sys.stdout.flush()
    build_all()
