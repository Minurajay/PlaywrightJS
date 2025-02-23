const { test, expect } = require('@playwright/test');

test.describe('Rahul Shetty Academy Automation Practice', () => {
  test('Verify no JS errors on the page', async ({ page }) => {
    const errors = [];

    // Listen for JavaScript errors on the page
    page.on('pageerror', (error) => {
      errors.push(error);
    });

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    
    // Ensure the correct URL is loaded
    await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');

    // Fail the test if any JS errors are detected
    expect(errors).toHaveLength(0);
  });
});
