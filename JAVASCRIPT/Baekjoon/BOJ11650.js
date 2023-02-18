let input = require("fs").readFileSync("./example.txt").toString().split("\n");

const N = input.shift();
const arr = input.map((el) => el.split(" ").map((num) => parseInt(num)));

let result = "";
arr
  .sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  })
  .forEach((el) => {
    result += `${el[0]} ${el[1]}\n`;
  });
console.log(result);
