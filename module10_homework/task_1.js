let x = +prompt("Пожалуйста, введите любое число");

if (typeof x === 'number' && !isNaN(x)) {
  if (x % 2 === 0) {
    console.log("Это число чётное")
  } else {
    console.log("Это число нечётное")
  }
} else {
  console.log("Упс, кажется, вы ошиблись")
}