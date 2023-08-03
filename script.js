const container = document.querySelector(".container");
for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.classList.add(`row${i}`);
  row.classList.add(`row`);
  row.classList.add("container");
  container.appendChild(row);
  for (let j = 1; j <= 16; j++) {
    document.querySelector(".row");
    const block = document.createElement("div");
    block.classList.add(`block${i}-${j}`);
    block.classList.add("block");
    block.classList.add(`row${i}`);
    block.classList.add(`column${j}`);
    row.appendChild(block);
  }
}

let elements = document.querySelectorAll('.block');
elements.forEach(block => block.addEventListener('mouseover',function handleMouseOver(){
  block.classList.add("hover");
}))
