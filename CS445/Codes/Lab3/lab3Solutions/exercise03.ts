// function Car(name) { 
// 	this.name = name; 
// 	this.acceleration = 0; 
// 	this.honk = function() { 
// 		console.log(` ${this.name} is saying: Toooooooooot!`); 
// 	}; 
// 	this.accelerate = function(speed) { 
// 		this.acceleration = this.acceleration + speed; 
// 	} 
// } 

class Car{
    public acceleration: number = 0;
    constructor(public name: string){
    }
    honk():void{
        console.log(` ${this.name} is saying: Toooooooooot!`); 
    }
    accelerate(speed: number):void{
        this.acceleration = this.acceleration + speed; 
    }
}

var car = new Car("BMW"); 
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60); 
console.log(car.acceleration); // 60