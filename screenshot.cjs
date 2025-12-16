const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 393, height: 852 });

    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    // Navigate to slide 9 (Team slide) using keyboard
    for (let i = 1; i <= 8; i++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 300));
    }

    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: '/projetos/ai4good/ya-ai4good/team_mobile.png' });
    console.log('Team slide captured!');

    // Desktop view
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    for (let i = 1; i <= 8; i++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 300));
    }

    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: '/projetos/ai4good/ya-ai4good/team_desktop.png' });
    console.log('Team desktop captured!');

    await browser.close();
})();
