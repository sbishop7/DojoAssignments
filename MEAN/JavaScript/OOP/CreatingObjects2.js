function VehicleConstructor(name, numOfWheels, numOfPassengers, speed){
    let self = this
    let distance_travelled = 0
    this.name = name;
    this.wheels = numOfWheels;
    this.passengers = numOfPassengers;
    this.speed = speed

    this.makeNoise = () => {
        console.log("Vroom Vroom!");
    }
    this.updateDistanceTravelled = () => {distance_travelled += self.speed}
    this.move = () => {
        this.updateDistanceTravelled(),
        this.makeNoise()
    }
    this.checkMiles = () => {console.log(distance_travelled)}
}

bike = new VehicleConstructor("bike", 2, 1, 5);
bike.makeNoise = function(){
    console.log("ring ring!")
}

Sedan = new VehicleConstructor("Sedan", 4, 5, 60);
Sedan.makeNoise = function(){
    console.log("Honk Honk!")
}

Bus = new VehicleConstructor("Bus", 6, 100, 50)
Bus.pickup = function(morePassengers){
    Bus.passengers += morePassengers;
}

bike.makeNoise();
Bus.pickup(10);
console.log(Bus.passengers);
Bus.makeNoise();
Bus.move();
Bus.checkMiles();