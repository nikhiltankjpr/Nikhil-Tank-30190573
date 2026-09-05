import { Given, When, Then } from '@cucumber/cucumber';
import StudentRegistrationPage from '../../pages/StudentRegistrationPage';
import { CustomWorld } from '../../support/world';

let registrationPage: StudentRegistrationPage;

let userData: any = {};

Given(
    'User opens student registration form',
    async function (this: CustomWorld) {

        registrationPage = new StudentRegistrationPage(this.page);

        await registrationPage.navigate();
    }
);

When(
    'User enters student details {string} {string} {string} {string} {string} {string} {string} {string}',
    async function (
        name,
        email,
        mobile,
        dob,
        subject,
        address,
        state,
        city
    ) {

        userData = {
            name,
            email,
            mobile,
            address
        };

        await registrationPage.fillForm(
            name,
            email,
            mobile,
            dob,
            subject,
            address,
            state,
            city
        );
    }
);

Then(
    'Student registration form should be filled successfully',
    async function () {

        await registrationPage.verifyForm(
            userData.name,
            userData.email,
            userData.mobile,
            userData.address
        );
    }
);