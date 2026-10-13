import json

with open(r'd:\Jay\vscode\attech0824 - test\techdatadb\extracted_corpus.json', 'r', encoding='utf-8') as f:
    corpus = json.load(f)

for k, v in corpus.items():
    if any(n in v['filename'] for n in ['作為交聯劑', '作為催化劑', '作為表面改性', '提高附著力']):
        print(f"=== {v['filename']} ({v['pages_count']} pages) ===")
        print(v['text'][:1000])
        print("...")
        print(v['text'][-500:])
