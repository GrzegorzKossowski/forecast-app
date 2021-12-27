import { findMode } from '../utils';

test('find mode from array', () => {
  expect(findMode([1, 4, 2, 3, 6, 3, 4, 5, 4, 5]))
  .toEqual(
    expect.arrayContaining([4])
  )
})

test('find mode - double mode or more', () => {
  expect(findMode([4,4,4,5,5,5]))
  .toEqual(
    expect.arrayContaining([4,5])
  )
  expect(findMode([4,4,0,4,5,7,5,5,2]))
  .toEqual(
    expect.arrayContaining([4,5])
  )
  expect(findMode([5,1,2,3,4,4,5]))
  .toEqual(
    expect.arrayContaining([4,5])
  )
})
test('find mode - empty array', () => {
  expect(findMode([]))
  .toEqual(
    expect.arrayContaining([])
  )
})