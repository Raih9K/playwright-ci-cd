import { test, expect } from '@playwright/test';
import { loginUser } from '../utils/auth-helper';
import testData from '../test-data/testData.json';

test.describe('SKD Workflow Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await loginUser(page);
  });

  test('Create SKD Test', async ({ page }) => {
    // Navigate to SKD List
    await page.goto('https://admin.dev.myqbits.com/');
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'SKD List' }).click();
    await page.waitForURL('https://admin.dev.myqbits.com/skd');

    // Click "Create SKD" button
    await page.getByRole('link', { name: 'Create SKD' }).click();

    // Fill SKD form
    await page.getByRole('textbox', { name: 'Enter Skd name' }).fill(testData.skd.skdName);
    
    // Select SKD type
    await page.getByRole('textbox', { name: 'Search for a skd type', exact: true }).click();
    await page.locator('.absolute > li').first().click();
    
    // Enter description
    await page.getByRole('textbox', { name: 'Enter skd description' }).fill(testData.skd.skdDescription);
    
    // Activate SKD
    await page.getByText('Active', { exact: true }).click();
    
    // Submit the form
    await page.getByRole('button', { name: 'Submit' }).click();

    // Verify SKD Creation
    await expect(page.getByText('SKD created successfully')).toBeVisible();
  });
});