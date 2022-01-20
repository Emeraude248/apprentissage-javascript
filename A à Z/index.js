let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
  }
  total /= x;
  return total;
}

function multiplication(x) {
  total *= x;
  return total;
}

function reset() {
  total = 0;
}
