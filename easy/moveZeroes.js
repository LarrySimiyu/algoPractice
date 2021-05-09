// Given an integer array nums, move all 0's
// to the end of it while maintaining the relative order of the non-zero elements.

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    if (currentNum !== 0) {
      nums[index] = currentNum;
      index++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums[i] = 0;
  }
}
