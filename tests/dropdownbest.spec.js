const { test, expect } = require('@playwright/test');

class DropdownTest {
  constructor(page, country, typedInput) {
    this.page = page;
    this.country = country;
    this.typedInput = typedInput;
    this.inputField = page.locator('#autocomplete');
    this.dropdownOptions = page.locator('.ui-menu.ui-widget li');
  }

  async selectCountryFromDropdown() {
    try {
      await this.page.goto('https://rahulshettyacademy.com/AutomationPractice/');

      await this.inputField.fill(''); // Clear the input field
      await this.inputField.pressSequentially(this.typedInput, { delay: 100 }); // Optional delay between keystrokes

      // Select the correct option using `filter` and `hasText`
      const option = this.dropdownOptions.filter({
        hasText: new RegExp(`^${this.country}$`), //RegExp constructor to create a new RegExp object. ^: Ensures the match starts at the beginning of the string.
      });                                         //$: Ensures the match ends at the end of the string.

      // Wait for the matching option to appear
      await expect(option.first()).toBeVisible({ timeout: 10000 });
      await option.first().click(); // Select the first matching option

      // Validate the selected value
      const selectedValue = await this.inputField.inputValue();
      
      // assertion
      expect(selectedValue).toBe(
        this.country,
        `The selected value (${selectedValue}) does not match the expected value (${this.country}).`
      );

      console.log(`Test passed! Selected country: ${selectedValue}`);
    } catch (error) {
      console.error('Error occurred:', error);
      throw error; 
    }
  }
}

test('Dropdown suggestion demo', async ({ page }) => {
  const dropdownTest1 = new DropdownTest(page, 'Australia', 'aus');
  await dropdownTest1.selectCountryFromDropdown();

  const dropdownTest = new DropdownTest(page, 'Argentina', 'arg');
  await dropdownTest.selectCountryFromDropdown();
});
