function determinePrimeNumbers(x) {
  if ((x === 0) || (x === 1)) {
    return(`Число ${x} не является ни простым, ни составным`);
  } else if (x >= 2 && x <= 1000 && !isNaN(x)) {
    let i = 2;
    const limit = Math.sqrt(x);
    while (i <= limit) {
      if (x % i === 0) {
      return(`Число ${x} - составное`);
      }
      i += 1
    }
    return(`Число ${x} - простое`);
  } else {
    return("Данные неверны");
  }
}

determinePrimeNumbers();