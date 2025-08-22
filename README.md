



# Playwright
[reference](https://playwright.dev/docs/api/class-electronapplication)


## Installation
[Installation Guide](./docs/Installation.md)

## Config
### Mac
```shell
# copy from the result
ls -al /Applications/<your_application>/Contents/MacOS/
# ex: /Applications/Visual Studio Code/Contents/MacOS/Electron
```

### Windows
```powershell
# copy from execution
ls "C:\Program Files\<your_application>\<execution>.exe"
```

## Codegen
play on both of <your_application> and `Playwright Inspector`
Tester just need to do something like an user, the inspector records your operation for regression test


```shell
node gen-code.js
```
### Alias Command
```shell
# alias on playwright.config.js
npm run codegen
```

# Test Report 
## Report from Regression Test
```shell
npx playwright show-report
```
### Alias
```shell
# alias on playwright.config.js
npm run report
```

## Regression Test
```shell
# for all test-case
npx playwright test

# run for specific device
npx playwright test --project=[expertMouse, orbit,...]

# for specific test-case
npx playwright test tests/<your-test-case>
```
## Basic Procedure
1. launch `Kensington Konnect` for each testcase
2. run testcase
3. close the `Kensington Konnect`
4. repeat 1-3 until all tests done
5. get report at `playwright-report/index.html` 

### Test-case Rule
1. Naming
    the testcase name ***MUST*** end with `.test.js` 
2. Directory
    placed in the ***tests*** directory

### Run dev mode
1. Place this project folder next to the Kensington Konnect project.
2. In the Kensington Konnect project, run npm run start:watch.
3. In the electron folder, create a file named appinfo.config.dev, and set the executablePath to KensingtonKonnect/gui.
4. In this project, run npm run test:dev.