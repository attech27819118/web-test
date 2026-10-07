# -*- coding: utf-8 -*-
import os, sys, json
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

with open('json/tech_database.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

extracted = {}

for cat_slug, cat_data in db.items():
    if not cat_data.get('hasData'):
        continue
    extracted[cat_slug] = {}
    for tab_key, docs in cat_data.get('tabs', {}).items():
        if not docs:
            continue
        extracted[cat_slug][tab_key] = []
        for doc in docs:
            pdf_path = doc.get('pdfPath')
            if not os.path.exists(pdf_path):
                print(f"File not found: {pdf_path}")
                continue
            try:
                reader = PdfReader(pdf_path)
                num_pages = len(reader.pages)
                text_pages = []
                for p_idx in range(min(num_pages, 3)):
                    t = reader.pages[p_idx].extract_text() or ''
                    text_pages.append(t.strip())
                extracted[cat_slug][tab_key].append({
                    "filename": doc.get('filename'),
                    "pdfPath": pdf_path,
                    "num_pages": num_pages,
                    "pages": text_pages
                })
            except Exception as e:
                print(f"Error reading {pdf_path}: {e}")

with open('scratch/pdf_texts_sample.json', 'w', encoding='utf-8') as f:
    json.dump(extracted, f, ensure_ascii=False, indent=2)

print("Extracted text sample saved to scratch/pdf_texts_sample.json!")
