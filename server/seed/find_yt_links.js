const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain';
const dirs = fs.readdirSync(brainDir);

dirs.forEach(dir => {
  const file = path.join(brainDir, dir, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(file)) {
    console.log(`Checking ${dir}...`);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('youtubeResources') || line.includes('youtube.com')) {
        console.log(`Conv ${dir} line ${idx}: length ${line.length}`);
        // match youtube URLs
        const urls = line.match(/https:\/\/(www\.)?youtube\.com\/[^\s"'}\\]+/g);
        if (urls && urls.length > 0) {
          console.log(`  Found ${urls.length} urls. Sample:`, urls.slice(0, 5));
        }
      }
    });
  }
});
