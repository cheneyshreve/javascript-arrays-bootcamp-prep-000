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

function addElementToEndOfArray(array,x) {
  [array,...x]
  return array
}

function destructivelyAddElementToEndOfArray(array,x){
   array.push(x)
   return array
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
