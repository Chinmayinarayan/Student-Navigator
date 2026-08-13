const fs = require('fs');
const https = require('https');
const http = require('http');

const fixScript = fs.readFileSync('c:/Users/DELL/OneDrive/Desktop/Career_platform/server/seed/fixYoutubeResources.js', 'utf8');

// Extract all URLs from fixYoutubeResources.js
const urlMatches = fixScript.match(/https?:\/\/[^\s"',}]+/gi) || [];
console.log('Total URLs found in script:', urlMatches.length);

const uniqueUrls = [...new Set(urlMatches)];
console.log('Unique URLs:', uniqueUrls.length);

// Count occurrences of each URL
const urlCounts = {};
urlMatches.forEach(u => {
  urlCounts[u] = (urlCounts[u] || 0) + 1;
});

console.log('\n--- DUPLICATED URLS (> 2 times) ---');
Object.entries(urlCounts).forEach(([url, count]) => {
  if (count > 2) {
    console.log(`${count}x: ${url}`);
  }
});
