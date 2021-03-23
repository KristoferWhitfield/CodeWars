function mergeArrays(a, b) {

  console.log(a.concat(b).sort())

}

mergeArrays([1,3,5], [2,3,6])

function lonelyInteger(arr){
  console.log(parseInt(arr.filter((v, i) => arr.indexOf(v) === arr.lastIndexOf(v))))
}

lonelyInteger([1,1,2,2,4])
