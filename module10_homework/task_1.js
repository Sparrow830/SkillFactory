let str = prompt("Пожалуйста, введите любое число");

if (!str.trim()) {
  console.log("Упс, кажется, вы ошиблись");
} else {
  let x = +str;

  if (typeof x === 'number' && !isNaN(x)) {
    if (x % 2 === 0) {
      console.log("Это число чётное")
    } else {
      console.log("Это число нечётное")
    }
  } else {
    console.log("Упс, кажется, вы ошиблись")
  }
}