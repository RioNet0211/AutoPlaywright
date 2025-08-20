const {test, expect} = require('../electron/testbase.js');

test('verify productivity buttons visible', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'hover8' }).click();
  await page.getByRole('button', { name: 'Productivity' }).click();

  const productivities = [
    'Undo',
    'Redo',
    'Cut',
    'Copy',
    'Select All',
    'Find',
    'Open Application',
    'Open Website',
    'Open Folder',
    'Open File',
    'Back',
    'Forward',
    'Stop',
    'Refresh',
    'Maximize Window',
    'Show Next Window',
    'Minimize All',
    'Show Desktop',

    'Snap Window Right',
    'Snap Window Left',
  ]

  for(let i=0 ; i<productivities.length ; i++){
    await expect(page.getByRole('radio', {name: productivities[i]})).toBeVisible();
    await expect(page.locator('#root')).toContainText(productivities[i]);
    await page.getByRole('radio', {name: productivities[i]}).check();
    await expect(page.getByRole('radio', {name: productivities[i]})).toBeChecked();
    await page.mouse.wheel(0, 10);
  }
  await page.getByRole('button', {name:'Reset'}).click();
});