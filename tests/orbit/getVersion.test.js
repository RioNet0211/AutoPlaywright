const {test, expect} = require('../../electron/testbase.js');


test('get version', async ({ page }) => {
  await page.getByLabel('Application Settings').locator('svg').click();
  await expect(page.getByText('version', { exact: true })).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(2).click();
});