/*
Problem Link: http://codeforces.com/contest/1542/problem/A
Language: C++
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
        vector<int>odd, even;
        for(int i = 0; i < 2*n; i++)
        {
            int a;
            cin>>a;
            if(a%2 == 0) {
                even.push_back(a);
            }
            else {
                odd.push_back(a);
            }
        }
 
        if(even.size()==odd.size()) {
            cout<<"YES"<<endl;
        }
        else {
            cout<<"NO"<<endl;
        }
    }
    return 0;
}
