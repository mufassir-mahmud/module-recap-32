// 1.
let first ;
console.log(first);
// 2.
function second(a,b){
    const total = a+b;

}

const result = second();
console.log(result);
// 3.
function result1(a,b,c){
    const total = a+b+c;
    console.log(a,b,c);
}
const add = result1(2,2);
console.log(add)
// 4.
function noNegative(a,b){
    if( a < 0 || b<0){
        return
    }
    return a+b
}
const total = noNegative(-5,4);
console.log(total);