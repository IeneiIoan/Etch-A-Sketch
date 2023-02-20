const container = document.querySelector(".container");
const reset = document.querySelector(".reset");

function generateGrid(h = 16, w = 16) {
  if (h < 1 || w < 1) {
    return;
  }

  h = h > 50 ? 50 : h;
  w = w > 50 ? 50 : w;

  // make a row for each height
  for (let i = 0; i < h; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    // each individual row should have ${width} amount of square divs
    for (let j= 0; j < w; j++) {
      const square = document.createElement("div");
      square.dataset.lightness = 100;
      // square.textContent = j + 1;
      square.classList.add("square");

      // Add a hover event listener
      square.addEventListener("click", (e) => {
        // update lightness data attribute
        const lightness = Number.parseInt(e.target.dataset.lightness) - 20;
        e.target.dataset.lightness = lightness;
        const randomColor = generateRandomColor(lightness);
        console.log("Random color: ", randomColor);
        e.target.style.backgroundColor = randomColor;
      });
      // when a square is clicked, change the background to black

      row.appendChild(square);
    }

    //append the row to the grid container as a child
    container.appendChild(row);
  }
}

function generateRandomColor(lightness = Math.floor(Math.random() * 100 - 1)) {
  // return Math.floor(Math.random() * (max - min + 1)) + min;

  const hue = Math.floor(Math.random() * 360 + 1);
  const saturation = Math.floor(Math.random() * 100 + 1);

  // hsl = hue(shade), saturation and lightness(lightness)
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

reset.addEventListener("click", (e) => {
  const gridSize = Number.parseInt(prompt("Enter grid size number between 1 and 50: "));

  container.innerHTML = "";
  generateGrid(gridSize, gridSize);
});

generateGrid();