import os
import re
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"
corpus_path = os.path.join(base_dir, "extracted_corpus.json")
md_path = os.path.join(base_dir, "技術文件摘要與重點.md")

with open(corpus_path, "r", encoding="utf-8") as f:
    corpus = json.load(f)

with open(md_path, "r", encoding="utf-8") as f:
    content = f.read()

sections = re.split(r'\n(?=####\s+\d+\.)', content)
header = sections[0]
doc_sections = sections[1:]

parsed_docs = []
for sec in doc_sections:
    lines = sec.strip().split('\n')
    m_num = re.match(r'####\s+(\d+)\.\s*(.*)', lines[0])
    num = int(m_num.group(1)) if m_num else None
    title = m_num.group(2).strip() if m_num else ""
    
    file_name = ""
    file_path = ""
    source = ""
    summary = ""
    points = []
    app = ""
    
    for l in lines[1:]:
        l_str = l.strip()
        if "**檔案**" in l_str:
            file_name = l_str.split("：")[-1].split(":")[-1].strip(" `")
        elif "**路徑**" in l_str:
            file_path = l_str.split("：")[-1].split(":")[-1].strip(" `")
        elif "**原文出處**" in l_str:
            source = l_str.split("：")[-1].split(":")[-1].strip()
        elif "**摘要**" in l_str:
            summary = l_str.split("：")[-1].split(":")[-1].strip()
        elif re.match(r'^\d+\.\s*', l_str):
            points.append(re.sub(r'^\d+\.\s*', '', l_str).strip())
        elif "**應用**" in l_str:
            app = l_str.split("：")[-1].split(":")[-1].strip()
            
    parsed_docs.append({
        "num": num,
        "title": title,
        "file_name": file_name,
        "file_path": file_path,
        "source": source,
        "summary": summary,
        "points": points,
        "app": app
    })

matched = []
for d in parsed_docs:
    found = None
    for k, v in corpus.items():
        if v["filename"].lower() == d["file_name"].lower():
            found = (k, v)
            break
    if found:
        matched.append((d, found[1]))

print(f"Total matched: {len(matched)}")

# Inspect all 74 items
with open(r"d:\Jay\vscode\attech0824 - test\scratch\doc_details.txt", "w", encoding="utf-8") as out:
    for d, c in matched:
        out.write("="*80 + "\n")
        out.write(f"ITEM #{d['num']}: {d['title']}\n")
        out.write(f"FILE: {d['file_name']}\n")
        out.write(f"CURRENT SOURCE: {d['source']}\n")
        out.write(f"CURRENT SUMMARY: {d['summary']}\n")
        out.write(f"CURRENT POINTS ({len(d['points'])}):\n")
        for i, pt in enumerate(d['points'], 1):
            out.write(f"  {i}. {pt}\n")
        out.write(f"CURRENT APPS: {d['app']}\n")
        out.write("-" * 40 + " PDF TEXT SNIPPET (First 1500 chars) " + "-" * 40 + "\n")
        out.write(c['text'][:1500] + "\n")
        out.write("-" * 40 + " PDF TEXT SNIPPET (Last 1000 chars) " + "-" * 40 + "\n")
        out.write(c['text'][-1000:] + "\n\n")

print("Wrote all 74 doc details to scratch/doc_details.txt")
