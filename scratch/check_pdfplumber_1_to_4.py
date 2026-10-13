import pdfplumber
import pypdf
import os

files = [
    r"d:\Jay\vscode\attech0824 - test\techdatadb\1.技術手冊\4個主要功能\鈦（鋯）酸酯作為交聯劑.pdf",
    r"d:\Jay\vscode\attech0824 - test\techdatadb\1.技術手冊\4個主要功能\鈦（鋯）酸酯作為催化劑.pdf",
    r"d:\Jay\vscode\attech0824 - test\techdatadb\1.技術手冊\4個主要功能\鈦（鋯）酸酯作為表面改性.pdf",
    r"d:\Jay\vscode\attech0824 - test\techdatadb\1.技術手冊\4個主要功能\鈦（鋯）酸酯提高附著力.pdf"
]

for f in files:
    print(f"File: {os.path.basename(f)}")
    with pdfplumber.open(f) as pdf:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            print(f"  Page {i+1} text length: {len(text) if text else 0}")
            print(f"  Images on page {i+1}: {len(page.images)}")
            if text:
                print(f"  Text preview: {text[:200]}")
