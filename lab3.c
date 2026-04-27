#include <stdio.h>

int ary[10][10], completed[10], n, cost = 0;

void takeInput()
{
    int i, j;
    printf("Enter the number of nodes: ");
    scanf("%d", &n);

    printf("\nEnter the Cost Matrix:\n");
    for (i = 0; i < n; i++)
    {
        completed[i] = 0;
        for (j = 0; j < n; j++)
        {
            scanf("%d", &ary[i][j]);
        }
    }
}

int least(int c)
{
    int i, nc = -1;
    int min = 999, kmin = 0;

    for (i = 0; i < n; i++)
    {
        if (ary[c][i] != 0 && completed[i] == 0)
        {
            if (ary[c][i] < min)
            {
                min = ary[c][i];
                kmin = ary[c][i];
                nc = i;
            }
        }
    }

    if (nc != -1)
        cost += kmin;

    return nc;
}

void mincost(int city)
{
    int ncity;
    completed[city] = 1;
    printf("%d ---> ", city + 1);

    ncity = least(city);

    if (ncity == -1)
    {
        ncity = 0;
        printf("%d", ncity + 1);
        cost += ary[city][ncity];
        return;
    }

    mincost(ncity);
}

int main()
{
    takeInput();

    printf("\nThe Path is:\n");
    mincost(0); // starting from node 0

    printf("\nMinimum cost is %d\n", cost);

    return 0;
}