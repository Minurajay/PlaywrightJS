const { test, expect } = require('@playwright/test');

test('Dropdown suggestion demo with built-in locators', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const text = await page.locator('#autocomplete');
  await text.clear({ delay: 200 })
  await text.pressSequentially('United', { delay: 1000 });

  await page.locator('.ui-menu.ui-widget') //targets the dropdown menu container.
  .getByRole('listitem')                   //('listitem') fetches all child elements within the dropdown that have the role listitem.
  .filter({hasText:'United States (USA)'}) //narrows down the elements to those that contain the text United States (USA).
  .click();
  
  // Wait for the dropdown options to appear
  await page.waitForTimeout(1000);

  //Validate that the correct value is selected
  const selectedValue = await page.locator('#autocomplete').inputValue();
  expect(selectedValue).toBe('United States (USA)');
});

// This method is better for long-term maintenance and accessibility alignment, 
// while the first method is faster to implement if you are confident the DOM structure and class names will not change.

//Unlike methods like .each() in Cypress, this code doesn't loop through elements manually.
// Efficient Matching: The filter method directly identifies the desired element based on the provided condition (hasText).
