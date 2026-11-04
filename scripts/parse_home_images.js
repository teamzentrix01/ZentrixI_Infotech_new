const fs = require('fs');

const content = fs.readFileSync('scripts/home.html', 'utf8');

const imgTags = content.match(/<img[^>]+>/gi) || [];
console.log('Total img tags in home.html:', imgTags.length);
imgTags.forEach((tag, i) => {
  console.log(`[${i}] ${tag}`);
});
