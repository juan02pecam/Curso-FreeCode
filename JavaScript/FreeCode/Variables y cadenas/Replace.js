//Origina
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

// Reemplazando "cats" con "dogs", pero solo la primera ocurrencia
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

//Original
const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

//Reemplazando solo la primera ocurrencia de "cats" con "dogs"
/*const dogsOnlySentence = exampleSentence.replace("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);*/

//Reemplazando todas las ocurrencias de "cats" con "dogs"
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

//Repitiendo la plabra, original
const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

//Repitiendo la palabra "love" 3 veces
const repeatedLove = "love ".repeat(3)/*Aqui love se repitio 3 veces*/.trimEnd()/*Como quedaba un espacio se elimino con "trimEnd()"*/
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);