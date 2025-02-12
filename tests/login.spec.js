const { test, expect } = require('@playwright/test');

test('login demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    // await page.pause(); // Pause for debugging

    //using any object property
    await page.click('id=user-name');  
    await page.locator('id=user-name').fill('standard_user');
    await page.waitForTimeout(1000); // Wait for 1 second for visibility

    //using xpath
    await page.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    await page.waitForTimeout(1000); // Wait for 1 second for visibility

    //using text
    // await page.waitForSelector('text=Login', {timeout: 10000})
    await page.locator('text=Login').click();
    await page.waitForTimeout(1000); // Wait for 1 second for visibility

}); 