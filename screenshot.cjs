const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Desktop view of slide 8 (Nossa Jornada)
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    // Navigate to slide 8 (7 arrow presses from slide 1)
    for (let i = 0; i < 7; i++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 400));
    }

    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: '/projetos/ai4good/ya-ai4good/jornada_desktop.png' });
    console.log('Slide 8 Jornada desktop captured!');

    // Mobile view
    await page.setViewport({ width: 393, height: 852 });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });

    for (let i = 0; i < 7; i++) {
        await page.keyboard.press('ArrowRight');
        await new Promise(r => setTimeout(r, 400));
    }

    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: '/projetos/ai4good/ya-ai4good/jornada_mobile.png' });
    console.log('Slide 8 Jornada mobile captured!');

    await browser.close();
})();
