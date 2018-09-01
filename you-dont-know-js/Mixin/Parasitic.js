function Vehicle() {
	this.engines = 1;
}

Vehicle.prototype.ignition = function() {
	console.log("엔진을 켠다");
};

Vehicle.prototype.drive = function() {
	this.ignition();
	console.log("방향을 맞추고 앞으로 간다.");
};

function Car() {
	var car = new Vehicle();

	car.wheels = 4;

	var vehDrive = car.drive;

	car.drive = function() {
		vehDrive.call(this);
		console.log(this.wheels + "개의 바퀴로 굴러간다." );
	};

	return car;
}

var myCar = new Car();

myCar.drive();
// 엔진을 켠다
// 방향을 맞추고 앞으로 간다.
// 4개의 바퀴로 굴러간다.