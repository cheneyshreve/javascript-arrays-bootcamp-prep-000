chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

array = [1,2,3,4,5]

function addElementToBeginningOfArray(array,x) {
 return [x,...array]
}

function destructivelyAddElementToBeginningOfArray(array,x){
  array.unshift(x)
  return array
}

function addElementToEndOfArray(array,element) {
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array,x){
   array.push(x)
   return array
}

function accessElementInArray(array,n){
  array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice()
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop()
  return array
}


function removeElementFromEndOfArray(array){
  array.slice(-1)
  return array
}
