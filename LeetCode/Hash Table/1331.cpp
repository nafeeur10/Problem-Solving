#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        vector<int>mainArray = arr;
        set<int>m;

        for(int i = 0; i < arr.size(); i++) {
            m.insert(arr[i]);
        }

        map<int, int>numIndex;

        int cnt = 0;
        set<int> :: iterator it;

        for(it = m.begin(); it != m.end(); it++) {
            numIndex[*it] = ++cnt;
        }

        vector<int>ans;

        for(int i = 0; i < mainArray.size(); i++) {
            ans.push_back(numIndex[mainArray[i]]);
        }

        return ans;
    }
};

int main()
{
    vector<int>v{40,10,20,30};
    Solution sln;
    sln.arrayRankTransform(v);
    return 0;
}

