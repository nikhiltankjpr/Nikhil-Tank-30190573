import { test } from '@playwright/test';
import { allure } from 'allure-playwright';
import { TransferFundsPage } from '../pom/TransferPage';
import { TransactionHistoryPage } from '../pom/transPage';
import { LogoutPage } from '../pom/LogoutPage';

test('E2E - Transfer Funds', async ({ page }) => {

    allure.epic('Banking');
    allure.feature('Fund Transfer');
    allure.story('Own Account Transfer');

    const amount = '25';

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

    const transferPage = new TransferFundsPage(page);
    const transactionPage = new TransactionHistoryPage(page);
    const logoutPage = new LogoutPage(page);

    await transferPage.transferFunds(amount);

    await transactionPage.validateTransaction(amount);

    await logoutPage.logout();
});