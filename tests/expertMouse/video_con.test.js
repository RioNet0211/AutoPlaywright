const {test, expect} = require('../../electron/testbase.js');


test('[Profile1][Every Application] verify the function list from video conference', async ({ page }) => {
  const _slowMo = 150;
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await expect(page.locator('#root')).toContainText('Expert Mouse™ TB800 EQ Trackball');
  await expect(page.getByRole('button', { name: 'BUTTONS' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'POINTER' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'SCROLLING' })).toBeVisible();
  await page.getByText("Expert Mouse™ TB800 EQ").click();
  await page.getByRole('button', { name: 'hover4' }).click();
  await page.getByRole('button', { name: 'Video Conferencing' }).click();
  await expect(page.getByText('Mute/ Unmute')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Mute/ Unmute'}).check();
  await expect(page.getByText('Camera On/ Camera Off')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Camera On/ Camera Off'}).check();
  await expect(page.getByText('Share Content/ Stop Sharing')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Share Content/ Stop Sharing'}).check();
  await expect(page.getByText('End Meeting')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'End Meeting'}).check();
  await expect(page.getByText('Screen Capture')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Screen Capture'}).check();
  
  await expect(page.getByText('Answer Call')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Answer Call'}).check();
  await expect(page.getByText('Decline Call')).toBeVisible();
  await page.waitForTimeout(_slowMo); await page.getByRole('radio', {name: 'Decline Call'}).check();
});