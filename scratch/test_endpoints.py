# -*- coding: utf-8 -*-
import sys
import urllib.request

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

urls = [
    'http://localhost:3000/technology/tyzor/',
    'http://localhost:3000/technology/carbon-black/',
    'http://localhost:3000/technology/wax/',
    'http://localhost:3000/technology/chain/',
    'http://localhost:3000/technology/maleic/',
    'http://localhost:3000/technology/index.html'
]

for url in urls:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8')
        slug = url.split('/')[-2]
        has_display = "tech-content-display" in content or "technology/tyzor/" in content
        print(f"[{slug:15}] HTTP {resp.status} - Length: {len(content):6} - Valid: {has_display}")
