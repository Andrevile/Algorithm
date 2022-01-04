import sys
import heapq
# 운동 경로를 찾는 것이 불가능한 경우에는 -1을 출력한다.
MAX = sys.maxsize
V,E = map(int,sys.stdin.readline().split(" "))

graph = {}
DP = [[MAX]*V for i in range(V)]
for i in range(1,V+1):
    graph[i] = {}
for i in range(E):
    a,b,c = map(int,sys.stdin.readline().split(" "))
    graph[a][b] = c
    DP[a-1][b-1] = c


def Dijkstra(start):
    queue = []
    distance = {}
    for i in range(1,V+1):
        distance[i] = MAX
    distance[start] = 0
    heapq.heappush(queue,[distance[start],start])

    while queue:
        current_distance,current_node = heapq.heappop(queue)

        if current_distance > distance[current_node]:
            continue;

        for next_node,next_distance in graph[current_node].items():
            temp_distance = next_distance + distance[current_node]
            if temp_distance < distance[next_node]:
                heapq.heappush(queue,[temp_distance,next_node])
                distance[next_node] = temp_distance
    return distance



for i in range(V):
    for j in range(V):
        for k in range(V):
            if DP[j][k] > DP[j][i] + DP[i][k]:
                DP[j][k] = DP[j][i] + DP[i][k]

MIN = MAX
for i in range(V):
    if MIN > DP[i][i]:
        MIN = DP[i][i]


if MIN > MAX:
    print(-1)
else:
    print(MIN)
