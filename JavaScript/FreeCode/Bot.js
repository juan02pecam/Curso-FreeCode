console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;  /*${} sirver para insertar variables dentro de un string, 
se llama template literal, se usan comillas invertidas `` en lugar de comillas normales "" o ''*/
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`,
);
console.log(topic.length); /*length es una propiedad que devuelve el número de caracteres en un string, 
incluyendo espacios y caracteres especiales.*/

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`,
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`,
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`,
);

const lastCharacter = subject[subject.length - 1]; /*para acceder al último carácter de un string, 
se puede usar la longitud del string menos uno, ya que los índices comienzan en 0.*/
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log(
  "Here are examples of finding the positions of substrings in the sentence.",
);

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");
