const { test, expect } = require('@playwright/test');

test('Radio and check boxes demo', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://training.rcvacademy.com/test-automation-practice-page');

  // Call the method to select the Java radio button by ID
  await selectRadioButtonById(page, 'java');
  
  await page.waitForTimeout(1000);
});

// Method to select a radio button by its ID
async function selectRadioButtonById(page, radioButtonId) {
  // Locate the radio button by its ID and click it
  await page.locator(`#${radioButtonId}`).click();
}

// 2. Passing the page Object:
// In Playwright, the page object is used to interact with the web page. It represents a browser tab where your test is running, and it allows you to perform actions like clicking, typing, and checking elements.
// By passing the page object as a parameter to the selectRadioButtonById function, we make the function reusable and modular. Instead of directly using page within the test itself, we pass it to the helper function, which can then use it to interact with the page.
// 3. Reusability:
// By creating a helper function like selectRadioButtonById(page, radioButtonId), we encapsulate the logic for selecting a radio button into one place. This way, we can reuse it in multiple tests without duplicating code. All you need to do is pass the page object (which is automatically provided by Playwright for each test) and the radioButtonId (such as 'java').
// The function becomes more flexible as you can now select any radio button by its ID, just by calling the function with different IDs.