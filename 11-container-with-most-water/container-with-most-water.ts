function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while(left < right){
        let area = 0;
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
};