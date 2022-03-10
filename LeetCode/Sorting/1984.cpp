class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int diff = INT_MAX;

        for(int i = 0; i < nums.size(); i++) {
            if(i+k <= nums.size()) {
                diff = min(diff, nums[i+k-1]-nums[i]);
            }
        }
        return diff;
    }
};
