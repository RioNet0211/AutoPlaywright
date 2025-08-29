const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('[Profile][Every Application] verify horizonal speed set', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'SCROLLING' }).click();
  await page.getByRole('button', { name: 'hover262144' }).click();
  await page.getByText('Horizontal Scroll').nth(1).click();
  await page.getByRole('button', { name: 'Srolling' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect.soft(page.locator('#root')).toContainText('Scrolling Speed: 1');
  await page.locator('span:nth-child(5)').click();
  await expect.soft(page.locator('#root')).toMatchAriaSnapshot(`- slider: "3"`);
  await expect.soft(page.locator('#root')).toContainText('Scrolling Speed: 3');
  await page.getByRole('button', { name: 'Reset' }).click();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});