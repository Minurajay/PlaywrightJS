const { test, expect } = require('@playwright/test');

test('getbylabel demo', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');

    await page.getByAltText('Playwright logo').nth(0).click(); // Click the first element
    // await page.waitForTimeout(3000);

}); 