const { test, expect } = require('@playwright/test');

test('Handling multiple tabs in Playwright', async ({ browser }) => {
    const context = await browser.newContext(); // Create a new browser context
    const page1 = await context.newPage(); // Open the first tab
    await page1.goto('https://www.saucedemo.com/');
    console.log(await page1.title()); // Log the title of the first page

    const page2 = await context.newPage(); // Open a second tab
    await page2.goto('https://google.com');
    console.log(await page2.title()); // Log the title of the second page

    // Ensure all operations are completed before the test ends
    await page1.reload(); // Reload the first tab
    
    // Wait for the Google search input to be visible using the new selector with the id 'APjFqb'
    await page2.waitForSelector('id=APjFqb', { state: 'visible', timeout: 10000 }); // Wait for the search box to be visible

    // Interact with the search box after it's visible
    await page2.locator('#APjFqb').fill('playwright'); // Type in Google's search box
    await page2.locator('#APjFqb').press('Enter'); // Perform the search

    await page1.locator('id=user-name').fill('standard_user');
    await page1.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    await page1.locator('text=Login').click();
});
