let mergeSort = (array) => {
  if (!array || array.length < 2) return array
  let length = array.length
  let left = array.slice(0, length / 2)
  let right = array.slice(length / 2)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  if (left.length === 0) return right
  if (right.length === 0) return left
  return left[0] < right[0] ?
    [left[0]].concat(merge(left.slice(1), right)) :
    [right[0]].concat(merge(left, right.slice(1)))
}
console.log(mergeSort([28, 6, 4, 2, 5, 9, 7, 3, 1, 10]));
