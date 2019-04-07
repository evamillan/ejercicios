function sortNumber(number) {
  const digits = Array.from(number.toString()).map(Number);
  const sortedDigits = digits.sort((a, b) => b - a);

  return Number(sortedDigits.join(''));
}
