let drawing = false;

// creates grid of divs based on argument, adds event listeners for "drawing" functionality, resets

function populateBoard(size) {
  const container = document.getElementById("grid-container");
  const cells = container.querySelectorAll("div");
  const sliderOutput = document.getElementById("slider-output");

  sliderOutput.innerText = `Grid Size: ${size} x ${size}`;

  cells.forEach((div) => div.remove());

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  //

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("mousedown", () => {
      drawing = true;
    });
    container.addEventListener("mouseup", () => {
      drawing = false;
    });
    cell.addEventListener("mouseover", () => {
      if (drawing === true) {
        cell.classList.add("cellDown");
      }
    });

    container.appendChild(cell);
  }
}

populateBoard(16);

function changeSizes(input) {
  populateBoard(input);
}
