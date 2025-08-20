const {test, expect, deviceInfo} = require('../electron/testbase.js');

test('[Profile1][Every Application] button default after reset-all', async ({ page }) => {
  await page.getByText(deviceInfo.name).click();
  await page.getByText('Reset All').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await expect.soft(page.getByLabel('hover64').locator('span')).toContainText('Play/Pause');
  await expect.soft(page.getByLabel('hover128').locator('span')).toContainText('Volume Down');
  await expect.soft(page.getByLabel('hover256').locator('span')).toContainText('Volume Up');
  await expect.soft(page.getByLabel('hover2', { exact: true }).locator('span')).toContainText('Right Click');
  await expect.soft(page.getByLabel('hover8').locator('span')).toContainText('Back');
  await expect.soft(page.getByLabel('hover32').locator('span')).toContainText('Forward');
  await expect.soft(page.getByLabel('hover4').locator('span')).toContainText('Middle Click');
  await expect.soft(page.getByLabel('hover1', { exact: true }).locator('span')).toContainText('Left Click');
  await page.getByText('BUTTONSPOINTERSCROLLINGLeft').click();
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
});