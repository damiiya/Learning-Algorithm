let fs = require("fs");
let input = fs.readFileSync("BOJ10828-1.txt").toString().split("\n");

const N = input.shift();
let stack = [];
let result = [];

for (let i = 0; i < N; i++) {
  let action = input[i].split(" ");
  switch (action[0]) {
    case "push":
      stack.push(action[1]);
      break;
    case "pop":
      result.push(stack.pop() || -1);
      break;
    case "size":
      result.push(stack.length);
      break;
    case "empty":
      result.push(stack[0] ? 0 : 1);
      break;
    case "top":
      result.push(stack[stack.length - 1] || -1);
      break;
  }
}
console.log(result.join("\n"));
