/*
Problem: A
*/
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
        LL a, b;
        cin>>a>>b;

        LL ans = 0;

        if(a==0 || b==0)
            cout<<0<<endl;
        else if(a==1 && b==1)
            cout<<0<<endl;
        else if(a==1 || b==1)
        {
            cout<<1<<endl;
        }
        else {
            if(a*2<=b)
                cout<<a<<endl;
            else if(b*2<=a)
                cout<<b<<endl;
            else{
                ans = (a+b)/3;
                cout<<ans<<endl;
            }
        }
    }
    return 0;
}
