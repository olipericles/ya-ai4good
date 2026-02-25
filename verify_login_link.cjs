const puppeteer = require('puppeteer');

(async () => {
    console.log('Starting verification script...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // Assuming the site is running locally on 8080 (frontend dev server) or accessible via Nginx domain if mapped
    // Since we modifying the production-like config, we might want to test against the deployed URL if possible, or localhost ports.
    // However, Landing.tsx change affects the static build or dev server.
    // Let's assume we are testing against localhost:8080 for frontend and we want to see where the link takes us.
    // BUT, the Proxy changes are in Nginx. If we test localhost:8080 (Vite), checking the link works.
    // To test the FULL flow including Nginx proxy, we need to hit Nginx.
    // Let's try to hit the Nginx URL if valid, or fallback to checking the Href attribute.

    const targetUrl = 'http://localhost:5173/ya-ai4good/'; // Vite Dev Server Custom Port

    try {
        console.log(`Navigating to ${targetUrl}`);
        await page.goto(targetUrl, { waitUntil: 'networkidle0', timeout: 30000 });

        console.log('Checking Login button href...');
        const loginBtn = await page.waitForSelector('a[href="/dashboard/"]');
        if (loginBtn) {
            console.log('SUCCESS: Login button points to /dashboard/');
        } else {
            console.error('FAILURE: Login button does not point to /dashboard/');
        }

        // We can't easily test the Nginx proxy without restarting Nginx and knowing where it serves.
        // But we can verify the frontend code change.

        await page.screenshot({ path: '/projetos/ai4good/verification_landing.png' });
        console.log('Screenshot saved.');

    } catch (error) {
        console.error('Error during verification:', error);
    } finally {
        await browser.close();
    }
})();
