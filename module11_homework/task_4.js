function countNumbers(x, y){
  let arr = [];
  for (let i = x; i <= y; i++) {
    arr.push(i);
  }
  let arrStart = 0, arrCount = arr.length - 1;
  const intervalId = setInterval(function() {
    console.log(arr[arrStart]);
    if(arrStart == arrCount) {
      clearInterval(intervalId);
    } else {
      arrStart++;
    }
  }, 1000);
}

countNumbers(5, 15);