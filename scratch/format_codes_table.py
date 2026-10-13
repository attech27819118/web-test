import json

with open(r'd:\Jay\vscode\attech0824 - test\scratch\doc_codes_summary.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

with open(r'd:\Jay\vscode\attech0824 - test\scratch\doc_codes_table.txt', 'w', encoding='utf-8') as out:
    for item in items:
        out.write(f"#{item['num']:02d} | {item['filename']}\n")
        out.write(f"     SC: {item['sc_codes']} | DKL: {item['dkl_codes']} | TI: {item['ti_codes']}\n")
        out.write(f"     P1: {' // '.join(item['p1_top'][:4])}\n")
        out.write(f"     End: {' // '.join(item['last_lines'][-4:])}\n")
        out.write("-" * 80 + "\n")

print("Created doc_codes_table.txt")
