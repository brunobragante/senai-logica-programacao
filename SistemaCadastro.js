//Montar uma base de dados com os dados: nome, idade, profissão
//Aceitar apenas maiores de idade

let entrada1 = require("readline-sync");

let Nome = entrada1.question("Informe o nome completo ");


let entrada2 = require("readline-sync");

let Idade = entrada2.question("Informe sua idade ");

if(Idade >= 18){
    console.log("Seja bem vindo!");

} else {
    console.log("Cadastro exclusivo para maiores de idade.")
}

let entrada3 = require("readline-sync");

let Profissão = entrada3.question("Informe sua profissão ");

console.log("Cadastro Efetivado");