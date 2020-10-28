//Parte I - Objetos e For/In
//Usando o objeto abaixo, faça os exercícios a seguir:

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  // Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
  console.log(`Bem-vinda, ${info.personagem}`);
  console.log("")
  console.log("_________________")
  console.log("")
//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = "Sim";
console.log(info);
console.log("")
console.log("_________________")
console.log("")

//Faça um for/in que mostre todas as chaves do objeto.

for (let chave in info) {
    console.log(chave);
}
console.log("")
console.log("_________________")
console.log("")
//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for (let chave in info) {
    console.log(info[chave]);
}
//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".


let info2 = { 
    personagem: "Tio Patinhas",
    origem:"Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
  };
  //Valor esperado no console:

  //Margarida e Tio Patinhas
//Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
//Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
//Ambos recorrentes // Atenção para essa última linha!

