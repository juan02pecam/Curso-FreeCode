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