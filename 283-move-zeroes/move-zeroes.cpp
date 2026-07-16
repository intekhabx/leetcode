class Solution {
public:
    void moveZeroes(vector<int>& nums) { 
        int i=0;
        int j=i+1;

        while(i < nums.size()-1 && j < nums.size()){
            if(nums[i] == 0 && nums[j] != 0){
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }

            if(nums[i] == 0 && nums[j] == 0){
                j++;
                continue;
            }

            i++;
            j++;
        }
    }
};