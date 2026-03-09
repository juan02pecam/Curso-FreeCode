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

function one(){
    let men = "Hello"
    console.log(men);
}


one();