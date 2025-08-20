
import { test, expect } from '../electron/testbase.js';

test('[Profile 1][Every Application] verify default setting on pointer', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'POINTER' }).click();
  await expect(page.getByRole('button', { name: 'Pointer Speed' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Sensitivity' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Movement' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('#root')).toContainText('Default Speed: 5');
});