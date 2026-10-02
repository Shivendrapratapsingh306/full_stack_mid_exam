const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  
  // Wait for the animation to initialize
  await page.waitForTimeout(2000);
  
  // Check the initial position
  const charBox = await page.evaluate(() => {
    const el = document.querySelector('img[alt="Character"]');
    return el ? el.getBoundingClientRect() : null;
  });
  console.log('Initial Character Rect:', charBox);
  
  // Check the destination box
  const destBox = await page.evaluate(() => {
    const el = document.getElementById('character-destination');
    return el ? el.getBoundingClientRect() : null;
  });
  console.log('Destination Rect:', destBox);

  // Scroll down by 500px to trigger the walking
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(500);

  // Check the walking frame
  const walkSrc = await page.evaluate(() => {
    const el = document.querySelector('img[alt="Character"]');
    return el ? el.src : null;
  });
  console.log('Frame Source at 500px scroll:', walkSrc);
  
  const midCharBox = await page.evaluate(() => {
    const el = document.querySelector('img[alt="Character"]');
    return el ? el.getBoundingClientRect() : null;
  });
  console.log('Character Rect at 500px scroll:', midCharBox);

  await browser.close();
})();
