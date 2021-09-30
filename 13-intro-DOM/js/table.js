let mentorsArray = [
  {
    name: "Fernanda",
    mail: "fernanda@kodemia.mx",
    phone: "9671686557",
  },
];

const printTable = () => {
  let headersTable = ["Nombre", "E-mail", "Phone"];
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let headerRow = document.createElement("tr");

  headersTable.forEach((title) => {
    let headTd = document.createElement("td");
    let textHead = document.createTextNode(title);
    headTd.appendChild(textHead);
    headerRow.appendChild(headTd);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);
  document.body.appendChild(table);

  let tbody = document.createElement("tbody");
  mentorsArray.forEach((mentor) => {
    let trMentor = document.createElement("tr");
    let nameTd = document.createElement("td");
    let mailTd = document.createElement("td");
    let phoneTd = document.createElement("td");

    let nameText = document.createTextNode(mentor.name);
    let mailText = document.createTextNode(mentor.mail);
    let phoneText = document.createTextNode(mentor.phone);

    nameTd.appendChild(nameText);
    mailTd.appendChild(mailText);
    phoneTd.appendChild(phoneText);

    trMentor.appendChild(nameTd);
    trMentor.appendChild(mailTd);
    trMentor.appendChild(phoneTd);

    tbody.appendChild(trMentor);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
};
