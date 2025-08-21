const { test: base, expect, _electron: electron } = require("@playwright/test");
const { appInfo } = require("./appInfo.js");

const electronTest = base.extend({
  // This fixture will be responsible for launching the app.
  // It will run for each test that uses it.
  electronApp: [
    async ({}, use) => {
      let electronApp;
      if (process.env.NODE_ENV === "development") {
        electronApp = await electron.launch({
          args: ["."], // Use '.' to start from current directory
          cwd: appInfo.executablePath, // Set working directory to gui/ folder
        });
        await electronApp.evaluate(({ BrowserWindow }) => {
          const windows = BrowserWindow.getAllWindows();
          for (const win of windows) {
            win.webContents.openDevTools({ mode: "detach" });
          }
        });
      } else {
        // 'use' provides the launched app instance to the test.
        electronApp = await electron.launch({
          executablePath:appInfo.executablePath
        });
      }

      await use(electronApp);

      await electronApp.close();
    },
    { scope: "test" },
  ],

  // This fixture depends on 'electronApp' and provides the main window as 'page'.
  page: [
    async ({ electronApp }, use) => {
      const page = await electronApp.firstWindow();
      await use(page);
    },
    { scope: "test" },
  ],
});

module.exports = {test: electronTest, expect};
