let input = require("fs").readFileSync("./example.txt").toString().split("\n");

const N = input.shift();
const result = quickSort(input).join("\n");

// 시간초과
// for (let i = 0; i < N; i++) {
//   console.log(parseInt(arr[i]));
// }

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  const sortLeft = quickSort(leftArr);
  const sortRight = quickSort(rightArr);
  return [...sortLeft, pivot, ...sortRight];
}
console.log(result);
