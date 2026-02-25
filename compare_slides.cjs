const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });

    const prodUrl = 'https://www.praxisagencia.com.br/ya-ai4good';
    const localUrl = 'http://localhost:8080/ya-ai4good';
    const screenshotsDir = '/projetos/ai4good/BC2026/screenshots_comparison';

    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    try {
        console.log('--- Starting Screenshot Comparison ---');

        // 1. V3 - Opening (Slide 0) from PRODUCTION
        console.log('1. Capturing V3 Opening (Prod)...');
        await page.goto(`${prodUrl}/v3`, { waitUntil: 'networkidle0', timeout: 60000 });
        await new Promise(r => setTimeout(r, 3000)); // Wait extra for prod load
        await page.screenshot({ path: `${screenshotsDir}/v3_opening.png` });
        console.log('   ✓ Saved v3_opening.png');

        // 2. V3 - Team (Slide 7 - index 7 is Team in V3) from PRODUCTION
        console.log('2. Capturing V3 Team (Prod)...');
        // Navigate using keyboard to be safe with transitions
        for (let i = 0; i < 7; i++) {
            await page.keyboard.press('ArrowRight');
            await new Promise(r => setTimeout(r, 1000)); // Wait for transition
        }
        await page.screenshot({ path: `${screenshotsDir}/v3_team.png` });
        console.log('   ✓ Saved v3_team.png');

        // 3. BC2026 - Opening (Slide 0) from LOCAL
        console.log('3. Capturing BC2026 Opening (Local 8080)...');
        await page.goto(`${localUrl}/vBC2026`, { waitUntil: 'networkidle0', timeout: 10000 });
        await new Promise(r => setTimeout(r, 2000)); // Wait for animations
        await page.screenshot({ path: `${screenshotsDir}/bc2026_opening.png` });
        console.log('   ✓ Saved bc2026_opening.png');

        // 4. BC2026 - Team (Slide 7 - index 7 is Team in BC2026) from LOCAL
        console.log('4. Capturing BC2026 Team (Local 8080)...');
        // Navigate using keyboard
        for (let i = 0; i < 7; i++) {
            await page.keyboard.press('ArrowRight');
            await new Promise(r => setTimeout(r, 1000)); // Wait for transition
        }
        await page.screenshot({ path: `${screenshotsDir}/bc2026_team.png` });
        console.log('   ✓ Saved bc2026_team.png');

        console.log('--- All Screenshots Captured Successfully ---');
    } catch (error) {
        console.error('!!! Error capturing screenshots !!!', error);
    } finally {
        await browser.close();
    }
})();
