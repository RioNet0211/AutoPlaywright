const {test, expect} = require('../../electron/testbase.js');
const {testId} = require('./_base-buttonTestIds.js');
const path = require('path');


test('test', async ({ page, electronApp }) => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

  const testSnippet = [
    {snippet: 'Snippet1', setName:'Snippet_1', setContent:'snippet-1...'},
    {snippet: 'Snippet2', setName:'Snippet_2', setContent:'snippet-2...'},
    {snippet: 'Snippet3', setName:'Snippet_3', setContent:'snippet-3...'},
    {snippet: 'Snippet4', setName:'Snippet_4', setContent:'snippet-4...'},
    {snippet: 'Snippet5', setName:'Snippet_5', setContent:'snippet-5...'},
    {snippet: 'Snippet6', setName:'Snippet_6', setContent:'snippet-6...'},
    {snippet: 'Snippet7', setName:'Snippet_7', setContent:'snippet-7...'},
    {snippet: 'Snippet8', setName:'Snippet_8', setContent:'snippet-8...'},
    {snippet: 'Snippet9', setName:'Snippet_9', setContent:'snippet-9...'},
    {snippet: 'Snippet10', setName:'Snippet_10', setContent:'snippet-10...'},
  ];

  try{
    const _slowMo = 200; // ms
    await page.getByText('Expert Mouse™ TB800 EQ').click();
    await page.getByText('Reset All').click();
    await page.getByRole('button', { name: 'Okay' }).click();
    for(const _testId of testId.button){
      await page.getByTestId(_testId).click();
      await page.getByRole('button', { name: 'Snippet' }).click();

      for(const _snippet of testSnippet){
        // console.log(_snippet);
        await page.waitForTimeout(_slowMo); await page.getByRole('radio', { name: _snippet.snippet, exact: true }).check();
        await page.getByRole('textbox').first().fill(_snippet.setName);
        await page.getByRole('textbox').nth(1).fill(_snippet.setContent);
        await page.getByRole('button', { name: 'Done' }).click();
        await expect.soft(page.getByTestId(_testId)).toHaveText(_snippet.setName);
      }
      for(const _snippet of testSnippet){
        await page.waitForTimeout(_slowMo); await page.getByRole('radio', { name: _snippet.snippet, exact: true }).check(); 
      }
    }
    await page.waitForTimeout(_slowMo); await page.getByRole('radio', { name: 'Snippet Menu' }).check();
    await expect(page.getByRole('radiogroup')).toContainText('Shows all available snippets. Snippets allow you to implement commonly used text, emojis, or code in a consistent way.');
  } catch {
    console.error('Error occurred while testing snippets');
  } 
  await context.tracing.stop({ path: `test-results//trace/${path.basename(__filename)}.zip` });

});