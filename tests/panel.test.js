const { test, expect } = require('../electron/testbase.js');

// verify the setting panel 
test('verify the setting panel', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await expect(page.locator('#root')).toContainText('BUTTONS');
  await expect(page.locator('#root')).toContainText('POINTER');
  await expect(page.locator('#root')).toContainText('SCROLLING');
  await expect(page.locator('#root')).toContainText('Expert Mouse™ TB800 EQ Trackball');
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
});