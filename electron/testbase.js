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
  }, { scope: 'test' }],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [async ({ electronApp }, use) => {
    const appWindow = await electronApp.waitForEvent('window');
    await use(appWindow);
  }, { scope: 'test' }],
});

// Export the custom test object and expect assertion.
module.exports = { test: electronTest, expect };

