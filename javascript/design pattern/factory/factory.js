const Factory = function() {
    this.customer = function(type) {
        let _customer;

        if (type === 'child') {
            _customer = new child();
        } else if (type === 'student') {
            _customer = new teenager();
        } else if (type === 'adult') {
            _customer = new adult();
        }

        _customer.getInfo = function() {
            console.log(this.price, this.grade);
        }

        return _customer;
    }
}

const child = function () {
    this.price = 6000;
    this.grade = 'child';
}

const teenager = function () {
    this.price = 9000;
    this.grade = 'student';
}

const adult = function () {
    this.price = 12000;
    this.grade = 'adult';
}

const factory = new Factory();

const customer1 = factory.customer('child');
const customer2 = factory.customer('student');
const customer3 = factory.customer('adult');

customer1.getInfo();
customer2.getInfo();
customer3.getInfo();

// 6000 'child'
// 9000 'student'
// 12000 'adult'