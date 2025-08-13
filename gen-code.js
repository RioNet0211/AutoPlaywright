// @ts-check
const { _electron: electron } = require('playwright');
const path = require('path');

const getAppPath = () => {
	switch (process.platform) {
		case 'darwin':
//			return '/Applications/Visual Studio Code.app/Contents/MacOS/Electron';
			return '/Applications/KensingtonWorks .app/Contents/MacOS/KensingtonWorks2';
		case 'win32':
			return path.join(__dirname, 'dist/win-unpacked/our-app.exe');
		default:
			throw new Error('Unsupported platfrom');
	}
};

(async () => {
	try{
		const electronApp = await electron.launch({
			executablePath: getAppPath(),
				args:[
						getAppPath(),
						'--remote-debugging-port=9222'
				]
		});
		console.log('(1/3) Launching ', getAppPath());	
		const window = await electronApp.firstWindow();
		console.log('(2/3) Playwright.Inspector starting');
		await window.pause();
		console.log('(3/3) Closing app');

		await electronApp.close();
	} catch (error) {
		console.error('[ERROR]', error );

	}
})();

