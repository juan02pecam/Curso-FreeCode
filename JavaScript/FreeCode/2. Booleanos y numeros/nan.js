let a = 0;
let b = 0;
let result = a / b;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"

//NaN ayuda a validar datos y evitar errores en cálculos matemáticos. Es importante manejarlo adecuadamente para garantizar la robustez de nuestro código.
/* 
parseFloat() y parseInt() son dos métodos esenciales en JavaScript para convertir cadenas en números. 
Estos métodos son particularmente útiles al trabajar con entrada de usuario o procesar datos que llegan en formato de cadena pero necesitan ser tratados como valores numéricos.
parseFloat() se utiliza para convertir una cadena en un número de punto flotante (decimal).
parseInt() se utiliza para convertir una cadena en un número entero.
Ambos métodos analizan la cadena desde el principio y convierten los caracteres numéricos hasta que encuentran un carácter que no es un número. 
Si la cadena no comienza con un número válido, ambos métodos devolverán NaN (Not a Number).
*/


let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}