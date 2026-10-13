import os
import re
import json

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"
with open(os.path.join(base_dir, "extracted_corpus.json"), "r", encoding="utf-8") as f:
    corpus = json.load(f)

with open(os.path.join(base_dir, "技術文件摘要與重點.md"), "r", encoding="utf-8") as f:
    md_text = f.read()

sections = re.split(r'\n(?=####\s+\d+\.)', md_text)

with open(r"d:\Jay\vscode\attech0824 - test\scratch\inspect_mpi_46_74.txt", "w", encoding="utf-8") as out:
    for i, sec in enumerate(sections[46:75], 46):
        lines = sec.strip().split('\n')
        m_num = re.match(r'####\s+(\d+)\.\s*(.*)', lines[0])
        num = int(m_num.group(1)) if m_num else i
        title = m_num.group(2).strip() if m_num else ""
        
        file_name = ""
        for l in lines:
            if "**檔案**" in l:
                file_name = l.split("：")[-1].split(":")[-1].strip(" `")
                break
                
        found = None
        for k, v in corpus.items():
            if v["filename"].lower() == file_name.lower():
                found = v
                break
                
        out.write("="*80 + "\n")
        out.write(f"ITEM #{num}: {title}\n")
        out.write(f"FILE: {file_name}\n")
        if found:
            out.write(f"PATH: {found['rel_path']}\n")
            out.write("--- TEXT FIRST 1200 CHARS ---\n")
            out.write(found['text'][:1200] + "\n")
            out.write("--- TEXT LAST 400 CHARS ---\n")
            out.write(found['text'][-400:] + "\n")
        else:
            out.write("NOT FOUND\n")
        out.write("\n")

print("Created inspect_mpi_46_74.txt")
