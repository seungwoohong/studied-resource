class Vehicle {
    constructor () {
        this.engines = 1;
    }

    ignition() {
        console.log('엔진을 켠다.');
    }

    drive() {
        this.ignition();
        console.log("Let's go!");
    }
}

class Car extends Vehicle {
    constructor () {
        super();
        this.wheels = 4;
    }

    drive() {
        Vehicle.drive.call( this );
        console.log(this.wheels,"개로 굴러간다.");
    }
}

class Boat extends Vehicle {
    constructor () {
        super();
        this.engines = 2;
    }

    ignition() {
        console.log(this.engines, "개의 엔진을 켠다.");
    }

    pilot() {
        Vehicle.drive.call( this );
        console.log('물살을 가르며 쾌속으로 질주한다!');
    }
}

car = new Car();
car.drive();
boat = new Boat(2);
boat.pilot();
