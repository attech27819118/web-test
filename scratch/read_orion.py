# -*- coding: utf-8 -*-
import os, sys, json
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

def get_text_summary(path):
    try:
        reader = PdfReader(path)
        pages_text = []
        for p in reader.pages[:min(4, len(reader.pages))]:
            t = p.extract_text() or ''
            pages_text.append(t)
        full = "\n---\n".join(pages_text)
        return full
    except Exception as e:
        return f"ERR: {e}"

orion_dir = 'techdatadb/4.Orion'
for root, dirs, files in os.walk(orion_dir):
    for f in sorted(files):
        if f.lower().endswith('.pdf'):
            p = os.path.join(root, f)
            text = get_text_summary(p)
            lines = [l.strip() for l in text.split('\n') if len(l.strip()) > 3]
            print(f"==================================================")
            print(f"FILE: {f}")
            print(f"SAMPLE LINES:")
            for l in lines[:15]:
                print(f"  {l[:100]}")
