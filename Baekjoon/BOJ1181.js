let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = input.shift();
const sorted = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
const result = new Set(sorted);
console.log(Array.from(result).join("\n"));
