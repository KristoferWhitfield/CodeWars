function mergeArrays(arr1, arr2) {
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b)
  return arr3.filter((value, index) => arr3.indexOf(value) === index)
}
