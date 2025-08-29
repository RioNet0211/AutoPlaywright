const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('get version', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByLabel('Application Settings').locator('svg').click();
  await expect(page.getByText('version', { exact: true })).toBeVisible();
  await page.getByRole('button').filter({ hasText: /^$/ }).last().click();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});