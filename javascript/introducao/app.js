// console
console.log('executando console');

// javascript possui tipagem dinamica

// variável do tipo primitivo
// #############################

var name = 'Fabio' // string
var ano = 46 // number
var altura = 1.76 // float
var live = true // boolean
var foor = null // null
var time //undefined  

// variáveis do tipo composto
// #############################

var fruits = ["morango", "abacaxi", "banana", null, 46, 1.76, true]

var person = {
    name: 'Joao',
    age: 46,
    profession: 'Web developer'
}
person.name = name

// reatribuindo valor
name = true;

console.log(fruits[1].slice(0,2))

// descrobindo o tipo de uma variavel
console.log(typeof fruits)

// concatenação texto e variáveis

var product = {
    name: 'Camisa',
    price: 18.90
}
var price = 15.60
console.log('O valor do produto ' + product.name + ' é ' + product.price)


// operadores matemáticos
// #########################
// Operadores aritméticos binários
// multipllicação, divisão, subtração e divisão
// depende de dois ou mais valores para fazer a operação
var x = 5
var y = 3
var result = 20 + 2 * 5
console.log(result)

// Operadores aritméticos unários
// utiliza um valor para fazer a operação

// ++ incrementar
// -- decrementar
console.log(--x)
