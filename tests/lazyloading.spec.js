const { expect, test } = require('@playwright/test');

test("Check blog lazy loading", async ({ page }) => {
    // Navigate to the blog page
    await page.goto('https://www.checklyhq.com/blog/');

    // Get initial article count
    const initialArticles = await page.$$('a[title="Visit this post"]');
    const initialCount = initialArticles.length;
    
    console.log(`Initial article count: ${initialCount}`);

    // Scroll to the last article to trigger lazy loading
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });

    // Wait for potential new articles to load with timeout
    await expect(async () => {
        const newArticles = await page.$$('a[title="Visit this post"]');
        const newCount = newArticles.length;
        console.log(`New article count: ${newCount}`);
        
        // Check if more articles were loaded
        expect(newCount).toBeGreaterThan(initialCount);
    }).toPass({
        timeout: 3000,
        intervals: [500]  // Check every 500ms
    });
});

/*Initial article count: 9
When the page first loaded, it found 9 articles

New article count: 9
This is the first check after scrolling, showing no new articles yet
This is normal as there might be a slight delay before new content loads

New article count: 18
After waiting a bit longer, the count increased to 18 articles
This shows that lazy loading successfully worked
The number of articles doubled, suggesting a batch of 9 new articles was loaded

1 passed (4.3s)
The test passed because it met our expectations
It proved that lazy loading is working as intended
The entire test took 4.3 seconds to complete

This is a successful test result because:
It confirmed the lazy loading functionality is working
More articles were loaded after scrolling (9 → 18)
The loading happened within our 3-second timeout window*/

