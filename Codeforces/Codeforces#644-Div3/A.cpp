#include <bits/stdc++.h>

using namespace std;

#define LL long long

int main()
{

    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);
    #endif

    int t;
    cin>>t;
    while(t--) {
        int a, b;
        cin>>a>>b;

        int mx1 = max(2*a, b);
        int mx2 = max(2*b, a);

        int mn = min(mx1, mx2);
        cout<<mn*mn<<endl;
    }
    return 0;
}
