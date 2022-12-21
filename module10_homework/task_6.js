const arr = [1, 2, 3, 4, 5];

let equality = true;
const sample = arr[0];

for (let item of arr) {
  if (item !== sample) {
    equality = false;
  }
}

console.log(equality);