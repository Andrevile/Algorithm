import sys
from collections import deque

N=int(sys.stdin.readline())
matrix=[]
for i in range(N):
    matrix.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))


result=[]
for i in range(N):
    result.append([0 for i in range(N)])


def BFS(row,col):
    queue=deque([row])
    #visited[row]=True
    while queue:
        print(queue)

        pop=deque.popleft(queue)
        for i in range(N):
            if matrix[pop][i]==1 and visited[i]==False:
                visited[i]=True
                queue.append(i)
                result[row][i]=1
                print(result)


for i in range(N):
    print("next")
    visited=[False]*N
    BFS(i,i)

for i in range(N):
    for k in range(N):
        print(result[i][k],end=" ")
    print()



