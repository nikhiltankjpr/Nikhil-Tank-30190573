import { Before, After, Status } from '@cucumber/cucumber';
import { launchBrowser, closeBrowser } from '../utils/playwrightManager';
import fs from 'fs';

Before(async function () {
    this.page = await launchBrowser();
});

After(async function (scenario) {

    if (!fs.existsSync('screenshots')) {
        fs.mkdirSync('screenshots');
    }

    const screenshotPath = `screenshots/${scenario.pickle.name.replace(/\s+/g, '_')}.png`;

    await this.page.screenshot({
        path: screenshotPath,
        fullPage: true
    });

    const screenshot = fs.readFileSync(screenshotPath);

    await this.attach(screenshot, 'image/png');

    console.log(`📸 Screenshot saved: ${screenshotPath}`);

    await closeBrowser();
});