const { test, expect } = require('../electron/testbase.js');

test('test', async ({ page }) => {
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await expect(page.getByLabel('Welcome', { exact: true }).locator('a')).toContainText('Welcome');
  await page.getByText('Welcome', { exact: true }).click();
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await expect(page.getByLabel('Welcome', { exact: true }).locator('a')).toContainText('Welcome');
});
