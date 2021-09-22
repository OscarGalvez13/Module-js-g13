let arrayPersons = [
  {
    name: "Alice",
    age: 25,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Jenifer",
    age: 26,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Bruno",
    age: 48,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Jon",
    age: 22,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Brian",
    age: 20,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Luis",
    age: 38,
    voted: true,
    gender: "hombre",
  },
  {
    name: "David",
    age: 29,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Ximena",
    age: 40,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Paulet",
    age: 37,
    voted: false,
    gender: "mujer",
  },
  {
    name: "Albert",
    age: 45,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Mike",
    age: 22,
    voted: false,
    gender: "hombre",
  },
  {
    name: "Tami",
    age: 35,
    voted: true,
    gender: "hombre",
  },
  {
    name: "Mari",
    age: 28,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Mireya",
    age: 18,
    voted: true,
    gender: "mujer",
  },
  {
    name: "Tamara",
    age: 18,
    voted: true,
    gender: "mujer",
  },
];

//Usar reduce para obtener la siguiente informacion
//1.- Un array con aquellas personas que votaron

const peopleVoted = arrayPersons.reduce((accum, people) => {
  return people.voted === true ? accum + people.voted : accum;
}, 0);

console.log(`El numero de personas que votaron fue de ${peopleVoted}`);

//2.- la edad promedio de todos los votantes
const ageAverage = arrayPersons.reduce((accum, people) => {
  return accum + people.age;
}, 0);

console.log(
  `La edad promedio del votante es ${Math.round(
    ageAverage / arrayPersons.length
  )}`
);
//3.- un array con aquellos votantes que votaron y que son menores a 30 años
const votemenor30 = (arrayPersons) => {
  const votaron = arrayPersons.reduce((accum, persona) => {
    return persona.voted && persona.age < 30 ? [...accum, persona] : accum;
  }, []);
  return votaron;
};
console.log(votemenor30(arrayPersons));

//4.- la edad promedio de los no votantes
const noVoteAge = (arrayPersons) => {
  const noVote = arrayPersons.reduce((accum, person) => {
    return person.voted === false ? [...accum, person] : accum;
  }, []);
  return noVote;
};
console.log(noVote);
//- el porcentaje de votantes vs no votante
//- el procentaje de mujeres que votaron
//- el porcentaje de los hombres que votaron
