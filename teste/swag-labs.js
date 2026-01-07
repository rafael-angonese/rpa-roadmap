import { chromium } from 'playwright';

export const executeSwagLabs = async () => {
    console.log('START - Swag Labs');
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();


    await page.goto('https://www.saucedemo.com/');

    // const titulo = await page.title();
    // console.log("Título:", titulo);

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');

    await page.waitForTimeout(2000);
    await page.click('#login-button');

    await page.click('#add-to-cart-sauce-labs-bike-light');
    await page.waitForTimeout(2000);
    await page.click('.shopping_cart_link');
    await page.waitForTimeout(2000);
    await page.click('#checkout');

    await page.fill('#first-name', 'João');
    await page.fill('#last-name', 'Silva');
    await page.fill('#postal-code', '12345');
    await page.waitForTimeout(2000);

    await page.click('#continue');
    
    await page.waitForTimeout(2000);
    await page.click('#finish');
    await page.waitForTimeout(2000);
    
    const completeText = await page.locator('.complete-header').textContent()

    console.log(completeText);
    if (completeText === 'Thank you for your order!') {
        console.log('Compra realizada com sucesso!');
        await page.screenshot({ path: 'success.png' });
    }
}