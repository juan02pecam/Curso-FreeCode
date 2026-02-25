
//es un laboratirio pero no tiene mayor importancia 
const firstResult = 5 + 10;
console.log(`5 + 10 = ${firstResult}`);

const secondResult = 8 - 5;
console.log(`8 - 5 = ${secondResult}`);

const thirdResult = 1 + 5;
console.log(`1 + 5 = ${thirdResult}`);

const fourthResult = 0 + 8;
console.log(`0 + 8 = ${fourthResult}`);

const fifthResult = 10 * 2;
console.log(`10 * 2 = ${fifthResult}`);

const sixthResult = 0 + 22;
console.log(`0 + 22 = ${sixthResult}`);

//-------------------------

let counter = 10;
console.log(`Counter is currently ${counter}`);

let updatedCounter = ++counter;
console.log(`Counter is now ${updatedCounter}`);

let score = 7;
console.log(`Score is currently ${score}`);

//se tiene que registrar el resultado de "score++" porque de lo contrario no se va a mostrar el resultado deseado
let finalScore = score++;
console.log(`Score is still ${finalScore++}`);
console.log(finalScore)

let coins = 3;
console.log(`Coins is currently ${coins}`);

let updatedCoins = --coins;
console.log(`Coins is now ${updatedCoins}`);

let health = 7;
console.log(`Health is currently ${health}`);

let newHealth = health--;
console.log(`Health is still ${newHealth--}`);
console.log(newHealth)



//operadores de igualdad 

console.log(5 == "5"); // true
/*
solo dos "==" es igualdad sin importar si es cadena o numero
pero si es igualdad estricta "===" entonces si importa el tipo de dato, por eso es false
*/
console.log(5 === '5'); // false

//operadores de desigualdad "!=" si ambos datos son del mismo tipo numero o cadena
console.log(5 != "5"); // false