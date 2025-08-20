const {test, expect, deviceInfo} = require('../electron/testbase.js');


test('[Profile1][Every Application] advance mode button', async ({ page }) => {
  await page.getByText(deviceInfo.name).click();
  await page.getByLabel('Enables and configures individual and combo buttons.').locator('path').click();
  await expect.soft(page.getByText('Enables and configures')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
});