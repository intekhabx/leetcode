function triangleNumber(nums: number[]): number {
    // addition of 2 sides is always greater than 3rd
    nums = nums.sort((a, b)=> a - b)
    let countAns = 0;

    for(let i=nums.length-1; i>=0; i--){
        let left = 0;
        let right = i-1;

        while(left < right){
            if(nums[left] + nums[right] > nums[i]){
                countAns += right - left
                right--;
            }
            else{
                left++;
            }
        }
    }

    return countAns;
};