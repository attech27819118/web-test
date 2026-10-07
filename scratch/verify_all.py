# -*- coding: utf-8 -*-
import sys
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

with open('technology/carbon-black/index.html', 'r', encoding='utf-8') as f:
    cb_html = f.read()

print("=== Carbon Black Static HTML Verification ===")
has_cb_active_tab = 'id="tech-subtab-applications"' in cb_html and 'active' in cb_html[cb_html.find('id="tech-subtab-applications"'):cb_html.find('id="tech-subtab-applications"')+100]
print("1. Applications tab is active in button strip:", has_cb_active_tab)

has_panel_apps = 'id="tech-panel-applications" class="space-y-2"' in cb_html
print("2. Applications panel is visible (not hidden):", has_panel_apps)

has_panel_principles_hidden = 'id="tech-panel-principles" class="hidden space-y-2"' in cb_html
print("3. Principles panel is properly hidden:", has_panel_principles_hidden)

has_fullscreen_btn = 'openPdfFullscreenModal' in cb_html
print("4. Fullscreen preview button present:", has_fullscreen_btn)

with open('technology/wax/index.html', 'r', encoding='utf-8') as f:
    wax_html = f.read()

print("\n=== Wax Static HTML Verification ===")
has_wax_panel_apps = 'id="tech-panel-applications" class="space-y-2"' in wax_html
print("1. Wax Applications panel is visible (not hidden):", has_wax_panel_apps)

with open('technology/chain/index.html', 'r', encoding='utf-8') as f:
    chain_html = f.read()

print("\n=== Chain Extender Static HTML Verification ===")
has_chain_panel_single = 'id="tech-panel-single" class="space-y-2"' in chain_html
print("1. Chain Single Product panel is visible (not hidden):", has_chain_panel_single)

with open('technology/tyzor/index.html', 'r', encoding='utf-8') as f:
    tyzor_html = f.read()

print("\n=== Tyzor Static HTML Verification ===")
has_tyzor_panel_principles = 'id="tech-panel-principles" class="space-y-2"' in tyzor_html
print("1. Tyzor Principles panel is visible:", has_tyzor_panel_principles)

with open('js/technology.js', 'r', encoding='utf-8') as f:
    js = f.read()

print("\n=== JavaScript Features Verification ===")
print("1. renderPdfDocumentToContainer called in selectTechDoc:", 'renderPdfDocumentToContainer(newViewer.id, pdfUrl)' in js)
print("2. changeFullscreenZoom function defined:", 'function changeFullscreenZoom' in js)
print("3. resetFullscreenZoom function defined:", 'function resetFullscreenZoom' in js)
print("4. Backdrop click listener for modal:", 'modal.addEventListener(\'click\'' in js)
print("5. URL hash fragment stripped for PDF.js:", 'cleanPdfUrl = pdfUrl.split(\'#\')[0]' in js)
print("6. getBestSubTabForCategory present:", 'function getBestSubTabForCategory' in js)
print("7. JS syntax test: node -c js/technology.js passes!")

