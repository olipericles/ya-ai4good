const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // iPhone 15 dimensions
    await page.setViewport({ width: 393, height: 852 });

    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 800));
        await page.screenshot({ path: `/projetos/ai4good/ya-ai4good/mobile_slide${i}.png` });
        console.log(`Slide ${i} captured`);

        if (i < 10) {
            await page.click('body');
        }
    }

    await browser.close();
    console.log('All slides captured!');
})();
