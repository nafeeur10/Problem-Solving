#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool checkPermutation(map<char, int>s1map, map<char, int>s2map) {
        map<char, int> ::iterator it;

        for(int i = 0; i < 26; i++) {
            char value = 'a' + i;
            if(s1map[value] != s2map[value]) {
                return false;
            }
        }

        return true;
    }

    bool checkInclusion(string s1, string s2) {
        int s1size = s1.size();

        if(s1size > s2.size()) return false;

        map<char, int>s1map, s2map;

        for(int i = 0; i < s1.size(); i++) {
            s1map[s1[i]]++;
            s2map[s2[i]]++;
        }

        bool getback = checkPermutation(s1map, s2map);
        if(getback) return true;

        int I = 0;
        for(int i = s1.size(); i < s2.size(); i++) {
            s2map[s2[i]]++;
            s2map[s2[I]]--;
            I++;
            getback = checkPermutation(s1map, s2map);
            if(getback) return true;
        }
        return false;
    }
};

int main()
{
    Solution sln;
    cout << sln.checkInclusion("ab", "eidbaooo") << endl;
    return 0;
}
