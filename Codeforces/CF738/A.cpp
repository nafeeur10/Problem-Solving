/*
Problem Link: https://codeforces.com/contest/1559/problem/A
Solution: C++
*/

#include <bits/stdc++.h>

using namespace std;

int main()
{
    int t;
    cin>>t;

    while(t--) {
        int n;
        cin>>n;

        vector<long>v;

        for(int i = 0; i < n; i++) {
            long long int a;
            cin>>a;
            v.push_back(a);
        }

        long long int ans = v[0];

        for(int i = 1; i < v.size(); i++) {
            ans = ans& v[i];
        }

        cout<<ans<<endl;
    }
    return 0;
}
