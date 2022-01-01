"use strict";

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().split(" ");

const month = parseInt(input[0]);
const day = parseInt(input[1]);

const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let sumDay = 0;
for (let i = 1; i < month; i++) {
  if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
    sumDay += 31;
  } else if (i == 2) {
    sumDay += 28;
  } else {
    sumDay += 30;
  }
}
sumDay += day;
sumDay = sumDay % 7;
console.log(week[sumDay]);
