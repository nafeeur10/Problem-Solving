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
        int n, x;
        cin>>n>>x;

        int odd = 0, even = 0;

        for(int i=0; i<n; i++) {
            int num;
            cin>>num;

            if(num%2==0) {
                even++;
            }
            else {
                odd++;
            }
        }

        bool flag = false;
        for(int i =1; i<=x; i+=2) {
            if( odd >= i && (x-i) <=even) {
                flag = true;
                break;
            }
        }

         if(flag) {
            cout<<"Yes"<<endl;
         }
         else {
            cout<<"No"<<endl;
         }

    }
    return 0;
}
