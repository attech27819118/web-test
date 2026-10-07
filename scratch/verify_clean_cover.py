# -*- coding: utf-8 -*-
import re

print("=== Checking for Standalone Fullscreen Button ===")
for path in ['technology/carbon-black/index.html', 'technology/tyzor/index.html', 'technology/wax/index.html', 'index.html', 'js/technology.js']:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    btns = re.findall(r'<button[^>]*>.*?全螢幕放大閱讀.*?</button>', content, re.DOTALL)
    print(f"[{path}] Standalone Button matches: {len(btns)}")

print("\n=== Checking Cover Click Action ===")
with open('technology/carbon-black/index.html', 'r', encoding='utf-8') as f:
    cb = f.read()
print("Cover container has onclick openPdfFullscreenModal:", 'onclick="openPdfFullscreenModal' in cb)
print("Cover container has cursor-pointer:", 'cursor-pointer' in cb)

with open('js/technology.js', 'r', encoding='utf-8') as f:
    js = f.read()
print("JS buildSingleDocLayoutHtml has onclick openPdfFullscreenModal:", 'onclick="openPdfFullscreenModal' in js)
print("JS renderPdfDocumentToContainer has fitScale (no stretch):", 'fitScale = Math.min(scaleW, scaleH)' in js)

print("\n=== Checking Tyzor Principles Static State ===")
with open('technology/tyzor/index.html', 'r', encoding='utf-8') as f:
    ty = f.read()
print("Tyzor mech image has NO onclick openImageFullscreenModal:", 'openImageFullscreenModal' not in ty)
print("Tyzor mech image has NO cursor-pointer:", 'cursor-pointer' not in ty[ty.find('反應機制圖')-200:ty.find('反應機制圖')])

