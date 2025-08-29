# Trace

`test-results/trace/<your filename>.zip` is the trace.zip of your testcase
```shell
npx playwright show-trace test-results/trace/<your filename>.zip
```
you will open it


## Required Code 
```js
const path = require('path');

test( {..., electronApp} => {
  const context = await electronApp.context();
  await context.tracing.start({ screenshots: true, snapshots: true });

    /*

    your test script

    */

  await context.tracing.stop({ path: `test-results/trace/${path.basename(__filename)}.zip`});
});
```
## Execution
Each case will start trace from `context.tracing.start` and end at `context.tracing.stop`

