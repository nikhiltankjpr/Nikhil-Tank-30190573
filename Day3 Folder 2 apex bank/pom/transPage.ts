import { Page, expect } from '@playwright/test';

export class TransactionHistoryPage {
    constructor(private page: Page) {}

    async validateTransaction(amount: string) {

        const body = this.page.locator('body');

        await expect.soft(body).toContainText(amount);

        console.log(
            `✅ Transaction Validation Successful | Amount: $${amount}`
        );
    }
}