const { test, expect } = require('@playwright/test');

test('Handle JS Confirm dialog with extended visibility', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.locator('#name').fill('Test Alert');
  await page.waitForTimeout(1000);

  // Set up the dialog event listener before triggering the dialog
  page.on('dialog', async (dialog) => {           //Acts as a listener. Emitted when page closes. Here 'dialog' is an event
                                                  //When the alert comes it will store in the variable named dialog. 
                                                  // Then can play with it what is the type? what does it contain what is the message
    expect(dialog.type()).toContain("confirm") 
    expect(dialog.message()).toContain("Hello Test Alert, Are you sure you want to confirm?")
    await page.waitForTimeout(3000); //delay to keep the dialog visible

    // Accept the dialog
    await dialog.accept();

  });

  await page.locator('#confirmbtn').click();

});

//Registering listeners before triggering events ensures the test is ready to handle them immediately, avoiding timing issues or missed events.
//If not the dialog event might occur before the listener is registered, causing the dialog to remain unhandled. 