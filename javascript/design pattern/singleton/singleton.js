const singleton = (function () {
    let instance;

    function init() {
        // 객체
        return {
            publicMethod: function() {
                this.publicProperty += 1;
            },
            publicProperty: 0
        }
    };

    return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();

let firstInstance = singleton.getInstance();
let secondInstance = singleton.getInstance();

firstInstance.publicMethod();
firstInstance.publicMethod();

console.log(firstInstance.publicProperty, secondInstance.publicProperty); // 2, 2
console.log(firstInstance === secondInstance); // true
