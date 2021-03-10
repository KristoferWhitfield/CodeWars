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
  if(str.includes('Can',[0]) && str.includes('someone',[1]) && str.includes('explain',[2])){
    return true
    }
      else {
        return false
      }

}
