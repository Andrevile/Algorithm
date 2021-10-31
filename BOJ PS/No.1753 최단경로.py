import sys
import heapq

V,E=map(int,sys.stdin.readline().split(" "))
K=int(sys.stdin.readline())
INF=sys.maxsize
graph={}
for i in range(1,V+1):
    graph[i]={}
for i in range(E):
    u,v,w=map(int,sys.stdin.readline().split(" "))
    if v in graph[u]:
        if graph[u][v]<w:
            continue;
    graph[u][v]=w

def dijikstra(graph,start):
    distances={}
    for i in range(1,V+1):
        distances[i]=INF
    distances[start]=0
    queue=[]
    heapq.heappush(queue,[distances[start],start])

    while queue:
        current_distance,current_vertex=heapq.heappop(queue)

        if distances[current_vertex]<current_distance:
            continue;

        for key,val in graph[current_vertex].items():
            distance=current_distance+val
            if distance<distances[key]:
                distances[key]=distance
                heapq.heappush(queue,[distance,key])

    return distances

temp=dijikstra(graph,K)
for i in range(1,V+1):
    if temp[i]==INF:
        print("INF")
    else:
        print(temp[i])

