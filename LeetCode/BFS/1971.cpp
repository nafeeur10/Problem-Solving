class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int start, int end) {
        vector<int>graph[n];
        vector<bool>visited(n, false);

        for(int i = 0; i < edges.size(); i++) {
            int edge1 = edges[i][0];
            int edge2 = edges[i][1];
            graph[edge1].push_back(edge2);
            graph[edge2].push_back(edge1);
        }

        queue<int>q;
        q.push(start);
        visited[start] = true;

        while(!q.empty()) {
            int poped = q.front();
            q.pop();
            if(poped == end) {
                return true;
            }
            for(int i = 0; i < graph[poped].size(); i++)
            {
                if(!visited[graph[poped][i]])
                {
                    q.push(graph[poped][i]);
                    visited[graph[poped][i]] = true;
                }
            }
        }

        return false;
    }
};
