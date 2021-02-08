//3- Agora inverta o lado do triângulo.
let n = 9;
let espaco = "";
let asterisco = "";

for (line =1; line <= n; line++) {
    
    for ( i = line; i < n; i++) {
        espaco += " ";
    }

    for (j = 1; j <= line; j++) {
        asterisco += "*";
    }
console.log(`${espaco} + ${asterisco}`);
espaco = "";
asterisco = "";
}

