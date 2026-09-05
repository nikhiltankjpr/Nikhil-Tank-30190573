import { Page } from '@playwright/test';

export class LogoutPage {
    constructor(private page: Page) {}

    async logout() {

        const logoutLocator = this.page.locator(
            'button:has-text("Logout"),a:has-text("Logout")'
        );

        if (await logoutLocator.count()) {
            await logoutLocator.first().click();
            console.log('✅ Logout Successful');
        }
    }
}
