import { chromium } from 'playwright';

console.log('START TESTE 32')

const executeTeste32 = async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.saucedemo.com/', { waitUntil: 'networkidle' });

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await page.waitForTimeout(3000)

    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.waitForTimeout(3000)

    await page.locator('#shopping_cart_container > a').click();

    await page.waitForTimeout(3000)

    await page.locator('#checkout').click();

    await browser.close();
}

executeTeste32();