function typeOfNumber(num) {
  if (num === 0) return "neutro";
  if (typeof num !== 'number') return "o valor deve ser um numero";
  return num > 0 ? "positivo" : "negativo";
}

module.exports = typeOfNumber;