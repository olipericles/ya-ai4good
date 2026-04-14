
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
    // Ensure output directory exists
    const outputDir = '/projetos/ai4good/BC2026/verification_v2';
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // Use localhost:4173 as we started preview there
    const baseUrl = 'http://localhost:4173/ya-ai4good/v2BC2026';

    // Set viewport to desktop size
    await page.setViewport({ width: 1280, height: 800 });

    console.log(`Navigating to ${baseUrl}...`);
    try {
        await page.goto(baseUrl, { waitUntil: 'networkidle0', timeout: 60000 });
    } catch (e) {
        console.error("Error loading page. Make sure 'npm run preview' is running.");
        console.error(e);
        await browser.close();
        process.exit(1);
    }

    // Scroll down slowly to trigger animations
    console.log('Scrolling to trigger animations...');
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    // Wait a bit for final animations
    await new Promise(r => setTimeout(r, 2000));

    // Take full page screenshot
    console.log('Capturing full page screenshot...');
    await page.screenshot({ path: path.join(outputDir, 'v2bc2026_full.png'), fullPage: true });

    // Take mobile screenshot
    console.log('Capturing mobile screenshot...');
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    await page.reload({ waitUntil: 'networkidle0' });

    // Scroll mobile to trigger animations
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(outputDir, 'v2bc2026_mobile.png'), fullPage: true });

    await browser.close();
})();
