const { test, expect } = require('@playwright/test');

test('Dropdown suggestion demo with dynamic typing', async ({ page }) => {
  const country = 'India'; // Country you want to select
  const typedInput = 'ind'; // Letters you type to trigger the suggestion

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const text = page.locator('#autocomplete');
  
  // Clear the input field and type the partial text
  await text.fill(''); 
  await text.fill(typedInput);

  // Select the desired option from the dropdown
  await page.locator('.ui-menu.ui-widget li')
    .filter({ hasText: new RegExp(`^${country}$`) }) //RegExp constructor to create a new RegExp object.
                                                     //^: Ensures the match starts at the beginning of the string.
                                                    //$: Ensures the match ends at the end of the string.

    .first() //selects the first matching element from a list, ensuring the script interacts with a single, predictable item.
    .click();

  await page.waitForTimeout(500);

  // Validate that the correct value is selected
  const selectedValue = await text.inputValue();
  expect(selectedValue).toBe(country); // Ensure the input matches the expected country
});
