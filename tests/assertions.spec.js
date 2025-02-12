const { test, expect } = require('@playwright/test'); 


test('My first test', async ({ page }) => {  
    
    await page.goto('https://kitchen.applitools.com/');
    await page.pause();

    //Assertions
    //Check if an element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    
    await page.$('text=The Kitchen')

    //check element hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden({
        message: 'Expected "The Kitchen" heading to be hidden, but it is visible.',
      }); //customise error message

    //check element enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    //check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('abc');        //diference between haveText value

    //check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/);

    //check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle(/.*Kitchen/);
    await page.pause();

    //visual validation with screenshot
    await expect(page).toHaveScreenshot()



    
});
