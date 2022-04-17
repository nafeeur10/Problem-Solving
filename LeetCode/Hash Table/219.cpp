class Solution {
public:
    bool containsNearbyDuplicate(vector<int>& nums, int k) {
        map<long long, int>mp, ml;
        for(int i = 0; i < nums.size(); i++) {
            if(mp[nums[i]] >=1) {
                int value = mp[nums[i]];
                if(abs(value - (i+1)) <= k) {
                    return true;
                }
            }
            mp[nums[i]] = i + 1;
        }
        return false;
    }
};
