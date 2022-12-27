function getSum(x) {
  return function(y) {
    return x + y
  }
}

const x = 5;
const y = 10;

console.log(getSum(x)(y));