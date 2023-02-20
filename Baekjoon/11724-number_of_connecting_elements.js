let fs = require("fs");
let input = fs.readFileSync("./example.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map((el) => +el);

let link = [];
for (let i = 1; i <= n; i++) {
  link[i] = [];
}

let visited = new Array(n + 1).fill(false);
for (let i = 0; i < m; i++) {
  let [a, b] = input[i + 1].split(" ").map((el) => +el);
  link[a].push(b);
  link[b].push(a);
}

function DFS(start) {
  visited[start] = true;
  for (let i = 0; i < link[start].length; i++) {
    let next = link[start][i];
    if (!visited[next]) {
      DFS(next);
    }
  }
}

let result = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    DFS(i);
    result++;
  }
}

console.log(result);
