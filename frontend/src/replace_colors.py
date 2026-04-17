import os
import sys

replacements = {
    '"#e8e8f5"': '"var(--text)"',
    '"#8888aa"': '"var(--muted)"',
    '"rgba(20,20,45,0.97)"': '"var(--glass)"',
    '"rgba(26,26,53,0.95)"': '"var(--glass)"',
    '"rgba(26,26,53,0.85)"': '"var(--glass)"',
    '"rgba(26,26,53,0.7)"': '"var(--glass)"',
    '"rgba(30,10,15,0.97)"': '"var(--glass)"',
    '"rgba(10,25,20,0.97)"': '"var(--glass)"',
    '"rgba(26,15,20,0.97)"': '"var(--glass)"',
    '"rgba(255,255,255,0.06)"': '"rgba(108,99,255,0.06)"',
    '"rgba(255,255,255,0.04)"': '"rgba(108,99,255,0.04)"',
    '"rgba(255,255,255,0.08)"': '"rgba(108,99,255,0.08)"',
    "'#e8e8f5'": "'var(--text)'",
    "'#8888aa'": "'var(--muted)'"
}

target_dir = 'c:/codes/Alapaap/frontend/src'

for root, _, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
                
            if content != new_content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
