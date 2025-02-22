import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe('SKD Workflow Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(testData.validLogin.email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(testData.validLogin.password);
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByRole('alert')).toContainText("You're successfully logged in!");
  });

  test('Navigate to SKD Section', async ({ page }) => {
    await page.getByRole('link', { name: 'Skds' }).click();
  });

  test('Create SKD', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/skd');
    await page.locator('a', { hasText: 'SKD List' }).click();
    await page.getByRole('link', { name: 'Create SKD' }).click();
    await page.getByRole('textbox', { name: 'Enter Skd name' }).fill(testData.skd.skdName);
    await page.getByText('Choose a skd type *').click();
    await page.getByRole('textbox', { name: 'Search for a skd type', exact: true }).fill(testData.skd.skdName);
    await page.getByRole('textbox', { name: 'Search for a skd type', exact: true }).press('Enter');
    await page.getByRole('textbox', { name: 'Enter skd description' }).fill(testData.skd.skdDescription);
    await page.getByRole('button', { name: 'Submit' }).click();
  });

  test('Verify SKD Creation', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/skd');
    await page.getByRole('cell', { name: 'Verification' }).click();
    await page.getByRole('row', { name: '1 test skd test skd true -' }).getByRole('button').first().click();
    await page.getByRole('textbox', { name: 'Remark' }).fill('verifyyyyy');
    await page.locator('form').getByRole('button', { name: 'Verify' }).click();
    await expect(page.getByRole('alert')).toContainText('Successfully Verified!');
  });
});
