"use strict";

const fs = require("fs");
const readFile = fs.readFileSync("./dev/stdin").toString();

const N = parseInt(readFile);
let temp = "";
for (let i = 0; i < N; i++) {
  temp += "*";
  console.log(temp);
}
