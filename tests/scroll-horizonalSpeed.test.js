const {test, expect, deviceInfo} = require('../electron/testbase.js');


test('[Profile][Every Application] verify horizonal speed set', async ({ page }) => {
  await page.getByText(deviceInfo.name).click();
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
});