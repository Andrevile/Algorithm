import sys
from collections import deque

N,M = map(int,sys.stdin.readline().split(" "))
road = {}
for i in range(1,N+1):
    road[i] = {}

for i in range(M):
    prev,post,cost = map(int,sys.stdin.readline().split(" "))
    if post not in road[prev]:
        road[prev][post] = cost
        road[post][prev] = cost
    else:
        if cost > road[prev][post]:
            road[prev][post] = cost
            road[prev][post] = cost

start,finish = map(int,sys.stdin.readline().split(" "))



def BFS(start,weight):
    queue = deque([start])
    visited[start] = True
    while queue:
        pop = queue.popleft()

        if pop == finish:
            return True

        for next_key, next_w in road[pop].items():
            if visited[next_key] == False and weight <= next_w:
                queue.append(next_key)
                visited[next_key] = True
    return False

left = 1
right = 1000000000
while left <= right:
    mid = (left + right) // 2
    visited = {}
    for i in range(1, N + 1):
        visited[i] = False
    if BFS(start,mid):
        left = mid + 1
    else:
        right = mid -1

print(right)
# 4 5
# 1 3 3
# 1 2 1
# 1 4 5
# 3 4 1
# 2 4 3
# 1 4