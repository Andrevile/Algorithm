import sys
from collections import deque

N,M = map(int,sys.stdin.readline().split(" "))
matrix=[]
for i in range(N):
    temp=list(map(int,list(sys.stdin.readline().rstrip())))
    matrix.append(temp)


visited=[[[0]*2 for i in range(M)] for k in range(N)]

direction=[[1,0],[-1,0],[0,1],[0,-1]]
def BFS(row,col):
    queue=deque([[row,col,1]])
    visited[row][col][1]=1
    while queue:
        pop=queue.popleft()
        if pop[0]==N-1 and pop[1]==M-1:
            return visited[N-1][M-1][pop[2]]
        for dir in direction:
            if 0<=pop[0]+dir[0]<N and 0<=pop[1]+dir[1]<M:
                if matrix[pop[0]+dir[0]][pop[1]+dir[1]]==1 and pop[2]==1:
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],0])
                    visited[pop[0]+dir[0]][pop[1]+dir[1]][0]=visited[pop[0]][pop[1]][1]+1
                elif matrix[pop[0]+dir[0]][pop[1]+dir[1]]==0 and visited[pop[0]+dir[0]][pop[1]+dir[1]][pop[2]]==0:
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],pop[2]])
                    visited[pop[0]+dir[0]][pop[1]+dir[1]][pop[2]]=visited[pop[0]][pop[1]][pop[2]]+1

    return -1
print(BFS(0,0))
# for i in range(len(visited)):
#     print(visited[i])
