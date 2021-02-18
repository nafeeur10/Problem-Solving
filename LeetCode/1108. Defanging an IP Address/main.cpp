#include <bits/stdc++.h>

using namespace std;

class Solution {
    public:
        string defangIPaddr(string address) {
            string ans;
            for(int i = 0; i < address.length(); i++) {
                if(address[i] == '.') {
                    ans.push_back('[');
                    ans.push_back('.');
                    ans.push_back(']');
                    continue;
                }
                ans.push_back(address[i]);
            }
            return ans;
    }
};

int main()
{
    Solution solution;
    string address = "1.1.1.1";
    string result = solution.defangIPaddr(address);
    cout<<result<<endl;
    return 0;
}
