let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Exercicio 1
console.log(`Array numbers: [${numbers}] `);
console.log(" ")
console.log("Exercicio 1:percorra o array imprimindo todos os valores nele contidos com a função console.log()");
console.log(" ")
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
console.log("----------------------------------");
//Exercicio 3
console.log("Exercicio 3: calcule e imprima a média aritmética dos valores contidos no array");
console.log(" ");
let mediaAritimetica = 0;
for (let i = 0; i < numbers.length; i++) {
    mediaAritimetica = resultadoSoma / numbers.length;
}
console.log(`A media aritimetica é: ${mediaAritimetica}`);
console.log(" ");
console.log("----------------------------------");
//Exercicio 4
console.log("Exercicio 4 :Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 'valor maior que 20'. Caso não seja, imprima a mensagem: 'valor menor ou igual a 20'")
console.log(" ");
if(mediaAritimetica > 20){
    console.log("Maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}
console.log(" ");
console.log("----------------------------------");
//Exercicio 5
console.log("Exercicio 5: Utilizando for, descubra qual o maior valor contido no array e imprima-o")
console.log(" ");
let maiorValor = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maiorValor) {
        maiorValor = numbers[i];
    }
}
console.log(`O maior valor é: ${maiorValor}`)