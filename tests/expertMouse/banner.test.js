const {test, expect} = require('../../electron/testbase.js'); 
const path = require('path');

test('banner info verify', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  const exploreIt_1st = 'https://www.kensington.com/solutions/product-category/trackballs/';
  const exploreIt_2nd = 'https://www.kensington.com/solutions/product-category/why-kensington-for-docking/';
  await expect.soft(page.getByRole('img', { name: 'bottom ad', exact: true })).toBeVisible();
  await expect.soft(page.getByRole('img', { name: 'bottom ad box' })).toBeVisible();
  await page.getByRole('img', { name: 'toggle banner button' }).click(); // collapse
  // await expect.soft(page.getByRole('img', { name: 'bottom ad', exact: true })).toHaveCSS('display', 'none');
  // await expect.soft(page.getByRole('img', { name: 'bottom ad box' })).toBeHidden();  
  await page.getByRole('img', { name: 'toggle banner button' }).click(); // expand

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});