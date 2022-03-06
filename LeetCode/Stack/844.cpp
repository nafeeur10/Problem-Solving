class Solution {
public:
    bool backspaceCompare(string s, string t) {

        stack<char>ss, st;
        string news, newt;

        for(int i = 0; i < s.length(); i++) {
            if(s[i] == '#' && ss.size() > 0) {
                ss.pop();
            }
            else if(s[i] >= 'a' && s[i] <= 'z'){
                ss.push(s[i]);
            }
        }

        int cnt = 0;
        while( !ss.empty() ) {
            news.insert(cnt, 1, ss.top());
            cnt++;
            ss.pop();
        }

        for(int i = 0; i < t.length(); i++) {
            if(t[i] == '#' && st.size() > 0) {
                st.pop();
            }
            else if(t[i] >= 'a' && t[i] <= 'z'){
                st.push(t[i]);
            }
        }

        cnt = 0;
        while( !st.empty() ) {
            newt.insert(cnt, 1, st.top());
            cnt++;
            st.pop();
        }

        if(news == newt) {
            return true;
        }
        else {
            return false;
        }
    }
};
