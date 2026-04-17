const fs = require('fs');
const path = require('path');

const replacements = {
    '"var(--text)"': '"var(--text)"',
    '"var(--muted)"': '"var(--muted)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"var(--glass)"': '"var(--glass)"',
    '"rgba(108,99,255,0.06)"': '"rgba(108,99,255,0.06)"',
    '"rgba(108,99,255,0.04)"': '"rgba(108,99,255,0.04)"',
    '"rgba(108,99,255,0.08)"': '"rgba(108,99,255,0.08)"',
    "'var(--text)'": "'var(--text)'",
    "'var(--muted)'": "'var(--muted)'"
};

const targetDir = 'c:/codes/Alapaap/frontend/src';

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = content;
            
            for (const [oldStr, newStr] of Object.entries(replacements)) {
                newContent = newContent.split(oldStr).join(newStr);
            }
            
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

walkDir(targetDir);
