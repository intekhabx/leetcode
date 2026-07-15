class Solution {
public:
    int maxArea(vector<int>& height) {
        int left = 0;
        int right = height.size() - 1;
        int max = 0;

        while(left < right){
            int area = 0;
            if(height[left] < height[right]){
                area = height[left] * (right - left);
            }
            else{
                area = height[right] * (right - left);
            }

            if(max < area){
                max = area;
            }


            if(height[left] < height[right]){
                left++;
            }else{
                right--;
            }
        }

        return max;
    }
};