
module.exports = async () => {
    console.log('teardown: close application');
    if(global.__ELECTRON_APP__){
        await global.__ELECTRON_APP__.close();
    }
};