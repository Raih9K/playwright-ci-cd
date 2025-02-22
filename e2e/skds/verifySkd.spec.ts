import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe('SKD Workflow Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
    await page.screenshot({ path: 'screenshots/before-login.png', fullPage: true });

    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(testData.validLogin.email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(testData.validLogin.password);
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole('alert')).toContainText("You're successfully logged in!");
    await page.screenshot({ path: 'screenshots/after-login.png', fullPage: true });
  });

  test('Navigate to SKD Section', async ({ page }) => {
    const skdLink = page.getByRole('link', { name: 'Skds' });

    if (await skdLink.isVisible()) {
      await skdLink.click();
      console.log('Navigated to SKD Section');
    } else {
      console.log('SKD Section link is not visible');
      await page.screenshot({ path: 'screenshots/skd-section-error.png', fullPage: true });
    }
  });

  test('Verify SKD Creation', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/skd');
    await page.screenshot({ path: 'screenshots/before-verification.png', fullPage: true });

    const verifyButton = page.getByRole('cell', { name: 'Verification' });

    if (await verifyButton.isVisible()) {
      await verifyButton.click();
      await page.getByRole('row', { name: '1 test skd test skd true -' }).getByRole('button').first().click();
      await page.getByRole('textbox', { name: 'Remark' }).fill('verifyyyyy');
      await page.locator('form').getByRole('button', { name: 'Verify' }).click();

      await expect(page.getByRole('alert')).toContainText('Successfully Verified!');
      await page.screenshot({ path: 'screenshots/after-verification.png', fullPage: true });

    } else {
      console.log('Verification button not found!');
      await page.screenshot({ path: 'screenshots/verification-error.png', fullPage: true });
    }
  });
});
