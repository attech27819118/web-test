import subprocess
import sys

out = subprocess.check_output(['git', 'show', '2e0e5d83:index.html'], encoding='utf-8')
target = 'id="tech-panel-principles"'
idx = out.find(target)
if idx != -1:
    sys.stdout.buffer.write(out[idx:idx+3500].encode('utf-8'))
else:
    print('Not found')
