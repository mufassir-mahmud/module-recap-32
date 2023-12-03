let num1 = 5;
let num2 = 7;

function multy(number1, number2){
    number1 = 10;
    const result = number1 * number2;
    return result;
}
const multipication = multy(num1, num2);
console.log(multipication);

let star1 = {name: 'Sharuk', partner: 'gaouri'};
let star2 = {name: 'Ranveer', partner: 'Alia'};

function makeMovie(couple1, couple2){
    couple2.name = 'Salman'
    couple2.partner = 'Aushoriya'
}
console.log(star1, star2);
makeMovie(star1,star2)
console.log(star1, star2);