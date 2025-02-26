import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe.serial('SKD Workflow Tests', () => {
  test.beforeEach(async ({ page }) => {
    // await page.goto('https://admin.dev.myqbits.com/');
    await page.goto(testData.testServer); //redirect login page
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(testData.validLogin.email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(testData.validLogin.password);
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('alert')).toContainText("You're successfully logged in!");
  });

  test('Create SKD Type', async ({ page }) => {
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'Type List' }).click();
    await page.getByRole('link', { name: 'Create SKD Type' }).click();
    
    await expect(page.locator('h2')).toContainText('Create SKD Type');
    
    await page.getByRole('textbox', { name: 'Enter skd type name' }).fill('Test SKD type');
    await page.getByRole('radio', { name: 'True' }).check();
    await page.getByRole('textbox', { name: 'Enter barcode prefix' }).fill('Test');
    await page.getByRole('radio', { name: 'Active', exact: true }).check();
    await page.getByRole('button', { name: 'Submit' }).click();
    
    // Wait for confirmation
    await expect(page.getByRole('alert')).toContainText('Skd type successfully created.');
  });
});
