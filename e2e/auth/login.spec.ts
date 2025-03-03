import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';
import { loginUser } from '../utils/auth-helper';

test.describe('Login Tests', () => {

    test('Negative Test - Invalid Credentials', async ({ page }) => {
        const { email, password } = testData.invalidLogin;

        // Navigate to login page
        await page.goto('https://admin.dev.myqbits.com/');

        // Enter invalid credentials
        await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(email);
        await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);

        // Click login button
        await page.getByRole('button', { name: 'Log in' }).click();

        // Validate error message
        await expect(page.getByRole('alert')).toContainText('User not found');
    });

    test('Blank Email & Password Validation Test', async ({ page }) => {
        await page.goto('https://admin.dev.myqbits.com');

        // Click login without entering credentials
        await page.getByRole('button', { name: 'Log in' }).click();

        // Validate error messages
        await expect(page.getByText('Email or Phone number is')).toBeVisible();
        await expect(page.getByText('Password length must be')).toBeVisible();
    });

    test('Positive Test - Valid Login', async ({ page }) => {
        // Use our helper function
        await loginUser(page);
    });
});
test.describe('Login Tests1', () => {

    test('Negative Test - Invalid Credentials', async ({ page }) => {
        const { email, password } = testData.invalidLogin;

        // Navigate to login page
        await page.goto('https://admin.dev.myqbits.com/');

        // Enter invalid credentials
        await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(email);
        await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);

        // Click login button
        await page.getByRole('button', { name: 'Log in' }).click();

        // Validate error message
        await expect(page.getByRole('alert')).toContainText('User not found');
    });

    test('Blank Email & Password Validation Test', async ({ page }) => {
        await page.goto('https://admin.dev.myqbits.com');

        // Click login without entering credentials
        await page.getByRole('button', { name: 'Log in' }).click();

        // Validate error messages
        await expect(page.getByText('Email or Phone number is')).toBeVisible();
        await expect(page.getByText('Password length must be')).toBeVisible();
    });

    test('Positive Test - Valid Login', async ({ page }) => {
        // Use our helper function
        await loginUser(page);
    });
});
