// https://www.kensington.com/resources/support/
// https://kensington.formstack.com/forms/feedback


const {test, expect} = require('../../electron/testbase.js');
const fs = require('fs');
const path = require('path');


test('backup/restore from local', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  const back_dir = path.resolve(path.join(__filename, '..', '..', '..', 'backup'));
  const backup_path = path.resolve(path.join(back_dir, '.auto_test.db'));
  // Ensure the download directory exists.
  if (!fs.existsSync(back_dir)) {
    fs.mkdirSync(back_dir, { recursive: true });
  }
  // Clean up any old backup file before starting
  if (fs.existsSync(backup_path)) {
    fs.unlinkSync(backup_path);
  }
  console.log(`will save to ${backup_path}`);

  await page.getByLabel('Application Settings').locator('svg').click();
  await page.mouse.wheel(0, 15);
  await expect.soft(page.getByRole('list')).toContainText('local');
  
  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Backup to local');
  await electronApp.evaluate(async (electron, mockPath) => {
    // Access the 'dialog' module from Electron
    const { dialog } = electron;
    // Overwrite the original function with our mock.
    dialog.showSaveDialog = async () => {
      // Instead of showing a dialog, immediately return the path we want.
      // This simulates the user choosing a file and clicking "Save".
      console.log(`[Mock Dialog] Returning path: ${mockPath}`);
      return {
        canceled: false,
        filePath: mockPath,
      };
    };
  }, backup_path);
  await page.getByRole('button', {name: 'Backup', exact:true}).click();
  await expect.soft(page.getByText('Success')).toBeVisible();
  expect(fs.existsSync(backup_path)).toBeTruthy();

  await page.mouse.wheel(0, 5);
  await expect.soft(page.getByRole('list')).toContainText('Restore from local');
  // Mock the "Open" dialog
  await electronApp.evaluate(async (electron, mockPath) => {
    const { dialog } = electron;
    dialog.showOpenDialog = async () => {
      console.log(`[Mock Open Dialog] Returning path: ${mockPath}`);
      return { canceled: false, filePaths: [mockPath] };
    };
  }, backup_path);
  await page.getByRole('button', {name: 'Restore', exact:true}).click();
  await expect.soft(page.getByText('Success')).toBeVisible();

  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});