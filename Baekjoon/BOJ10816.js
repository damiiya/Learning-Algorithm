let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = input.shift();
const userSet = input.shift().split(" ");
const M = input.shift();
const testSet = input.shift().split(" ");
let result = [];
let userMap = new Map();

for (i of userSet) {
  if (userMap.has(i)) {
    userMap.set(i, userMap.get(i) + 1);
  } else userMap.set(i, 1);
}

for (j of testSet) {
  if (userMap.has(j)) result.push(userMap.get(j));
  else result.push(0);
}

console.log(result.join(" "));
