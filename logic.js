//setup container div
const container = document.querySelector("#container");

//setup column
const column = document.createElement("div");
column.classList.add("column");


//setup cell div
const cell = document.createElement("div");
cell.classList.add("cell");

// Loop to create and append multiple cell elements to a column

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        column.appendChild(cell);
    }
}

// Select all cell elements
const cells = document.querySelectorAll('.cell');

// Loop through each cell and add a click event listener
cells.forEach(cell => {
    cell.addEventListener('mouseover', function() {
        cell.style.backgroundColor = 'lightblue'; // Change to the desired permanent color
    });
});
