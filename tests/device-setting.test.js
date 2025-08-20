const {test, expect, deviceInfo} = require('../electron/testbase.js');



test('verify device setting info ', async ({ page }) => {
  await page.getByText(deviceInfo.name).click();
  await page.locator('div').filter({ hasText: /^Easy ModeAdvance ModeReset All$/ }).locator('svg').first().click();
  await expect.soft(page.locator('#root')).toContainText('SN:');
  await expect.soft(page.locator('div').filter({hasText: /^[0-9]{10}$/})).toHaveCount(1);
  await expect.soft(page.locator('#root')).toContainText('SKU');
  await expect.soft(page.locator('div').filter({hasText: /^K[0-9]{5}$/})).toHaveCount(1); // I don't know why the element text
  await expect.soft(page.getByRole('button', { name: 'Launch' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Reset' })).toBeVisible();
});
