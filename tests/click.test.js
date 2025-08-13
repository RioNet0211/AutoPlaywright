const { test, expect } = require('../electron/testbase.js');

test('test', async ({ page }) => {
  await page.getByText('My Gear').click();
  await expect(page.locator('#root')).toContainText('My Gear');
  await page.getByRole('img', { name: 'devices' }).click();
  await page.getByRole('img', { name: 'Pro Fit™ Ergo Vertical Mouse' }).click();
  await page.getByRole('img', { name: 'Pro Fit™ Ergo Vertical Mouse' }).click();
  await page.getByRole('button', { name: ' Connect via USB Dongle' }).click();
  await page.locator('button').click();
  await page.getByRole('button').click();
});