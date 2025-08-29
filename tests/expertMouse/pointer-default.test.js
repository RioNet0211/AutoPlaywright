const {test, expect} = require('../../electron/testbase.js');
const path = require('path');


test('[Profile 1][Every Application] verify default setting on pointer', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'POINTER' }).click();
  await expect.soft(page.getByRole('button', { name: 'Pointer Speed' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Sensitivity' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Movement' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect.soft(page.locator('#root')).toContainText('Default Speed: 5');

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});