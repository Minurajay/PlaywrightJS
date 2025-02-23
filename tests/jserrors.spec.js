const { test, expect } = require('@playwright/test');

test('Verify no JS errors on Rahul Shetty Academy page', async ({ page }) => {
  const errors = [];

  // Listen for JavaScript errors and store them in an array
  page.addListener('pageerror', (error) => {
    errors.push(error);
  });

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Ensure the correct URL is loaded
  await expect(page).toHaveURL('https://rahulshettyacademy.com/AutomationPractice/');

  if (true) { // Simulating failOnJSError as always true
    expect(errors).toHaveLength(0);
  }
});
