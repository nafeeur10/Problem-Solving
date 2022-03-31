class Solution
{
public:
    string makeGood(string s)
    {
        string ans = "";
        stack<char>st;

        for(int i = 0; i < s.length(); i++)
        {
            if(st.empty())
            {
                st.push(s[i]);
                continue;
            }

            int temp = st.top();
            int si = s[i];

            if(si == temp+32)
            {
                st.pop();
                continue;
            }
            else if(si == temp-32)
            {
                st.pop();
                continue;
            }
            else
            {
                st.push(s[i]);
            }
        }

        while(!st.empty()) {
            ans+=st.top();
            st.pop();
        }

        reverse(ans.begin(), ans.end());
        return ans;
    }
};
