function VehicleConstructor(name, numOfWheels, numOfPassengers, speed){
    let self = this
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    this.distance_travelled = 0
    this.name = name;
    this.wheels = numOfWheels;
    this.passengers = numOfPassengers;
    this.speed = speed;
    this.vin = generateVIN();

    function generateVIN() {
        let vin = '';
        for(var i = 0; i<17; i++){
            vin+= chars[Math.floor(Math.random()*36)];
        }
        return vin;
    }

    this.makeNoise = () => {
        console.log("Vroom Vroom!");
        return this;
    }
    this.displayVin = () => {
        console.log(this.vin);
        return this;
    }
    
}

VehicleConstructor.prototype.updateDistanceTravelled = function() {
    console.log("updating distance");
    this.distance_travelled += this.speed; 
    return this;
}
VehicleConstructor.prototype.move = function() {
        this.updateDistanceTravelled();
        this.makeNoise();
        return this;
    }
VehicleConstructor.prototype.checkMiles = function() {console.log(this.distance_travelled); return this}

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



Bus.makeNoise().makeNoise();
Bus.updateDistanceTravelled();
Bus.move();

console.log(Bus)

Bus.checkMiles();
Bus.displayVin();
