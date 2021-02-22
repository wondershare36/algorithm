let min = (array) => {
  if (!array || array.length < 2) return array
  let result = array[0]
  for (let i = 1; i < array.length; i++) {
    if (array[i] < result) result = array[i]
  }
  return {
    minValue: result,
    minIndex: array.indexOf(result)
  }
}
/* 递归调用 */
let selectSort = (array) => {
  if (array.length > 2) {
    let { minValue, minIndex } = min(array)
    array.splice(minIndex, 1)
    return [minValue].concat(selectSort(array))
  } else {
    return array[0] < array[1] ? array : array.reverse()
  }
}
console.log(selectSort([28, 6, 4, 2, 5, 9, 7, 3, 1, 10]));
/* 循环 */
// let selectSort = (array) => {
//   for (let i = 0; i < array.length - 1; i++) {
//     let { minIndex } = min(array.slice(i))
//     swap(array, i, minIndex + i)
//   }
//   return array
// }

// function swap(array, i, j) {
//   [array[i], array[j]] = [array[j], array[i]]
//   return array
// }
