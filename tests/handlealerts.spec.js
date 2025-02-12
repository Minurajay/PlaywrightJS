const { test, expect } = require('@playwright/test');

test('Handling JS Alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async (d) => //Acts as a listener. Emitted when page closes. Here 'dialog' is an event
    {                              //When the alert comes it will store in the variable named d. Then can play with it what is the type? what does it contain what is the message
        
        expect(d.type()).toContain("alert") //can do anything with it
        expect(d.message()).toContain("I am a JS Alert")
        await d.accept()
    })

    await page.locator('//button[text()="Click for JS Alert"]').click();

    
});

test('Handling JS Confirm Box', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async (dialogWindow) => 
    {                              
        
        expect(dialogWindow.type()).toContain("confirm") //can do anything with it
        expect(dialogWindow.message()).toContain("I am a JS Confirm")
        await dialogWindow.dismiss()
        //await dialogWindow.accept()
 
    })

    await page.locator('//button[text()="Click for JS Confirm"]').click();

    
});

test('Handling JS prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async (dialogWindow) => 
    {                              
        
        expect(dialogWindow.type()).toContain("prompt") //can do anything with it
        expect(dialogWindow.message()).toContain("I am a JS prompt")
        // await dialogWindow.dismiss()
        await dialogWindow.accept("Minura")
 
    })

    await page.locator('//button[text()="Click for JS Prompt"]').click();

    await page.waitForTimeout(5000)

    
});
