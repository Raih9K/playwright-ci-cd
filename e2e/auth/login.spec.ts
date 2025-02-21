import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe('Login Tests', () => {
    
    test('Negative Test - Invalid Credentials', async ({ page }) => {
        const { email, password } = testData.invalidLogin;

        // Navigate to login page
        await page.goto('https://admin.dev.myqbits.com/');
        console.log("Navigated to login page");

        // Enter invalid credentials
        await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(email);
        await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);
        console.log("Entered invalid credentials");

        // Click login button
        await page.getByRole('button', { name: 'Log in' }).click();
        console.log("Clicked login button");

        // Validate error message
        await expect(page.getByRole('alert')).toContainText('User not found');
    });

    test('Blank Email & Password Validation Test', async ({ page }) => {
        await page.goto('https://admin.dev.myqbits.com');
        console.log("Navigated to login page");
    
        // Click login without entering credentials
        await page.getByRole('button', { name: 'Log in' }).click();
        console.log("Clicked login button with empty fields");

        // Validate error messages
        await expect(page.getByText('Email or Phone number is')).toBeVisible();
        await expect(page.getByText('Password length must be')).toBeVisible();
        console.log("Validation messages displayed correctly");
    });

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

});
