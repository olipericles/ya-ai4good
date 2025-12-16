const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Try port 5173 first (default vite dev), fallback to 5174
    const baseUrl = 'http://localhost:8081';

    // Desktop screenshots of all slides
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    // Wait for animations to complete
    await new Promise(r => setTimeout(r, 2000));

    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 1000)); // Wait for animations
        await page.screenshot({ path: `/projetos/ai4good/ya-ai4good/img/desktop/slide${i}.png` });
        console.log(`Desktop slide ${i} captured`);
        if (i < 10) {
            await page.keyboard.press('ArrowRight');
            await new Promise(r => setTimeout(r, 800)); // Wait for transition
        }
    }

    // Mobile screenshots
    await page.setViewport({ width: 393, height: 852 });
    await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 60000 });

    await new Promise(r => setTimeout(r, 2000));

    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 1000));
        await page.screenshot({ path: `/projetos/ai4good/ya-ai4good/img/mobile/slide${i}.png` });
        console.log(`Mobile slide ${i} captured`);
        if (i < 10) {
            await page.keyboard.press('ArrowRight');
            await new Promise(r => setTimeout(r, 800));
        }
    }

    await browser.close();
    console.log('All screenshots saved to img/desktop and img/mobile!');
})();
