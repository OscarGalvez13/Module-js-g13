/*
Ejercicio
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length
- Funcion que reciba el indice para imprimir el nombre
*/

const animalesArray = ["Perros", "Gatos", "Aves", "Insectos", "Peces"];

function randomNumber(array_0) {
  return Math.floor(Math.random() * array_0.lenght);
}
console.log(randomNumber);

for (let i = 0; i <= animalesArray.lenght; i++) {
  console.log(randomNumber(animalesArray));
}

function indices_01(num, array_02) {
  console.log(array_02[num]);
}

indices_01(2, animalesArray);
