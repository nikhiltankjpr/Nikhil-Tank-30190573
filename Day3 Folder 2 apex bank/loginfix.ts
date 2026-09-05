import { test as base, expect } from '@playwright/test';

export const test = base.extend({

    page: async ({ page }, use) => {

        await page.goto('https://playwrightpad.in/sandbox/banking');

        await page.getByRole('textbox', {
            name: 'Enter username'
        }).fill('apex_user');

        await page.getByRole('textbox', {
            name: 'Enter password'
        }).fill('Password123!');

        await page.getByRole('button', {
            name: 'LOGIN'
        }).click();

        await page.waitForTimeout(3000);

        await use(page);
    }
});

export { expect };