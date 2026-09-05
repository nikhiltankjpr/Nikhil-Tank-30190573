import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvData = fs.readFileSync(
  './data/loginData.csv'
);

const records = parse(csvData, {
  columns: true,
  skip_empty_lines: true,
});

for (const data of records) {

  test(`Login Test - ${data.username}`, async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    await page.fill('#user-name', data.username);

    await page.fill('#password', data.password);

    await page.click('#login-button');

    if (data.expectedResult === 'Pass') {

      await expect(page).toHaveURL(/inventory/);

    } else {

      await expect(
        page.locator('[data-test="error"]')
      ).toBeVisible();

    }
  });
}