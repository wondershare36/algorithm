let countSort = (array) => {
  if (!array || array.length < 2) return array
  
  let hashTable = {}, max = Number.MIN_VALUE, result = []
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] in hashTable) hashTable[array[i]]++
    else hashTable[array[i]] = 1
    if (array[i] > max) max = array[i]
  }
  
  for (let i = 0; i <= max; i++) {
    if (i in hashTable) {
      for (let j = 0; j < hashTable[i]; j++) {
        result.push(i)
      }
    }
  }
}
console.log(countSort([28, 6, 4, 10, 7, 3, 2, 7, 6, 7, 2, 5, 9, 7, 3, 1, 10]));
