class Solution {
public:
    bool isPalindrome(string s) {
        int i = 0;
        int j = s.length() - 1;

        while(i < j){
            char leftChar = tolower(s[i]);
            char rightChar = tolower(s[j]);

            if(!isalnum(leftChar)){
                i++;
                continue;
            }
            
            if(!isalnum(rightChar)){
                j--;
                continue;
            }
            
            if(leftChar != rightChar){
                return false;
            }

            i++;
            j--;
        }
        return true;
    }
};