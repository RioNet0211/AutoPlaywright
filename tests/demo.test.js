import { test, expect } from '../electron/testbase.js';

test('demo', async ({ page }) => {
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'hover4' }).click();
  await expect(page.locator('#root')).toContainText('Left Drag');
  await expect(page.locator('#root')).toContainText('Right Drag');
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
});