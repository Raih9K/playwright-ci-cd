import { test, expect } from '@playwright/test';

test('home page', async ({ page }) => {
  // Set a viewport size for better consistency
  await page.setViewportSize({ width: 1920, height: 1080 });

  // Go to Homepage
  await page.goto('https://lms.boostonamazon.com/');
  await page.screenshot({ path: 'screenshots/homepage.png' });  // Capture screenshot for homepage
  
  // Navigate through various sections
  const pippasyncLogoLink = page.getByRole('link', { name: 'Pippasync Logo' });
  const loginLink = page.getByRole('link', { name: 'Login' });
  const rightForMeLink = page.getByRole('link', { name: 'Is PippaSync Right For Me?' });

  // Click on the logo, then login link, and navigate through 'Right For Me?' page
  await pippasyncLogoLink.click();
  await loginLink.click();
  await rightForMeLink.click();
  
  await page.screenshot({ path: 'screenshots/login-pippasync.png' });  // Capture screenshot for Login/RightForMe page
  
  // Navigate back to homepage
  await pippasyncLogoLink.click();
  await page.screenshot({ path: 'screenshots/back-to-home.png' });

  // Clicking different sections for testing various actions
  await page.getByText('One Platform to Sync, Sell,').click();
  await page.getByText('No more errors! Experience').click();
  await page.locator('div:nth-child(6) > .h-auto').click();
  await page.locator('div:nth-child(10) > .h-auto').click();

  // Test more options
  await page.getByText('Self Onboarding').first().click();
  await page.getByText('Integration', { exact: true }).first().click();
  await page.getByText('Inventory', { exact: true }).first().click();
  await page.getByText('Listing', { exact: true }).click();
  await page.getByText('Syncing').first().click();
  await page.getByText('Order', { exact: true }).first().click();
  await page.getByText('Warehouse', { exact: true }).first().click();

  // Screenshot after clicking different sections
  await page.screenshot({ path: 'screenshots/after-clicks.png' });

  // Click "Get one month free" button
  await page.getByRole('button', { name: 'Get one month free' }).nth(1).click();
  await page.waitForTimeout(1000);  // Wait for any page transitions
  await page.screenshot({ path: 'screenshots/free-trial.png' });

  // FAQ and subscribe newsletter interactions
  await page.getByText('Frequently Asked Questions').click();
  await page.screenshot({ path: 'screenshots/faq-section.png' });

  // Subscribe to newsletter section
  await page.getByRole('heading', { name: 'Subscribe our newsletter' }).click();
  await page.getByText('Stay updated with the latest').click();
  await page.screenshot({ path: 'screenshots/subscribe-newsletter.png' });
});
