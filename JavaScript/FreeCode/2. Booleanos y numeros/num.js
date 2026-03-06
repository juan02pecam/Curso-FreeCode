
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

console.log(5 === 2 + 3 || 4 == 2);

if (1) {
  console.log("True!");
}


const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
console.log(b);

let x = 5;
if (x > 1 && x < 10) {
  console.log("x is between 1 and 10");
} else {
  console.log("x is not between 1 and 10");
}


// JavaScript provides several bitwise operators, including AND (&), OR (|), XOR (^), NOT (~), left shift (<<), and right shift (>>).