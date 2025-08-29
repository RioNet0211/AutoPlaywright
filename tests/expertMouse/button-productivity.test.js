const {test, expect} = require('../../electron/testbase.js');
const {testId} = require('./_base-buttonTestIds.js');
const path = require('path');


test('verify productivity buttons visible', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.getByText("Expert Mouse™ TB800 EQ").click();

  for (const _testId of testId.button) {
    // await page.getByRole('button', { name: 'hover8' }).click();
    await page.getByTestId(_testId).click();
    await page.getByRole('button', { name: 'Productivity' }).click();

    await expect.soft(page.locator('#root')).toContainText('Undo');
    await page.getByRole('radio', {name:'Undo'}).check();
    await expect.soft(page.getByRole('radio', {name: 'Undo'})).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Redo');
    await page.getByRole('radio', {name:'Redo'}).check();
    await expect.soft(page.getByRole('radio', {name: 'Redo'})).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Cut');
    await page.getByRole('radio', {name:'Cut'}).check();
    await expect.soft(page.getByRole('radio', {name: 'Cut'})).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Copy');
    await page.getByRole('radio', {name:'Copy'}).check();
    await expect.soft(page.getByRole('radio', {name: 'Copy'})).toBeChecked();
    await page.mouse.wheel(0, 10);

    // await expect.soft(page.locator('#root')).toContainText('Select All');
    // await page.getByRole('radio', {name:'Select All'}).check();
    // await expect.soft(page.getByRole('radio', {name: 'Select All'})).toBeChecked();
    // await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Find');
    await page.getByRole('radio', {name:'Find'}).check();
    await expect.soft(page.getByRole('radio', {name: 'Find'})).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Open Application');
    await page.getByRole('radio', {name:'Open Application'}).check();
    await expect.soft(page.getByRole('radio', {name:'Open Application' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Open Website');
    await page.getByRole('radio', {name:'Open Website'}).check();
    await expect.soft(page.getByRole('radio', {name:'Open Website' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Open Folder');
    await page.getByRole('radio', {name:'Open Folder'}).check();
    await expect.soft(page.getByRole('radio', {name:'Open Folder' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Open File');
    await page.getByRole('radio', {name:'Open File'}).check();
    await expect.soft(page.getByRole('radio', {name:'Open File' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Back');
    await page.getByRole('radio', {name:'Back'}).check();
    await expect.soft(page.getByRole('radio', {name:'Back' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Forward');
    await page.getByRole('radio', {name:'Forward'}).check();
    await expect.soft(page.getByRole('radio', {name:'Forward' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Stop');
    await page.getByRole('radio', {name:'Stop'}).check();
    await expect.soft(page.getByRole('radio', {name:'Stop' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Refresh');
    await page.getByRole('radio', {name:'Refresh'}).check();
    await expect.soft(page.getByRole('radio', {name:'Refresh' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    // await expect.soft(page.locator('#root')).toContainText('Maximize Window');
    // await page.getByRole('radio', {name:'Maximize Window'}).check();
    // await expect.soft(page.getByRole('radio', {name:'Maximize Window' })).toBeChecked();
    // await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Show Next Window');
    await page.getByRole('radio', {name:'Show Next Window'}).check();
    await expect.soft(page.getByRole('radio', {name:'Show Next Window' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    // await expect.soft(page.locator('#root')).toContainText('Minimize All');
    // await page.getByRole('radio', {name:'Minimize All'}).check();
    // await expect.soft(page.getByRole('radio', {name:'Minimize All' })).toBeChecked();
    // await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Show Desktop');
    await page.getByRole('radio', {name:'Show Desktop'}).check();
    await expect.soft(page.getByRole('radio', {name:'Show Desktop' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Show Desktop');
    await page.getByRole('radio', {name:'Show Desktop'}).check();
    await expect.soft(page.getByRole('radio', {name:'Show Desktop' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await expect.soft(page.locator('#root')).toContainText('Snap Window Right');
    await page.getByRole('radio', {name:'Snap Window Right'}).check();
    await expect.soft(page.getByRole('radio', {name:'Snap Window Right' })).toBeChecked();
    await page.mouse.wheel(0, 20);

    await expect.soft(page.locator('#root')).toContainText('Snap Window Left');
    await page.getByRole('radio', {name:'Snap Window Left'}).check();
    await expect.soft(page.getByRole('radio', {name:'Snap Window Left' })).toBeChecked();
    await page.mouse.wheel(0, 10);

    await page.getByRole('button', {name:'Reset'}).click();
  }
  await context.tracing.stop({path: `test-results//trace/${path.basename(__filename)}.zip`});
});