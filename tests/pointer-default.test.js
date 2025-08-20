const {test, expect, deviceInfo} = require('../electron/testbase.js');


test('[Profile 1][Every Application] verify default setting on pointer', async ({ page }) => {
  await page.getByText(deviceInfo.name).click();
  await page.getByRole('button', { name: 'POINTER' }).click();
  await expect.soft(page.getByRole('button', { name: 'Pointer Speed' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Sensitivity' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Movement' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect.soft(page.locator('#root')).toContainText('Default Speed: 5');
});