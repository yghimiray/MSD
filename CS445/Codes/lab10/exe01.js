
class RegularBulbs{
    constructor(){
        this.lumens = "50-100";
        this.life = "1 year";
    }
}

class EnergySaver{
    constructor(){
        this.lumens = "5-40";
        this.life = "10 years";
    }
}

class Factory {
    createBulb(type){
        let bulb;

        if(type === "RegularBulbs"){
            bulb = new RegularBulbs();
        }else if( type === "EnergySaver"){
            bulb = new EnergySaver();
        }
        bulb.type = type;
        
        return bulb;
    }
}