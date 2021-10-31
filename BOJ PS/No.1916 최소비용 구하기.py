import sys
import heapq

N=int(sys.stdin.readline())
M=int(sys.stdin.readline())
INF=sys.maxsize
graph={}
for i in range(1,N+1):
    graph[i]={}
for i in range(M):
    row,col,distance=map(int,sys.stdin.readline().split(" "))
    if col in graph[row]:
        if distance>graph[row][col]:
            continue;
    graph[row][col]=distance


start,destination=map(int,sys.stdin.readline().split(" "))


def dijikstra(graph,start):
    queue=[]
    distances={}
    for i in range(1,N+1):
        distances[i]=INF
    distances[start]=0
    heapq.heappush(queue,[distances[start],start])

    while queue:
        current_distance,current_vertex=heapq.heappop(queue)

        if distances[current_vertex]<current_distance:
            continue;

        for key,val in graph[current_vertex].items():
            distance=current_distance+val
            if distance<distances[key]:
                distances[key]=distance
                heapq.heappush(queue,[distances[key],key])

    return distances


print(dijikstra(graph,start)[destination])