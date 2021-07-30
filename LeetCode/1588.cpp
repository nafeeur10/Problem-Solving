/*
Problem Link: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/
Language: C++
*/

class Solution {
public:
    int sumOddLengthSubarrays(vector<int>& arr) {
        long long sum = 0;
        vector<long long>prefixSum;

        for(int i = 0; i < arr.size(); i++) {
            sum+=arr[i];
            prefixSum.push_back(sum);
        }

        int I = 2;
        int J = 0;

        while(I < prefixSum.size()) {
            sum+=prefixSum[I];
            for(int i = I+1; i < prefixSum.size(); i++) {
                sum+=prefixSum[i] - prefixSum[J];
                J++;
            }
            I += 2;
            J = 0;
        }

        return sum;
    }
};
