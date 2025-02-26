import { test, expect } from '@playwright/test';
import testData from '../test-data/testData.json';

test.describe.serial('SKD Verification', () => {
  test.beforeEach(async ({ page }) => {
    // await page.goto('https://admin.dev.myqbits.com/');
    await page.goto(testData.testServer); //redirect login page

    const emailField = page.getByRole("textbox", {
      name: "Enter your email or phone",
    });
    const passwordField = page.getByRole("textbox", {
      name: "Enter your password",
    });
    const loginButton = page.getByRole("button", { name: "Log in" });

    if ((await emailField.isVisible()) && (await passwordField.isVisible())) {
      await emailField.fill(testData.validLogin.email);
      await passwordField.fill(testData.validLogin.password);
      await loginButton.click();
    } else {
      console.log("Login fields are not visible.");
      await page.screenshot({ path: "error_login_fields.png" });
    }

    await expect(page.getByRole("alert")).toContainText(
      "You're successfully logged in!"
    );
  });
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

