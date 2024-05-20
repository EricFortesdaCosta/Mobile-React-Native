const pessoa = {
    saudacao: "Olá, Bom dia ",
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()

//Maneira errada de referenciar uma função de um objeto com this
const falar = pessoa.falar
falar() //conflito entre paradigmas: Funcional e POO

//função bind para referenciar o objeto que deseja incluir no This
const falarCorreto = pessoa.falar.bind(pessoa)
falarCorreto()