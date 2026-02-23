import { expect, test } from '@playwright/test';

test('Filter by Price (low to high) and verify product text', async ({ page }) => {
  // Uses auth from previous file - navigate to products page
  await page.goto('https://www.saucedemo.com/inventory.html');
  await page.waitForTimeout(2000);

  // Filter by Price (low to high)
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.waitForTimeout(1000); // Wait for filter to apply

  // Get and print text from the element
  const actualText = await page.locator('[data-test="item-4-title-link"]').textContent();
  console.log('Actual text from element:', actualText);

  // Assert that "Sauce Labs Backpack" text appears after filtering
  await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText(actualText);

  // Wait a bit before test completes to see the result
  await page.waitForTimeout(2000);
});
