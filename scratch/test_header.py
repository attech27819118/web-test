# -*- coding: utf-8 -*-
import os
import re
import json

base_dir = r"d:\Jay\vscode\attech0824 - test\techdatadb"
target_md = os.path.join(base_dir, "技術文件摘要與重點.md")

# Load existing markdown to get the structure and file paths
with open(target_md, "r", encoding="utf-8") as f:
    old_content = f.read()

# Extract header before the first #### 1.
header_match = re.search(r'^(.*?)####\s+1\.', old_content, re.DOTALL)
if not header_match:
    raise ValueError("Could not find header before #### 1.")
raw_header = header_match.group(1).strip()

# Clean raw_header to make sure "原廠" is removed if present
clean_header = raw_header.replace("原廠", "製造商")

print("Header extracted and cleaned.")
