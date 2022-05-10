#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool isHappy(int n) {
        map<int, int>mp;
        int N = n;
        while(1) {
            int sum = 0;
            while(N) {
                int t = N % 10;
                sum += t * t;
                N = N / 10;
            }

            if(sum == 1) {
                return true;
            } else {
                mp[sum]++;
            }

            if(mp[sum] > 1) {
                return false;
            }

            N = sum;
        }
    }
};

int main()
{
    Solution sln;
    cout<<sln.isHappy(19)<<endl;
    return 0;
}
