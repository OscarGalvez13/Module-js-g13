/*let str = "kodemia";
let lenghtStr = str.length;

let result = "";

for (let index = 0; index < lenghtStr; index++) {
  if (index % 2 === 0) {
    //checks if it's pair
    result += str.charAt(index).toUpperCase();
  } else {
    result += str.charAt(index).toLowerCase();
  }
}

console.log("Input: ", str);
console.log("Output: ", result);
*/

console.log("--------Ejercicios----------");

/*
Ejercicio 1:
Deducir:
input: anaconda
output: true
input: belzeebub
output: true
input: koder
output: false
input: cerveza
output: false
*/

let palabra = prompt("Ingrese palabra");
let i = 0;
while (i < 1) {
  switch (palabra) {
    case "anaconda":
      console.log("true");
      i++;
      break;
    case "belzeebub":
      console.log("true");
      i++;
      break;
    case "koder":
      console.log("false");
      i++;
      break;
    case "cerveza":
      console.log("false");
      i++;
      break;
    default:
      console.log("dato invalido");
      palabra = prompt("Ingrese palabra");
  }
}

/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

let numero = prompt("Ingrese un numero del 1 al 10")
i = 0
let numero1=1
numero = Number(numero);
while(i < 100){
  let operacion = numero1 * numero;
    console.log (`${numero1} x ${numero} = ${operacion}`);
    i++;
    numero1++;
}

/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

/*let numerosDelUsuario = prompt("Dame un numero del 10 - 100")
let flag = 0
let convertToNumber = Number(numerosDelUsuario)
​if (convertToNumber>=10 && convertToNumber<=100){
    for (let i=1; i<=convertToNumber; i++){
        if (i%2===0){
            console.log(i)
        }
    }
}else{
    alert ("not in range")
}*/

/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

let value = prompt("Enter your numeritos here");
sum = 0;

while (value) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

console.log(sum);

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

for (let line = "*"; line.length < 12; line += "*") {
  console.log(line);
}

/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/

let total=0;
for(i=1;i<=100;i++)
{
    if (i % 3 == 0 || i % 5 == 0) {
        total+=i;
        }      
      
}



/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/

/*
let fraseNormal = ("Hola como estas")
let splitFrase = fraseNormal.split(/\s/)
let resultado = splitFrase[0].toLowerCase() + splitFrase2[1].charAt(0).toUpperCase() +splitFrase2[1].slice(1)  + splitFrase2[2].charAt(0).toUpperCase() +splitFrase2[2].slice(1).toLowerCase()
console.log(resultado)

let fraseNormal2 = ("hello Koders")
let splitFrase2 = fraseNormal2.split(/\s/)
let resultado2 = splitFrase2[0].toLowerCase() + splitFrase2[1].charAt(0).toUpperCase() + splitFrase2[1].slice(1)
console.log(resultado2)
​console.log(letraTotal);
*/

/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/

let totalSuma=0;
​
for(i=1;i<=10;i++)
{
    let pregunta=`Ingresa numero ${i}:`;
    let solicitudNumero=prompt(pregunta);
    solicitudNumero=Number(solicitudNumero);
    if (i > 5) {
        totalSuma+=solicitudNumero;
        }      
      
}
​
console.log("El total de los ultimos 5 numeros es:", totalSuma )
