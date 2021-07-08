# 그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
# 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고,
# 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.

# 첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다.
# 다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다.
# 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.

# 첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

#case1
# 4 5 1
# 1 2
# 1 3
# 1 4
# 2 4
# 3 4

#case2
# 5 5 3
# 5 4
# 5 2
# 1 2
# 3 4
# 3 1

import sys
from collections import deque
N,M,V=map(int,sys.stdin.readline().split(" "))
edge=[]

for i in range(M):
    prev,post=map(int,sys.stdin.readline().split(" "))
    edge.append([prev,post])
edge = sorted(edge, key=lambda x: x[1])
edge.sort()
matrix=[]
for i in range(N):
    temp=[]
    for k in range(N):
        temp.append(0)
    matrix.append(temp)

#print(matrix[0][1])
for key in edge:
    matrix[key[0]-1][key[1]-1]=1
    matrix[key[1]-1][key[0]-1]=1

#print(matrix)

def DFS(matrix,visited,start):
    visited[start-1]=True
    print(start,end=" ")
    for i in range(N):
        if matrix[start-1][i]==1 and visited[i]==False:
            DFS(matrix,visited,i+1)

def BFS(matrix,visited,start):
    queue=deque([start])
    visited[start-1] = True
    while len(queue)!=0:
        #print(queue)
        row=queue.popleft()-1
        print(row+1, end=" ")
        for i in range(N):
            if matrix[row][i]==1 and visited[i]==False:
                queue.append(i+1)
                visited[i]=True



#
#
visited=[False for i in range(N)]
DFS(matrix,visited,V)
visited=[False for i in range(N)]
print()
BFS(matrix,visited,V)