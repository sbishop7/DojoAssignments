function VehicleConstructor(name, numOfWheels, numOfPassengers){
    var vehicle = {};

    vehicle.name = name;
    vehicle.wheels = numOfWheels;
    vehicle.passengers = numOfPassengers;

    vehicle.makeNoise = function(){
        console.log("Vroom Vroom!");
    }

    return vehicle;
}

bike = VehicleConstructor("bike", 2, 1);
bike.makeNoise = function(){
    console.log("ring ring!")
}

Sedan = VehicleConstructor("Sedan", 4, 5);
Sedan.makeNoise = function(){
    console.log("Honk Honk!")
}

Bus = VehicleConstructor("Bus", 6, 100)
Bus.pickup = function(morePassengers){
    Bus.passengers += morePassengers;
}

bike.makeNoise();
Bus.pickup(10);
console.log(Bus.passengers);
Bus.makeNoise();