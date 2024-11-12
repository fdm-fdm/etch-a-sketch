//setup container div
const container = document.querySelector("#container");

//setup column
const column = document.createElement("div");
column.classList.add("column");

//setup cell div
const cell = document.createElement("div");
cell.classList.add("cell");

createGrid(16);
getUserInput();

// Loop to create and append multiple cell elements to a column
function createGrid(value) {
    cleanCanvas();

    const containerSize = 600;
    const cellSize = containerSize/value;

    for (let i = 0; i < value; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        container.appendChild(column);
        for (let i = 0; i < value; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;

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

    // Button for reset functionality
    const reset_grid = document.querySelectorAll('.cell');
    const btn = document.querySelector("#resetButton");
    
    reset_grid.forEach(cell =>  {
        btn.addEventListener('click', function() {
            cell.style.backgroundColor = 'white'; // reset color to white
        });
    });
}

function getUserInput() {
    const changeSize = document.querySelector("#changeSize");

    changeSize.addEventListener("click", function () {
    let userInput = prompt('Insert a new number of cells (maximum: 100)');
    userInput = parseInt(userInput);

    if ( isNaN(userInput) || userInput <= 0) {
        alert("Please enter a valid number greater than 0.");
    }

    else if (userInput > 100) {
        alert("The maximum number allowed is 100!");
        userInput = 100;
        createGrid(userInput);
    }

    else {
        createGrid(userInput);
    }

    });
}

function cleanCanvas() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());

    const columns = document.querySelectorAll('.column');
    columns.forEach(column => column.remove());
}
