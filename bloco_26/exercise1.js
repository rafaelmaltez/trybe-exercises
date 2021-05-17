function multiply(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject(new Error("Informe apenas numeros"));
    };
    const result = (a + b) * c;

    if (result < 50) {
      reject(new Error("Valor muito baixo"));
    }
    resolve(result)
  }).then(data => console.log(`O valor é ${data}`)).catch(e => console.log(e.message));
};
