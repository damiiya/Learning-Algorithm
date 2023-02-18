let fs = require("fs");
let input = fs.readFileSync("BOJ1978.txt").toString().trim().split("\n");

const testNum = input.shift();
input = input[0].split(" ").map((item) => +item);
let cnt = 0;

function isPrime(num) {
  if (num === 1) return;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return;
  }
  return num;
}

for (let i = 0; i < testNum; i++) {
  if (isPrime(input[i])) cnt++;
}
console.log(cnt);
