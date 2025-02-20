import { test, expect } from '@playwright/test';
test('should work', async ({ page }) => {
await page.goto('https://lms.boostonamazon.com/blogs');
await expect(page.locator('#root')).toContainText('Blogs that Keep you ahead');
await page.getByRole('textbox', { name: 'Search for videos...' }).click();
await page.getByRole('heading', { name: 'Your Knowledge Hub' }).click();
await page.locator('.max-w-md > .absolute').first().click();
await expect(page.locator('h2')).toContainText('Subscribe our newsletter');
await page.getByRole('button').filter({ hasText: /^$/ }).click();
});