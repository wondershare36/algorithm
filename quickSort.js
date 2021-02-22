let quickSort = (array) => {
  if (!array || array.length < 2) return array
  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array.splice(pivotIndex, 1)[0]
  let left = [], right = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) left.push(array[i])
    else right.push(array[i])
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
console.log(quickSort([28, 6, 4, 2, 5, 9, 7, 3, 1, 10]));
