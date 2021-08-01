/*
Problem Link: https://leetcode.com/problems/find-the-highest-altitude/
Language: C++
*/

class Solution {
public:
    int largestAltitude(vector<int>& gain) {

        int sum = 0;
        int mx = sum;

        for(int i = 0; i < gain.size(); i++) {
            sum+=gain[i];
            mx = max(sum, mx);
        }

        return mx;
    }
};
