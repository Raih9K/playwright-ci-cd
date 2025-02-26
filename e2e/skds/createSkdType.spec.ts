import { test, expect } from '@playwright/test';
import { loginUser } from '../utils/auth-helper';
import testData from '../test-data/testData.json';

test.describe('SKD Type Workflow Tests', () => {
  test.beforeEach(async ({ page }) => {
    await loginUser(page);
  });

  test('Create SKD Type', async ({ page }) => {
    // Navigation to SKD Type creation
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'Type List' }).click();
    await page.getByRole('link', { name: 'Create SKD Type' }).click();
    
    // Verify page title
    await expect(page.locator('h2')).toContainText('Create SKD Type');
    
    // Fill form with data from testData
    await page.getByRole('textbox', { name: 'Enter skd type name' }).fill(testData.skdType.skdtypename);
    await page.getByRole('radio', { name: 'True' }).check();
    await page.getByRole('textbox', { name: 'Enter barcode prefix' }).fill(testData.skdType.skdtypeDescription);
    await page.getByRole('radio', { name: 'Active', exact: true }).check();
    
    // Submit the form
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // Verify success message
    await expect(page.getByRole('alert')).toContainText('Skd type successfully created.');
  });
});