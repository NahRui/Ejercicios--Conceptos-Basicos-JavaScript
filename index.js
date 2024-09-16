// EJERCICIO 1

//Eejecicio 1.1 Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = 'Hulk'

//Ejercicio 1.2 Crea una variable llamada x, signa el valor 50 a ella.
let x = 50

//Ejericio 1.3 Crea una variable llamad 'h' con el valor 5 y otra 'y' con el valor 10.
let h = 5
let y = 10

//Ejercicio 1.4 Crea otra variable 'z' y asignale el valor de 'h' + 'y'.
let z = h + y

// EJERCICIO 2

// Ejercicio 2.1 Dado el siguiente objeto, cambia el valor de la propiedad age a 25. const character = {name: 'Jack Sparrow', age: 10};
const character = { name: 'Jack Sparrow', age: 10 }
character.age = 25

// Ejercicio 2.2 Declara tres variables con los nombres y valores siguientes: firstName = 'Jon'; lastName = 'Snow'; age = 24; Muestralos por consola de esta forma: 'Soy Jon Snow, tengo 24 años y me gustan los lobos.'
let firstName = 'Jon'
let lastName = 'Snow'
let age = 24
console.log(
  `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
)

// Ejercicio 2.3 Dado el siguiente codigo, imprime con un console.log la suma del precio de ambos juguetes. const toy1 = {name: 'Buss myYear', price: 19}; const toy2 = {name: 'Rallo mcKing', price: 29};
const toy1 = { name: 'Buss myYear', price: 19 }
const toy2 = { name: 'Rallo mcKing', price: 29 }
console.log(toy1.price + toy2.price)

// Ejercicio 2.4 Dado el siguiente codigo, actualiza el valor de la variable globalBasePrice a 25000 y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice mas el valor de la variable globalBasePrice. let globalBasePrice = 10000; const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000}; const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
let globalBasePrice = 10000
const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 }
const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 }
// Actializa globalBasePrice
globalBasePrice = 25000
// Actualiza finalPrice car1
car1.finalPrice = car1.basePrice + globalBasePrice
// Actualiza finalPrice car2
car2.finalPrice = car2.basePrice + globalBasePrice
// Comprueba los cambios con console.log
console.log(globalBasePrice)
console.log(car1)
console.log(car2)

// EJERCICIO 3

// Ejercicio 3.1 Multiplica 10 por 5 y muestra el resultado mediante console.
console.log(10 * 5)

// Ejercicio 3.2 Divide 10 por 2 y muestra el resultado en un console.
console.log(10 / 2)

// Ejercicio 3.3 Muestra mediante un console el resto de dividir 15 por 9.
console.log(15 % 9)

// Ejercicio 3.4 Usa el correcto operador de asignacion que resultara en o = 15, teniendo dos variables p = 10 y j = 5.
let p = 10
let j = 5
let o = p
o += j

// Ejercicio 3.5 Usa el correcto operador de asignacion que resultara en i = 50, teniendo dos variables c= 10 y m = 5.
let c = 10
let m = 5
let i = c
i *= m

// EJERCICIO 4

// Ejercicio 4.1 Consigue el valor "Hulk" del array de avengers y muestralo por consola. const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])

// Ejercicio 4.2 Cambia el primer valor de avengers a "IRON MAN", const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers[0] = 'IRON MAN'

// Ejercicio 4.3 console nuemero de elementos en el array usando la propiedad correcta de Array. const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers.length)

// Ejercicio 4.4 Añade dos elementos al array: "Morty" y "Summer". Muestra en consola el ultimo personaje del array. const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// Ejercicio 4.5 Elimina el ultimo elemento del array y muestra el primero y el ultimo por consola. const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters.pop()

console.log(rickAndMortyCharacters[0])
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

// Ejercicio 4.6 Elimina el segundo elemento del array y muestra el array por consola. const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const rickAndMortyCharacters = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]

rickAndMortyCharacters.splice(1, 1)

console.log(rickAndMortyCharacters)

// EJERCICIO 5

// Ejercicio 5.1
const number1 = 10
const number2 = 20
const number3 = 2

if (number1 === 10) {
  console.log('number1 es estrictamente igual a 10')
}
if (number2 / number1 === 2) {
  console.log('number2 dividido entre number1 es igual a 2')
}
if (number1 !== number2) {
  console.log('number1 es estrictamente distinto a number2')
}
if (number3 != number1) {
  console.log('number3 es distinto a number1')
}
if (number3 * 5 === number1) {
  console.log('number3 por 5 es igual a number1')
}
if (number3 * 5 === number1 && number1 * 2 === number2) {
  console.log(
    'number3 por 5 es igual a number1 y number1 por 2 es igual a number2'
  )
}
if (number2 / 2 === number1 || number1 / 5 === number3) {
  console.log(
    'number2 entre 2 es igual a number 1 o number1 entre 5 es igual a number3'
  )
}

// EJERCICIO 6

// Ejercicio 6.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let i = 0; i < 10; i++) {
  console.log(i)
}

// Ejercicio 6.2 Crea un bucle for que vaya desde 0 a 9 y muestra por consola solo cuando el resto del numero dividido entre 2 sea 0.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Ejercicio 6.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle y cambia el mensaje en la decima vuelta a 'Dormido!'.
for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    console.log('Intentando dormir')
  } else {
    console.log('Dormido!')
  }
}

// EJERCICIO 7

// Ejercicio 7.1 Completa la funcion que tomando dos numeros como argumento devuelva el mas alto. function sum (numberOne , numberTwo){ //insert code here }
function sum(numberOne, numberTwo) {
  return Math.max(numberOne, numberTwo)
}

// EJERCICIO 8

// Ejercicio 8.1 Busca la palabra mas larga. Completa la funcion que tomando un array de strings como argumento devuelva el mas largo, en caso de que dos strings tengan la misma longitud debera devolver el primero. Puedes esar este array para probar tu funcion: const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spidermn", "Captain M."]; function findLongestWord(param){ //insert code}
function findLongestWord(param) {
  return param.reduce((longest, current) => {
    return current.length > longest.length ? current : longest
  })
}
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
console.log(findLongestWord(avengers)) // Output: "Captain A."

// EJERCICIO 9

// Ejercicio 9.1 Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la funcion denominada sumAll que toma un array de numeros como argumento y devuelve la suma de todos los numeros de la matriz. Puedes usar este array para probar tu funcion: const numbers = [1, 2, 3, 5, 45, 37, 58]; funtion sumAll(param){ //insert code }
function sumAll(param) {
  return param.reduce((sum, current) => sum + current, 0)
}
const numbers = [1, 2, 3, 5, 45, 37, 58]
console.log(sumAll(numbers)) // Output: 151

// EJERCICIO 10

// Ejercicio 10.1 Calcular un promedio (media) es una tarea extremadamente comun. Puedes usar este array para probar tu funcion: const nuumbers = [12, 21, 38, 5, 45, 37, 58]; function average(param){ //insert code }
function average(param) {
  return param.reduce((sum, current) => sum + current, 0) / param.length
}
const numbers = [12, 21, 38, 5, 45, 37, 58]
console.log(average(numbers)) // Output: 30.857142857142858

// EJERCICIO 11

// Ejercicio 11.1 Calcular promedio de strings: Crea una funcion que reciba por parametro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu funcion: const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']; function averageWord(param){ //insert code }
function averageWord(param) {
  let sum = 0
  let count = 0

  for (let element of param) {
    if (typeof element === 'number') {
      sum += element
    } else if (typeof element === 'string') {
      sum += element.length
    }
    count++
  }

  return sum / count
}
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']
console.log(averageWord(mixedElements))

// EJERCICIO 12

// Ejercicio 12.1 Valores unicos: Crea una funcion que reciba por parametro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu fincion: const duplicated = [ 'sushi', 'pizza', 'burguer', 'potatoe', 'pasta', 'ice-cream', 'pizza', 'chicken', 'onion rings', 'pasta', 'soda']; function removeDuplicates(param){ //insert code }
function removeDuplicates(param) {
  return [...new Set(param)]
}
const duplicated = [
  'sushi',
  'pizza',
  'burguer',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
console.log(removeDuplicates(duplicated))

// EJERCICIO 13

// Ejercicio 13.1 Buscador de nombres: Crea una funcion que reciba por parametro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el alemento, en caso que existan nos devuelve un true y la posicion de dicho elemento y por la contra un false. Puedes usar este array para probar tu funcion: const nameFinder = ['Peter', 'Steve', 'Tony', 'Natasha', 'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica', 'Marc']; function finderName(param, name){ //insert code }
function finderName(param, name) {
  const index = param.indexOf(name)
  if (index !== -1) {
    return [true, index]
  }
  return false
}
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

console.log(finderName(nameFinder, 'Tony')) // [true, 2]
console.log(finderName(nameFinder, 'Hulk')) // false

// EJERCICIO 14

// Ejercicio 14.1 Contador de repeticiones: Crea una funcion que nos devuelva el numero de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu funcion: const counterWords = [ 'code', 'repeat', 'eat', 'sleep', 'code', 'enjoy', 'sleep', 'code', 'code', 'enjoy', 'upgrade', 'code']; function repeatCounter(param){ //insert code }
function repeatCounter(param) {
  return param.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1
    return count
  }, {})
}
console.log(repeatCounter(counterWords))

// EJERCICIO 15

// Ejercicio 15.1 Usa includes: Haz un blucle y muestra por consola todos aquellos valores del array que incluyan la palabra "camiseta". Usa la funcion .inclues de javscript. const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]
for (let product of products) {
  if (product.toLowerCase().includes('camiseta')) {
    console.log(product)
  }
}

// EJERCICIO 16

// Ejercicio 16.1 Probando for...of: Usa un bluce forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. Puedes usar este array: const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]
for (let place of placesToTravel) {
  console.log(place)
}

// EJERCICIO 17

// Ejercicio 17.1 Probando For...in: Usa un for...in para imprimir por consola los datos del alienigenia...Puedes usar este objeto: const alien = { name: 'Wormuck', race: 'Cucusumusu', planet: 'Eden', weight: '259kg' }
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
for (let property in alien) {
  console.log(`${property}: ${alien[property]}`)
}

// EJERCICIO 18

// Ejercicio 18.1 Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Puedes usar este array: const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    placesToTravel.splice(i, 1)
  }
}
console.log(placesToTravel)

// EJERCICIO 19

// Ejercicio 19.1 Mixed For e includes: Usa un bucle for paara recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la funcion() .includes de javascript para comprobarlo. Puedes usar este array: const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
for (let i = toys.length - 1; i >= 0; i--) {
  if (toys[i].name.toLowerCase().includes('gato')) {
    toys.splice(i, 1)
  }
}
console.log(toys)

// EJERCICIO 20

// Ejercicio 20.1 For...of avanzado: Usa bucle for...of para recorrer todos los juguetes y añade los que tengan mas e 15 ventas (sellCount) al array popularToys. Imprimelo por consola ... puedes usar este array: const popularToys = []; const toys = [{id: 5, name: 'Buzz MyYear', sellCount: 10}, {id: 11, name: 'Action Woman', sellCount: 24}, {id: 23, name: 'Barbie Man', sellCount: 15}, {id: 40, name: 'El gato con Guantes', sellCount: 8},{id: 40, name: 'El gato felix', sellCount: 35}]
const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
for (let toy of toys) {
  if (toy.sellCount > 15) {
    popularToys.push(toy)
  }
}
console.log(popularToys)

// EJERCICIO 21

// Ejercicio 21.1 Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad precedido del texto "Usuarios mayores de edad:". const users = [{name: "Tony", years: 43}, {name: "Peter", years: 18}, {name: "Natasha", years: 14}, {name: "Bruce", years: 32}, {name: "Khamala", years: 16}];
const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
console.log('Usuarios menores de edad:')
for (let user of users) {
  if (user.years < 18) {
    console.log(user.name)
  }
}
console.log('Usuarios mayores de edad:')
for (let user of users) {
  if (user.years >= 18) {
    console.log(user.name)
  }
}

// EJERCICIO 22

// Ejercicio 22.1 Usa un for para reemplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']; const foodSchedule = [{name: "Heura", isVegan: true}, {name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
let fruitIndex = 0
for (let i = 0; i < foodSchedule.length; i++) {
  if (!foodSchedule[i].isVegan) {
    foodSchedule[i].name = fruits[fruitIndex]
    foodSchedule[i].isVegan = true
    fruitIndex++

    // If we've used all fruits, reset the index to avoid duplicates
    if (fruitIndex >= fruits.length) {
      fruitIndex = 0
    }
  }
}
console.log(foodSchedule)

// EJERCICIO 23

// Ejercicio 23.1 Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula madiana, mas de 100 minutos y menos e 200 y pelicula grande, mas de 200 minutos. Imprime cada array por consola. const movies = [{name: "Titan A.E", durationInMinutes: 130},{name: "Nightmare before Christmas", durationInMinutes: 225}, {name: "Inception", durationInMinutes: 165}, {name: "The Lord of the Rings", durationInMinutes: 967}, {name: "Stars Wars: A New Hope", durationInMinutes: 214}, {name: "Terminator", durationInMinutes: 140}];
const movies = [
  { name: 'Titan A.E', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
const shortMovies = []
const mediumMovies = []
const longMovies = []
for (let movie of movies) {
  if (movie.durationInMinutes < 100) {
    shortMovies.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    longMovies.push(movie)
  }
}
console.log('Películas pequeñas (menos de 100 minutos):')
console.log(shortMovies)
console.log('Películas medianas (entre 100 y 200 minutos):')
console.log(mediumMovies)
console.log('Películas grandes (más de 200 minutos):')
console.log(longMovies)

// EJERCICIO 24

// Ejercicio 24.1 Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos. const products = [{name: 'Funko Dr. Strange', sellCount: 10},{name: 'Moichila de protones: Ghostbusters', sellCount: 302},{name: 'Sable laser FX', sellCount: 23},{name: 'Varita de Voldemort: 6}];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
let totalSales = 0
for (let product of products) {
  totalSales += product.sellCount
}
console.log('Total sales:', totalSales)

// EJERCICIO 25

// Ejercicio 25.1 Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas. const products = [{name: 'Funko Dr. Strange', sellCount: 10},{name: 'Mochila de protones: Ghostbusters', sellCount: 302},{name: 'Sable laser FX', sellCount: 23},{name: 'Varita de Voldemort', sellCount: 6}];
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
let totalSales = 0
for (let product of products) {
  totalSales += product.sellCount
}
const averageSales = totalSales / products.length
console.log('Total sales:', totalSales)
console.log('Average sales:', averageSales)

// EJERCICIO 26

// Ejercicio 26.1 Usa un bucle para recorrer el array de productos (products) y añade al array goodProductos los que tengan mas de 20 ventas (sellCount) y al array badProducts los que tengan menos. const goodProducts = []; const badProducts = []; const products = [{name: 'Funko Dr. Strange', sellCount: 10},{name: 'Mochila de protones: Ghostbusters', sellCount: 302},{name: 'Sable laser FX', sellCount: 23},{name: 'Varita de Voldemort', sellCount: 6}];
const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]
for (let product of products) {
  if (product.sellCount > 20) {
    goodProducts.push(product)
  } else {
    badProducts.push(product)
  }
}
console.log('Good Products:', goodProducts)
console.log('Bad Products:', badProducts)
