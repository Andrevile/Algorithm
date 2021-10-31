import sys

sys.setrecursionlimit(100000)
n=int(sys.stdin.readline())
node={}
for i in range(1,n+1):
    node[i]={}
for i in range(n-1):
    parent,child,distance=map(int,sys.stdin.readline().split(" "))
    node[parent][child]=distance
    node[child][parent]=distance

visited={}
distances={}
for i in range(1,n+1):
    visited[i]=False
    distances[i]=0
def DFS(start):
    visited[start]=True



    for key,val in node[start].items():
        if visited[key]==False:
            distances[key]=distances[start]+val
            DFS(key)


DFS(1)
maximum=0
for key,val in distances.items():
    if maximum<val:
        maximum=val
        temp=key
    if maximum==0:
        temp=1
distances={}
for i in range(1,n+1):
    distances[i]=0
    visited[i]=False
DFS(temp)
print(max(distances.values()))