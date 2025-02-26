import { Page, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

/**
 * Helper function to log in a user
 * @param page - Playwright page object
 * @param email - User email (defaults to valid login from testData)
 * @param password - User password (defaults to valid login from testData)
 * @returns Promise that resolves when login is complete
 */

export async function loginUser(
    page: Page,
    email: string = testData.validLogin.email,
    password: string = testData.validLogin.password,
    expectSuccess: boolean = true
): Promise<void> {
    // Navigate to login page
    await page.goto('https://admin.dev.myqbits.com/');

    // Enter credentials
    await page.getByRole('textbox', { name: 'Enter your email or phone' }).fill(email);
    await page.getByRole('textbox', { name: 'Enter your password' }).fill(password);

    // Click login button
    await page.getByRole('button', { name: 'Log in' }).click();

    // Verify login status if expected to succeed
    if (expectSuccess) {
        await expect(page.getByRole('alert')).toContainText("You're successfully logged in!");
    }
}
