// Create a object with 2 variables and 
// value 10 and 2 with functions add, subtract,
//  multiply and divide, then execute and print
//   all function calls
const maths={
    a:10,
    b:2,
    add:(a,b)=>{
        return `sum:${a+b}`;
    },
    sub:(a,b)=>{
        return `difference: ${a-b}`;
    },
    mul:(a,b)=>{
        return `product: ${a*b}`;
    },
    div:(a,b)=>{
        return `div: ${a/b}`;
    }
}
console.log(maths.add(maths.a,maths.b));
console.log(maths.sub(maths.a,maths.b));
console.log(maths.mul(maths.a,maths.b));
console.log(maths.div(maths.a,maths.b));