const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const homeLinks = await page.locator('a[href*="wp.joheiewisepro.com/product/"]').all();
  const firstHomeHref = await homeLinks[0].getAttribute('href');
  await Promise.all([
    page.waitForURL(/wp\.joheiewisepro\.com\/product\//, { timeout: 15000 }),
    homeLinks[0].click(),
  ]);
  const landedHomeUrl = page.url();

  await page.goto('http://localhost:3000/category/women/new-in-womenswear', { waitUntil: 'networkidle' });
  const flashLink = page.locator('a:has-text("Flash Sale - 50% OFF")').first();
  const flashHref = await flashLink.getAttribute('href');
  await Promise.all([
    page.waitForURL(/wp\.joheiewisepro\.com\/product\//, { timeout: 15000 }),
    flashLink.click(),
  ]);
  const landedPlpUrl = page.url();

  console.log(JSON.stringify({ firstHomeHref, landedHomeUrl, flashHref, landedPlpUrl }, null, 2));
  await browser.close();
})();
