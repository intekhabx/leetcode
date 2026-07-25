class Solution {
public:
    int triangleNumber(vector<int>& nums) {
        //addition of two sides a+b is always greater than c
        sort(nums.begin(), nums.end());

        int count = 0;
        for(int c=nums.size()-1; c>=0; c--){
            int a = 0;
            int b = c-1;

            while(a < b){
                if(nums[a] + nums[b] > nums[c]){
                    count += b - a;
                    b--;
                }
                else{
                    a++;
                }
            }
        }

        return count;
    }
};