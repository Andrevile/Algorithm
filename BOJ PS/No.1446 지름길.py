import sys
import heapq
N, D = map(int,sys.stdin.readline().split(" "))
INF = sys.maxsize
short_path = []
highway = [i for i in range(D+1)]
for i in range(N):
    temp = list(map(int,sys.stdin.readline().split(" ")))
    short_path.append(temp)

graph = {}
for i in range(D+1):
    graph[i] = {}

for i in range(D):
    graph[i][i+1] = 1


for key in short_path:
    if key[1] > D:
        continue;
    if key[1] in graph[key[0]]:
        if graph[key[0]][key[1]] < key[2]:
            continue;
    graph[key[0]][key[1]] = key[2]


def Dijkstra(start):
    queue = []
    distance = {}
    for i in range(D+1):
        distance[i] = INF
    distance[start] = 0
    heapq.heappush(queue,[distance[start],start])

    while queue:
        current_distance, current_vertex = heapq.heappop(queue)

        if distance[current_vertex] < current_distance:
            continue;

        for key,val in graph[current_vertex].items():
            next_distance = current_distance + val
            if next_distance < distance[key]:
                distance[key] = next_distance
                heapq.heappush(queue,[distance[key],key])
    return distance

print(Dijkstra(0)[D])

# for i in range(D+1):
#     if i > 0 :
#         highway[i] = min(highway[i],highway[i-1]+1)
#
#     for key in short_path:
#         if key[0] == i and key[1] <= D and highway[i] + key[2] < highway[key[1]]:
#             highway[key[1]] = highway[i] + key[2]
#
# print(highway[D])






