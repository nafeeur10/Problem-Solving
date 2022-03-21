/*
 Problem Link: https://www.hackerrank.com/challenges/icecream-parlor/problem
*/
#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'icecreamParlor' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER m
 *  2. INTEGER_ARRAY arr
 */

vector<int> icecreamParlor(int m, vector<int> arr)
{
    vector<int>ans;
    map<int, int>costMap;

    for(int i = 0; i < arr.size(); i++)
    {
        bool flag = false;

        int firstFriend = arr[i];
        int k = arr.size()-1;
        for(int j = 0; j < arr.size()/2; j++)
        {
            if(firstFriend + arr[j] == m && i != j)
            {
                if(i+1 > j+1)
                {
                    ans.push_back(j+1);
                    ans.push_back(i+1);
                }
                else
                {
                    ans.push_back(i+1);
                    ans.push_back(j+1);
                }
                flag = true;
                break;
            }
            if(firstFriend + arr[k] == m && i != k)
            {
                if(i+1 > k+1)
                {
                    ans.push_back(k+1);
                    ans.push_back(i+1);
                }
                else
                {
                    ans.push_back(i+1);
                    ans.push_back(k+1);
                }
                flag = true;
                break;
            }
            k--;
        }
        if(flag)
        {
            break;
        }
    }

    return ans;
}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        int k;
        int costSize;
        vector<int>costArray;
        cin>>k>>costSize;
        for(int i = 0; i < costSize; i++)
        {
            int value;
            cin>>value;
            costArray.push_back(value);
        }

        vector<int> result = icecreamParlor(k, costArray);

        for(int i = 0; i < result.size(); i++)
        {
            cout<<result[i]<<" ";
        }
        cout<<endl;
    }
    return 0;
}
