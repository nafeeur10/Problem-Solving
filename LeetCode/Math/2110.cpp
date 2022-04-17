#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    long long getDescentPeriods(vector<int>& prices) {
        long long sum = prices.size();

        int cnt = 0;

        for(int i = 1; i < prices.size(); i++) {
            if(prices[i] - prices[i-1] == 1) {
                cnt++;
                continue;
            }
            cout<<cnt<<endl;
            cnt = 0;
        }
        return sum;
    }
};

int main()
{
    Solution sln;
    vector<int>v{3, 2, 1, 4};
    cout<<sln.getDescentPeriods(v)<<endl;
    return 0;
}
