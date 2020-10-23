//Execicio numero 1
console.log("Exercicio 1: cinco programas, um para cada operação");
let num1 = 15;
let num2 = 6;
console.log(`O primeiro numero é ${num1} o segundo numero é ${num2}`);


let sum = num1 + num2;
console.log("A soma é: " + sum);
let sub = num1 - num2;
console.log("A subtração é: " + sub);
let mult = num1 * num2;
console.log("a multiplicação é: " + mult);
let divi = num1 / num2;
console.log("A divisão é " + divi);
let mod = num1 % num2;
console.log("O resto da divisão é " + mod);
console.log('');

//Exercicio dois

console.log("Exercicio 2: retornando o maior de dois números");

let a = 85;
let b = 100;
console.log("O primeiro numero é: " + a);
console.log("O segundo numero é: " + b);

if (a > b) {
    console.log("O numero maior é: " + a);
} else {
    console.log("O numero maior é: " + b);
}
console.log('');

//Exercicio 3

console.log("Exercicio 3: retornando o maior de tres numeros")

let c = 3;
let d = 12;
let e = 45;
console.log("O primeiro numero é: " + c);
console.log("O segundo numero é: " + d);
console.log("O terceiro numero é: " + e);

if(c > d && c >e){
    console.log("O primeiro numero é o maior: " + c);
}else if (d > c && d > e) {
    console.log("O segundo numero é o maior: " + d);
} else {
    console.log("O terceiro numero é o maior: " + e);
}
console.log('');

//Exercicio 4
console.log("Exercicio 4: variavel positiva, negativa ou zero")

let variavel1 = -12;
console.log("O valor da variavel é: " + variavel1);

if(variavel1 > 0) {
    console.log("A variavel é positiva");
}else if (variavel1 == 0) {
    console.log("A variavel é zero")
} else {
    console.log("A variavel é negativa");
}




