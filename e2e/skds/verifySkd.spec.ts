import { test, expect } from '@playwright/test';
import { loginUser } from '../utils/auth-helper';
import testData from '../test-data/testData.json';

test.describe('SKD Verification', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page);
  });

  test('Verify SKD', async ({ page }) => {
    // Navigate to SKD list
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'SKD List' }).click();

    // Function to verify a specific SKD row
    const verifySKD = async (rowName: string) => {
      // Find the row with the specified name
      const row = page.getByRole('row', { name: rowName });

      // Verify if row exists before proceeding
      await expect(row).toBeVisible({ timeout: 5000 });

      // Click the action button for this row
      await row.getByRole('button').first().click();

      // Fill in the remarks field
      await page.getByRole('textbox', { name: 'Remark' }).fill(testData.skdVerify.verifyDescription);

      // Click verify button
      await page.locator('form').getByRole('button', { name: 'Verify' }).click();

      // Verify the success message (add the expected success message)
      await expect(page.getByRole('alert')).toBeVisible();
    };

    // Call the function for specific SKD items
    await verifySKD('1 Test SKD Test SKD Type true');
  });
});