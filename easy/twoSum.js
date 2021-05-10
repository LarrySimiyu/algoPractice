// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

function twoSum(nums, target) {
  // Input: nums = [2,7,11,15], target = 9
  // check if element is in the map
  // push the different of target - current -> 9 - 2 = 7
  // map = { 7:0 } -> this is the difference and its index

  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let currenVal = nums[i];

    if (map.has(currentVal)) {
      return [map.get(currentVal), i];
    }
    let diff = target - currenVal;
    map.set(diff, i);
  }
}
