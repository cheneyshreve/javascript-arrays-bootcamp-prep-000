chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]


function addElementToBeginningOfArray(array,x) {
 return [x...array]
}

function destructivelyAddElementToBeginningOfArray(array,x){
  return array.push(x)
}
