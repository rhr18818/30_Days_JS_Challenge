//it is different approach just to try table method of console, 
//will try pass an object to change the index style


class arithmatic{
    constructor(a,b){
        this.summation= a+b;
        this.subtracton =a-b;
        this.multiplication = a*b;
        this.division = a/b;
    }
}

const operation = new arithmatic(10,5);

console.table(operation)