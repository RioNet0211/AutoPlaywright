const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('[Profile1][Every Application] advance mode button', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByLabel('Enables and configures individual and combo buttons.').locator('path').click();
  await expect.soft(page.getByText('Enables and configures')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});