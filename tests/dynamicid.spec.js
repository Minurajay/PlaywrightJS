const { test, expect } = require('@playwright/test');

test('selectors demo', async ({ page }) => {
    await page.goto('https://www.facebook.com/');

    //By Role (Recommended for Buttons)
    await page.getByRole('button', { name: 'Log in' }).click();//Uses the button's role and accessible name (Log in).

    //By Text
    await page.getByText('Log in').click();

    //By Test ID (If Present)
    await page.getByTestId('royal_login_button').click();

    //By Placeholder or Other Attributes
    await page.locator('[name="login"]').click();


}); 