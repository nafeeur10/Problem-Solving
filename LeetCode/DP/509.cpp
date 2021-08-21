/*
Problem Link: https://leetcode.com/problems/fibonacci-number/
Algo: DP
Language: C++
*/

class Solution {
public:
    int fib(int n) {
        int fibArray[31];
        fibArray[0] = 0;
        fibArray[1] = 1;

        for(int i = 2; i <= 30; i++) {
            fibArray[i] = fibArray[i-1] + fibArray[i-2];
        }

        return fibArray[n];
    }
};
