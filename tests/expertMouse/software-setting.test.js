



// https://www.kensington.com/resources/support/
// https://kensington.formstack.com/forms/feedback


const {test, expect} = require('../../electron/testbase.js');
const path = require('path');

test('software setting', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByLabel('Application Settings').locator('svg').click();
  
  await page.getByText('ENGLISH').click();
  await expect.soft(page.getByRole('listbox')).toContainText('ENGLISH');
  await expect.soft(page.getByRole('listbox')).toContainText('DEUTSCH');
  await expect.soft(page.getByRole('listbox')).toContainText('FRANÇAIS');
  await expect.soft(page.getByRole('listbox')).toContainText('NEDERLANDS');
  await expect.soft(page.getByRole('listbox')).toContainText('ESPAÑOL');
  await expect.soft(page.getByRole('listbox')).toContainText('ITALIANO');
  await expect.soft(page.getByRole('listbox')).toContainText('PORTUGUÊS');
  await expect.soft(page.getByRole('listbox')).toContainText('DANSK');
  await expect.soft(page.getByRole('listbox')).toContainText('NORSK');
  await expect.soft(page.getByRole('listbox')).toContainText('SVENSKA');
  await expect.soft(page.getByRole('listbox')).toContainText('SUOMI');
  await expect.soft(page.getByRole('listbox')).toContainText('EESTI KEEL');
  await page.mouse.wheel(0, 15);
  await page.locator('#menu- div').first().click();
  
  await page.getByText('Follow OS Mode').click();
  await expect.soft(page.getByRole('listbox')).toContainText('Follow OS Mode');
  await expect.soft(page.getByRole('listbox')).toContainText('Light Mode');
  await expect.soft(page.getByRole('listbox')).toContainText('Dark Mode');
  await page.mouse.wheel(0, 15);
  
  await page.locator('#menu- div').first().click();
  await expect.soft(page.getByRole('list')).toContainText('Choose Language');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Color Theme');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Menu Bar Icon');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Backup and restore your settings');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('local');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Backup to local');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Restore from local');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('cloud');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Backup to cloud');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Restore from cloud');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Notifications');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Pause all notifications');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Microphone mute/unmute');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Profile Switching');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Support');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Product support');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Feedback');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Software manual');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Need More Help?');
  await page.mouse.wheel(0, 5);
  await expect.soft(page.locator('label')).toContainText('Debug mode');
//   await page.getByRole('checkbox').first().uncheck();
//   await page.getByRole('checkbox').first().check();
//   await page.getByRole('button', { name: 'Backup', exact: true }).click();
//   await page.getByRole('button', { name: 'Restore', exact: true }).click();
  await page.getByRole('checkbox').nth(1).check();
  await page.getByRole('checkbox').nth(1).uncheck();
  await page.getByRole('checkbox').nth(2).uncheck();
  await page.getByRole('checkbox').nth(2).check();
  await page.getByRole('checkbox').nth(3).uncheck();
  await page.getByRole('checkbox').nth(3).check();
  await page.getByRole('button', { name: 'Launch' }).click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.locator('.swiper-button-next').click();
  await page.getByRole('button', { name: 'Get Started!' }).click();
  await page.getByRole('button', { name: 'Launch' }).click();
  await page.getByText('Skip guide').click();
//   await page.getByRole('button', { name: 'Website' }).click();
//   await page.getByRole('button', { name: 'Form' }).click();
//   await page.getByRole('button', { name: 'PDF' }).click();
//   await page.getByRole('checkbox', { name: 'Debug mode' }).check();
//   await page.getByRole('checkbox', { name: 'Debug mode' }).uncheck();
//   await page.getByRole('button', { name: 'Export log file' }).click();
  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});