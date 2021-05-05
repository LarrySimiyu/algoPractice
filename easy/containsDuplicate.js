// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

function containsDuplicate(nums) {
  let map = {};

  for (let element of nums) {
    if (map[element]) {
      return true;
    } else {
      map[element] = 1;
    }
  }
  return false;
}
