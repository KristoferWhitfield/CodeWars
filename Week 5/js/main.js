// Your goal in this kata is to create complete the mouth_size method this method
//  take one argument animal which corresponds to the animal encountered by frog.
//   If this one is an alligator (case insensitive) return small otherwise return
//   wide.
// function mouthSize(animal) {
//   // code here
//   if(animal === "alligator"){
//     return "small"
//   }
//   else {
//     return "wide"
//   }
// }
// The code provided is supposed replace all the dots . in the
// specified String str with dashes -
var replaceDots = function(str) {
  return str.replace('.', '-');
}
//
// Implement a function named generateRange(min, max, step), which takes three
//  arguments and generates a range of integers from min to max, with the step.
//  The first integer is the minimum value, the second is the maximum of the range
//   and the third is the step. (min < max)


function peopleWithAgeDrink(old) {
  if(old < 14){
  return 'drink toddy'
  }
  else if (old >= 14 && old < 18 ){
    return 'drink coke'
  }
  else if (old >= 18 && old < 21 ){
    return 'drink beer'
  }
  else if (old >= 21 ){
    return 'drink whisky'
  }
}


function updateLight(current) {
  if (current === 'green'){
    return 'yellow'
  }
  else if (current === 'yellow'){
    return 'red'
  }
  else if (current === 'red'){
    return 'green'
  }

}
