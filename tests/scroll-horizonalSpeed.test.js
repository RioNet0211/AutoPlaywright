const {test, expect} = require('../electron/testbase.js');

test('[Profile][Every Application] verify horizonal speed set', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'SCROLLING' }).click();
  await page.getByRole('button', { name: 'hover262144' }).click();
  await page.getByText('Horizontal Scroll').nth(1).click();
  await page.getByRole('button', { name: 'Srolling' }).click();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#root')).toContainText('Scrolling Speed: 1');
  await page.locator('span:nth-child(5)').click();
  await expect(page.locator('#root')).toMatchAriaSnapshot(`- slider: "3"`);
  await expect(page.locator('#root')).toContainText('Scrolling Speed: 3');
  await page.getByRole('button', { name: 'Reset' }).click();
});