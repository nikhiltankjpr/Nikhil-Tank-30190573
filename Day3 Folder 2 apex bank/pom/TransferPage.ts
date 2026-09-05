import { Page, expect } from '@playwright/test';

export class TransferFundsPage {
    constructor(private page: Page) {}

    async transferFunds(amount: string) {

        await this.page.getByRole('button', {
            name: 'Funds Transfer'
        }).click();

        const amountInput = this.page.getByRole('spinbutton', {
            name: '0.00'
        });

        await expect(amountInput).toBeVisible();

        await amountInput.clear();
        await amountInput.fill(amount);

        await this.page.getByRole('button', {
            name: 'Execute Transfer'
        }).click();

        await expect.soft(
            this.page.locator('body')
        ).toContainText(amount);

        console.log(`✅ Transfer Successful | Amount: $${amount}`);
    }
}