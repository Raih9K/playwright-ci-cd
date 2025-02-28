import { test, expect } from '@playwright/test';
import { loginUser } from '../utils/auth-helper';
import testData from '../test-data/testData.json';

test.describe('SKD Workflow Tests', () => {

  test.beforeEach(async ({ page }) => {
    await loginUser(page);
  });

  test('Test : 1', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');

    await page.getByRole('textbox', { name: 'Enter your email or phone' }).click();
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill('admin@myqbits.com');
    await page.getByRole('textbox', { name: 'Enter your password' }).click();
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('123');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('button', { name: 'Log in' }).click();
    
  });
  test('TC : 2', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
  });
  test('Test : 3', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
  });
  test('Test : 4', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
  });
  test('Test : 5', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
  });
  test('Test : 6', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
  });
});