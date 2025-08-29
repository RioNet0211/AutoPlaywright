const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('[Profile 1][Every Application] verify scroll productivity', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'SCROLLING' }).click();
  await page.getByText('Reset All').click();
  await page.getByRole('button', { name: 'Okay' }).click();
  await page.getByRole('button', { name: 'hover262144' }).click();
  
  await page.getByRole('button', { name: 'Productivity' }).click();
  await expect.soft(page.locator('#root')).toContainText('Forward/Back');
  await page.getByRole('radio', { name: 'Forward/Back' }).check();
  await expect.soft(page.getByRole('radio', { name: 'Forward/Back' })).toBeChecked();
  await page.mouse.wheel(0, 10);
  
  await expect.soft(page.locator('#root')).toContainText('Navigation Between Tabs');
  await page.getByRole('radio', { name: 'Navigation Between Tabs' }).check();
  await expect.soft(page.getByRole('radio', { name: 'Navigation Between Tabs' })).toBeChecked();
  await page.mouse.wheel(0, 10);
  
  await expect.soft(page.locator('#root')).toContainText('Increase/Decrease Brightness');
  await page.getByRole('radio', { name: 'Increase/Decrease Brightness' }).check();
  await expect.soft(page.getByRole('radio', { name: 'Increase/Decrease Brightness' })).toBeChecked();
  await page.mouse.wheel(0, 10);
  
  await expect.soft(page.locator('#root')).toContainText('Navigation Between Apps');
  await page.getByRole('radio', { name: 'Navigation Between Apps' }).check();
  await expect.soft(page.getByRole('radio', { name: 'Navigation Between Apps' })).toBeChecked();
  await page.mouse.wheel(0, 10);
  
  await expect.soft(page.locator('#root')).toContainText('Switch Between Desktops');  
  await page.getByRole('radio', { name: 'Switch Between Desktops' }).check();
  await expect.soft(page.getByRole('radio', { name: 'Switch Between Desktops' })).toBeChecked();
  await page.mouse.wheel(0, 10);

  await page.getByRole('button', { name: 'Reset' }).click();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});