import sys
import math
sys.setrecursionlimit(10**6)
T=int(sys.stdin.readline())
case=[]
for t in range(0,T):
    M,N,K=map(int,sys.stdin.readline().split(" "))
    position=[]
    for i in range(0,K):
        temp=list(map(int,sys.stdin.readline().split(" ")))
        position.append(temp)
    case.append([M,N,K,position])

#case1
#T=2
#M,N,K=10,8,17
#position=[[0,0],[1,0],[1,1],[4,2],[4,3],[4,5],[2,4],[3,4],[7,4],[8,4],[9,4],[7,5],[8,5],[9,5],[7,6],[8,6],[9,6]]

#case2
#M,N,K=10,10,1
#position=[[5,5]]

#case3
#M,N,K=5,3,6
#position=[[0,2],[1,2],[2,2],[3,2],[4,2],[4,0]]
direction=[[1,0],[-1,0],[0,1],[0,-1]]
def dfs(i,k,matrix):
    for dir in direction:
        if (0<=i+dir[0]<M) and (0<=k+dir[1]<N):
            if matrix[i+dir[0]][k+dir[1]] == 1:
                matrix[i+dir[0]][k+dir[1]]=-1
                dfs(i+dir[0],k+dir[1],matrix)




def result(M,N,K,position):
    count=0
    matrix=[[0]*N for i in range(0,M)]
    for key in position:
        matrix[key[0]][key[1]]=1
    for i in range(0,M):
        for k in range(0,N):
            if matrix[i][k]==1:
                dfs(i,k,matrix)
                count+=1

    print(count)


for time in range(0,T):
    M,N,K=case[time][0],case[time][1],case[time][2]
    position=case[time][3]
    visited = [False for i in range(0, K)]
    position.sort()
    result(M,N,K,position)