const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Desktop screenshots of all slides
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: `/projetos/ai4good/ya-ai4good/desktop_slide${i}.png` });
        console.log(`Desktop slide ${i} captured`);
        if (i < 10) await page.keyboard.press('ArrowRight');
    }

    // Mobile screenshots
    await page.setViewport({ width: 393, height: 852 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    for (let i = 1; i <= 10; i++) {
        await new Promise(r => setTimeout(r, 600));
        await page.screenshot({ path: `/projetos/ai4good/ya-ai4good/mobile_slide${i}.png` });
        console.log(`Mobile slide ${i} captured`);
        if (i < 10) await page.keyboard.press('ArrowRight');
    }

    await browser.close();
    console.log('All screenshots done!');
})();
