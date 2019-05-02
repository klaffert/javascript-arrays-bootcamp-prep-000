var ingredient1 = "bread"
var ingredient2 = "mild cheese" 
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
  ]
  
  var chocolateBars =[
    'snickers',
    'hundred grand',
    'kitkat',
    'skittles'
    ]
  
function addElementToBeginningOfArray() {
  return chocolateBars.push('twizzlers')
}

function addElementToBeginningOfArray(array,element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
<<<<<<< HEAD
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array,element) {
  array.push(element)
  return array
}

function accessElementInArray(array,index) {
  return(3)
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
=======
  return [array, element]
}
>>>>>>> 8f6b95048ebe1e7c6269a8c4386718cec5a8062b
