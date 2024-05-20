let comparaComThis = function(param){
    console.log(this=== param)
}

comparaComThis(global)

//Associando com a função .Bind
const obj ={}
comparaComThis= comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

// Agora com as Arrow Function 
let comparaComThisArrow = param =>console.log(this===param)
comparaComThisArrow(global)

//This pode variar