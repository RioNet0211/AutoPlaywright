const { test: base, expect, _electron: electron } = require('@playwright/test');

console.log(`outside of ${!!global.__ELECTRON_APP__}`);
const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [async ({}, use) => {    
    // 'use' provides the launched app instance to the test.
    console.log(`base.extend::electronApp${!!global.__ELECTRON_APP__}`);
    await use(global.__ELECTRON_APP__);    
  }, { scope: 'test' }],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [async ({}, use) => {
    console.log(`inside of base.extend, ${!!global.__APP_WINDOW__}`);
    await use(global.__APP_WINDOW__);
  }, { scope: 'test' }],
});

module.exports = { test: electronTest, expect };

