const {test, expect} = require('../../electron/testbase.js');
const fs = require('fs');
const path = require('path');


test('[Profile][Every Application] basic profile options for rename', async ({ page, electronApp }) => {
  const restore_dir = path.resolve(path.join(__filename, '..', '..', '..', 'backup'));
  const restore_path = path.resolve(path.join(restore_dir, 'profile1.db'));
  // Ensure the download directory exists.
  if (!fs.existsSync(restore_dir)) {
    fs.mkdirSync(restore_dir, { recursive: true });
  }
  // Clean up any old backup file before starting
  if (!fs.existsSync(restore_path)) {
    console.log("no such backup file");
  } else {
    // restore to profile1 which is the default status profile
    console.log(`will restore from ${restore_path}`);

    await page.getByLabel('Application Settings').locator('svg').click();
    await page.mouse.wheel(0, 15);
    await expect.soft(page.getByRole('list')).toContainText('local');
    await expect.soft(page.getByRole('list')).toContainText('Restore from local');
    // Mock the "Open" dialog
    await electronApp.evaluate(async (electron, mockPath) => {
      const { dialog } = electron;
      dialog.showOpenDialog = async () => {
        console.log(`[Mock Open Dialog] Returning path: ${mockPath}`);
        return { canceled: false, filePaths: [mockPath] };
      };
    }, restore_path);
    await page.getByRole('button', {name: 'Restore', exact:true}).click();
    await expect.soft(page.getByText('Success')).toBeVisible();
    await page.getByRole('button').filter({ hasText: /^$/ }).last().click();
  }
  await page.waitForTimeout(1*1000);
  
  await page.getByRole('button').nth(1).click();
  await expect.soft(page.getByRole('menu')).toContainText('Rename');
  await expect.soft(page.getByRole('menu')).toContainText('Add a profile');
  await expect.soft(page.getByRole('menu')).toContainText('Duplicate');
  await expect.soft(page.getByRole('menu')).toContainText('Reset to defaults');
  await expect.soft(page.getByRole('menu')).toContainText('Delete');

  await page.getByText('Rename').click();
  await expect.soft(page.getByText('Enter up to 17 characters')).toBeVisible();
  await page.getByText('My Gear').click() // reset the count of Role('button')
  // // test empty profile name message
  await page.getByRole('button').nth(1).click();
  await page.getByText('Rename').click();
  await page.getByRole('textbox').fill('');
  await expect.soft(page.getByText('Enter profile name')).toBeVisible();
  await page.getByRole('textbox').press('Enter');
  await page.getByText('My Gear').click() // reset the count of Role('button')

  await page.getByRole('button').nth(1).click();
  await expect.soft(page.getByText('Profile1')).toBeVisible();
  await page.getByText('Rename').click();
  await page.getByRole('textbox').fill('abcdefghijklmnopqr');
  await expect.soft(page.getByText('Charactor limit exceeded.')).toBeVisible();
  await page.getByRole('textbox').press('Enter');
  await page.getByText('My Gear').click() // reset the count of Role('button')  
});