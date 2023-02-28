const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

const fillSquare = (e) => {
  if (e.target.classList.contains("filled-in")) return;
  e.target.classList.add("filled-in");
};

const buildGrid = (gridNum) => {
  container.textContent = "";

  for (let i = 0; i < gridNum; i++) {
    const row = document.createElement("div");
    row.style.cssText = "display: flex;";
    for (let j = 0; j < gridNum; j++) {
      const square = document.createElement("div");
      square.classList.add("square");

      square.addEventListener("mouseover", fillSquare);

      row.appendChild(square);
    }
    container.appendChild(row);
  }
};

const createGrid = () => {
  let gridSquareNum;
  do {
    gridSquareNum = +prompt("How many rows do you want? (1-100)", "");
  } while (gridSquareNum <= 0 || gridSquareNum > 100 || isNaN(gridSquareNum));

  buildGrid(gridSquareNum);
};

for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.style.cssText = "display: flex;";
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", fillSquare);

    row.appendChild(square);
  }
  container.appendChild(row);
}

btn.addEventListener("click", createGrid);
