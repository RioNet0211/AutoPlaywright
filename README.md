



# Playwright
[reference](https://playwright.dev/docs/api/class-electronapplication)


## Installation
[Installation Guide](./docs/Installation.md)

## Codegen
config the exec path in [codegen.js](./codegen/codegen.js)
```shell
node gen-codeg.js
```

# Test Report 
## Report from Regression Test
```shell
npx playwright show-report
```


## Regression Test
```shell
# for all test-case
npx playwright test

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