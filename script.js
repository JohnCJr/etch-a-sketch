"use strict";

const container = document.querySelector(".container");
const gridDimension = 50;
let tile = "";

// loops to create row divs that will contain the tiles
for (let i = 0; i < gridDimension; i++) {
  const row = document.createElement("div"); // creates new div
  row.setAttribute("class", "row"); // gives the div a class name of row

  tile = ""; // resets the tile content

  // loop will fill tile content with the specified number of divs
  for (let j = 0; j < gridDimension; j++) {
    tile += `<div class = "tile num${j + 1}"></div>`;
  }
  row.innerHTML = tile;

  container.appendChild(row);
}

const allTiles = document.querySelectorAll(".tile");

allTiles.forEach((tiles) =>
  tiles.addEventListener("mouseover", () => {
    tiles.setAttribute("style", "background-color: black;");
  })
);
