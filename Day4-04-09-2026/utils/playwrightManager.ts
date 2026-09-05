import {
    chromium,
    Browser,
    BrowserContext,
    Page
} from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

export async function launchBrowser() {

    browser = await chromium.launch({
        headless: false
    });

    context = await browser.newContext();

    page = await context.newPage();

    return page;
}

export async function closeBrowser() {

    await browser.close();
}