import sys
from collections import deque
N,M = map(int,sys.stdin.readline().split(" "))

graph = [[] for i in range(N)]


def BFS(start):
    queue = deque([start])
    visited[start] = True
    count = 1
    while queue:
        pop = queue.popleft()

        for i in range(len(graph[pop])):
            if visited[graph[pop][i]] == False:
                queue.append(graph[pop][i])
                visited[graph[pop][i]] = True
                count += 1
    return count
for i in range(M):
    prev,post = map(int,sys.stdin.readline().split(" "))
    graph[post-1].append(prev-1)

maximum = 0
answer = []
for i in range(N):
    visited = [False] * N
    temp = BFS(i)
    if maximum < temp:
        maximum = temp
        answer = [i]
    elif temp == maximum:
        answer.append(i)

for key in answer:
    print(key+1, end= " ")
