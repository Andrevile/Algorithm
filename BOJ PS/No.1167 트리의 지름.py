import sys
from collections import deque
sys.setrecursionlimit(100000)

V=int(sys.stdin.readline())
node=[[]for i in range(V)]
zero_count=[]
for i in range(V):
    temp=list(map(int,sys.stdin.readline().split(" ")))
    node[temp[0]-1]=temp


distance=0
visited={}
vertex=0
def DFS(start,origin,sum):
    visited[start]=True
    global distance
    global vertex
    if distance<sum:
        distance=sum
        vertex=start
    for i in range(1,len(node[start])-1,2):
        if visited[node[start][i]-1]==False:
            DFS(node[start][i]-1,origin,sum+node[start][i+1])


visited=[False]*V
DFS(node[0][0],node[0][0],0)
visited=[False]*V
DFS(vertex,vertex,0)

print(distance)
#




