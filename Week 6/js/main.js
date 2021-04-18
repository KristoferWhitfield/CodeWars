// When provided with a number between 0-9, return it in words.function switchItUp(number){

//Write your own Code!
  if (number === 0){
    return 'Zero'
  }
  else if (number === 1){
    return 'One'
  }
  else if (number === 2){
    return 'Two'
  }
  else if (number === 3){
    return 'Three'
  }
  else if (number === 4){
    return 'Four'
  }
  else if (number === 5){
    return 'Five'
  }
  else if (number === 6){
    return 'Six'
  }
  else if (number === 7){
    return 'Seven'
  }
  else if (number === 8){
    return 'Eight'
  }
  else if (number === 9){
    return 'Nine'
  }
}

function main(verb, noun){
  return verb + noun
}

// Alex just got a new hula hoop, he loves it but feels discouraged because
// his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and
// it will return him an encouraging message :)
function hoopCount (n) {
   if(n >= 10){
     return 'Great, now move on to tricks'
   }
  else{
    return 'Keep at it until you get it'
  }
}
