
const { test, expect } = require('../electron/testbase.js');

test('[Profile 1][Every Application] scroll default after reset-all', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'SCROLLING' }).click();
  await page.getByText('Reset All').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await expect(page.getByLabel('hover1048576').locator('span')).toContainText('Vertical Scroll');
  await expect(page.getByLabel('hover512').locator('span')).toContainText('Zoom In/Out');
  await expect(page.getByLabel('hover262144').locator('span')).toContainText('Horizontal Scroll');
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
});