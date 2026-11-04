const puppeteer = require('puppeteer');
const sharp = require('sharp');

async function debugBalprada() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://www.balpradaindia.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));

  // Find all elements and check heights / positions
  const elements = await page.evaluate(() => {
    const list = [];
    document.querySelectorAll('section, footer, div, form').forEach(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      if (rect.height > 200) {
        list.push({
          tag: el.tagName,
          id: el.id,
          class: el.className ? String(el.className).slice(0, 50) : '',
          top: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          bg: style.backgroundColor,
          text: el.innerText ? el.innerText.trim().slice(0, 60).replace(/\n/g, ' ') : ''
        });
      }
    });
    return list;
  });

  console.log('Document total scrollHeight:', await page.evaluate(() => document.body.scrollHeight));
  console.log('Tall elements near bottom:');
  const bottomElements = elements.filter(e => e.top > 3000);
  console.log(JSON.stringify(bottomElements, null, 2));

  await browser.close();
}

debugBalprada().catch(console.error);

