interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: "John",
  lastName: "Bongiovi",
  age: 25,
  location: "New Jersey"
};

const student2: Student = {
  firstName: "Steven",
  lastName: "Tyler",
  age: 30,
  location: "New York"
};

const studentsList: Student[] = [student1, student2];

function createTable(data: Student[], headers: string[]): HTMLElement {
  // Create the table element
  const table = document.createElement("table");

  // Create the table header (optional)
  if (headers) {
    const tableHead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    headers.forEach(header => {
      const headerCell = document.createElement("th");
      headerCell.textContent = header;
      headerRow.appendChild(headerCell);
    });

    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);
  }

  // Create table body
  const tableBody = document.createElement("tbody");


  // Loop through data and create rows
  data.forEach(row => {
    const tableRow = document.createElement("tr");
    const firstName = row["firstName"];
    const location = row["location"];

    const rowsContent = [firstName, location];
    // Create cells for each data point in the row
    for (const content of rowsContent) {
      const cell = document.createElement("td");
      cell.textContent = content;
      tableRow.appendChild(cell);
    }

    tableBody.appendChild(tableRow);
  });

  table.appendChild(tableBody);

  // Optionally, append the table to a container element
  const container = document.body;
  container.appendChild(table);

  return table;
}

const headers = ["firstName", "location"];
createTable(studentsList, headers);
