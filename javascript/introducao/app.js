// console
console.log('INTRODUÇÃO');

// javascript possui tipagem dinamica

// variável do tipo primitivo
// #############################
console.log('1 - variável do tipo primitivo')

var name = 'Fabio' // string
var ano = 46 // number
var altura = 1.76 // float
var live = true // boolean
var foor = null // null
var time //undefined  

// variáveis do tipo composto
// #############################
console.log('2 - variáveis do tipo composto')

var fruits = ["morango", "abacaxi", "banana", null, 46, 1.76, true]

var person = {
    name: 'Joao',
    age: 46,
    profession: 'Web developer'
}
person.name = name

// descrobindo o tipo de uma variavel
console.log(typeof fruits)

// concatenação texto e variáveis
// #################################
console.log('3 - concatenação texto e variáveis')

var product = {
    name: 'Camisa',
    price: 18.90
}
var price = 15.60
console.log('O valor do produto ' + product.name + ' é ' + product.price)


// operadores matemáticos
// #########################
console.log('4 - operadores matemáticos')

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


// operadores de atribuição
// ###########################
console.log('5 - operadores de atribuição')
var x = 3
var y = 3

result = x + y;
console.log(result)

x/=y
console.log(x)

var text = 'o melhor produto é '
var product = 'sapato'

text+=product
console.log(text)


// funções
// ##########
console.log('6 - funções')
function action() {
    return 50
}
function sum(number1, number2) {
    return number1 + number2
}
console.log(1 + action())
console.log(sum(10, 50))

// condicional
// ###########
console.log('condicional')
var isActive = false
var message = ''
if (isActive) {
    message = 'esta ativo'
} else {
    message = 'não esta ativo'
}
 console.log(message)

var trafficligth = 'verded'

if (trafficligth  == 'verde') {
    message = 'Pode passar'
} else if (trafficligth == 'amarelo') {
    message = 'Atenção'
} else if (trafficligth == 'vermelho') {
    message = 'Pare'
} else {
    message = 'Valor inválido'
}

console.log(message)

switch (trafficligth) {
    case 'verde':
        message = 'Pode passar'
        break
    case 'amarelo':
        message = 'Atenção'
        break
    case 'vermelho':
        message = 'Pare'
        break
    default:
        message = 'Valor inválido'
}

console.log(message)

// Operadores de comparação
// ###########################
console.log('7 - operadores de comparacao')
if (10 == 10) {
    console.log('10 == 10')
}
if (10 == '10') {
    console.log("10=='10'")
}
if (10 === '10') {
    console.log('ok')
}
if(10!=11){
    console.log('10!=11')
}
if(10 > 11) {
    console.log("10 > 11")
}
if(10<12){
    console.log('10<12')
}
if(10>=10){
    console.log('10>=10')
}
if(10<=11){
    console.log('10<=11')
}
