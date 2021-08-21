/*
Problem Link: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
Algorithm/Data Structure: Stack
Language: C++
*/

class Solution {
public:
    int maxDepth(string s) {
        stack<char>parenthesis;

        int maxPop = 0;
        int pop = 0;

        for(int i = 0; i < s.length(); i++) {
            if(s[i] == '(')
            {
                parenthesis.push(s[i]); 
            }
            if(s[i] == ')')
            {
                int siz = parenthesis.size();
                maxPop = max(maxPop, siz);
                parenthesis.pop();
                pop++;

            }
        }

        return maxPop;
    }
};
