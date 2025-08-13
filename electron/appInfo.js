const fs = require('fs');
const path = require('path');

const getAppInfo = () => {
    const fp = fs.readFileSync('./electron/appInfo.config', 'utf8');
    const _appInfo = JSON.parse(fp)
    switch (process.platform) {
        case 'darwin':
            return _appInfo.darwin;
        case 'win32':
            return _appInfo.win32;
        case 'linux':
            return _appInfo.linux;
        default:
            throw new Error('Unsupported platfrom');
    }
}
const appInfo = getAppInfo();
module.exports = { appInfo };

