# -*- coding: utf-8 -*-
import sys
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open('technology/carbon-black/index.html', 'r', encoding='utf-8') as f:
    cb_html = f.read()

print("=== Carbon Black Cover Verification ===")
btn_matches = re.findall(r'<button[^>]*>.*?全螢幕放大閱讀.*?</button>', cb_html)
print("1. Standalone Fullscreen Button count (should be 0):", len(btn_matches))

has_onclick = 'onclick="openPdfFullscreenModal' in cb_html
print("2. Preview card has onclick openPdfFullscreenModal:", has_onclick)

has_badge = '點擊全螢幕放大閱讀' in cb_html
print("3. Hover badge present on cover:", has_badge)

has_cursor = 'cursor-pointer' in cb_html
print("4. Cover has cursor-pointer:", has_cursor)

with open('technology/tyzor/index.html', 'r', encoding='utf-8') as f:
    tyzor_html = f.read()

print("\n=== Tyzor Cover Verification ===")
has_img_onclick = 'onclick="openImageFullscreenModal' in tyzor_html
print("1. Mechanism image has onclick openImageFullscreenModal:", has_img_onclick)
print("2. Standalone Fullscreen Button count (should be 0):", len(re.findall(r'<button[^>]*>.*?全螢幕放大閱讀.*?</button>', tyzor_html)))

with open('js/technology.js', 'r', encoding='utf-8') as f:
    js = f.read()

print("\n=== JS Cover Logic Verification ===")
print("1. renderPdfDocumentToContainer renders only page 1:", 'pdf.getPage(1)' in js)
print("2. openImageFullscreenModal defined:", 'function openImageFullscreenModal' in js)
print("3. Cover click triggers openPdfFullscreenModal:", 'onclick="openPdfFullscreenModal' in js)
