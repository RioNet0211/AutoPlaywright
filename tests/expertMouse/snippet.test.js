const {test, expect} = require('../../electron/testbase.js');

test('test', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'hover12', exact: true }).click();
  await page.getByRole('button', { name: 'Snippet' }).click();
  await page.getByText('Snippet3').click();
  await page.getByRole('textbox', { name: 'Enter label for this Snippet' }).click();
  await page.getByRole('textbox', { name: 'Enter label for this Snippet' }).fill('Hello Day');
  await page.getByRole('textbox', { name: 'Enter text and/or emojis to' }).click();
  await page.getByRole('textbox', { name: 'Enter text and/or emojis to' }).fill('hello day');
//   await page.getByTitle('hello day', { exact: true }).locator('span').first().click();
//   await page.getByText('😄').click();
  await expect(page.locator('#root')).toContainText('Hello Day');
  await expect(page.locator('#root')).toContainText('hello day');
  await page.getByRole('button', { name: 'Done' }).click();
});