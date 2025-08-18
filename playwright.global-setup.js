const { _electron: electron } = require('@playwright/test');
const {appInfo} = require('./electron/appInfo.js');

module.exports = async () => {
  console.log(`setup: launching app:${appInfo.executablePath}` );
  const electronApp = await electron.launch({
    executablePath: appInfo.executablePath,
  });
  const appWindow = await electronApp.firstWindow();
  global.__ELECTRON_APP__ = electronApp;
  global.__APP_WINDOW__ = appWindow;
};
