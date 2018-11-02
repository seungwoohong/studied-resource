const hello = function(name) {
    return new Promise(function(resolve, reject) {
        if (name) {
            console.log(`hello ${name}`);
            resolve(name);
        }
        reject('who are you?');
    });
}

hello('')
    .then(result => {
        console.log('result', result);
    })
    .catch(error => {
        console.log('error', error);
    });