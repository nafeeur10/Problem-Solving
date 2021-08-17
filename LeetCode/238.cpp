/*
Problem Link: https://leetcode.com/problems/product-of-array-except-self/
Language: C++
*/

#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int mul = 1;
        int countZero = 0;
        for(int i = 0; i < nums.size(); i++) {
            if(nums[i] == 0) countZero++;
            else mul*=nums[i];
        }

        vector<int>prefix;
        for(int i = 0; i < nums.size(); i++) {
            if(countZero > 1) prefix.push_back(0);
            else if(countZero == 1 && nums[i] != 0) prefix.push_back(0);
            else if(countZero == 1 && nums[i] == 0) prefix.push_back(mul);
            else prefix.push_back(mul/nums[i]);
        }
        return prefix;
    }
};

int main()
{
    Solution solution;
    vector<int>v, ans;
    v.push_back(-1);
    v.push_back(1);
    v.push_back(0);
    v.push_back(-3);
    v.push_back(3);
    ans = solution.productExceptSelf(v);
    for(int i = 0; i < ans.size(); i++) {
       cout<<ans[i]<<" ";
    }
    cout<<endl;
    return 0;
}
