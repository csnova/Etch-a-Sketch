function createGrid(size = 16) {
  const container = document.querySelector(".container");
  for (let i = 1; i <= size; i++) {
    let dimensions = `${640 / size}px`;
    const row = document.createElement("div");
    row.classList.add(`row${i}`);
    row.classList.add(`row`);
    row.classList.add("container");
    container.appendChild(row);
    for (let j = 1; j <= size; j++) {
      document.querySelector(".row");
      const block = document.createElement("div");
      block.classList.add(`block${i}-${j}`);
      block.classList.add("block");
      block.classList.add(`row${i}`);
      block.classList.add(`column${j}`);
      block.style.width = `${dimensions}`;
      block.style.height = `${dimensions}`;
      row.appendChild(block);
    }
  }
  let elements = document.querySelectorAll(".block");
  elements.forEach((block) =>
    block.addEventListener("mouseover", function handleMouseOver() {
      block.style.backgroundColor = `rgb(0,${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;
    })
  );
}

function removeElementsByClass(className) {
  const elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

createGrid();

const buttons = document.querySelector("button");
buttons.addEventListener("click", () => {
  let gridSize = prompt(
    "What size do you want the grid to be? Enter a number less than 100.",
    ""
  );
  gridSize = Number(gridSize);
  console.log(gridSize);
  if (Number.isNaN(gridSize) || gridSize >= 100 || gridSize <= 0) {
    gridSize = 16;
    alert("Not a Valid Selection");
  }
  removeElementsByClass("block");
  removeElementsByClass("row");
  createGrid(gridSize);
});
