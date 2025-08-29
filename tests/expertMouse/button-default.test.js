const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('[Profile1][Every Application] button default after reset-all', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
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
  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});