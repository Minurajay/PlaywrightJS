const { test, expect } = require('@playwright/test');

test('Radio and check boxes demo', async ({ page }) => {
    // await page.goto('https://login.salesforce.com/');

    // await page.locator('#rememberUn').click(); //Also possible with getbylabel
    // expect(page.locator('#rememberUn')).toBeChecked();

    await page.goto('https://training.rcvacademy.com/test-automation-practice-page');

    // Select and click the first radio button
    await page.locator("//input[@type='radio']").first().check();

    // Select and click the last radio button
    await page.locator("//input[@type='radio']").last().click();

    // Select and click the third radio button (nth index starts from 0)
    await page.locator("//input[@type='radio']").nth(2).click();

    await page.locator("//*[@id='java']").click();
    await page.waitForTimeout(1000);


});