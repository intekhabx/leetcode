/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for(let i=0; i<nums.length-1; i++){
        let min = Number.MAX_VALUE;
        let index = -1;
        for(let j=i; j<nums.length; j++){
            if(nums[j] < min){
                min = nums[j];
                index = j;
            }
        }

        if(min != nums[i]){
            let temp = nums[i]
            nums[i] = min;
            nums[index] = temp;
        }
    }
};