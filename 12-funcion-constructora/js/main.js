// Funcion constructora
function Persona(name, lastName, birthDate) {
  this.name = name;
  this.lastName = lastName;
  this.birthDate = birthDate;
  this.saludar = function () {
    console.log("Hola a todos!!");
  };
}

let persona1 = new Persona("Elias");
let persona2 = new Persona();

//////Class

class Person {
  constructor(name, lastName, birthDate) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.initials = `${this.name.charAt(0).toUppercase()}.${this.lastName
      .charAt(0)
      .toUppercase()}`;
    this.address = address;
  }

  saludar() {
    return `Hola, mucho gusto mi nombre es ${this.name}`;
  }
}

let nan = new Person("Nan", "Soriano", "1987/09/23", "Äddress...");

console.log(nan);
console.log(nan.saludar());

//////////

class Koder extends Person {
  constructor(name, lastName, birthDate, bootCamp, address) {
    // Llamar al constructor de la clase padre
    super(name, lastName, birthDate, address);
    this.bootCamp = bootCamp;
  }

  //Polimorfismo
  saludar() {
    return `Hola, soy un koder y mi nombre es ${this.name}`;
  }

  static info() {
    return `Koder que pertenece a la comunidad de Kodemia`;
  }
}

let koder1 = new Koder(
  "Clau",
  "Rodriguez",
  "1987/09/27",
  "JS",
  "Mi address..."
);
console.log(koder1);
console.log(koder1.saludar());
