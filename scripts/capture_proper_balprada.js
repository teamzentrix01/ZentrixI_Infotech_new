const puppeteer = require('puppeteer');
const sharp = require('sharp');

async function captureProperBalprada() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to https://www.balpradaindia.com/ ...');
  await page.goto('https://www.balpradaindia.com/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  // Dismiss sticky header or floating elements before capture so they don't cover content
  await page.evaluate(() => {
    // Remove appointment popup modal
    const all = Array.from(document.querySelectorAll('*'));
    for (const el of all) {
      if (el.innerText && el.innerText.includes('Book an Appointment') && (window.getComputedStyle(el).position === 'fixed' || window.getComputedStyle(el).position === 'absolute')) {
        el.remove();
      }
    }
  });

  // Now, scroll through each section to trigger all IntersectionObservers, lazy-loads, AOS animations
  console.log('Progressive scrolling...');
  const bodyHeight = await page.evaluate(async () => {
    const distance = 400;
    let scrolled = 0;
    while (scrolled < document.body.scrollHeight) {
      window.scrollBy(0, distance);
      scrolled += distance;
      await new Promise(res => setTimeout(res, 100));
    }
    return document.body.scrollHeight;
  });
  console.log('Total height reached:', bodyHeight);

  // Wait 3 seconds at footer so footer SVG/images are completely loaded
  await new Promise(r => setTimeout(r, 3000));

  // Reset scroll to top
  await page.evaluate(() => {
    window.scrollTo(0, 0);

    // Make sure header is static or normal position during fullPage capture so it doesn't repeat or glitch
    const header = document.querySelector('header, nav, .header, .nav');
    if (header) {
      header.style.position = 'absolute';
    }

    // Force all elements with opacity 0 to opacity 1 (in case any AOS or fade-in didn't trigger)
    document.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el);
      if (s.opacity === '0') {
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      }
    });
  });

  await new Promise(r => setTimeout(r, 2000));

  console.log('Taking fullPage screenshot...');
  const fullPng = 'public/images/projects/balprada_complete_raw.png';
  await page.screenshot({ path: fullPng, fullPage: true });

  const meta = await sharp(fullPng).metadata();
  console.log('Captured raw screenshot dimensions:', meta.width, 'x', meta.height);

  console.log('Converting to WebP with width 720...');
  await sharp(fullPng)
    .resize({ width: 720 })
    .webp({ quality: 84 })
    .toFile('public/images/projects/balprada-ashram-scroll.webp');

  console.log('SUCCESS! balprada-ashram-scroll.webp updated perfectly.');
  await browser.close();
}

captureProperBalprada().catch(console.error);

