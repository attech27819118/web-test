# -*- coding: utf-8 -*-
import os, sys
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

for root, dirs, files in os.walk('techdatadb/5. MPI'):
    for f in sorted(files):
        if f.lower().endswith('.pdf'):
            p = os.path.join(root, f)
            try:
                reader = PdfReader(p)
                pages = [page.extract_text() or '' for page in reader.pages[:min(2, len(reader.pages))]]
                full = ' '.join(pages).replace('\n', ' ')
                lines = [l.strip() for l in full.split('  ') if len(l.strip()) > 5]
                sep = " // "
                res = sep.join(lines[:4])
                print(f"[{f}]: {res[:180]}")
            except Exception as e:
                print(f"[{f}]: ERR {e}")
