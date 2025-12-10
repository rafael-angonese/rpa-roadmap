import puppeteer from 'puppeteer';
import { chromium } from 'playwright';

async function examplePuppeteer() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://example.com');

    const titulo = await page.title();
    console.log("Título da página:", titulo);

    await page.screenshot({ path: './tmp/pagina.png' });

    await browser.close();
};


async function example2() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL.
    await page.goto('https://developer.chrome.com/');

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    // Open the search menu using the keyboard.
    await page.keyboard.press('/');

    // Type into search box using accessible input name.
    await page.locator('::-p-aria(Search)').fill('automate beyond recorder');

    // Wait and click on first result.
    await page.locator('.devsite-result-item-link').click();

    // Locate the full title with a unique string.
    const textSelector = await page
        .locator('::-p-text(Customize and automate)')
        .waitHandle();
    const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // Print the full title.
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
};

async function examplePlaywright() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://example.com');

  const titulo = await page.title();
  console.log("Título:", titulo);

  await page.screenshot({ path: 'playwright.png' });

  await browser.close();
}

// examplePuppeteer();
examplePlaywright();