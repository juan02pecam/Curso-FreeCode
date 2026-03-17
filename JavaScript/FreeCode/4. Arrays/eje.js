/*El método push() se utiliza para añadir uno o más elementos al final de un array. 
El valor de retorno para el método push() es la nueva longitud del array. Aquí hay un ejemplo de cómo añadir una 
nueva fruta al array fruits existente:*/

const fruits = ["apple", "banana"];
// Añadir "orange" al final del array fruits
const newLength = fruits.push("orange");
//Length del array después de añadir "orange", este muestra el nuevo tamaño del array fruits después de añadir el nuevo elemento.
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]



/*El siguiente método que veremos es el método pop(). El método pop() elimina el último elemento de un 
array y devuelve ese elemento. También modifica el array original. A continuación te mostramos como se hace:*/

let fruits2 = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"

/* El método unshift() añade uno o más elementos al principio de un array y devuelve su nueva longitud. 
Funciona de manera similar a push(), pero modifica el inicio del array en lugar del final. Aquí tienes un ejemplo: */

let numbers = [2, 3];
let newLength2 = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3

/*Finalmente, el método shift() elimina el primer elemento de un array y devuelve ese elemento. 
Es similar a pop(), pero funciona al inicio del array en lugar del final. A continuación te mostramos como se hace:*/

let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"


//arreglos unidimensionales y bidimensionales

//Arreglo unidimensional
let fruits3 = ["apple", "banana", "cherry", "date"];
console.log(fruits[2]); // "cherry"

//Arreglo bidimensional
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]);
console.log(chessboard[7][3]); // "Q"