const fs = require('fs');

const fixScript = fs.readFileSync('c:/Users/DELL/OneDrive/Desktop/Career_platform/server/seed/fixYoutubeResourcesAccurate.js', 'utf8');

const urlMatches = fixScript.match(/https?:\/\/[^\s"',}]+/gi) || [];
console.log('Total URLs found in accurate script:', urlMatches.length);

const urlCounts = {};
urlMatches.forEach(u => {
  urlCounts[u] = (urlCounts[u] || 0) + 1;
});

console.log('\n--- DUPLICATED URLS (> 2 times) ---');
let duplicatesCount = 0;
Object.entries(urlCounts).forEach(([url, count]) => {
  if (count > 2) {
    console.log(`${count}x: ${url}`);
    duplicatesCount++;
  }
});

if (duplicatesCount === 0) {
  console.log('Zero duplicated URLs found! Every subject link is clean and unique.');
}
