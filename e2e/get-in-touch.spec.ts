import { test, expect } from '@playwright/test';

test('should work', async ({ page }) => {
    await page.goto('https://lms.boostonamazon.com/');
    await page.getByRole('link', { name: 'Contact Support' }).click();
    await page.goto('https://lms.boostonamazon.com/get-in-touch');
    await expect(page.locator('h1')).toContainText('We’d Love to Hear From You!');
    await page.getByRole('textbox', { name: 'First Name' }).first().click();
    await page.getByRole('textbox', { name: 'First Name' }).first().fill('Raihan');
    await page.getByRole('textbox', { name: 'First Name' }).nth(1).click();
    await page.getByRole('textbox', { name: 'First Name' }).nth(1).fill('Khan');
    await page.getByRole('textbox', { name: 'Email', exact: true }).click();
    await page.getByRole('textbox', { name: 'Email', exact: true }).fill('raihankhan.dev@gmail.com');
    await page.getByRole('textbox', { name: 'Phone Number' }).click();
    await page.getByRole('textbox', { name: 'Phone Number' }).fill('01961930719');
    await page.getByRole('textbox', { name: 'Company Name' }).click();
    await page.getByRole('textbox', { name: 'Company Name' }).fill('QA Ventures');
    await page.locator('div').filter({ hasText: /^Order Volume0 - 100100 - 500500 - 1000$/ }).getByRole('combobox').selectOption('low');
    await page.getByRole('combobox').nth(1).selectOption('low');
    await page.getByRole('textbox', { name: 'Other Reason' }).click();
    await page.getByRole('textbox', { name: 'Other Reason' }).fill('##');
    await page.getByRole('combobox').nth(2).selectOption('low');
    await page.getByRole('button', { name: 'Submit' }).click();

    await page.locator('.w-\\[120px\\] > img').click();
});


