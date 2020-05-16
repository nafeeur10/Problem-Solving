#include <bits/stdc++.h>

using namespace std;

#define ll long long

int main()
{
    int t;
    ll n, k;
    cin>>n>>k;

    while(true) {
            ll rem = n%10;

            if(rem>k) {
                if(k>0) n-=k;
                cout<<n<<endl;
                break;
            }
            else if(rem==k) {
                cout<<n-rem<<endl;
                break;
            }
            else {
                k-=rem;
                n-=rem;
                n/=10;
                k--;
            }
    }
    return 0;
}
