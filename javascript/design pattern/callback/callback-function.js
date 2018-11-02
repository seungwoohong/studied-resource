function callbackFunction (callback) {
    let name = 'hong';
    callback(name);
}
 
function welcome() {
    let text = "welcome!!";
    callbackFunction(function (name) {
        console.log(`${name} ${text}`);
    });
}
 
welcome();

