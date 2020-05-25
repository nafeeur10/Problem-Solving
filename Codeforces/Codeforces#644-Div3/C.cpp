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
        vector<int>v;

        int even = 0, odd = 0;

        for(int i=0; i<n; i++) {
            int e;
            cin>>e;
            if(e%2==0)
                even++;
            else
                odd++;
            v.push_back(e);
        }

        if(even==n || odd==n) {
            cout<<"YES"<<endl;
        }
        else {
            if(even%2==0 && odd%2==0)
                cout<<"YES"<<endl;
            else {
                sort(v.begin(), v.end());
                bool flag = false;
                for(int i = 0; i < v.size()-1; i++)
                {
                    if(v[i+1]-v[i]==1)
                    {
                        flag = true;
                        break;
                    }
                }
                if(flag)
                    cout<<"YES"<<endl;
                else
                    cout<<"NO"<<endl;
            }
        }
    }
    return 0;
}
