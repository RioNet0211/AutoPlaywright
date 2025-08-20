const fs = require('fs');
const path = require('path');

const getDeviceInfo = () => {
    const fp_devList = fs.readFileSync('./electron/deviceList.config', 'utf-8');
    const fp_tesingConfig = fs.readFileSync('./electron/target-device.config', 'utf-8');
    const devList = JSON.parse(fp_devList);
    const testing = JSON.parse(fp_tesingConfig);


    return devList[testing.target];
}
const deviceInfo = getDeviceInfo();
module.exports = {deviceInfo};