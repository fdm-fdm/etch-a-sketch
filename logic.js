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
            if (!cell.style.backgroundColor) {
                cell.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`; // Set the color only if it's not already set
            }
            
            else {
                // Parse current opacity, defaulting to 0 if undefined
                let currentOpacity = parseFloat(cell.style.opacity) || 0;
                
                currentOpacity += 0.1;
                cell.style.opacity = currentOpacity;
                }
        });
    });
}

// Button for reset functionality
const reset_grid = document.querySelectorAll('.cell');
const btn = document.querySelector("#resetButton");
    
btn.addEventListener('click', function() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = ''; // Remove background color
        cell.style.opacity = 0.1; // Reset opacity
    });
});

function getUserInput() {
    const changeSize = document.querySelector("#changeSize");

    changeSize.addEventListener("click", function () {
    let userInput = prompt('Enter the number of rows and columns for the grid (e.g., 4 for a 4x4 grid, max is 100):');
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

function getRandomInt(max) { //use this to generate a random value for the rgb
    return Math.floor(Math.random() * max);
}