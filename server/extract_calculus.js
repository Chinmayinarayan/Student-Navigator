const fs = require('fs');
const path = require('path');

const logPath = 'C:/Users/DELL/.gemini/antigravity/brain/d992c258-45bf-41d6-a1e3-56b732145314/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n').filter(Boolean);

let foundStr = '';
for (let i = lines.length - 1; i >= 0; i--) {
  try {
    const obj = JSON.parse(lines[i]);
    const search = (o) => {
      if (typeof o === 'string' && o.includes('module.exports = [')) {
        if (o.length > foundStr.length) foundStr = o;
      } else if (typeof o === 'object' && o !== null) {
        for (const k of Object.keys(o)) {
          search(o[k]);
        }
      }
    };
    search(obj);
    if (foundStr) break;
  } catch(e) {}
}

if (foundStr) {
  let startIdx = foundStr.indexOf('module.exports = [');
  let js = foundStr.substring(startIdx);
  const endIdx = js.indexOf('```');
  if (endIdx !== -1) {
    js = js.substring(0, endIdx);
  }
  // Sanitize inner backticks in content: `...`
  js = js.replace(/content:\s*`([\s\S]*?)`/g, (m, body) => {
    return 'content: `' + body.replace(/`/g, "'") + '`';
  });

  const targetPath = path.join(__dirname, 'data', 'subjects', 'singleVariableCalculusTopics.js');
  fs.writeFileSync(targetPath, js.trim(), 'utf8');
  console.log('Successfully wrote singleVariableCalculusTopics.js! Length:', js.length);
} else {
  console.log('Not found');
}
