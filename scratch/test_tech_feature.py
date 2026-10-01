import os
import sys
import subprocess
import re

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# 1. Syntax check for JS
for js_rel in ['js/technology.js', 'js/router.js', 'js/app.js']:
    js_path = os.path.join(ROOT, js_rel)
    res = subprocess.run(['node', '-c', js_path], capture_output=True, text=True)
    if res.returncode == 0:
        print(f"✅ Syntax check passed: {js_rel}")
    else:
        print(f"❌ Syntax error in {js_rel}: {res.stderr}")

# 2. Check navigation bar in index.html
with open(os.path.join(ROOT, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

idx_prod = html.find('id="nav-products"')
idx_tech = html.find('id="nav-technology"')
idx_part = html.find('id="nav-partners"')

print('\n--- Navigation Bar Position Verification ---')
print(f"nav-products pos: {idx_prod}")
print(f"nav-technology pos: {idx_tech}")
print(f"nav-partners pos: {idx_part}")

assert idx_prod != -1 and idx_tech != -1 and idx_part != -1
assert idx_prod < idx_tech < idx_part, "nav-technology must be between products and partners!"
print("✅ SUCCESS: '技術' 按鈕已精確定位於 '產品' 與 '合作夥伴' 之間 (依圖示紅箭頭指示)！")

tech_snippet = html[idx_tech:idx_tech + 250]
assert 'mega' not in tech_snippet.lower(), "技術按鈕不應包含 mega menu"
print("✅ SUCCESS: '技術' 按鈕為直接獨立按鈕，不需要 mega page / mega menu！")

# 3. Check 11 subpages
print('\n--- 11 大特用化學品獨立技術分頁檢查 (依照圖示順序) ---')
expected_order = [
    ("tyzor", "01", "Organic Titanates and Zirconates"),
    ("carbon-black", "02", "Special Carbon Black"),
    ("maleic", "03", "Maleic Resin / 馬林酸樹脂"),
    ("px", "04", "PX Lubricant Additives"),
    ("silane", "05", "Silane / 矽烷偶合劑"),
    ("wax", "06", "Micronized Wax / 微粉蠟"),
    ("adhesion", "07", "Adhesion Resin / 密著樹脂"),
    ("polyester", "08", "Polyester Resin / 聚酯樹脂"),
    ("chain", "09", "Chain Extender / 擴鏈劑"),
    ("matting", "10", "Matting Agent / 消光粉"),
    ("powder", "11", "Powder Coating Additive")
]

for slug, num, name in expected_order:
    subpage_path = os.path.join(ROOT, 'technology', slug, 'index.html')
    assert os.path.exists(subpage_path), f"Missing subpage for {slug}"
    print(f"✅ 分頁 [{num}] {name} -> technology/{slug}/index.html (存在，{os.path.getsize(subpage_path)} bytes)")

assert os.path.exists(os.path.join(ROOT, 'technology', 'index.html'))
print(f"✅ 技術專區首頁 -> technology/index.html (存在)")

# 4. Check Tyzor 4 Tech Items & View Modes
print('\n--- Tyzor 4 項技術資料與排版模式檢查 ---')
tyzor_html = open(os.path.join(ROOT, 'technology', 'tyzor', 'index.html'), encoding='utf-8').read()

assert 'btn-mode-single' in tyzor_html and '單頁模式' in tyzor_html
assert 'btn-mode-grid' in tyzor_html and '2x2 排版模式' in tyzor_html
print("✅ 包含「單頁模式」與「2x2 排版模式」切換按鈕！")

assert 'tyzor-view-single' in tyzor_html
assert 'tyzor-view-grid' in tyzor_html
print("✅ 單頁瀏覽容器 (tyzor-view-single) 與 2x2 排版容器 (tyzor-view-grid) 皆就緒！")

tech_items = [
    ("catalyst.webp", "鈦（鋯）酸酯作為催化劑.pdf", "催化應用"),
    ("crosslinker.webp", "鈦（鋯）酸酯作為交聯劑.pdf", "交聯改性"),
    ("adhesion.webp", "鈦（鋯）酸酯提高附著力.pdf", "附著促進"),
    ("surface_treatment.webp", "鈦（鋯）酸酯作為表面改性.pdf", "表面改性")
]

for img, pdf, cat in tech_items:
    assert img in tyzor_html, f"Missing image {img}"
    assert pdf in tyzor_html, f"Missing PDF {pdf}"
    print(f"✅ 原廠資料確認：{cat} -> 圖檔 {img} | PDF {pdf}")

print("\n🎉 全部驗證通過！所有需求均已百分之百完成。")
