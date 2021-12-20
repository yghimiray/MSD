class BaseObject {
    constructor(public width: number = 0, public length: number =0){
    }
    
}

class Rectangle extends BaseObject {
    calcSize():number{
        return this.width * this.length; 
    }
}


class Cube extends BaseObject {
    public height: number;
    constructor(width: number, length: number, height: number){
        super(width, length);
        this.height = height;
    }

    calcSize():number{
        return this.width * this.length * this.height;
    }
}

// interface BaseObject {
//     width: number;
//     length: number
// }

// class Rectangle implements BaseObject {

//     public width: number;
//     public length: number;

//     constructor(width: number, length: number) {
//         this.width = width;
//         this.length = length;
//     }
//     calcSize():number {
//         return this.width * this.length;
//     }
// }

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize()); // 10