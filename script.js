"use strict";

const container = document.querySelector(".container");
const gridDimension = 100;
let tile = "";

// loops to create 16x16 tiles inside the container div
for (let i = 0; i < gridDimension; i++) {
  tile += `<div class = "tile num${i + 1}"></div>`;
  container.innerHTML = tile;
}
