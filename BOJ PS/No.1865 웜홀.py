import sys
import heapq

TC=int(sys.stdin.readline())
INF=sys.maxsize


def bellman_ford(graph,start):
    distance, predecessor = {},{}
    for node in graph:
        distance[node]=INF
        predecessor[node]=None
    distance[start]=0

    for i in range(len(graph)-1):
        for node in graph:
            for neighbor in graph[node]:
                if distance[neighbor] > distance[node] + graph[node][neighbor]:
                    distance[neighbor]=distance[node]+graph[node][neighbor]
                    predecessor[neighbor]=node

    for node in graph:
        for neighbor in graph[node]:
            if distance[neighbor] > distance[node] + graph[node][neighbor]:
                return -1

    return distance,predecessor

for i in range(TC):
    graph={}
    N,M,W=map(int,sys.stdin.readline().split(" "))
    for k in range(1,N+1):
        graph[k]={}
    for k in range(M):
        S,E,T=map(int,sys.stdin.readline().split(" "))
        if E in graph[S]:
            if graph[S][E]<T:
                continue;
        graph[S][E]=T
        graph[E][S]=T
    for k in range(W):
        S,E,T=map(int,sys.stdin.readline().split(" "))
        T=T*(-1)
        if E in graph[S]:
            if graph[S][E]<T:
                continue;
        graph[S][E]=T
    if bellman_ford(graph,1) == -1:
        print("YES")
    else:
        print("NO")


