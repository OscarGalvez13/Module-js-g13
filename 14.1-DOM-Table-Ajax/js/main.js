// let kodersArray = [
//     {
//         name: "Emi",
//         lastName:  "de León"
//     },
//     {
//         name: "Clau",
//         lastName: "Rodriguez"
//     },
//     {
//         name: "Fanny",
//         lastName: "Alvarez"
//     }
// ]
//https://api-13va-default-rtdb.firebaseio.com/.json
const createKoder = (koderObject) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
      }
    }
  });
  xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json");
  xhr.send(JSON.stringify(koderObject));
};

const getKoders = () => {
  let objectResponse;
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState == 4) {
      if (xhr.status >= 200 && xhr.status <= 299) {
        objectResponse = JSON.parse(xhr.response);
        printTable(objectResponse);
      } else {
        console.log("Ocurrio un error: ", xhr.status, "Not Found");
      }
    }
  });
  xhr.open("GET", "https://api-13va-default-rtdb.firebaseio.com/.json");
  xhr.send();
};

const createNode = (typeElement, text) => {
  let node = document.createElement(typeElement);
  node.textContent = text;
  return node;
};

const removeKoder = (event) => {
  console.log("Eliminando... jeje");
  // Eliminar del array
  let positionKoder = event.target.dataset.koderIndex;
  kodersArray.splice(positionKoder, 1);
  console.log(kodersArray);
  printTable();
};

function printTable(data) {
  let tBody = document.getElementById("list-koders");
  while (tBody.lastElementChild) {
    tBody.removeChild(tBody.lastElementChild);
  }

  let index = 0;
  let lista = Object.values(data);

  for (let object of lista) {
    let { name, lastName } = object;
    let tr = document.createElement("tr");
    let tdIndex = createNode("td", index + 1);
    let tdName = createNode("td", name);
    let tdLastName = createNode("td", lastName);
    let tdButton = document.createElement("td");
    let button = createNode("button", "Eliminar");
    button.classList.add("btn", "btn-danger");

    button.setAttribute("data-koder-index", index);

    button.addEventListener("click", removeKoder);

    tdButton.appendChild(button);

    tr.appendChild(tdIndex);
    tr.appendChild(tdName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdButton);

    tBody.appendChild(tr);

    index++;
  }

  // kodersArray.forEach((koder, index) => {
  //     let {name, lastName} = koder
  //     let tr = document.createElement("tr")

  //     let tdIndex = createNode("td", index + 1)
  //     let tdName = createNode("td", name)
  //     let tdLastName = createNode("td", lastName)
  //     let tdButton = document.createElement("td")

  //     let button = createNode("button", "Eliminar")
  //     button.classList.add("btn", "btn-danger")

  //     button.setAttribute("data-koder-index",index)

  //     button.addEventListener("click", removeKoder)

  //     tdButton.appendChild(button)

  //     tr.appendChild(tdIndex)
  //     tr.appendChild(tdName)
  //     tr.appendChild(tdLastName)
  //     tr.appendChild(tdButton)

  //     tBody.appendChild(tr)
  // })
}
let nombre = document.getElementById("txtNombre");
let apellido = document.getElementById("txtApellido");
let newKoder = {};
document.querySelector(".btn-agregar").addEventListener("click", (event) => {
  let objectArray = {};
  objectArray.name = nombre.value;
  objectArray.lastName = apellido.value;
  newKoder = objectArray;
  // kodersArray.push(objectArray)
  // console.log(kodersArray)
  createKoder(newKoder);
  printTable();
});

getKoders();
