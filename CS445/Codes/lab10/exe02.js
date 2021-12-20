
class Main{
    constructor(name){
        this.name = name ;
    }
}

class Extended{
    constructor(main, city, zip){
        this.main = main ;
        this.city = city;
        this.zip = zip ;
        this.name = main.name;
    }

    logger(){
        console.log("Extended :" + this.name +" lives in " + this. city +", " + this.zip);
    }
}

let main = new Main ("Bob");
let extended = new Extended(main,"Fairfield",52556);
extended.logger();