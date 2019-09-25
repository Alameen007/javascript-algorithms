function twoSum(nums, target) {
  let result;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return (result = [nums[i], nums[j]]);
      }
    }
  }
  console.log(result);
}

console.log(twoSum([2, 7, 11, 15], 9));
