// @ts-check

const { defineConfig, devices, expect } = require('@playwright/test');
const {appInfo} = require('./electron/appInfo.js');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 45_000, // timeout 45 sec
  globalTimeout: 60*60*1000, // timeout 1 hr
  expect: {
    timeout: 5*1000,
  },
  retries: 0,
  use: {
    trace: 'retain-on-failure',
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  projects:[
    {
      name: "expertMouse",
      testDir: "./tests/expertMouse",
      use: {
        trace: 'retain-on-failure',
      }
    },
    {
      name:"orbit",
      testDir: "./tests/orbit",
      use: {
        trace: 'retain-on-failure',
      },
    }

  ]
});

