



# Playwright
[reference](https://playwright.dev/docs/api/class-electronapplication)


## Installation
[Installation Guide](./docs/Installation.md)

## Codegen
config the exec path in [codegen.js](./codegen/codegen.js)
```shell
node gen-codeg.js
```

## ReTest
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
