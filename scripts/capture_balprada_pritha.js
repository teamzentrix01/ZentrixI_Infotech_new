const puppeteer = require('puppeteer');
const sharp = require('sharp');

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process'
    ]
  });

  // 1. BALPRADA
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    console.log('1. Loading Balprada...');
    await page.goto('https://www.balpradaindia.com/', { waitUntil: 'domcontentloaded', timeout: 90000 });
    console.log('DOM Loaded. Waiting 5s...');
    await new Promise(r => setTimeout(r, 5000));

    // Remove any appointment popup/modal
    await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('*'));
      for (const el of all) {
        if (el.innerText && (el.innerText.includes('Book an Appointment') || el.innerText.includes('Personalised Ayurveda')) && (window.getComputedStyle(el).position === 'fixed' || window.getComputedStyle(el).position === 'absolute')) {
          el.remove();
        }
      }
    });

    // Scroll down gradually
    console.log('Scrolling Balprada...');
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let y = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 300);
          y += 300;
          if (y >= document.body.scrollHeight || y > 15000) {
            clearInterval(timer);
            resolve();
          }
        }, 150);
      });
    });

    await new Promise(r => setTimeout(r, 4000));
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 3000));

    // Remove popup again if it popped up during scrolling
    await page.evaluate(() => {
      const all = Array.from(document.querySelectorAll('*'));
      for (const el of all) {
        if (el.innerText && el.innerText.includes('Book an Appointment') && (window.getComputedStyle(el).position === 'fixed' || window.getComputedStyle(el).position === 'absolute')) {
          el.remove();
        }
      }
    });

    const bBuffer = await page.screenshot({ fullPage: true });
    console.log('Balprada screenshot taken, length:', bBuffer.length);

    await sharp(bBuffer)
      .resize({ width: 720 })
      .webp({ quality: 85 })
      .toFile('public/images/projects/balprada-ashram-scroll.webp');
    console.log('Balprada saved to public/images/projects/balprada-ashram-scroll.webp');

    await page.close();
  } catch (err) {
    console.error('Balprada error:', err);
  }

  // 2. PRITHA HEALTHCARE
  try {
    const page2 = await browser.newPage();
    await page2.setViewport({ width: 1440, height: 900 });

    console.log('2. Loading Pritha Healthcare...');
    await page2.goto('https://www.prithahealthcare.org/', { waitUntil: 'domcontentloaded', timeout: 90000 });
    console.log('DOM Loaded. Waiting 5s...');
    await new Promise(r => setTimeout(r, 5000));

    console.log('Scrolling Pritha...');
    await page2.evaluate(async () => {
      await new Promise(resolve => {
        let y = 0;
        const timer = setInterval(() => {
          window.scrollBy(0, 300);
          y += 300;
          if (y >= document.body.scrollHeight || y > 15000) {
            clearInterval(timer);
            resolve();
          }
        }, 150);
      });
    });

    await new Promise(r => setTimeout(r, 4000));
    await page2.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 3000));

    const pBuffer = await page2.screenshot({ fullPage: true });
    console.log('Pritha screenshot taken, length:', pBuffer.length);

    await sharp(pBuffer)
      .resize({ width: 720 })
      .webp({ quality: 85 })
      .toFile('public/images/projects/pratha-healthcare-scroll.webp');
    console.log('Pritha saved to public/images/projects/pratha-healthcare-scroll.webp');

    await page2.close();
  } catch (err) {
    console.error('Pritha error:', err);
  }

  await browser.close();
  console.log('COMPLETED_ALL_SUCCESSFULLY');
}

run();
