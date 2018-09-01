class StirngMock {
    constructor(str) {
        this.str = str;
    }

    _split() {
        var arr = [];

        for (var i = 0; i < this.str.length; i++) {
            arr.push(this.str[i]);
        }
        return arr;
    }
}

var sayHellow = 'hellow';
sayHellow = new StirngMock(sayHellow);

console.log(sayHellow._split());