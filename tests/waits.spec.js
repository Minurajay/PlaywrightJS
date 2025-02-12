const { test, expect } = require('@playwright/test');

test('Fluent Wait Reveal TextBox', async ({ page }) => {
    // Navigate to the dynamic page
    await page.goto('https://www.selenium.dev/selenium/web/dynamic.html');

    // Locate and click the "Reveal" button
    await page.locator('#reveal').click();

    // Wait for the element to become visible (Fluent Wait equivalent)
    //Doesnt need this waitForSelector playwright's inbuilt wait handles this.
    await page.waitForSelector('#revealed', {
        state: 'visible', // Ensures the element is visible
        timeout: 10000, // Wait up to 10 seconds
    });

    // Enter text into the revealed text box
    const revealedTextbox = page.locator('#revealed');
    await revealedTextbox.fill('Hello, Playwright!');
    await page.waitForTimeout(3000); // Wait for 3 seconds for observation

    console.log('Text entered into the revealed text box.');
});
