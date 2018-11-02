let catList = '';
const addCat = function(cat) {
    return new Promise(function(resolve, reject) {
        if (cat) {
            catList += cat + ", ";
            resolve(catList);
        }

        reject('Where is cat?');
    });
}

addCat('doondoon')
    .then(catList => {
        return addCat('Lynx');
    })
    .then(catList => {
            return addCat('Jaguar');
    })
    .then(catList => {
        return addCat('Jaguar');
    })
    .then(catList => console.log(`catList: ${catList}`))
    .catch(error => console.log(error));