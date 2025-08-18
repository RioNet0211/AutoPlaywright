const { test: base, expect, _electron: electron } = require('@playwright/test');
<<<<<<< HEAD
const {appInfo} = require('./appInfo.js');

=======
const path = require('path');
const {appInfo} = require('./appInfo.js');
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
// Extend the base Playwright test to create our custom fixtures.
const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [async ({}, use) => {
    // Path to your Electron app's executable
<<<<<<< HEAD
    const appPath = appInfo.executablePath;
=======
    const appPath = appInfo.appPath;
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
    
    // Launch the app
    const app = await electron.launch({ executablePath: appPath });
    
    // 'use' provides the launched app instance to the test.
    await use(app);
    
    // After the test is done, this part will run for cleanup.
    await app.close();
  }, { scope: 'test' }],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [async ({ electronApp }, use) => {
<<<<<<< HEAD
    const appWindow = await electronApp.firstWindow('window');
=======
    const appWindow = await electronApp.firstWindow();
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
    await use(appWindow);
  }, { scope: 'test' }],
});

<<<<<<< HEAD
=======
// Export the custom test object and expect assertion.
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
module.exports = { test: electronTest, expect };

