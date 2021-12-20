// function University(name:string, dept:string) { 
// 	this.name = name; 
// 	this.dept = dept; 
// 	this.graduation = function(year:number) { 
// 		 console.log(`Graduating ${this.dept} ${year} students`); 
// 	} 
// } 
// var miu = new University("MIU", "Computer Science"); 
// miu.graduation(2019);

// function University(this: any, name:string, dept:string) { 
// 	this.name = name; 
// 	this.dept = dept; 
// 	this.graduation = function(year:number) { 
// 		 console.log(`Graduating ${this.dept} ${year} students`); 
// 	} 
// } 
// var miu = new (University as any)("MIU", "Computer Science"); 
// miu.graduation(2019);

class University{
    constructor(public name:string, private dept: string){
    }
    
    graduation(year:number){
        console.log(`Graduating ${this.dept} ${year} students`); 
    }
}

var miu = new (University as any)("MIU", "Computer Science"); 
miu.graduation(2019);