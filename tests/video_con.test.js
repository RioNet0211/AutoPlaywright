const { test, expect } = require('../electron/testbase.js');

test('[Profile1][Every Application] verify the function list from video conference', async ({ page }) => {
  await page.getByRole('img').first().click();
  await expect(page.locator('#root')).toContainText('Expert Mouse™ TB800 EQ Trackball');
  await expect(page.getByRole('button', { name: 'BUTTONS' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'POINTER' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'SCROLLING' })).toBeVisible();
  await page.locator('div').filter({ hasText: /^Expert Mouse™ TB800 EQ TrackballApplicationAll ApplicationsApplication$/ }).locator('button').click();
  await page.getByText('Expert Mouse™ TB800 EQ').click();
  await page.getByRole('button', { name: 'hover4' }).click();
  await page.getByRole('button', { name: 'Video Conferencing' }).click();
  await expect(page.getByText('Mute/ Unmute')).toBeVisible();
  await expect(page.getByText('Camera On/ Camera Off')).toBeVisible();
  await expect(page.getByText('Share Content/ Stop Sharing')).toBeVisible();
  await expect(page.getByText('End Meeting')).toBeVisible();
  await expect(page.getByText('Screen Capture')).toBeVisible();
  
  await expect(page.getByText('Answer Call')).toBeVisible();
  await expect(page.getByText('Decline Call')).toBeVisible();
});