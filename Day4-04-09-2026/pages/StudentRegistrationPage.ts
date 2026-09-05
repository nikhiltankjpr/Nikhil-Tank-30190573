import { Page, expect } from '@playwright/test';

export default class StudentRegistrationPage {

    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto(
            'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php'
        );
    }

    async fillForm(
        name: string,
        email: string,
        mobile: string,
        dob: string,
        subject: string,
        address: string,
        state: string,
        city: string
    ) {

        await this.page.getByRole('textbox', {
            name: 'Name:'
        }).fill(name);

        await this.page.getByRole('textbox', {
            name: 'Email:'
        }).fill(email);

        await this.page.getByRole('radio')
            .first()
            .check();

        await this.page.getByRole('textbox', {
            name: 'Mobile(10 Digits):'
        }).fill(mobile);

        await this.page.getByRole('textbox', {
            name: 'Date of Birth:'
        }).fill(dob);

        await this.page.getByRole('textbox', {
            name: 'Subjects:'
        }).fill(subject);

        await this.page.getByRole('checkbox')
            .first()
            .check();

        await this.page.getByRole('checkbox')
            .nth(1)
            .check();

        await this.page.getByRole('textbox', {
            name: 'Currend Address'
        }).fill(address);

        await this.page.locator('#state')
            .selectOption(state);

        await this.page.locator('#city')
            .selectOption(city);
    }

    async verifyForm(
        name: string,
        email: string,
        mobile: string,
        address: string
    ) {

        await expect(
            this.page.getByRole('textbox', {
                name: 'Name:'
            })
        ).toHaveValue(name);

        await expect(
            this.page.getByRole('textbox', {
                name: 'Email:'
            })
        ).toHaveValue(email);

        await expect(
            this.page.getByRole('textbox', {
                name: 'Mobile(10 Digits):'
            })
        ).toHaveValue(mobile);

        await expect(
            this.page.getByRole('textbox', {
                name: 'Currend Address'
            })
        ).toHaveValue(address);

        console.log(`✅ Form submitted successfully for ${name}`);
    }
}