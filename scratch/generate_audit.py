import json
import os
import re

with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\extracted_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

with open(r'd:\Jay\vscode\attech0824 - test\scratch\doc_details.txt', 'r', encoding='utf-8') as f:
    # read md parsed
    pass

# Let's map each of the 74 files in order of the markdown file
with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\技術文件摘要與重點.md', 'r', encoding='utf-8') as f:
    md_text = f.read()

sections = re.split(r'\n(?=####\s+\d+\.)', md_text)
header = sections[0]

with open(r'd:\Jay\vscode\attech0824 - test\scratch\full_74_audit.txt', 'w', encoding='utf-8') as out:
    for i, sec in enumerate(sections[1:], 1):
        lines = sec.strip().split('\n')
        m_num = re.match(r'####\s+(\d+)\.\s*(.*)', lines[0])
        num = int(m_num.group(1)) if m_num else i
        title = m_num.group(2).strip() if m_num else ""
        
        file_name = ""
        for l in lines:
            if "**檔案**" in l:
                file_name = l.split("：")[-1].split(":")[-1].strip(" `")
                break
                
        # find in corpus
        found = None
        for k, v in corpus.items():
            if v["filename"].lower() == file_name.lower():
                found = v
                break
                
        out.write("="*90 + "\n")
        out.write(f"ITEM #{num}: {title}\n")
        out.write(f"FILE: {file_name}\n")
        if found:
            out.write(f"PATH: {found['rel_path']}\n")
            out.write(f"PAGES: {found['pages_count']}\n")
            out.write("--- FIRST 800 CHARS ---\n")
            out.write(found['text'][:800].strip() + "\n")
            out.write("--- LAST 500 CHARS ---\n")
            out.write(found['text'][-500:].strip() + "\n")
        else:
            out.write("NOT FOUND IN CORPUS!\n")
        out.write("\n")

print("Created full_74_audit.txt")
