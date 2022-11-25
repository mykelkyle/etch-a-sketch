const clear = document.getElementById("clear");
const eraser = document.getElementById("eraser");
const black = document.getElementById("black");
const toggleGrid = document.getElementById("toggle-grid");

// creates grid of divs based on argument, adds event listeners for "drawing" functionality, resets board upon invocation
function populateBoard(size) {
  const container = document.getElementById("grid-container");
  const sliderOutput = document.getElementById("slider-output");
  const cells = container.querySelectorAll("div");
  let drawing = false;
  let eraserVal = false;

  // clears all grid-container divs and renders new amount based on argument (slider.value)
  cells.forEach((div) => div.remove());

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add("cellGrid");

    // event listeners for "drawing" functionality

    cell.addEventListener("mousedown", () => {
      drawing = true;
    });
    container.addEventListener("mouseup", () => {
      drawing = false;
    });
    cell.addEventListener("mouseover", () => {
      if (drawing === true && eraserVal === false) {
        cell.classList.remove("cellWhite");
        cell.classList.add("cellDown");
      } else if (drawing === true && eraserVal === true) {
        cell.classList.remove("cellDown");
        cell.classList.add("cellWhite");
      }
    });

    container.appendChild(cell);
  }

  // edits grid size text
  sliderOutput.innerText = `Grid Size: ${size} x ${size}`;
  // clears board
  clear.onclick = () => changeSizes(size);
  // changes pen to eraser
  eraser.onclick = () => {
    eraserVal = true;
  };
  // changes pen to black
  black.onclick = () => {
    eraserVal = false;
  };
  // toggles grid lines
  toggleGrid.onclick = () => {
    let allCells = document.querySelectorAll(".cell");
    allCells.forEach((div) => {
      div.classList.toggle("cellGrid");
    });
  };
}

// default grid size
populateBoard(16);

function changeSizes(input) {
  populateBoard(input);
}
