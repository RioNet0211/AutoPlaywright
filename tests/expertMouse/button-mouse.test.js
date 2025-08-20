const {test, expect} = require('../../electron/testbase.js');

test('[Profile 1][Every Application] verify functions of mouse buttons visible', async ({ page }) => {
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'hover4' }).click();
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
});