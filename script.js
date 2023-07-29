"use strict";

const container = document.querySelector(".container");
const gridDimension = 16;
let tile = "";

// loops to create 16x16 tiles inside the container div
for (let i = 0; i < gridDimension; i++) {
  for (let j = 0; j < gridDimension; j++) {
    tile += `<div class = "tile num${i}-${j}"></div>`;
    container.innerHTML = tile;
  }
}
