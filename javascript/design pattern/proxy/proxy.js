function PhoneBook() {
    this.dictionary = {
        '이승민': '01012341234',
        '이현섭': '01023456789',
        '오유근': '01077777777'
    };
}

PhoneBook.prototype.get = function(name, callback) {
    var self = this;
    setTimeout(function() {
        callback(self.dictionary[name]);
    }, 3000);
}

function PhoneBookProxy() {
    var phoneBook = new PhoneBook();
    var viewCount = 0;

    return {
        get: function(name, callback) {
            viewCount++;
            phoneBook.get(name, callback);
        },

        getViewCount: function() {
            return viewCount;
        }
    };
}

let phoneBook = new PhoneBookProxy();

phoneBook.get('이승민', function(phoneNum) {
    console.log('phoneNum', phoneNum);
});
console.log('viewCount', phoneBook.getViewCount());

// 1
// 01012341234
