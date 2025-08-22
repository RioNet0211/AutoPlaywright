
# Test Automation
![Playwright](https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

![Windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white) 
![macOS](https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0)

## Framework: Playwright
Playwright[[1]](https://playwright.dev/docs/api/class-electronapplication), an UI testing framework developed by **Microsoft**. Which supports web, electron app for test software. It's a convenient tool for testers to manually test Once and then automatedly test for many times as *regression test* for future releases.

### Installation
[Installation Guide](./docs/Installation.md)

### Config
copy the result to app config file [appInfo.config](./electron/appInfo.config)

mac: `darwin`

windows: `win32`

linux: `linux`
```json
{
    "darwin":{    },
    "win32":{    }
}
```

#### Mac
update the executable path to your `electron/appInfo.config.<os>.executablePath` for launch your app. 
```shell
# copy from the result
ls -al /Applications/<your_application>/Contents/MacOS/
# ex: /Applications/Visual Studio Code/Contents/MacOS/Electron
```
copy the result to app config file [appInfo.config](./electron/appInfo.config)

mac: `darwin`
```json
{
    "darwin":{
        "executablePath": "/Applications/<your_application>/Contents/MacOS/execution"
    }
}
```

#### Windows
update the executable path to your `electron/appInfo.config.<os>.executablePath` for launch your app.
```powershell
# copy from execution
ls "C:\Program Files\<your_application>\<execution>.exe"
```
copy the result to app config file [appInfo.config](./electron/appInfo.config)

windows: `win32`
```json
{
    "win32":{
        "executablePath": "C:\\Program Files\\<your_application>\\<execution>.exe"
    }
}
```


### Codegen
play on both of <your_application> and `Playwright Inspector`.

Testers just need to do something like an user, the inspector records your operations and copy the codes to tests/\<project>/\<test_topic>.`test.js` . 

Testers will repro the testing code as **regression test** for future releases.

```shell
node gen-code.js
```
#### Alias Command
```shell
# alias on playwright.config.js
npm run codegen
```

# Test Report 
## Report from Regression Test
```shell
npx playwright show-report
```
### Alias Command
```shell
# alias on playwright.config.js
npm run report
```
## Regression Test
```shell
# for all test-case under tests
npx playwright test

# run for specific device
npx playwright test --project=[expertMouse, orbit,...]

# for specific test-case
npx playwright test tests/<project>/<your-test-case>.test.js
```
# Basic Procedure
1. launch `Kensington Konnect` for each testcase
2. run testcase
3. close the `Kensington Konnect`
4. repeat 1-3 until all tests done
5. get report at `playwright-report/index.html` 

### Test-case Rule
1. Naming
    the testcase name ***MUST*** end with `.test.js` 
2. Directory
    placed in the ***tests/\<project>*** directory

### Run dev mode
1. Place this project folder next to the Kensington Konnect project.
2. In the Kensington Konnect project, run npm run start:watch.
3. In the electron folder, create a file named appinfo.config.dev, and set the executablePath to KensingtonKonnect/gui.
4. In this project, run npm run test:dev.