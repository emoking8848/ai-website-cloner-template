const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 2200 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  const outDir = path.join(process.cwd(), '.codex-visual-check');
  await page.screenshot({ path: path.join(outDir, 'after-home-full-v3.png'), fullPage: true });
  await page.locator('header').screenshot({ path: path.join(outDir, 'after-home-header-v3.png') });
  await page.locator('footer').screenshot({ path: path.join(outDir, 'after-home-footer-v3.png') });
  await browser.close();
})();
