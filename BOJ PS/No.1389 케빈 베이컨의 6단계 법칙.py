import sys
from collections import deque
N,M=map(int,sys.stdin.readline().split(" "))
relation=[]
for i in range(M):
    post,prev=map(int,sys.stdin.readline().split(" "))
    relation.append([post,prev])

matrix=[]
for i in range(N):
    temp=[]
    for k in range(N):
        temp.append(0)
    matrix.append(temp)


for key in relation:
    matrix[key[0]-1][key[1]-1]=1
    matrix[key[1]-1][key[0]-1]=1

def BFS(matrix,visited,start):
    queue=deque([[start,0]])
    count=0
    visited[start - 1] = True

    weight=1
    while len(queue)!=0:
        #print(queue)
        pop=queue.popleft()
        count+=pop[1]
        #print("pop={}".format(pop))
        #print(visited)

        for i in range(N):
            if visited[i]==False and matrix[pop[0]-1][i]==1:
                queue.append([i+1,pop[1]+1])
                visited[i] = True

    return count

MIN=10000
for i in range(N):
    visited = [False for i in range(N)]
    temp=BFS(matrix,visited,i+1)
    if MIN>temp:
        MIN=temp
        result=i+1

print(result)