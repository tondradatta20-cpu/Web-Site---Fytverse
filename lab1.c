#include <stdio.h>

int a[20][20], q[20], visited[20], n;
int f = 0, r = -1;

void bfs(int v)
{
    int i;

    // 🔥 start node queue te push
    q[++r] = v;

    while (f <= r)
    {
        int current = q[f++];   // dequeue
        printf("%d ", current);

        for (i = 1; i <= n; i++)
        {
            if (a[current][i] == 1 && visited[i] == 0)
            {
                visited[i] = 1;     // mark visited
                q[++r] = i;         // enqueue
            }
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

    visited[v] = 1;

    printf("BFS Traversal: ");
    bfs(v);

    return 0;
}
