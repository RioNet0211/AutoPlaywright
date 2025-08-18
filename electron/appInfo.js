const fs = require('fs');
<<<<<<< HEAD
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
=======

const getAppInfo = () => {
  const _appConfig = JSON.parse(fs.readFileSync('./electron/appInfo.config'));
  switch ( process.platform ){
    case 'darwin':
      return _appConfig.darwin;
    case 'win32':
      return _appConfig.win32;
    default:
      return _appConfig.win32;
  }  
>>>>>>> 72db10ef4a670110cd03fde176b386d6686f6428
}
const appInfo = getAppInfo();
module.exports = { appInfo };

