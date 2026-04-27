#include <stdio.h>

int a[20][20], visited[20], n;

void dfs(int v)
{
    int i;

    printf("%d ", v);   // print node
    visited[v] = 1;     // mark visited

    for (i = 1; i <= n; i++)
    {
        if (a[v][i] == 1 && visited[i] == 0)
        {
            dfs(i);   // recursive call
        }
    }
}

int main()
{
    int i, j, v;

    printf("Enter number of vertices: ");
    scanf("%d", &n);

    printf("Enter adjacency matrix:\n");
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n; j++)
        {
            scanf("%d", &a[i][j]);
        }
    }

    for (i = 1; i <= n; i++)
        visited[i] = 0;

    printf("Enter starting vertex: ");
    scanf("%d", &v);

    printf("DFS Traversal: ");
    dfs(v);

    return 0;
}