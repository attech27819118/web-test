# -*- coding: utf-8 -*-
import os, sys, json
sys.stdout.reconfigure(encoding='utf-8')
from pypdf import PdfReader

with open('scratch/pdf_texts_sample.json', 'r', encoding='utf-8') as f:
    sample_data = json.load(f)

print("Reading and summarizing doc metadata...")
