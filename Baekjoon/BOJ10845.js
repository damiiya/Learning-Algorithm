let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = input.shift();

let queue = [];
let result = [];

for (let i = 0; i < N; i++) {
  let action = input[i].split(" ");
  switch (action[0]) {
    case "push":
      queue.push(action[1]);
      break;
    case "pop":
      result.push(queue.shift() || -1);
      break;
    case "size":
      result.push(queue.length);
      break;
    case "empty":
      result.push(queue[0] ? 0 : 1);
      break;
    case "front":
      result.push(queue[0] || -1);
      break;
    case "back":
      result.push(queue[queue.length - 1] || -1);
      break;
  }
}
console.log(result.join("\n"));
