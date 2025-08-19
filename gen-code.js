// @ts-check
const { _electron: electron } = require("playwright");
const { appInfo } = require("./electron/appInfo.js");
(async () => {
  try {
	let electronApp;
    if (process.env.NODE_ENV === "development") {
      electronApp = await electron.launch({
        args: ["."], // Use '.' to start from current directory
        cwd: appInfo.executablePath, // Set working directory to gui/ folder
      });
    } else {
      electronApp = await electron.launch({
      	executablePath: appInfo.executablePath,
      		args:[
      				appInfo.executablePath,
      				'--remote-debugging-port=9222'
      		]
      });
    }
    console.log("(1/3) Launching ", appInfo.executablePath);
    const window = await electronApp.firstWindow();
    console.log("(2/3) Playwright.Inspector starting");
    await window.pause();
    console.log("(3/3) Closing app");

    await electronApp.close();
  } catch (error) {
    console.error("[ERROR]", error);
  }
})();
