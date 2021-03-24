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
