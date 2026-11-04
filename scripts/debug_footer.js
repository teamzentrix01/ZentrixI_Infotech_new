const puppeteer = require('puppeteer');

async function debugFooter() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://www.balpradaindia.com/', { waitUntil: 'networkidle2', timeout: 60000 });

  // Scroll to footer directly
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await new Promise(r => setTimeout(r, 4000));

  const info = await page.evaluate(() => {
    const f = document.querySelector('footer');
    if (!f) return 'No footer found';
    return {
      text: f.innerText,
      innerHTML: f.innerHTML.slice(0, 500),
      rect: f.getBoundingClientRect()
    };
  });

  console.log('Footer inspection:', JSON.stringify(info, null, 2));

  // Let's take a screenshot of just the bottom 1500px
  await page.screenshot({ path: 'public/images/projects/footer_screenshot.png' });
  await browser.close();
}

debugFooter().catch(console.error);

