import os
import re
import json

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"
with open(os.path.join(base_dir, "extracted_corpus.json"), "r", encoding="utf-8") as f:
    corpus = json.load(f)

with open(os.path.join(base_dir, "技術文件摘要與重點.md"), "r", encoding="utf-8") as f:
    md_text = f.read()

sections = re.split(r'\n(?=####\s+\d+\.)', md_text)

print(f"Total sections: {len(sections) - 1}")

# We will create a mapping of item num to corpus entry
items = []
for i, sec in enumerate(sections[1:], 1):
    lines = sec.strip().split('\n')
    m_num = re.match(r'####\s+(\d+)\.\s*(.*)', lines[0])
    num = int(m_num.group(1)) if m_num else i
    curr_title = m_num.group(2).strip() if m_num else ""
    
    file_name = ""
    file_path = ""
    for l in lines:
        if "**檔案**" in l:
            file_name = l.split("：")[-1].split(":")[-1].strip(" `")
        if "**路徑**" in l:
            file_path = l.split("：")[-1].split(":")[-1].strip(" `")
            
    # find corpus entry
    found = None
    for k, v in corpus.items():
        if v["filename"].lower() == file_name.lower():
            found = v
            break
            
    items.append({
        "num": num,
        "curr_title": curr_title,
        "file_name": file_name,
        "file_path": file_path,
        "corpus": found
    })

print(f"Mapped {len(items)} items.")

# Let's inspect groups:
# 1-4: 4 functions (checked above)
# 5-8: Brochures (Tyzor Adhesive, Tyzor General CN, Tyzor Coatings, Tyzor Polyols)
# 9-20: Tyzor Application Notes
# 21-24: Tyzor Single Products (Activate 422 x 2, IAM x 2)
# 25-29: Unilink (Brochure, Clearlink 1000, Unilink 1030, Unilink 4200 x 2)
# 30-45: Orion Carbon Black
# 46-74: Micro Powders (MPI)

# Let's write a script to inspect items 5 to 20
with open(r"d:\Jay\vscode\attech0824 - test\scratch\inspect_5_to_20.txt", "w", encoding="utf-8") as out:
    for it in items[4:20]:
        c = it["corpus"]
        out.write(f"=== ITEM #{it['num']}: {it['file_name']} ===\n")
        out.write(c["text"][:1500] + "\n\n")

print("Wrote inspect_5_to_20.txt")
