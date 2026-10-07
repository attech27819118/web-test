# -*- coding: utf-8 -*-
import sys, os, json
sys.stdout.reconfigure(encoding='utf-8')

with open('json/tech_database.json', 'r', encoding='utf-8') as f:
    db = json.load(f)

for cat_slug, cat_data in db.items():
    if not cat_data.get('hasData'):
        continue
    print(f"=== Category: {cat_slug} ===")
    for tab_key, docs in cat_data.get('tabs', {}).items():
        if not docs:
            continue
        print(f"  -- Tab: {tab_key} ({len(docs)} docs) --")
        for idx, doc in enumerate(docs):
            print(f"    [{idx+1}] {doc.get('filename')}")
