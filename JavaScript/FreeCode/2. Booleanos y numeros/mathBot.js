/*
En este taller, revisarás cómo trabajar con los diferentes métodos del Math al construir un Mathbot. Este Mathbot registrará algunas operaciones matemáticas y 
mensajes en la consola en un esfuerzo por enseñarte sobre el objeto Math de JavaScript.
*/

const botName = "MathBot";
const greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;

console.log(greeting);

console.log("The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1.");

//esta variable me da un numero aleatorio desde el 0, pero no llega al 1
const randomNum = Math.random();
console.log(randomNum);

console.log("Now, generate a random number between two values.");

const min = 1;
const max = 100;

//acá me da un valor random entre 1 y 100, pero decimal
const randomNum2 = Math.random() * (max - min) + min;
console.log(randomNum2);

console.log("The Math.floor() method rounds the value down to the nearest whole integer.");

//floor me redondea el numero abajo mas cercano
const numRoundedDown = Math.floor(6.7);
console.log(numRoundedDown);

console.log("Now, generate a random integer between two values.");

//acá me lo redondea pero en enteros y me da un numero en enteros random
const randomInt = Math.floor(Math.random() * (max - min) + min);
console.log(randomInt);

console.log("The Math.ceil() method rounds the value up to the nearest whole integer.");

//ceil redondea el numero arriba
const numRoundedUp = Math.ceil(3.2);
console.log(numRoundedUp);

console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);

//round no redondea hacia arriba ni abajo, redondea al mas cercano
const numRounded = Math.round(2.7);
console.log(numRounded);
const numRounded2 = Math.round(11.2);
console.log(numRounded2);

console.log("The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range.");

//min y max, min me da el numero menor entre todos, y max obviamente me da el valor mayor entre todos.
const maxNum = Math.max(3, 125, 55, 24);
console.log(maxNum);
const minNum = Math.min(6, 90, 14, 90, 2);
console.log(minNum);

console.log("It was fun learning about the different Math methods with you!");