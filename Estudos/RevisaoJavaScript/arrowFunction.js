let dobro = function(a){
    return 2 * a;
}

dobro = () =>{
    return 2 * a;
}

dobro = a => 2 * a; // return implicito

//testando
console.log(dobro(Math.PI))

//Outro Exemplo Function Arrow
let Ola = function(){
    return "Olá"
}

Ola = () => 'Olá';

Ola = _ => "Olá"; // Possui um parametro "_"
console.log(Ola())
