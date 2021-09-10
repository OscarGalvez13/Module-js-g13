//let koders = ["Paco", "Clau", "Fany", "Nancy"];

/*Hola mi nombre es ${}
 */
//console.log(koders);

// Making an array:
//const colors = ["red", "orange", "yellow"];

// Arrays are indexed like strings:
//colors[0]; // "red"

// They have a length:
////colors.length; //3

// Important array methods:
//push(value) - adds value to the END of an array
//pop() - removes and returns last value in array

//unshift(val) - adds value to START of an array
//shift() - removes and returns first element in an array

console.log("------------Ejercicio---------------");

/*
Ejercicio 1:
Crear funcion que permita indicar la cantidad de koders a guardar,
que pida tantos nombre completos de koders como se haya indicado, y 
que imprima el nombre del koder y su numero asignado.
Ejemplo:
input   
   - Emi de Leon
   - Elias Herrera
   - Armando Rios
output: 
    koder 1: Emi de Leon
    koder 2: Elias Herrera
    koder 3: Armando Rios
*/

/*
A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]
- Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"
*/

const koderName = [];
for (let i = 0; i <= 2; i++) {
  let name = prompt("Enter full name");
  koderName.splice(0, 0, name);
  console.log(koderName);
}
console.log("---------Lista------------");

for (let j = 0; j < koderName.length; j++) {
  console.log(`Koder ${j + 1}: ${koderName.sort().reverse()[j]}`);
}

/*
let maximun = parseInt(prompt("Enter the maximum number!"));
if (!maximun) {
  maximun = parseInt(prompt("Enter a valid number!"));
}
const targetnum = Math.floor(Math.random() * maximun) + 1;
console.log(targetnum);

let guess = prompt("Enter your first guess!");
while (guess !== targetnum) {
  if (guess > targetnum) {
    guess = parseInt(prompt("Too hight! Enter a new guess:"));
  } else {
    guess = parseInt(prompt("Too low, enter a new guess!"));
  }
}
console.log("you got it");
*/
