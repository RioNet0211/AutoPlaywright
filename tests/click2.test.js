
const { test: base, expect, _electron: electron } = require('@playwright/test');
const path = require('path');

// Extend the base Playwright test to create our custom fixtures.
const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [async ({}, use) => {
    // Path to your Electron app's executable
    const appPath = '/Application/Visual Studio Code/Contents/MacOS/Electron';
    
    // Launch the app
    const app = await electron.launch({ executablePath: appPath });
    
    // 'use' provides the launched app instance to the test.
    await use(app);
    
    // After the test is done, this part will run for cleanup.
    await app.close();
  }, { scope: 'test' }], // 'test' scope means it runs for each test. Use 'worker' to launch once per file.

  // This fixture depends on 'electronApp' and provides the main window.
  page: [async ({ electronApp }, use) => {
    const appWindow = await electronApp.waitForEvent('window');
    await use(appWindow);
  }, { scope: 'test' }],
});
test('test', async ({ page }) => {
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await expect(page.getByLabel('Welcome', { exact: true }).locator('a')).toContainText('Welcome');
  await page.getByText('Welcome', { exact: true }).click();
  await page.getByRole('tab', { name: 'Explorer (⇧⌘E)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Search (⇧⌘F)' }).locator('a').click();
  await expect(page.getByLabel('Welcome', { exact: true }).locator('a')).toContainText('Welcome');
});
