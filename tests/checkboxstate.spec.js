const { test, expect } = require('@playwright/test');  // Corrected import from @playwright/test

test('My first test', async ({ page }) => {
  // Navigate to the page containing the checkbox
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // Locate the checkbox element
  const checkbox = page.locator('#checkboxes > input[type=checkbox]:nth-child(1)');

  // Check if the checkbox is already checked 
  const isChecked = await checkbox.isChecked();   // .isChecked() checks the current state, not after an interaction. It won't wait for actions to complete.
                                                  //prefer expect(locator).toBeChecked() to handle post-interaction checks with auto-wait. 
  // If the checkbox is unchecked, check it
  if (!isChecked) {
    await checkbox.check();  // Check the checkbox
    console.log('Checkbox is now checked.');
  } else {
    console.log('Checkbox was already checked.');
  }

  // No need to manually close the browser as Playwright Test does that 
});
