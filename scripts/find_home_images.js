const fs = require('fs');

const content = fs.readFileSync('scripts/home.html', 'utf8');
const regex = /https?:\/\/[^"'\s)]+\.(?:png|jpg|jpeg|webp)/gi;
const matches = content.match(regex) || [];
const unique = [...new Set(matches)];

console.log('Found total image URLs:', unique.length);
unique.forEach(u => {
  if (u.includes('uploads') || u.includes('wp-content') || u.includes('zentrix') || u.includes('slider')) {
    console.log(u);
  }
});

