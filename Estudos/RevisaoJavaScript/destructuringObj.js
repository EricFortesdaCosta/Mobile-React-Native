const pessoa = {
    nome: "Eric",
    idade: 20,
    altura: 1.60,
    endereco: {
        rua: "Rua benjamin Constant",
        bairro: "Boa Vista",
        numero: 270
    }
}

//Ultilizando o Destructuring com um Objeto.
const {nome, idade} = pessoa;

console.log(idade, nome);

//Criando variaveis e Modificando os nomes delas
const {nome: n, idade: i} = pessoa;

console.log(n)

//Criando variaveis de objetos dentro do objeto.
const {endereco: {rua: r, bairro: b, numero: num}} =pessoa;

console.log(r,b,num);
