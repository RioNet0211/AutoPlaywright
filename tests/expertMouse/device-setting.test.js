const {test, expect} = require('../../electron/testbase.js');
const path = require('path');


test('verify device setting info ', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.locator('div').filter({ hasText: /^Easy ModeAdvance ModeReset All$/ }).locator('svg').first().click();
  await expect.soft(page.locator('#root')).toContainText('SN:');
  await expect.soft(page.locator('div').filter({hasText: /^[0-9]{10}$/})).toHaveCount(1);
  await expect.soft(page.locator('#root')).toContainText('SKU');
  await expect.soft(page.locator('div').filter({hasText: /^K[0-9]{5}$/})).toHaveCount(1); // I don't know why the element text
  await expect.soft(page.getByRole('button', { name: 'Launch' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Reset' })).toBeVisible();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});
