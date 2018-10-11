function minMaxSum(nums) {
    let min = 0
    let tempMin = 0
    for (let i = 0; i + 1 < nums.length; i++) {
        min += nums[i]      
    }
    console.log(min)
}

minMaxSum([1,2,3,4,5])


let maxSum = 0,
minSum = 0;
inArr.sort();

for (var i = arr.length - 1, o = 0; i >= arr.length - 4, o < 4; i--, o++){
maxSum += arr[i];
minSum += arr[o];
}
console.log(minSum, maxSum)