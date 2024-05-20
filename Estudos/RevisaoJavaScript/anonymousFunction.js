const soma = function (x, y){
    return x + y
}

const imprimirResultado = function (a,b ,operacao = soma){
    console.log(operacao(a, b))

}

imprimirResultado(53,3)
imprimirResultado(3, 5, soma)
imprimirResultado(3, 4 , function(x, y){
    return x - y
})

//Arrow Function anonima
imprimirResultado(3,4, (x, y) => x * y)

//Criando Anomymous function dendo de Objetos
const pessoa = {
    falar : function(){
        console.log("Olá")
    }
}

pessoa.falar()