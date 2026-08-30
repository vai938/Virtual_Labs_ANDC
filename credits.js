let container = document.getElementById("container");

// Create the table element
let table = document.createElement("table");
const jsonData = [
  {
    "S.no.": 1,
    Department: "a",
    "Name of Experiment": "e1",
    "HTML page": "p1",
    Animation: "p2",
    Simulator: "p2",
  },
  {
    "S.no.": 2,
    Department: "b",
    "Name of Experiment": "e2",
    "HTML page": "p2",
    Animation: "p4",
    Simulator: "p1",
  },
  {
    "S.no.": 3,
    Department: "c",
    "Name of Experiment": "e3",
    "HTML page": "p3",
    Animation: "p3",
    Simulator: "p1",
  },
  {
    "S.no.": 4,
    Department: "d",
    "Name of Experiment": "e4",
    "HTML page": "p4",
    Animation: "p3",
    Simulator: "p1",
  },
];
// Get the keys (column names) of the first object in the JSON data
let cols = Object.keys(jsonData[0]);

// Create the header element
let thead = document.createElement("thead");
let tr = document.createElement("tr");

// Loop through the column names and create header cells
cols.forEach((item) => {
  let th = document.createElement("th");
  th.innerText = item; // Set the column name as the text of the header cell
  tr.appendChild(th); // Append the header cell to the header row
});
thead.appendChild(tr); // Append the header row to the header
table.append(tr); // Append the header to the table

// Loop through the JSON data and create table rows
jsonData.forEach((item) => {
  let tr = document.createElement("tr");

  // Get the values of the current object in the JSON data
  let vals = Object.values(item);

  // Loop through the values and create table cells
  vals.forEach((elem) => {
    let td = document.createElement("td");
    td.innerText = elem; // Set the value as the text of the table cell
    tr.appendChild(td); // Append the table cell to the table row
  });
  table.appendChild(tr); // Append the table row to the table
});
container.appendChild(table); // Append the table to the container element
