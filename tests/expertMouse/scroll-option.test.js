const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('[Profile 1][Every Application] Scroll - verify all functionalities visible & correctness', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'SCROLLING' }).click();
  await page.getByRole('button', { name: 'hover262144' }).click();
  await expect.soft(page.getByRole('button', { name: 'Keyboard and Mouse' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Productivity' })).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Srolling' })).toBeVisible();
  await page.getByRole('button', { name: 'General' }).click();
  await expect.soft(page.locator('#root')).toContainText('Volume Up/Down');
  await expect.soft(page.locator('#root')).toContainText('Next/Previous Track');
  await expect.soft(page.locator('#root')).toContainText('Zoom In/Out');
  await expect.soft(page.locator('#root')).toContainText('Horizontal Scroll');
  await expect.soft(page.locator('#root')).toContainText('Vertical Scroll');
  await page.getByRole('button', { name: 'Keyboard and Mouse' }).click();
  await expect.soft(page.getByRole('radiogroup')).toContainText('Keyboard Shortcut');
  await page.getByRole('button', { name: 'Productivity' }).click();
  await expect.soft(page.locator('#root')).toContainText('Forward/Back');
  await expect.soft(page.locator('#root')).toContainText('Increase/Decrease Brightness');
  await expect.soft(page.locator('#root')).toContainText('Navigation Between Tabs');
  await expect.soft(page.locator('#root')).toContainText('Navigation Between Apps');
  await expect.soft(page.locator('#root')).toContainText('Switch Between Desktops');

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});