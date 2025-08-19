const { test: base, expect, _electron: electron } = require('@playwright/test');
const {appInfo} = require('./appInfo.js');

const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [async ({}, use) => {    
    // 'use' provides the launched app instance to the test.
    const electronApp = await electron.launch({executablePath:appInfo.executablePath});
    await use(electronApp);
    
    await electronApp.close();
  }, { scope: 'test' }],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [async ({electronApp}, use) => {
    const page = await electronApp.firstWindow();
    await use(page);
  }, { scope: 'test' }],
});

module.exports = { test: electronTest, expect };

