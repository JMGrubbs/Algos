let maxSubArray = function(nums) {
    console.log(nums)
    let ret = -10000000
    let i = 0
    let j = 0
    let curMax = -10000000
    while (j <=nums.length){
        if(curMax<=nums[j]&&curMax<0){
            // console.log('boom1')
            i = j
            j++
            curMax=nums[i]
        }else{
            // console.log('boom2')
            curMax+=nums[j]
            j++
        }
        // console.log(nums.slice(i,j))
        // console.log(curMax)
        // console.log(' ')


        if (curMax > ret){
            ret = curMax
        }
    }
    return ret
};

console.log('----------------------------------')
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log('----------------------------------')
console.log(maxSubArray([-1]))
console.log('----------------------------------')
console.log(maxSubArray([1,2]))
console.log('----------------------------------')
console.log(maxSubArray([-1,1,2,1]))
