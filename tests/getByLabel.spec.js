const { test, expect } = require('@playwright/test');

test('getbylabel demo', async ({ page }) => {
    await page.goto('https://login.salesforce.com/');

    await page.getByLabel('Remember me').click();
    // await page.waitForTimeout(3000);



}); 