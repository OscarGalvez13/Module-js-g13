alert("Eres el afortunado, acabas de ganar $1,000,000");
/*
// string
// Dato primitivo
let nombre = "Oscar";
let appellido = "Galvez";
let saludo = new String("Que hongo?");

//Concatenate

let nombreCompleto = nombre + " " + appellido;
let saludoConMiNombre =
  saludo + " " + "Mi nombre es" + " " + nombre + " " + appellido;

console.log(nombreCompleto);
console.log(saludoConMiNombre);

//Template string

//backtick
let nuevoSaludo = `Hola mi nombre es ${nombre} ${appellido}`;
console.log(nuevoSaludo);

//primitive wrapper object
let someString = "Hola a todos";
console.log(someString.length);

//Funciones

let numberOne = 45;
let numberTwo = 60;

let suma = numberOne + numberTwo;
console.log(suma);
*/

/*
console.log("--------Ejercicio1-----------");

let firstName = prompt("Enter first name");
let lastName = prompt("Enter last name");

let fullName = firstName.toLowerCase() + " " + lastName.toUpperCase();
console.log(fullName);
*/

/*
Crear una funcion que permita al usuario retornar el numero de coincidencias de una 
palabra en una frase que el mismo usuario ingrese

input:
Palabra a buscar: ""
Frase:

Output: "El numero de coincidencias "
*/

function coincidence(str, paragraph) {
  let coincidence = paragraph.match(/[str]/g);
  return coincidence;
}
console.log(coincidence("Hola", "Hola como estas"));
