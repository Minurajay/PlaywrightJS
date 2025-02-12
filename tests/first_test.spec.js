const { test, expect } = require('@playwright/test'); 
// Importing 'test' and 'expect' from Playwright's testing library.
// 'test': Used to define test cases.
// 'expect': Provides assertion methods to validate test outcomes.

test('My first test', async ({ page }) => {  
    // Defining a test case with a name 'My first test'.
    // 'async': Allows the use of asynchronous operations inside the test case.
    // 'page': Represents a new browser page (or tab) created by Playwright to interact with the web application.

    await page.goto('https://www.google.com');
    // 'goto': Navigates to the specified URL (in this case, Google).
    // 'await': Ensures the navigation is completed before proceeding to the next line.

    await expect(page).toHaveTitle('Google');
    // Assertion: Verifies that the page title contains the text 'Google'.
    // If the title doesn't match, the test will fail.

});
