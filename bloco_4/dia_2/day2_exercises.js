let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Exercicio 1
console.log(`Array numbers: [${numbers}] `);
console.log(" ")
console.log("Exercicio 1:percorra o array imprimindo todos os valores nele contidos com a função console.log()");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log("----------------------------------");
//Exercicio 2
console.log("Exercicio 2: somar todos os valores contidos no array e imprimir o resultado");
let resultadoSoma = 0;
for (let i = 0; i < numbers.length; i++) {
    resultadoSoma += numbers[i];
}
console.log(" ");
console.log(`O resultado da soma de todos os elementos é: ${resultadoSoma}`);
console.log(" ");

