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
        int n;
        cin>>n;
        vector<int>Ath;
        while(n--)
        {
            int s;
            cin>>s;
            Ath.push_back(s);
        }

        sort(Ath.begin(), Ath.end());

        bool flag = false;
        int mn = 999999;

        for(int i=0; i<Ath.size()-1; i++)
        {
            mn = min(mn, Ath[i+1] - Ath[i]);
        }

        cout<<mn<<endl;
    }
    return 0;
}
