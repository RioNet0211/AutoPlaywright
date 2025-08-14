const fs = require('fs');

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
}
const appInfo = getAppInfo();
module.exports = { appInfo };

