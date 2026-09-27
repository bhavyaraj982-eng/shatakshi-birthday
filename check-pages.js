const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const pages = [
    '/',
    '/timeline.html',
    '/videos.html',
    '/scrapbook.html',
    '/wishes.html',
    '/gallery.html',
    '/letter.html',
    '/confessions.html',
    '/dashboard.html'
  ];
  
  const baseUrl = 'https://shatakshiforever.vercel.app';
  
  for (const path of pages) {
    const url = `https://shatakshiforever.vercel.app${path}`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      const title = await page.title();
      const content = await page.content();
      const hasErrors = content.includes('Error') || content.includes('404') || response.status() >= 400;
      
      console.log(`${path}: ${response.status()} - ${title} - ${hasErrors ? 'ERRORS' : 'OK'}`);
      
      // Check for specific elements
      if (path === '/confessions.html' || path === '/wishes.html') {
        const hasForm = await page.$('form') !== null;
        const hasList = await page.$('#reviews-list, #confessions-list') !== null;
        console.log(`  - Form: ${hasForm ? 'YES' : 'NO'}, List: ${hasList ? 'YES' : 'NO'}`);
      }
      
      if (path === '/scrapbook.html') {
        const items = await page.$$('.scrap-item, .scrap-item a');
        console.log(`  - Scrapbook items: ${items.length}`);
      }
      
      if (path === '/gallery.html') {
        const items = await page.$$('.gallery-item');
        console.log(`  - Gallery items: ${items.length}`);
      }
      
      if (path === '/dashboard.html') {
        const chapters = await page.$$('.chapter-card, .chapters a');
        console.log(`  - Dashboard chapters: ${items.length}`);
      }
      
    } catch (e) {
      console.log(`${path}: ERROR - ${e.message}`);
    }
  }
  
  await browser.close();
})();
