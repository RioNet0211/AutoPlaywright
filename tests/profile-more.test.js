const {test, expect, deviceInfo} = require('../electron/testbase.js');


test('[Profile][Every Application] basic profile options for new, rename, delete', async ({ page }) => {
await page.waitForTimeout(2*1000);
  await page.getByRole('button').nth(1).click();
  await expect.soft(page.getByRole('menu')).toContainText('Rename');
  await expect.soft(page.getByRole('menu')).toContainText('Add a profile');
  await expect.soft(page.getByRole('menu')).toContainText('Duplicate');
  await expect.soft(page.getByRole('menu')).toContainText('Reset to defaults');
  await page.locator('.MuiBackdrop-root').click();
});