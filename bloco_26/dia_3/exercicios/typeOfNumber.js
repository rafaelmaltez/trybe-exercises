function typeOfNumber(num) {
  if (num === 0) return "neutro";
  return num > 0 ? "positivo" : "negativo";
}

module.exports = typeOfNumber;