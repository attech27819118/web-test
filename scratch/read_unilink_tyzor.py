# -*- coding: utf-8 -*-
import os, sys, json
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

def scan_folder(folder_path):
    print(f"\n=======================================================")
    print(f"FOLDER: {folder_path}")
    for root, dirs, files in os.walk(folder_path):
        for f in sorted(files):
            if f.lower().endswith('.pdf'):
                p = os.path.join(root, f)
                try:
                    reader = PdfReader(p)
                    pages = [page.extract_text() or '' for page in reader.pages[:min(3, len(reader.pages))]]
                    full = " ".join(pages).replace('\n', ' ')
                    lines = [l.strip() for l in full.split('  ') if len(l.strip()) > 5]
                    summary = " // ".join(lines[:6])
                    print(f"[{f}]: {summary[:200]}")
                except Exception as e:
                    print(f"[{f}]: ERR {e}")

scan_folder('techdatadb/3.unilink')
scan_folder('techdatadb/2.Tyzor/3.Tyzor 應用技術資料 (12)鈦酸酯 \uf028')
scan_folder('techdatadb/2.Tyzor/4.Tyzor 單一產品應用技術資料(2)\uf028')
