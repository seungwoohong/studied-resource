class Vehicle {
    constructor(engines) {
        this.engines = engines;
    }

    ignition() {
        console.log('엔진을 켠다.');
    }

    drive() {
        this.ignition();
        console.log("Let's go!");
    }
}

export default Vehicle;
