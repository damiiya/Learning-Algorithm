let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().trim().split("\n");

const N = input.shift();

let Deque = [];
let result = [];

for (let i = 0; i < N; i++) {
  let action = input[i].split(" ");
  switch (action[0]) {
    case "push_front":
      Deque.unshift(action[1]);
      break;
    case "push_back":
      Deque.push(action[1]);
      break;
    case "pop_front":
      result.push(Deque.shift() || -1);
      break;
    case "pop_back":
      result.push(Deque.pop() || -1);
      break;
    case "size":
      result.push(Deque.length);
      break;
    case "empty":
      result.push(Deque[0] ? 0 : 1);
      break;
    case "front":
      result.push(Deque[0] || -1);
      break;
    case "back":
      result.push(Deque[Deque.length - 1] || -1);
      break;
  }
}
console.log(result.join("\n"));
