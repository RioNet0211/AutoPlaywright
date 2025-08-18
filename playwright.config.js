// @ts-check

const { defineConfig, devices, expect } = require('@playwright/test');
const path = require('path');


const getAppPath = () => {
	switch (process.platform) {
		case 'darwin':
			return path.join(__dirname, '/Applications/Visual Studio Code.app/Contents/MacOS/Electron');
		case 'win32':
			return path.join(__dirname, 'dist/win-unpacked/our-app.exe');
		default:
			throw new Error('Unsupported platfrom');
	}
};

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000, // timeout 30 sec
  globalTimeout: 60*60*1000, // timeout 1 hr
  expect: {
    timeout: 5*1000,
  },
  /* global setup/teardwon for all test */
  globalSetup: require.resolve('./playwright.global-setup.js'),

  globalTeardown: require.resolve('./playwright.global-teardown.js'),

  /* Run tests in files in parallel */
  fullyParallel: false,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    headless: false,
  },
/*
  projects:[
    {
	    name: 'chromium',
	    use: {},
    },
  ],
*/
});

