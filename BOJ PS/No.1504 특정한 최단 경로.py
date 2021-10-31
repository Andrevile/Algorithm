import sys
import heapq
N,E=map(int,sys.stdin.readline().split(" "))
INF=sys.maxsize
graph={}
for i in range(1,N+1):
    graph[i]={}
for i in range(E):
    row,col,distance=map(int,sys.stdin.readline().split(" "))
    graph[row][col]=distance
    graph[col][row]=distance


v1,v2=map(int,sys.stdin.readline().split(" "))

def dijikstra(graph,start):
    queue=[]
    distances={}
    for i in range(1,N+1):
        distances[i]=INF
    distances[start]=0
    heapq.heappush(queue,[distances[start],start])
    while queue:
        current_distance,current_vertex=heapq.heappop(queue)

        if current_distance>distances[current_vertex]:
            continue;

        for key,val in graph[current_vertex].items():
            distance=current_distance+val
            if distance<distances[key]:
                distances[key]=distance
                heapq.heappush(queue,[distance,key])

    return distances



sum=0
temp1=0
temp2=0
if v1==1:
    if v2==N:
        sum+=dijikstra(graph,v1)[v2]
        if len(graph[v2])==0: #도착점에 연결된 점이 아무것도 없을 떄
            sum=-1

    else:
        sum+=dijikstra(graph,v1)[v2]
        sum+=dijikstra(graph,v2)[N]
        if len(graph[v2])==0: #v2에 연결된 점이 아무것도 없을 떄
            sum=-1
        if len(graph[v2])==1 and N in graph[v2]: #v2에 연결된 점이 도착점 뿐일 때
            sum=-1
        if len(graph[N])==0: #도착점에 연결된 점이 아무것도 없을 때
            sum=-1
else:
    if v2==N:
        sum+=dijikstra(graph,1)[v1]
        sum+=dijikstra(graph,v1)[v2]
        if len(graph[v1])==0:
            sum=-1
        if len(graph[v1])==1 and v2 in graph[v1]: #v1에 연결된 점이 v2 뿐일때
            sum=-1
        if len(graph[v2])==0: #v2에 연결된 점이 아무것도 없을 때,
            sum=-1
    else:
        temp1+=dijikstra(graph,1)[v1]
        temp1+=dijikstra(graph,v1)[v2]
        temp1+=dijikstra(graph,v2)[N]
        temp2+=dijikstra(graph,1)[v2]
        temp2+=dijikstra(graph,v2)[v1]
        temp2+=dijikstra(graph,v1)[N]
        if len(graph[v1]) == 0 or len(graph[v2]) == 0 or len(graph[N]) == 0:
            sum = -1
        if (len(graph[v1]) == 1 and v1 in graph[N]) or (len(graph[v2]) == 1 and v2 in graph[N]):
            sum = -1
        if len(graph[v1]) == 0 or len(graph[v2]) == 0 or len(graph[N]) == 0:
            sum = -1
        if (len(graph[v1]) == 1 and v1 in graph[N]) or (len(graph[v2]) == 1 and v2 in graph[N]):
            sum = -1
        if sum!=-1:
            if temp1<temp2:
                sum=temp1
            else:
                sum=temp2


print(sum)


