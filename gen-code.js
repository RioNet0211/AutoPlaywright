// @ts-check
const { _electron: electron } = require('playwright');
const path = require('path');
const {appInfo} = require('./electron/appInfo.js');

(async () => {
	try{
		const electronApp = await electron.launch({
			executablePath: appInfo.appPath,
				args:[
						appInfo.appPath,
						'--remote-debugging-port=9222'
				]
		});
		console.log('(1/3) Launching ', appInfo.appPath);	
		const window = await electronApp.firstWindow();
		console.log('(2/3) Playwright.Inspector starting');
		await window.pause();
		console.log('(3/3) Closing app');

		await electronApp.close();
	} catch (error) {
		console.error('[ERROR]', error );

	}
})();

