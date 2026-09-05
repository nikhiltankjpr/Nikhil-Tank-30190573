// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//     testDir: './tests',
//     timeout: 60000,
//     workers: 1,

//     globalSetup: require.resolve('./global-setup'),

//     use: {
//         browserName: 'chromium',
//         headless: false,
//         storageState: '.auth/user.json',
//         screenshot: 'only-on-failure',
//         trace: 'retain-on-failure',
//         video: 'retain-on-failure'
//     },

//     projects: [
//         {
//             name: 'chromium'
//         }
//     ],

//     reporter: [
//         ['list'],
//         ['html']
//     ]
// });
