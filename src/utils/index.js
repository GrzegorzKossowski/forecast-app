export const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

/**
 * Method returns an array of dominant values from other array of numbers
 * @param {number} arr numbers to find mode
 * @returns array
 */
export const findMode = (arr) => {

  if (arr.length <= 0) return []

  const values = []
  const index = []

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < values.length; j++) {
      if (arr[i] === values[j]) {
        index[j]++
        found = true
        break
      }
    }
    if (!found) {
      values.push(arr[i])
      index[values.length - 1] = 1
    }
  }

  const maxVal = Math.max.apply(Math, index)
  const tempArr = []
  
  for (let i = 0; i < index.length; i++) {
    if (index[i] === maxVal) {
      tempArr.push(values[i])
    }
  }
  
  return tempArr.sort((a, b) => a - b)
}