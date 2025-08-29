const {test, expect} = require('../../electron/testbase.js');

test('[Profile 1][Every Application] verify functions of mouse buttons visible', async ({ page }) => {
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByText("Advance Mode").click();
  const buttonTestIds = [
    'trackball-8168-config-button-2-enabled',
    'trackball-8168-config-button-5-enabled',
    'trackball-8168-config-button-10-enabled',
    'trackball-8168-config-button-12-enabled',
    'trackball-8168-config-button-3-enabled',
    'trackball-8168-config-button-4-enabled',
    'trackball-8168-config-button-32-enabled',
    'trackball-8168-config-button-64-enabled',
    'trackball-8168-config-button-128-enabled',
    'trackball-8168-config-button-256-enabled',
    'trackball-8168-config-button-8-enabled'
  ];

  for (const testId of buttonTestIds) {
    await page.getByTestId(testId).click();
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
});