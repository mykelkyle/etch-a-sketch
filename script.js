// creates 16x16 grid of divs, appends to container and adds class of "cell"

let drawing = false;
const container = document.getElementById("grid-container");

for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  cell.addEventListener("mousedown", () => {
    drawing = true;
  });
  cell.addEventListener("mouseup", () => {
    drawing = false;
  });
  cell.addEventListener("mouseover", () => {
    if (drawing === true) {
      cell.classList.add("cellDown");
    }
  });

  container.appendChild(cell);
}
