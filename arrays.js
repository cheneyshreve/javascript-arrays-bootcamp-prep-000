chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


function addElementToBeginningOfArray(array,x) {
 return [x,...array]
}

function destructivelyAddElementToBeginningOfArray(array,x){
  return array.unshift(x)
}

function addElementToEndOfArray(array,x) {
 return [array,...x]
}

function destructivelyAddElementToEndOfArray(array,x){
  return array.push(x)
}

function accessElementInArray(array,n){
  return array[n]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array){
  array.slice(0)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop(-1)
  return array
}
