const { test: base, expect, _electron: electron } = require('@playwright/test');

console.log(`outside of ${!!global.__ELECTRON_APP__}`);
const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [async ({}, use) => {    
    // 'use' provides the launched app instance to the test.
    console.log(`base.extend::electronApp${_electronApp}`);
    await use(_electronApp);    
  }, { scope: 'test' }],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [async ({}, use) => {
    console.log(`inside of base.extend, ${!!_appWindow}`);

    await use(_appWindow);
  }, { scope: 'test' }],
});

<<<<<<< HEAD
=======
// Export the custom test object and expect assertion.
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
module.exports = { test: electronTest, expect };

