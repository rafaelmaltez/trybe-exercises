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
console.log(`O maior valor é: ${maiorValor}`);
console.log(" ");
console.log("----------------------------------");
//Exercicio 6
console.log('Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"');
console.log(" ");
let numerosImpares = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0) {
        numerosImpares +=1;
    }
}
if(numerosImpares == 0){
    console.log("Nenhum valor impar encontrado");
} else {
    console.log(`Existem ${numerosImpares} numeros impares no array`);
}
console.log(" ");
console.log("----------------------------------");
//Exercicio 7
console.log("Exercicio 7: Utilizando for, descubra qual o menor valor contido no array e imprima-o")
let menorValor = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] < menorValor) {
        menorValor = numbers[i];
    }
}
console.log(`O menor valor é: ${menorValor}`);
console.log(" ");
console.log("----------------------------------");
//Exercicio 8
console.log("Exercicio 8: Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado")
console.log(" ");
let arrayAteVinteCinco =[];
for (let i = 0; i <= 24; i +=1) {
    arrayAteVinteCinco[i] = i + 1;
}
console.log(`Array ate 25: ${arrayAteVinteCinco} `);
console.log(" ");
console.log("----------------------------------");
//Exercicio 9
console.log("Exercicio 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.")
console.log(" ");
for (let i = 0; i <= 24; i +=1) {
    console.log(arrayAteVinteCinco[i] / 2);
}
console.log(" ");
console.log("----------------------------------");
