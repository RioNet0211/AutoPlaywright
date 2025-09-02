const {test, expect} = require('../../electron/testbase.js');
const {elements: elements} = require('./_base-buttonTestIds.js');
const path = require('path');

test('[Profile 1][Every Application] verify functions of mouse buttons visible', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByText("Advance Mode").click();

  for (const _button of elements.button) {
    // await page.getByTestId(_testId).click();
    await page.getByRole('button', {name: _button.name, exact:true}).click();
    await page.getByRole('button', {name:'Keyboard and Mouse'}).click();
    await expect(page.locator('#root')).toContainText('Left Drag');
    await expect(page.locator('#root')).toContainText('Right Drag');
    await expect(page.locator('#root')).toContainText('Middle Drag');
    await page.mouse.wheel(0, 100);
    await expect(page.locator('#root')).toContainText('Double Left Click');
    await expect(page.locator('#root')).toContainText('Double Right Click');
    await expect(page.locator('#root')).toContainText('Double Middle Click');
    await expect(page.locator('#root')).toContainText('Triple Left Click');
    await page.mouse.wheel(0, 100);
    await expect(page.locator('#root')).toContainText('Back');
    await expect(page.locator('#root')).toContainText('Forward');
    await expect(page.locator('#root')).toContainText('Click to Apply');
    await expect(page.locator('#root')).toContainText('Hold to Apply');
    
  }
  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});