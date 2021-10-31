import sys
sys.setrecursionlimit(1000000)
N,M=map(int,sys.stdin.readline().rstrip().split(" "))
matrix=[]
for i in range(N):
    temp=[0 for k in range(N)]
    matrix.append(temp)

edge=[]
for i in range(M):
    u,v=map(int,sys.stdin.readline().rstrip().split(" "))
    edge.append([u,v])

for key in edge:
    matrix[key[0]-1][key[1]-1]=1
    matrix[key[1]-1][key[0]-1]=1

visited=[False for i in range(N)]
def DFS(matrix,visited,start):
    for i in range(N):
        if visited[i]==False and matrix[start][i]==1:
            visited[i]=True
            DFS(matrix,visited,i)


count=0
start=0
for i in range(N):
    if visited[i]==False:
        DFS(matrix,visited,i)
        count+=1

print(count)





