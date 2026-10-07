import os
import re

print("=== 1. Checking Category Intro Descriptions ===")
for slug in ['tyzor', 'carbon-black', 'wax', 'maleic']:
    subpage = f"technology/{slug}/index.html"
    with open(subpage, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Check if category description paragraph is present
    has_desc = '專題核心技術簡介說明' in html
    print(f"[{slug}] has category intro description: {has_desc}")

print("\n=== 2. Checking Document Descriptions in Tyzor, Carbon Black, Wax, Chain ===")
for slug in ['tyzor', 'carbon-black', 'wax', 'chain']:
    subpage = f"technology/{slug}/index.html"
    with open(subpage, 'r', encoding='utf-8') as f:
        html = f.read()

    # Look for empty description paragraphs: <p ... shadow-2xs">\s*</p>
    empty_ps = re.findall(r'<p class="[^"]*shadow-2xs">\s*</p>', html)
    print(f"[{slug}] Empty description paragraphs found: {len(empty_ps)} (Should be 0!)")

print("\n=== 3. Checking Subtab Default Order for Carbon Black ===")
with open('technology/carbon-black/index.html', 'r', encoding='utf-8') as f:
    cb_html = f.read()

# Catalog should now be the active subtab because principles is empty!
is_catalog_active = 'id="tech-subtab-catalog"\n                            class="tech-subtab-btn active"' in cb_html
is_catalog_panel_visible = '<div id="tech-panel-catalog" class="space-y-2">' in cb_html
print(f"[carbon-black] Catalog tab is active: {is_catalog_active}")
print(f"[carbon-black] Catalog panel is visible: {is_catalog_panel_visible}")

print("\n=== 4. Checking JS buildEmptyTabHtml Function Existence ===")
with open('js/technology.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

print("buildEmptyTabHtml defined in JS:", 'function buildEmptyTabHtml(' in js_code)
print("doc.desc fallback used in JS:", 'doc.desc || doc.summary' in js_code)
print("getBestSubTab natural order in JS:", "['principles', 'catalog', 'applications'" in js_code)
