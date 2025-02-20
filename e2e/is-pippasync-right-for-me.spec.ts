import { test, expect } from '@playwright/test';

test('Page Redirect', async ({ page }) => {
    await page.goto('https://lms.boostonamazon.com/business-query');
    await expect(page.locator('#root')).toContainText('Is PippaSync Right For Me?');
    await page.locator('.w-4').first().click();
    await page.locator('div').filter({ hasText: /^6 or more$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^Shopify$/ }).locator('div').click();
    await page.getByRole('textbox', { name: 'Mentions Other Sales channel' }).click();
    await page.getByRole('textbox', { name: 'Mentions Other Sales channel' }).fill('Test');
    await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
    await expect(page.locator('#root')).toContainText('Do you manage inventory across multiple warehouses or locations?');
    await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^Outsourced$/ }).click();
    await page.locator('.mt-\\[103px\\] > .bg-\\[\\#8DDC50\\] > img').click();
    await page.screenshot({ path: 'screenshots/step-2.png' });

    await page.locator('div').filter({ hasText: /^Manually on each platform$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^Continue$/ }).nth(1).click();
    await page.screenshot({ path: 'screenshots/step-3.png' });
    await page.locator('div').filter({ hasText: /^Inventory sync$/ }).locator('div').click();
    await page.getByRole('textbox', { name: 'Mentions other task name' }).click();
    await page.getByRole('textbox', { name: 'Mentions other task name' }).fill('testttt');
    await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
    await page.getByText('Continue').click();
    await page.screenshot({ path: 'screenshots/step-3.png' });

    await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
    await page.getByRole('textbox', { name: 'Write your primary challenges' }).click();
    await page.getByRole('textbox', { name: 'Write your primary challenges' }).click();
    await page.getByRole('textbox', { name: 'Write your primary challenges' }).fill('sellinggg');
    await page.screenshot({path: 'screenshots/step-4.png'});

    await page.locator('div').filter({ hasText: /^Under \$1000$/ }).locator('div').click();
    await page.locator('div').filter({ hasText: /^Ebay$/ }).locator('div').click();
    
    await page.locator('div').filter({ hasText: /^Ebay$/ }).locator('div').first().click();
    await page.getByRole('textbox', { name: 'Mentions Other Sales channel' }).click();
    await page.getByRole('textbox', { name: 'Mentions Other Sales channel' }).fill('test');
    
    
    await page.locator('div').filter({ hasText: /^Yes$/ }).locator('div').click();
    await page.getByRole('textbox', { name: 'Mentions other software name' }).click();
    await page.getByRole('textbox', { name: 'Mentions other software name' }).fill('abcsd');
    await page.locator('div').filter({ hasText: /^Ease of use$/ }).locator('div').click();
    
    await page.screenshot({path: 'screenshots/step-6.png'});


    await page.getByText('PippaSync is a great fit for').click();
    await expect(page.locator('#root')).toContainText('PippaSync is a great fit for your business!');
    await page.getByRole('button', { name: 'Get one month free' }).click();
    
    await page.screenshot({path: 'screenshots/step-7.png'});

});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
// test('home page', async ({ page }) => {});
