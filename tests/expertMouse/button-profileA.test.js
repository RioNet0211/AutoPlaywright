// https://www.kensington.com/resources/support/
// https://kensington.formstack.com/forms/feedback


const {test, expect} = require('../../electron/testbase.js');
const fs = require('fs');
const path = require('path');


test('[Profile A][Application] restore for future work', async ({ page, electronApp }) => {
  const restore_dir = path.resolve(path.join(__filename, '..', '..', '..', 'backup'));
  const restore_path = path.resolve(path.join(restore_dir, 'profileA.db'));
  // Ensure the download directory exists.
  if (!fs.existsSync(restore_dir)) {
    fs.mkdirSync(restore_dir, { recursive: true });
  }
  // Clean up any old backup file before starting
  if (!fs.existsSync(restore_path)) {
    throw "no such backup file"
  }
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
  // await page.getByRole('button').nth(2).click()

  // starting your button check

});