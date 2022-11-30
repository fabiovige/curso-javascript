// console
console.log('executando console');

// javascript possui tipagem dinamica

// variável do tipo primitivo

var name = 'Fabio' // string
var ano = 46 // number
var altura = 1.76 // float
var live = true // boolean
var foor = null // null
var time //undefined  

// variáveis do tipo composto

// array
var fruits = ["morango", "abacaxi", "banana", null, 46, 1.76, true]

// objeto
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
