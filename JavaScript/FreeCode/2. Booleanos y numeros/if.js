const score = 87;

if (score >= 90) {
 console.log('You got an A'); 
} else if (score >= 80) {
 console.log('You got a B'); // You got a B
} else if (score >= 70) {
 console.log('You got a C');
} else {
 console.log('You failed! You need to study more!');
}

//para tener varios caminos de ejecucion se pueden usar "else if" para cada caso, y al final un "else" para el caso que no se cumpla ninguna de las condiciones anteriores.

/*
El operador ternario es una forma compacta de escribir sentencias simples de if/else. Tiene tres partes: una condición, 
un resultado si la condición es verdadera y un resultado si es falsa. Aquí está la sintaxis básica:

condition ? expressionIfTrue : expressionIfFalse;
*/

const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
