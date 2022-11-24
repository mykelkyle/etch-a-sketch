const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  container.appendChild(cell);

  cell.addEventListener("mousemove", function () {
    cell.classList.add("cellDown");
  });
}
