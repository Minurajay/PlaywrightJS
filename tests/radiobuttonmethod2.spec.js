const { test, expect } = require('@playwright/test');

test('Radio and check boxes demo', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  // Call the method to select the Java radio button by ID
  await selectRadioButtonById(page, 'radio1');
  
  await page.waitForTimeout(1000);
});

// Method to select a radio button by its ID
async function selectRadioButtonById(page, radioButtonValue) {
  // Locate the radio button by its ID and click it
  await page.locator(`input[value='${radioButtonValue}']`).click();
}
