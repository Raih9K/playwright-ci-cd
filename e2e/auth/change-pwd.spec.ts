import { test, expect } from '@playwright/test';
import { loginUser } from '../utils/auth-helper';
import testData from '../test-data/testData.json';

test.describe('Change Password Tests', () => {
    test.beforeEach(async ({ page }) => {
        await loginUser(page);
    });

    test('Change Password - Positive Case', async ({ page }) => {
        // TODO: Implement change password test
        // This is a placeholder for future implementation
        await page.goto('https://admin.dev.myqbits.com/profile');
    });
});