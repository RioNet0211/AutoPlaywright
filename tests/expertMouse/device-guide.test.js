const {test, expect} = require('../../electron/testbase.js');



test('verify device setting guide ', async ({ page }) => {
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.locator('div').filter({ hasText: /^Easy ModeAdvance ModeReset All$/ }).locator('svg').first().click();
  await page.getByRole('button', { name: 'Launch' }).click();
  await expect.soft(page.getByText('Skip guide')).toBeVisible();
  await expect.soft(page.locator('img').nth(2)).toBeVisible();
  await expect.soft(page.getByText('Front View and Side View', { exact: true })).toBeVisible();
  await expect.soft(page.getByText('Seamlessly switch between')).toBeVisible();
  await page.locator('.swiper-button-next').click();
  await expect.soft(page.getByText('Skip guide')).toBeVisible();
  await expect.soft(page.locator('img').nth(3)).toBeVisible();
  await expect.soft(page.getByText('Easy Mode and Advanced Mode', { exact: true })).toBeVisible();
  await expect.soft(page.getByText('Switch between Easy Mode and')).toBeVisible();
  await page.locator('.swiper-button-next').click();
  await expect.soft(page.locator('img').nth(4)).toBeVisible();
  await expect.soft(page.getByRole('heading', { name: 'Device Settings' }).locator('div')).toBeVisible();
  await expect.soft(page.getByText('Restore the device\'s settings')).toBeVisible();
  await expect.soft(page.getByRole('button', { name: 'Get Started!' })).toBeVisible();
  await page.getByRole('button', { name: 'Get Started!' }).click();
  await page.getByRole('button', { name: 'Launch' }).click();
  await page.getByText('Skip guide').click();
  await expect.soft(page.getByText('Skip guide')).toHaveCount(0);
});
