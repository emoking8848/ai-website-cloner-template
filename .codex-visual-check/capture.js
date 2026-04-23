const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const outDir = path.join(process.cwd(), '.codex-visual-check');
  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 2200 } });

  const targets = [
    { name: 'home', url: 'http://localhost:3000/' },
    { name: 'category-women', url: 'http://localhost:3000/category/women/new-in-womenswear' },
    { name: 'pdp-simple', url: 'http://localhost:3000/product/39783' },
    { name: 'pdp-standard', url: 'http://localhost:3000/product/39788' },
    { name: 'pdp-complex', url: 'http://localhost:3000/product/40234' },
  ];

  for (const target of targets) {
    await page.goto(target.url, { waitUntil: 'networkidle' });
    await page.screenshot({ path: path.join(outDir, `${target.name}.png`), fullPage: true });
  }

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.locator('nav button:has-text("Women")').hover();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(outDir, 'nav-women-dropdown.png'), fullPage: false });

  await browser.close();
})();
