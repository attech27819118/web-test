import os
import pdfplumber
from PIL import Image
import io

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"
out_dir = r"d:\Jay\vscode\attech0824 - test\scratch\images_1_to_4"
os.makedirs(out_dir, exist_ok=True)

for root, dirs, files in os.walk(base_dir):
    for f in files:
        if f.endswith(".pdf") and any(w in f for w in ["交聯劑", "催化劑", "表面改性", "附著力"]):
            full_path = os.path.join(root, f)
            with pdfplumber.open(full_path) as pdf:
                for i, page in enumerate(pdf.pages):
                    img = page.to_image(resolution=150)
                    base_name = os.path.splitext(f)[0]
                    img_path = os.path.join(out_dir, f"{base_name}.png")
                    img.save(img_path)
                    print(f"Saved {img_path}")
