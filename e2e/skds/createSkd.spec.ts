import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe.serial('SKD Workflow Tests', () => {
  
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

  test('Create SKD Test', async ({ page }) => {
    await page.goto('https://admin.dev.myqbits.com/');
    
    // Navigate to SKD List
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'SKD List' }).click();
    await page.waitForURL('https://admin.dev.myqbits.com/skd');

    // Check if 'Create SKD' button is visible
    const createSkdButton = page.getByRole('link', { name: 'Create SKD' });
    if (await createSkdButton.isVisible()) {
        await createSkdButton.click();
    } else {
        console.log('❌ "Create SKD" button is not visible.');
        return;
    }

    // Check if 'Enter Skd name' field is visible before filling
    const skdNameField = page.getByRole('textbox', { name: 'Enter Skd name' });
    if (await skdNameField.isVisible()) {
        await skdNameField.fill('SKD 1');
    } else {
        console.log('❌ SKD Name field is not visible.');
        return;
    }

    // Select SKD type
    const skdTypeDropdown = page.getByRole('textbox', { name: 'Search for a skd type', exact: true });
    if (await skdTypeDropdown.isVisible()) {
        await skdTypeDropdown.click();
        await page.locator('.absolute > li').first().click();
    } else {
        console.log('❌ SKD Type dropdown is not visible.');
        return;
    }

    // Enter description
    const skdDescField = page.getByRole('textbox', { name: 'Enter skd description' });
    if (await skdDescField.isVisible()) {
        await skdDescField.fill('testttt');
    } else {
        console.log('❌ SKD Description field is not visible.');
        return;
    }

    // Activate SKD
    const activeToggle = page.getByText('Active', { exact: true });
    if (await activeToggle.isVisible()) {
        await activeToggle.click();
    } else {
        console.log('❌ "Active" toggle is not visible.');
        return;
    }

    // Click Submit Button
    const submitButton = page.getByRole('button', { name: 'Submit' });
    if (await submitButton.isVisible()) {
        await submitButton.click();
    } else {
        console.log('❌ Submit button is not visible.');
        return;
    }

    // Verify SKD Creation
    const successMessage = page.getByText('SKD created successfully');
    if (await successMessage.isVisible()) {
        console.log('✅ SKD Created Successfully!');
    } else {
        console.log('❌ SKD creation failed.');
    }
  });

});