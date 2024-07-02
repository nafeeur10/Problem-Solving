class Solution {
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {

        map<int, int>mapNum1, mapNum2;

        for(int i = 0; i < nums1.size(); i++) {
            if(mapNum1.find(nums1[i]) == mapNum1.end()) {
                mapNum1[nums1[i]] = 1;
            }
            else
            {
                mapNum1[nums1[i]]++;
            }
        }

        for(int i = 0; i < nums2.size(); i++) {
            if(mapNum2.find(nums2[i]) == mapNum2.end()) {
                mapNum2[nums2[i]] = 1;
            }
            else
            {
                mapNum2[nums2[i]]++;
            }
        }

        vector<int>ans;

        for (auto& it : mapNum2) {
            if(mapNum1.find(it.first)->second) {
                int minNums = min(it.second, mapNum1.find(it.first)->second);
                for(int i = 0; i < minNums; i++) {
                    ans.push_back(it.first);
                }
            }
        }

        return ans;
    }
};