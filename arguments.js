function sum(a,b,c){
    const args = [...arguments];
    args.push(70)
    console.log(args);
    const result = a+b+c;
    return result;
}

const total = sum(10,20,30,60,50,40);
console.log(total);
console.log(typeof sum);
console.log(sum.length);