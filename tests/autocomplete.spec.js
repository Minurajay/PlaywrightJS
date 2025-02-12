const { test, expect } = require('@playwright/test');

test('Dropdown suggestion demo', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.locator('#autocomplete').fill('United', { delay: 200 });

  // Wait for the dropdown options to appear
  await page.waitForTimeout(1000);

  // await page.locator('.ui-menu-item-wrapper', { hasText: 'United States (USA)' }).click();
  // await page.locator('xpath=/html/body/ul/li[4]/div').click();   //Playwright does not support XPath expressions directly in the locator method.So need to give it as 'xpath=/...'
                                                                //Using XPath like /html/body/ul/li[4]/div is brittle and prone to breaking if the page structure changes. 
                                                                // Instead, use its built-in locators like getByText, getByRole, or CSS selectors.
  
  // await page.locator('#ui-id-5').click(); //The ID works because it follows a predictable pattern and remains consistent in test's specific conditions and DOM state.

  // Click the option "United States (USA)" using getByText
  await page.getByText('United States (USA)').click();

  // Validate that the correct value is selected
  // const selectedValue = await page.locator('#autocomplete').inputValue();
  // expect(selectedValue).toBe('United States (USA)');

  await expect(page.locator('#autocomplete')).toHaveValue('United States (USA)');
});
