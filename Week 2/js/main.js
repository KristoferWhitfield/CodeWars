// Сalculate how many years ago the father was twice as old as his son
// (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// simply take number and count upwards 10times with all words seperated bt then

function countUp(start) {

let array = [start + 1,'then', start + 2,'then', start + 3,'then', start + 4,'then', start + 5,'then', start + 6,'then', start + 7,'then', start + 8,'then', start + 9,'then', start + 10]

console.log(array.join(' '))

}

// or

let array = []

for(let i = 0; i < 10; i++){
    array.push(start + 1 + i)
    if(i !== 9){
        array.push('then')
    }

}

console.log(array.join(' '))

}


// Bob is working as a bus driver. However, he has become extremely popular amongst
// the city's residents. With so many passengers wanting to get aboard his bus, he
// sometimes has to face the problem of not enough space left on the bus! He wants
// you to write a simple program telling him if he will be able to fit all the
//  passengers.

function enough(cap, on, wait) {
  // your code here
  if((on + wait) > cap){
    return on + wait - cap
  }
  else{
    return 0
  }
}

// Given an array of integers, return a new array with each value doubled.

function maps(x){

  var doubledNumbers = x.map(n => n*2)
  return doubledNumbers

}
