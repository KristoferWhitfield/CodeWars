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
