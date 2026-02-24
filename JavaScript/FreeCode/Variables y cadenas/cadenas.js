
/*includes() devuelve true si una cadena de texto puede ser encontrada dentro de otra cadena de texto, 
devolviendo false si no es así.*/

/*slice(inicio)(fin) devuelve una porción de una cadena de texto, sin modificar la cadena original.*/
let messsage = "I love JavaScript!";
let language = messsage.slice(7, 17);

console.log(language);  // JavaScript

//----------------------------------------


const fccSentence = "freeCodeCamp is a great place to learn web development.";

console.log("Here are some examples of the includes() method:");

const hasFreeCodeCamp = fccSentence.includes("freeCodeCamp");
console.log(`fccSentence.includes("freeCodeCamp") returns ${hasFreeCodeCamp} because the word "freeCodeCamp" is in the sentence.`);

const hasJavaScript = fccSentence.includes("JavaScript");
console.log(`fccSentence.includes("JavaScript") returns ${hasJavaScript} because the word "JavaScript" is not in the sentence.`);

const hasLowercaseFCC = fccSentence.includes("freecodecamp");
console.log(`fccSentence.includes("freecodecamp") returns ${hasLowercaseFCC} because includes is case-sensitive.`);

const message = "Welcome to freeCodeCamp!";

console.log("Here are some examples of the slice() method:");

const platform = message.slice(11, 23);
console.log(`The word "${platform}" was sliced from the message.`);

const greetingWord = message.slice(0, 7);
console.log(`The first word is "${greetingWord}".`);

const endPunctuation = message.slice(-1);
console.log(`The ending punctuation mark is a "${endPunctuation}"`);

console.log("Workshop complete! You now know how to use includes() and slice().")



//----------------------------------------------------------
//cadenas de texto eliminando los espacios en blanco con los metodos, tambien convirtiendo en mayusculas o minusculas

const userInput = "   Hello World!   ";
console.log ("Original input:");
//esto es la cadena original
console.log (userInput);

const cleanedInput = userInput.trim();
console.log ("Result of trimming whitespace from both ends:");
//Aqui se limpio la cadena de los espacios en blanco 
console.log (cleanedInput);

const trimmedStart = userInput.trimStart();
console.log ("After using the trimStart() method, leading spaces removed:");
//Aqui solo quitamos los espacios en blanco del inicio
console.log (trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log ("After using the trimEnd() method, trailing spaces removed:");
//Aqui solo quitamos los espacios en blanco del final
console.log (trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log ("Result of using the toUpperCase() method:");
//Aqui se convirtio toda la cadena a mayusculas
console.log (upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log ("Result of using the toLowerCase() method:");
//Aqui se convirtio toda la cadena a minusculas
console.log (lowerCaseInput);

//Se desea convertir la cadena a camelCase
const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5)/*Escogimos la palabra camel*/ + lowercaseWord[5].toUpperCase()
/*Escogemos la "c" para convertirla a mayuscula*/ + lowercaseWord.slice(-3) /*Finalmente se escoge el resto de la cade "ase*/
console.log("Camel cased version:");
console.log(camelCasedVersion);

//Ejemplo de salto de linea con \n
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

//Ejemplo de comillas dentro de una cadena de texto
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"