// here's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity
// and price (per mango), calculate the total cost of the mangoes.

//
// Write a function to get the first elements of asequence. Passing a parameter n
// (default=1) will return the first n elements of the sequence.
//
// If n == 0 return an empty sequence []

// Your job is simple, if (x) squared is more than 1000, return 'It's hotter than
// the sun!!', else, return 'Help yourself to a honeycomb Yorkie for the glovebox.'.

function apple(x){
  if(Math.pow(x, 2) > 1000){
    return  "It's hotter than the sun!!"
  }
  else {
    return 'Help yourself to a honeycomb Yorkie for the glovebox.'
  }
}
// Given a month as an integer from 1 to 12, return to which quarter of the year
//  it belongs as an integer number.
function quarterOf(month){
  // Your code here
  if(month <= 3){
    return 1
  }
  else if(month > 3 && month <= 6){
    return 2
  }
  else if(month > 6 && month <= 9){
    return 3
  }
  else if(month > 9 && month <= 12){
    return 4
  }

}
