
import sys
from collections import deque

N=int(sys.stdin.readline())

matrix=[]
for i in range(N):
    matrix.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))


direction=[[-1,0],[0,-1],[0,1],[1,0]]
shark_size=2
time_count=0
def BFS(row,col):
    global shark_size
    visited=[[False for i in range(N)] for i in range(N)]
    visited[row][col]=True
    queue=deque([[row,col,0]])
    while queue:
        if len(queue)==0:
            break;
        pop=queue.popleft()
        if 0<matrix[pop[0]][pop[1]]<shark_size:
            while queue:
                temp=queue.popleft()
                if temp[2]==pop[2] and 0<matrix[temp[0]][temp[1]]<shark_size:
                    if pop[0]>temp[0]:
                        pop=temp
                    elif pop[0]==temp[0]:
                        if pop[1]>temp[1]:
                            pop=temp
            break;
        for dir in direction:
            if 0<=pop[0]+dir[0]<N and 0<=pop[1]+dir[1]<N:
                if matrix[pop[0]+dir[0]][pop[1]+dir[1]]<=shark_size and visited[pop[0]+dir[0]][pop[1]+dir[1]]==False:
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],pop[2]+1])
                    visited[pop[0]+dir[0]][pop[1]+dir[1]]=True

    return pop


fish_size_minimum=10000
for i in range(N):
    for k in range(N):
        if matrix[i][k]==9:
            row,col=i,k

temp=[row,col,0]
i=1
eat_count=0
matrix[row][col]=0
while True:
    temp = BFS(temp[0], temp[1])
    if matrix[temp[0]][temp[1]]>=shark_size or matrix[temp[0]][temp[1]]==0:
        break;
    matrix[temp[0]][temp[1]] = 0
    time_count += temp[2]
    eat_count+=1

    if eat_count==shark_size:
        shark_size+=1
        eat_count=0

print(time_count)


