import { test, expect } from '@playwright/test';
// import testData from 'test-data/testData';
test.describe.serial('SKD Verification', () => {
  test('Verify SKD', async ({ page }) => {
    await page.getByRole('link', { name: 'Skds' }).click();
    await page.locator('a').filter({ hasText: 'SKD List' }).click();
    const verifySKD = async (rowName) => {
      const row = page.getByRole('row', { name: rowName });
      if (await row.isVisible()) {
        await row.getByRole('button').first().click();
        await page.getByRole('textbox', { name: 'Remark' }).fill('tested');
        await page.locator('form').getByRole('button', { name: 'Verify' }).click();
      } else {
        console.log(`⚠️ Row "${rowName}" not found!`);
        await page.screenshot({ path: `screenshots/${rowName.replace(/\s/g, '_')}.png`, fullPage: true });
      }
    };
    // 🔥 Calling function for specific SKD items
    await verifySKD('1 Test SKD Test SKD Type true');
  });
});