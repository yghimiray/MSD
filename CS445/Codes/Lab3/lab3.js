"use strict";
class University {
    constructor(name, dept) {
        this.graduation = (year) => {
            console.log(`Graduating ${this.dept} ${year} students`);
        };
        this.name = name;
        this.dept = dept;
    }
}
let miu = new University("MIU", "Computer Science");
miu.graduation(2019);
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};
let myself = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.honk = () => {
            console.log(` ${this.name} is saying: Toooooooooot!`);
        };
        this.accelerate = (speed) => {
            this.acceleration = this.acceleration + speed;
        };
        this.name = name;
    }
}
let car = new Car("BMW");
car.honk(); // BMW is saying: Toooooooooot!
console.log(car.acceleration); // 0
car.accelerate(60);
console.log(car.acceleration); // 60
let baseObject = {
    width: 0,
    length: 0
};
let rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function () {
    return this.width * this.length;
};
console.log(rectangle.calcSize()); // 10
