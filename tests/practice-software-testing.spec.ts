import { expect, test } from '@playwright/test';

test('Test a login form', async ({ page }) => {
  // Step 1: Open login page
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(2000); // Wait 2 seconds to see the page
  
  // Verify UI elements
  // Check if login button is visible
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  
  // Check if text exists (Swag Labs heading)
  await expect(page.locator('.login_logo')).toHaveText('Swag Labs');
  
  // Check if username input is enabled
  await expect(page.locator('[data-test="username"]')).toBeEnabled();
  
  // Check if password input is enabled
  await expect(page.locator('[data-test="password"]')).toBeEnabled();
  
  // Step 2: Fill username
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  
  // Step 3: Fill password
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  
  // Step 4: Click login button
  await page.locator('[data-test="login-button"]').click();
  
  await page.waitForTimeout(2000);

  // Save auth state for the next test file
  await page.context().storageState({ path: '.auth/user.json' });
});
