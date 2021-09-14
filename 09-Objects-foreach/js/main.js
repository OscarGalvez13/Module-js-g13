/*
const personObject = {
  name: "Oscar",
  lastName: "Galvez",
  gender: "Male",
  age: 28,
  isSingle: false,
  hobbies: ["Watch horror movies", "Read", "Play DBFZ"],
  socialNetwork: {
    github: "@OscarGalvez13",
    instagram: "mikejim_1327",
  },
  saludar: function () {
    return "Hola koders!!! ^^";
  },
};

console.log(personObject);

// como accedo a las propiedades de objeto

// por medio de la notacion de punto
console.log(personObject.name);
console.log(personObject.age);

// notacion de corchetes
console.log(personObject["hobbies"]);

// como agrego una propiedad

personObject.birthDate = "1992/12/29";
personObject.zodial = "Capricornio";

console.log(personObject);

console.log(personObject.hobbies[0]);

console.log(personObject.socialNetwork.github);

// ejecutar un método
console.log(personObject.saludar());

personObject.hobbies.push("Ver series");
personObject.socialNetwork.twitter = "EveFer";

let nameUpper = personObject.name.toUpperCase();

personObject.name = nameUpper;
console.log(personObject);

// "Hola soy {name} {lastName} y tengo {age}"

let concatName = `Hola soy ${personObject.name} ${personObject.lastName} y tengo ${personObject.age} años`;

console.log(concatName);

let namePerson = personObject.name;
let lastNamePerson = personObject.lastName;
let agePerson = personObject.age;

console.log(
  `Hola soy ${namePerson} ${lastNamePerson} y tengo ${agePerson} años`
);

// destructuring assingment

// {Que propiedades quiero obtener} = De que objeto las voy a obtener ?
let { name, lastName, age } = personObject;

console.log(name);
console.log(lastName);
console.log(age);

console.log(`Hola soy ${name} ${lastName} y tengo ${age} años`);

// crear

let firstName = "Emi";
let generation = 13;
let bootcamp = "JavaScript";

let koderObject = {
  firstName,
  generation,
  bootcamp,
};

console.log(koderObject);

// Destructuring with array

let arrayColors = ["Purple", "orange", "blue"];

let purpleColor = arrayColors[0];

console.log(purpleColor);

let [myColor1, myColor2, myColor3] = arrayColors;

console.log(myColor1);
console.log(myColor2);
console.log(myColor3);
*/

let dataarray = [
  ["Fernanda", "Palacios"],
  ["Alfred", "Altamirano"],
  ["Angel", "Resendiz"],
  ["Elda", "Corona"],
  ["Tux", "Tuxtla"],
  ["Jorge", "De Buen"],
];

const getArrayWithObject = (arrayMentors) => {
  let newArrayMentors = [];
  for (let i = 0; i < arrayMentors.length; i++) {
    // console.log(arrayMentors[i])
    let name = arrayMentors[i][0];
    let lastName = arrayMentors[i][1];
    let mentorObject = { name, lastName };
    newArrayMentors.push(mentorObject);
  }
  return newArrayMentors;
};
