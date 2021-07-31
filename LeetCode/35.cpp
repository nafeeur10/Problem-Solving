/*
Problem Link: https://leetcode.com/problems/search-insert-position/
Language: C++
*/

class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        int start = 0;
        int ends = nums.size() - 1;
        int mid;

        if(nums[ends] < target) {
            return nums.size();
        }

        if(nums[0] > target) {
            return 0;
        }

        while(start <= ends)
        {
            mid = (ends + start) / 2;
            if(nums[mid] == target) return mid;
            else if(nums[mid] > target) {
                ends = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return start;
    }
};
