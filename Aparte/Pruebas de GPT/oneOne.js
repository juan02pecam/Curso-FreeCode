const edad = 22
let mensaje

if (edad >= 19) {
    mensaje = "Eres considerado un adulto por Juan"
} else {
    mensaje = "No eres considerado un adulto por Juan"
}

console.log(mensaje)


const a = 2;
if (1 == "1") {
  let b = 3;
  console.log(a + b);
}
//console.log(b);


let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
    break
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!