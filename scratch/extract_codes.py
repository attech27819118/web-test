import json
import os
import re

with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\extracted_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\技術文件摘要與重點.md', 'r', encoding='utf-8') as f:
    md_text = f.read()

sections = re.split(r'\n(?=####\s+\d+\.)', md_text)

results = []
for i, sec in enumerate(sections[1:], 1):
    lines = sec.strip().split('\n')
    m_num = re.match(r'####\s+(\d+)\.\s*(.*)', lines[0])
    num = int(m_num.group(1)) if m_num else i
    
    file_name = ""
    for l in lines:
        if "**檔案**" in l:
            file_name = l.split("：")[-1].split(":")[-1].strip(" `")
            break
            
    v = None
    for k, item in corpus.items():
        if item["filename"].lower() == file_name.lower():
            v = item
            break
            
    if not v:
        continue
        
    text = v['text']
    
    # search for codes like SC\d+, TI \d+, TI-\d+, DKL\S+, Technical Information, etc.
    sc_codes = re.findall(r'(SC\d{4}(?:\s+\d{2}/\d{2})?)', text)
    dkl_codes = re.findall(r'(DKL[A-Z0-9]+)', text)
    ti_codes = re.findall(r'(TI\s*\d{4})', text, re.IGNORECASE)
    dates = re.findall(r'(\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b|\b\d{2}/\d{4}\b|\b\d{4}/\d{2}\b)', text)
    
    # get first few non-empty lines of page 1
    p1 = ""
    if "--- PAGE 1 ---" in text:
        p1 = text.split("--- PAGE 1 ---")[1]
        if "--- PAGE 2 ---" in p1:
            p1 = p1.split("--- PAGE 2 ---")[0]
    p1_lines = [l.strip() for l in p1.split('\n') if l.strip()]
    
    # get last page lines
    last_page = text.split("--- PAGE ")[-1]
    last_lines = [l.strip() for l in last_page.split('\n') if l.strip()]
    
    results.append({
        "num": num,
        "filename": file_name,
        "sc_codes": list(set(sc_codes)),
        "dkl_codes": list(set(dkl_codes)),
        "ti_codes": list(set(ti_codes)),
        "p1_top": p1_lines[:8],
        "last_lines": last_lines[-8:],
        "total_chars": len(text)
    })

with open(r'd:\Jay\vscode\attech0824 - test\scratch\doc_codes_summary.json', 'w', encoding='utf-8') as out:
    json.dump(results, out, ensure_ascii=False, indent=2)

print(f"Processed {len(results)} docs codes.")
