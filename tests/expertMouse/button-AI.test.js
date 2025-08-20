const {test, expect} = require('../../electron/testbase.js');


test('Check AI options visible', async ({ page }) => {
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'hover4' }).click();
  await page.getByRole('button', { name: 'AI Konnection' }).click();
  await expect.soft(page.getByRole('heading')).toContainText('AI Konnection');
  await expect.soft(page.getByRole('radiogroup')).toContainText('OpenAI');
  await expect.soft(page.getByRole('radiogroup')).toContainText('Google');
  await expect.soft(page.getByRole('radiogroup')).toContainText('Microsoft');
});