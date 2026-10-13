import json
import os

with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\extracted_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

with open(r'd:\Jay\vscode\attech0824 - test\scratch\examined_docs.txt', 'w', encoding='utf-8') as out:
    for k, v in corpus.items():
        if any(term in k for term in ['Activate 422', '1030', '4200', 'Clearlink 1000', 'SC0054', 'Tyzor IAM for Inks']):
            out.write("="*80 + "\n")
            out.write(f"FILE: {v['filename']}\n")
            out.write(f"PATH: {k}\n")
            out.write("CONTENT:\n")
            out.write(v['text'] + "\n\n")

print("Wrote to scratch/examined_docs.txt")
