"use strict";

const container = document.querySelector(".container");
let gridDimension = 50;
let tile = "";

function setUserDimension() {
  let gridCount = "";

  while (
    gridCount < 1 ||
    gridCount > 100 ||
    !Number.isInteger(Number(gridCount))
  ) {
    gridCount = prompt(
      "Enter the number squares per side of the grid. Number cannot be less than 1 or greater than 100."
    );
    if (gridCount === null) {
      break;
    }
    if (
      gridCount < 1 ||
      gridCount > 100 ||
      (!Number.isInteger(Number(gridCount)) && gridCount !== null)
    ) {
      alert("invalid input. Please try again.");
    }
  }
  return gridCount;
}

function setGrid(currentGrid) {
  // loops to create row divs that will contain the tiles
  for (let i = 0; i < currentGrid; i++) {
    const row = document.createElement("div"); // creates new div
    row.setAttribute("class", "row"); // gives the div a class name of row

    tile = ""; // resets the tile content

    // loop will fill tile content with the specified number of divs
    for (let j = 0; j < currentGrid; j++) {
      tile += `<div class = "tile"></div>`;
    }
    row.innerHTML = tile;

    container.appendChild(row);
  }
}

function clearGrid() {
  let previousRows = document.querySelectorAll(".row");
  previousRows.forEach((row) => {
    row.remove();
  });
}

function setTileEvent(currentTiles) {
  currentTiles.forEach((tiles) =>
    tiles.addEventListener("mouseover", () => {
      if (!tiles.classList.contains("changed")) {
        tiles.classList.add("changed");
        tiles.setAttribute(
          "style",
          `background-color: ${getRandomRgbColor()};` // uses function to get assign a random rgb color
        );
      }
      tiles.setAttribute(
        "style",
        `background-color: ${darkenRgbColor(tiles)};`
      );
    })
  );
}

// returns a string with a rgb value between 0 and 255
function getRandomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function darkenRgbColor(tile) {
  let tileRgb = tile.style.backgroundColor;

  let tileColors = tileRgb
    .substring(tileRgb.indexOf("(") + 1, tileRgb.lastIndexOf(")"))
    .split(/,\s*/);
  let r = tileColors[0];
  let g = tileColors[1];
  let b = tileColors[2];

  // makes sure that the values do not get lower than zero
  let newR = r - r * 0.1 < 0 ? r : r - r * 0.1;
  let newG = g - g * 0.1 < 0 ? g : g - g * 0.1;
  let newB = b - b * 0.1 < 0 ? b : b - b * 0.1;

  return `rgb(${newR}, ${newG}, ${newB})`;
}

setGrid(gridDimension);

let allTiles = document.querySelectorAll(".tile");
const setGridButton = document.querySelector("button");

setTileEvent(allTiles);

setGridButton.addEventListener("click", () => {
  gridDimension = setUserDimension();

  console.log(gridDimension);

  // won't trigger functions to clear adn create new grid
  if (gridDimension !== null) {
    clearGrid();

    setGrid(gridDimension);

    allTiles = document.querySelectorAll(".tile");

    setTileEvent(allTiles);
  }
});
