function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!

//funciones con flechas
const greetingss = (name) => {
  console.log("Hello, " + name + "!");
};

greetingss("John"); // Hello, John!

// Función de flecha con una sola expresión
const calculateArea = (width, height) => width * height;


//ejemplo de variables 

//Variable global
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"

//Funcion Local
function one(){
    let men = "Hello"
    console.log(men);
}
//-----
one();

function addTwoAndSeven(){
    return 2 + 7;
}
console.log(addTwoAndSeven())