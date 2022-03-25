class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        if(s.length() == 0) return 0;
        set<char>st;
        int ans = INT_MIN;
        int start = 0;
        int end = 0;
        while(start < s.length() && end < s.length()) {
            if(!st.count(s[end]))
            {
                st.insert(s[end++]);
                ans = max(ans, end - start);
            }
            else
            {
                st.erase(s[start++]);
            }
        }
        return ans;
    }
};
