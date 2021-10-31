import sys
import heapq
N,M,X=map(int,sys.stdin.readline().split(" ")) #1<=N<=1000 #1<=M<=10000
graph={}
for i in range(1,N+1):
    graph[i]={}
    #print(graph[i])
for i in range(M):
    row,col,distance=map(int,sys.stdin.readline().split(" "))
    #print(graph[row])
    if col in graph[row]:
        #print("true")
        if graph[row][col]<distance:
            continue
    #print(graph[row][col])

    graph[row][col]=distance



def Dijkstra(graph,start):
    distances={}
    for i in range(1,N+1):
        distances[i]=101
    queue=[]
    distances[start]=0
    heapq.heappush(queue,[distances[start],start])
    while queue:
        current_distance,current_destination=heapq.heappop(queue)
        if distances[current_destination]<current_distance:
            continue;

        for key,val in graph[current_destination].items():
            distance=current_distance+val
            if distances[key]>distance:
                distances[key]=distance
                heapq.heappush(queue,[distance,key])


    return distances

maximum=0
for i in range(1,N+1):
    temp=Dijkstra(graph,i)[X]+Dijkstra(graph,X)[i]
    if maximum<temp:
        maximum=temp
print(maximum)

