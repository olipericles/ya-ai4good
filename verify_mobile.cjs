const puppeteer = require('puppeteer');

(async () => {
    console.log('Starting mobile verification...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // iPhone 12 Pro dimensions
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

    // Use the dev server port we know is open (or 8000 if using backend directly, but let's use 5173 for frontend assets if we were testing Landing)
    // Actually, dashboard is served by Backend on 8000 (via /dashboard) or Nginx.
    // Since we are running `npm run dev` on 5173, that's just the Landing page React App.
    // The Dashboard is a static HTML file in `dashboard/index.html`.
    // The backend `main.py` serves it at `/dashboard`.
    // I should stop the react dev server and run the backend to serve the dashboard?
    // OR, I can just load the file directly with Puppeteer?
    // Loading file directly is easier for UI testing without backend dependencies (except API calls failing).

    // Let's try to load the file directly to see the layout.
    const path = require('path');
    const dashboardPath = 'file://' + path.resolve('/projetos/ai4good/dashboard/index.html');

    console.log(`Navigating to ${dashboardPath}`);
    await page.goto(dashboardPath);

    // 1. Capture Login Modal (Mobile)
    await page.screenshot({ path: '/projetos/ai4good/mobile_login.png' });
    console.log('Captured mobile_login.png');

    // 2. Manipulate DOM to show User Dashboard
    await page.evaluate(() => {
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('userDashboard').classList.remove('hidden');
        // Mock data
        document.getElementById('dashboardUserName').textContent = 'Maria Silva';
        document.getElementById('totalEntradas').textContent = 'R$ 1.200,00';
        document.getElementById('categoriasList').innerHTML = '<div class="py-2">Mercado - R$ 200,00</div>';
    });
    await new Promise(r => setTimeout(r, 500)); // Wait for render
    await page.screenshot({ path: '/projetos/ai4good/mobile_user_dashboard.png' });
    console.log('Captured mobile_user_dashboard.png');

    // 3. Manipulate DOM to show Admin Dashboard
    await page.evaluate(() => {
        document.getElementById('userDashboard').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        // Mock list
        const list = document.getElementById('usersList');
        list.innerHTML = `
            <div class="p-3 bg-dark-700 rounded-xl mb-2"><h3 class="text-white">João</h3><p class="text-gray-500">71999999999</p></div>
            <div class="p-3 rounded-xl mb-2"><h3 class="text-white">Maria</h3><p class="text-gray-500">71888888888</p></div>
        `;
    });
    await new Promise(r => setTimeout(r, 500)); // Wait for render
    await page.screenshot({ path: '/projetos/ai4good/mobile_admin_dashboard_list.png' });
    console.log('Captured mobile_admin_dashboard_list.png');

    // 4. Show Admin Chat (Simulate selection)
    await page.evaluate(() => {
        document.querySelector('aside').classList.add('hidden'); // Manually hiding aside to see if main helps (simulating what we might want)
        // Actually, let's see what happens clearly WITHOUT hiding first.
        document.querySelector('aside').classList.remove('hidden');
    });
    // Take screenshot of the "Broken" or "Default" state where both might be squished
    await page.screenshot({ path: '/projetos/ai4good/mobile_admin_dashboard_split.png' });
    console.log('Captured mobile_admin_dashboard_split.png');

    await browser.close();
})();
