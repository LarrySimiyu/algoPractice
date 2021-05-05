// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// Input: nums = [4,1,2,1,2]
// Output: 4
function singleNumer(nums) {
  let map = {};

  for (let element of nums) {
    if (map[element]) {
      map[element]++;
    } else {
      map[element] = 1;
    }
  }

  for (let element in map) {
    if (map[element] === 1) {
      return element;
    }
  }
}
