// Convert a Number to a String!
function numberToString(num) {
  return num.toString();
}

// What is the most asked question on CodeWars?
//
// Can someone explain /*...*/?
//
// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.

function detect(comment) {
  let str = comment.split(' ')
  if(str[0].includes('Can') && str[1].includes('someone') && str[2].includes('explain')){
    return true
    }
      else {
        return false
      }

}

// Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  //your code here
    return b.toString()

}

// Your task is to make a function that can take any non-negative integer as an argument
//  and return it with its digits in descending order. Essentially, rearrange the digits
//  to create the highest possible number.

function descendingOrder(n){
  //...
  let arr = Array.from(n.toString()).map(Number)

  return parseInt(arr.sort ((a, b) => b - a).join(""))
}

// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0

function find_average(array) {
  // your code here
  return array.reduce((acc,current) => acc += current) / array.length


}
