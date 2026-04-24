const { chromium } = require('C:/Users/maxam/AppData/Roaming/npm/node_modules/@playwright/mcp/node_modules/playwright');
const path = require('path');
const fs = require('fs');

(async () => {
  fs.mkdirSync('screenshots', { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const absPath = path.resolve('index.html');
  const filePath = 'file:///' + absPath.replace(/\\/g, '/');

  await page.goto(filePath, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2500); // Wait for hero GSAP animations

  // Hero
  await page.screenshot({ path: 'screenshots/f-01-hero.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Marquee + Statement
  await page.evaluate(() => window.scrollTo({ top: 920, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-02-statement.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Services top (heading + rows)
  await page.evaluate(() => window.scrollTo({ top: 1650, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-03-services-top.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Services rows 02-05
  await page.evaluate(() => window.scrollTo({ top: 2400, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-04-services-rows.png', clip: { x:0, y:0, width:1440, height:900 } });

  // About — heading + staggered grid
  await page.evaluate(() => window.scrollTo({ top: 3000, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-05-about.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Objekt header
  await page.evaluate(() => window.scrollTo({ top: 4200, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-06-objekt-header.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Objekt cards mid-scroll
  await page.evaluate(() => window.scrollTo({ top: 5200, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-07-objekt-cards.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Stats
  await page.evaluate(() => window.scrollTo({ top: 6800, behavior: 'instant' }));
  await page.waitForTimeout(900);
  await page.screenshot({ path: 'screenshots/f-08-stats.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Editorial + testimonials
  await page.evaluate(() => window.scrollTo({ top: 7600, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-09-editorial.png', clip: { x:0, y:0, width:1440, height:900 } });

  // CTA dark
  await page.evaluate(() => window.scrollTo({ top: 8400, behavior: 'instant' }));
  await page.waitForTimeout(700);
  await page.screenshot({ path: 'screenshots/f-10-cta.png', clip: { x:0, y:0, width:1440, height:900 } });

  // Footer
  await page.evaluate(() => window.scrollTo({ top: 999999, behavior: 'instant' }));
  await page.waitForTimeout(900);
  await page.screenshot({ path: 'screenshots/f-11-footer.png', clip: { x:0, y:0, width:1440, height:900 } });

  await browser.close();
  console.log('Done.');
})();
