import os
import pdfplumber
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith(".pdf") and any(w in f for w in ["交聯劑", "催化劑", "表面改性", "附著力"]):
            full_path = os.path.join(root, f)
            print("Found:", f)
            with pdfplumber.open(full_path) as pdf:
                for i, page in enumerate(pdf.pages):
                    t = page.extract_text()
                    print(f"  Page {i+1}: text len = {len(t) if t else 0}, images = {len(page.images)}")
                    if t:
                        print(f"  Text:\n{t}")
