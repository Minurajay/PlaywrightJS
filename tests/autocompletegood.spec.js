const { test, expect } = require('@playwright/test');

test('Dropdown suggestion demo with built-in locators', async ({ page }) => {
  const country = 'United'; 

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const text = await page.locator('#autocomplete');
  await text.clear({ delay: 200 });
  await text.fill(country.split(' ')[0], { delay: 100 }); //splits the string stored in country (e.g., "Argentina") into an array of words, separating by spaces. 
                                                        // The [0] picks the first word of the array.

  await page.locator('.ui-menu.ui-widget') // Targets the dropdown menu container
    .getByRole('listitem')                  // Fetches all child elements with the role listitem
    .filter({ hasText: country })           // Narrows down to the element with the desired country
    .click();
  
  // Wait for the dropdown options to appear
  await page.waitForTimeout(1000);

  // Validate that the correct value is selected
  const selectedValue = await page.locator('#autocomplete').inputValue();
  expect(selectedValue).toBe(country); // Validate the input matches the expected country
});
