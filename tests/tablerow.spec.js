import { test } from "@playwright/test";

test("get entire row from table from text in a cell", async ({ page }) => {
  await page.goto("https://letcode.in/table");

  const row = page.locator('tr:has-text("Cupcake")');
  
  // Wait for the row to be visible (optional but good practice)
  await row.waitFor();

  // Await innerText() to get the actual text content
  const rowText = await row.innerText();
  
  console.log(rowText);
});
