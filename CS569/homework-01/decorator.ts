
@addressify(2) 
class Street {} 

function addressify(first:number) {
    return function (obj: any) : any {
         return class Street1 {
            public x = first;
            // public y = second
         }
    }
}

const street1 = new Street();
console.log(street1)







console.log(new Street()); // object {x: 2, y: 4}
