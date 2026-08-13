const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain';
const dirs = fs.readdirSync(brainDir);

dirs.forEach(dir => {
  const file = path.join(brainDir, dir, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(file)) {
    console.log(`=== Transcript: ${dir} ===`);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('youtubeResources') || line.includes('youtube.com') || line.includes('youtube')) {
        try {
          const json = JSON.parse(line);
          const contentStr = JSON.stringify(json.content || '');
          // find all youtube links in line
          const matches = contentStr.match(/https?:\/\/[^\s"',}]+youtube[^\s"',}]+/gi);
          if (matches && matches.length > 0) {
            console.log(`Step ${idx}: ${matches.length} links found`);
            // print unique links
            const unique = [...new Set(matches)];
            unique.forEach(m => console.log('  ', m));
          }
        } catch (e) {}
      }
    });
  }
});
