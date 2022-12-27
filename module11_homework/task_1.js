function getIntegersCount() {
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.1, 11.5, 12.9, "A", "B", "C", "!", "?", " "], length = arr.length, countEven = 0, countOdd = 0, countNull = 0;

for (let i = 0; i < length; i++) {
  let x = arr[i];
  if (x % 2 == 0) if (x != 0) if (x != null) {
    countEven++;
  }
  if (x % 2 == 1) {
    countOdd++;
  }
  if (parseInt(x) == 0) {
    countNull++;
  }
}

console.log("Количество чётных чисел (не считая нули): "+countEven);
console.log("Количество нечётных чисел: "+countOdd);
console.log("Количество нулей: "+countNull);
}

getIntegersCount();