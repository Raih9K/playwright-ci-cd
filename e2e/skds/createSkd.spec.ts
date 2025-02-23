import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe('SKD Workflow Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');

    const emailField = page.getByRole('textbox', { name: 'Enter your email or phone' });
    const passwordField = page.getByRole('textbox', { name: 'Enter your password' });
    const loginButton = page.getByRole('button', { name: 'Log in' });

    if (await emailField.isVisible() && await passwordField.isVisible()) {
      await emailField.fill(testData.validLogin.email);
      await passwordField.fill(testData.validLogin.password);
      await loginButton.click();
    } else {
      console.log('Login fields are not visible.');
      await page.screenshot({ path: 'error_login_fields.png' });
    }

    await expect(page.getByRole('alert')).toContainText("You're successfully logged in!");
  });

//   test('Create SKD', async ({ page }) => {
//     await page.goto('https://admin.dev.myqbits.com/skd');
  
//     await page.getByRole('link', { name: 'Create SKD' }).click();
  
//     const skdNameInput = page.getByRole('textbox', { name: 'Test SKDD' });
//     await skdNameInput.waitFor({ state: 'visible' });
//     await skdNameInput.fill('Test SKD type');
  
//     const skdTypeDropdown = page.getByRole('textbox', { name: 'Search for a skd type', exact: true });
//     await skdTypeDropdown.waitFor({ state: 'visible' });
//     await skdTypeDropdown.click();
    
//     const firstOption = page.locator('.absolute > li').first();
//     await firstOption.waitFor({ state: 'visible' });
//     await firstOption.click();
  
//     const activeToggle = page.getByText('Active', { exact: true });
//     await activeToggle.waitFor({ state: 'visible' });
//     await activeToggle.click();
  
//     const submitButton = page.getByRole('button', { name: 'Submit' });
//     await submitButton.waitFor({ state: 'visible' });
//     await submitButton.click();
  
//     console.log('✅ SKD Created Successfully');
//   });
test('Create SKD', async ({ page }) => {
  await page.goto('https://admin.dev.myqbits.com/skd');

  await page.getByRole('link', { name: 'Create SKD' }).click();

  const skdNameInput = page.getByRole('textbox', { name: 'Enter Skd name' });
  await skdNameInput.waitFor({ state: 'visible' });
  await skdNameInput.fill('Test SKD type');

  const skdTypeDropdown = page.getByRole('textbox', { name: 'Search for a skd type', exact: true });
  await skdTypeDropdown.waitFor({ state: 'visible' });
  await skdTypeDropdown.click();
  
  const firstOption = page.locator('.absolute > li').first();
  await firstOption.waitFor({ state: 'visible' });
  await firstOption.click();

  const activeToggle = page.getByText('Active', { exact: true });
  await activeToggle.waitFor({ state: 'visible' });
  await activeToggle.click();

  const submitButton = page.getByRole('button', { name: 'Submit' });
  await submitButton.waitFor({ state: 'visible' });
  await submitButton.click();

  console.log('✅ SKD Created Successfully');
});

});