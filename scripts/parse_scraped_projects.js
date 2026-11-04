const fs = require('fs');

const content = fs.readFileSync('scripts/scraped_pages/projects.html', 'utf8');
const imgMatches = content.match(/<img[^>]+>/gi) || [];
console.log('Total img tags in scraped projects.html:', imgMatches.length);
imgMatches.forEach((t, i) => console.log(`[${i}] ${t}`));

