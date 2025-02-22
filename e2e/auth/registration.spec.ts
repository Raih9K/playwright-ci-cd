import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test('Positive Test - Valid Login', async ({ page }) => {
    const { email, password } = testData.validLogin;

    // Navigate to login page
    await page.goto('https://admin.dev.myqbits.com/');
    console.log("Navigated to login page");

    // Enter email and password
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
    console.log("Entered valid credentials");

    // Click login button
    await page.getByRole('button', { name: 'Log in' }).click();
    console.log("Clicked login button");

    // Validate successful login
    await expect(page.getByRole('alert')).toContainText('You\'re successfully logged in!');
    console.log("Login successful - Dashboard loaded");
});