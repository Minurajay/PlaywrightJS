const { test, expect } = require('@playwright/test');

test('selectors demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.pause(); // Pause for debugging

    //using any object property
    await page.click('id=user-name');  
    await page.locator('id=user-name').fill('standard_user');
    await page.locator('[id="user-name"]').fill('problem_user');


    //Playwright does not directly support the name selector, unlike Selenium, which uses By.name
    // await page.click('name=user-name');  
    // await page.locator('name=user-name').fill('standard_user') ;  
    // await page.locator('[name="user-name"]').fill('problem_user');

    //using css selector
    //#login-button
     // await page.locator('#login-button').click()

    //using xpath
    await page.locator('xpath=//input[@id="password"]').fill('secret_sauce')
    await page.locator('//input[@id="password"]').fill('ss')

    //using text
    // await page.locator('text=Login').click();

    //incase of complex and dynamic text
    // await page.locator('input:has-text("Login")').click() //without input it will locate all elements with "Login"

    // await page.getByRole("button", {name:"Login"}).click()

    await page.getByText("Login").click();

    await page.getByPlaceholder('Username').fill('bob');

    // await page.getByTestId('username').fill('test123');

}); 