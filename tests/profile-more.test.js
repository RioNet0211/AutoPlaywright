const { test, expect } = require('../electron/testbase.js');

test('[Profile][Every Application] basic profile options for new, rename, delete', async ({ page }) => {
  await page.getByRole('button').nth(1).click();
  await expect(page.getByRole('menu')).toContainText('Rename');
  await expect(page.getByRole('menu')).toContainText('Add a profile');
  await expect(page.getByRole('menu')).toContainText('Duplicate');
  await expect(page.getByRole('menu')).toContainText('Reset to defaults');
  await page.locator('.MuiBackdrop-root').click();
});