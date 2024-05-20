// Não podemos criar Variaveis com palavras reservadas
//Variaveis precisam ter nome significativos
//não pode começar o nome de uma variavel com numero

//Tipos de Variaveis 
//Var{
var full_name = "Alexander Smith"
/*
*VAR é usado para declarar nossa variável
*full_nameé o nome da nossa variável
*=diz ao nosso programa que queremos atribuir um valor à nossa variável (isso é chamado de assignment operator)
*Alexander Smithé o valor que nossa variável armazenará
*/
/*
Let & Const
As variáveis ​​locais são declaradas dentro do escopo de um determinado bloco de código. 
Para declarar uma variável local, você deve usar lete const, que recebem escopo de bloco.
A seguir estão as regras gerais para usar esses tipos de variáveis:

Use const tanto quanto possível, a menos que você precise redeclarar ou levantar uma variável . 
Use let se estiver trabalhando com loops .
Não use espaços ou traços 
Use var apenas se:
Você está trabalhando em código legado , 
Você precisa de uma variável que possa redeclarar ou
Você precisa de uma variável acessível em qualquer lugar do programa (ou seja, globalmente) .

Aqui está um exemplo de uma variável global em JavaScript:
*/
/*
var nome = "Jimmy Peterson" ;
*/

//Aqui está um exemplo de let uso em um programa:

let day = "Monday";

let flavor = "Vanilla";

if (day === "Monday") {
  let flavor = "Choc-Chip";
  console.log(`It is Monday. Have a scoop of ${flavor} ice cream at lunch.`);
}
console.log(`It is not Monday. Have a scoop of ${flavor} ice cream at lunch.`);

/*Variavel em textos escritos no terminal
Pode usar 

"texto"+variavel+"texto"
`text ${Variavel} text`
!!se atentar de usar `` !!
*/
/*
Math.trunc()
O método Math.trunc()retorna a parte inteira de um número, descartando suas casas decimais.
*/
console.log(Math.trunc(13.37));

console.log(Math.trunc(42.84));

console.log(Math.trunc(0.123));

console.log(Math.trunc(-0.123));

/*toFixed()
o método .toFixed() arredonda o número para cima, isto é, se temos, por exemplo 11.123, o valor fica 11.12, já se temos 20.555, o valor fica 20.56.
 */
const salarioHora = 332.123
const total = salarioHora.toFixed(2);

/* Tipos Primitivos 
String. Texto
Number. Numeros
Boolean. Falso e Verdadeiro
Null. Ausencia de valor
undefined. Nenhum valor definido
Symbol. Simbulos
*/
/*
Operadores de Atribuição

Atribuição	
x = y	Significado x = y

Atribuição de adição	
x += y Significado	x = x + y

Atribuição de subtração	
x -= y Significado	x = x - y

Atribuição de multiplicação	
x *= y Significado	x = x * y

Atribuição de divisão	
x /= y Significado	x = x / y

Atribuição de resto	
x %= y Significado	x = x % y

Atribuição exponencial	
x **= y Significado	x = x ** y

Atribuição bit-a-bit por deslocamento à esquerda	
x <<= y Significado	x = x << y

Atribuição bit-a-bit por deslocamento à direita	
x >>= y Significado	x = x >> y

Atribuição de deslocamento bit-a-bit à direita não aprovada	
x >>>= y Significado	x = x >>> y

Atribuição AND bit-a-bit	
x &= y Significado	x = x & y

Atribuição XOR bit-a-bit	
x ^= y Significado	x = x ^ y

Atribuição OR bit-a-bit	
x |= y Significado	x = x | y

Operadores de comparação

Igual ( ==)	
Retorna verdadeiro caso as operações sejam iguais.	
3 == var1 "3" == var1 3 == '3'

Não é igual ( !=)	
Retorna verdadeiro caso as operações não sejam iguais.	
var1 != 4 var2 != "3"

Estritamente igual ( ===)	
Retorna verdadeiro caso as operações sejam iguais e do mesmo tipo..	
3 === var1

Estritamente não igual ( !==)	
Retorna verdadeiro caso as operações não sejam iguais e/ou não sejam do mesmo tipo.	
var1 !== "3" 3 !== '3'

Maior que ( >)	
Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.	
var2 > var1 "12" > 2

Maior que ou igual ( >=)	
Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.	
var2 >= var1 var1 >= 3

Menor que ( <)	
Retorna verdadeiro caso o operar da esquerda seja menor que o da direita.	
var1 < var2 "12" < "2"

Menor que ou igual ( <=)	
Retorna verdadeiro caso o operando da esquerda seja menor ou igual à direita.	
var1 <= var2 var2 <= 5

Operadores aritméticos
(%) Resto 
12% 5 retorna 2.

(++) Operador unário. Adiciona um ao seu operando
Se x é 3, então ++ x defina x como 4

(--) Operador unário. Subtrai um de sua operação.
Se x é 3, então -- x defina x como 2

(-) Negação 
Se x é 3, então - x retorna -3.

(+) Adição
+"3" retorna 3. + true retorna 1.

(**) Exponenciação
2 ** 3 retorna 8,10 ** -1 retorna 0,1
*/