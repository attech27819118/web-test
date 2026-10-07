import os
import re
import subprocess

files_to_check = [
    'technology/tyzor/index.html',
    'technology/carbon-black/index.html',
    'technology/wax/index.html',
    'technology/chain/index.html',
    'index.html',
    'js/technology.js'
]

print("=== 1. Checking for any button or pill with '全螢幕放大閱讀' ===")
for path in files_to_check:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check for <button> containing 全螢幕放大閱讀
    btn_matches = re.findall(r'<button[^>]*>.*?全螢幕放大閱讀.*?</button>', content, re.DOTALL)
    # Check for span/div floating badges containing 全螢幕放大閱讀
    pill_matches = re.findall(r'<span[^>]*>.*?全螢幕放大閱讀.*?</span>', content, re.DOTALL)
    
    print(f"[{path}]")
    print(f"  - Button matches: {len(btn_matches)}")
    print(f"  - Pill / span matches: {len(pill_matches)}")
    if btn_matches or pill_matches:
        print(f"  ⚠️ Warning matches in {path}:", btn_matches, pill_matches)

print("\n=== 2. Checking Cover Container Direct Click Binding ===")
for path in ['technology/tyzor/index.html', 'technology/carbon-black/index.html', 'js/technology.js']:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    has_cover_click = 'onclick="openPdfFullscreenModal' in content
    has_cursor_pointer = 'cursor-pointer' in content
    print(f"[{path}]")
    print(f"  - Has onclick openPdfFullscreenModal on cover container: {has_cover_click}")
    print(f"  - Has cursor-pointer: {has_cursor_pointer}")

print("\n=== 3. Checking Tyzor Principle Diagram Static Presentation ===")
with open('technology/tyzor/index.html', 'r', encoding='utf-8') as f:
    tyzor_html = f.read()

has_mech_modal = 'openImageFullscreenModal' in tyzor_html
print("  - Tyzor HTML contains openImageFullscreenModal (should be False):", has_mech_modal)

print("\n=== 4. Checking Proportional Non-Stretch Render in JS ===")
with open('js/technology.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

has_fit_scale = 'const fitScale = Math.min(scaleW, scaleH);' in js_content
has_aspect_ratio = 'aspectRatio' in js_content
has_contain = 'contain' in js_content

print("  - Fit scale min(scaleW, scaleH):", has_fit_scale)
print("  - CSS aspect-ratio configured:", has_aspect_ratio)
print("  - Object-fit contain configured:", has_contain)

print("\n=== 5. Syntax check on JS ===")
res = subprocess.run(['node', '-c', 'js/technology.js'], capture_output=True, text=True)
if res.returncode == 0:
    print("  ✅ node -c js/technology.js passed cleanly!")
else:
    print("  ❌ Syntax error:", res.stderr)
