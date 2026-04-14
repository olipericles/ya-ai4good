const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    console.log('Starting mobile verification v2...');
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    // iPhone 12 Pro dimensions
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });

    const dashboardPath = 'file://' + path.resolve('/projetos/ai4good/dashboard/index.html');

    console.log(`Navigating to ${dashboardPath}`);
    await page.goto(dashboardPath);

    // 1. Show Admin Dashboard (List View)
    await page.evaluate(() => {
        document.getElementById('loginModal').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        // Mock list
        const list = document.getElementById('usersList');
        list.innerHTML = `
            <div class="p-3 bg-dark-700 rounded-xl mb-2" onclick="selectAdminUser('71999999999')"><h3 class="text-white">João</h3><p class="text-gray-500">71999999999</p></div>
        `;
    });
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: '/projetos/ai4good/mobile_admin_list.png' });
    console.log('Captured mobile_admin_list.png');

    // 2. Select User (Should show Chat)
    await page.evaluate(() => {
        // Build mock chat
        const chat = document.getElementById('chatContainer');
        chat.innerHTML = '<div class="text-white">Chat Content Here</div>';
        // Simulate selection (trigger logic)
        selectAdminUser('71999999999');
    });
    // Wait for transition
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: '/projetos/ai4good/mobile_admin_chat.png' });
    console.log('Captured mobile_admin_chat.png');

    // 3. Click Back (Should show List)
    await page.evaluate(() => {
        backToAdminList();
    });
    // Wait for transition
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: '/projetos/ai4good/mobile_admin_back_to_list.png' });
    console.log('Captured mobile_admin_back_to_list.png');

    await browser.close();
})();
