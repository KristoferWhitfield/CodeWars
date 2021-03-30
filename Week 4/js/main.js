function mergeArrays(a, b) {

  console.log(a.concat(b).sort())

}

mergeArrays([1,3,5], [2,3,6])

function lonelyInteger(arr){
  console.log(parseInt(arr.filter((v, i) => arr.indexOf(v) === arr.lastIndexOf(v))))
}

lonelyInteger([1,1,2,2,4])

// You are given two sorted arrays that both only contain integers.
// Your task is to find a way to merge them into a single one, sorted in asc order.
// Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original
// sorted arrays.

function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b)
  return arr3.filter((value, index) => arr3.indexOf(value) === index)
}

// Create a function that gives a personalized greeting.
// This function takes two parameters: name and owner.

function greet (name, owner) {
  // Add code here
  if(name === owner){
    return "Hello boss"
  }
    else{
      return "Hello guest"
    }
}

// Complete the function so that it finds the average of the three scores passed
// to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  // Code here
  let grade = (s1+s2+s3) / 3
  if(grade >= 90){
    return "A"
  }
  else if (grade >= 80 && grade < 90){
    return "B"
  }
  else if (grade >= 70 && grade < 80){
    return "C"
  }
  else if (grade >= 60 && grade < 70){
    return "D"
  }
  else if (grade < 60){
    return "F"
  }

}
