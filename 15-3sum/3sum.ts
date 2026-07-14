function threeSum(nums: number[]): number[][] {
    const target = 0;
    nums = nums.sort((a, b)=> a-b);
    const ans = [];

    for(let i=0; i<nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length -1;

        while(left < right){
            if(nums[i] + nums[left] + nums[right] == target){
                const exists = ans.some((arr)=> arr[0] === nums[i] && arr[1] === nums[left] && arr[2] === nums[right]);
                if(!exists){
                    ans.push([nums[i], nums[left], nums[right]]);
                }
            }

            if(nums[i] + nums[left] + nums[right] < target){
                left++;
            }else{
                right--;
            }
        }
    }
    return ans;
};