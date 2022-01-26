from collections import deque


def solution(n, edge):
    graph = [[] for i in range(n)]
    for path in edge:
        graph[path[0] - 1].append(path[1] - 1)
        graph[path[1] - 1].append(path[0] - 1)
    visited = [False] * n
    visited[0] = True

    def BFS(start):
        queue = deque([[start, 0]])
        while queue:
            vertex, distance = queue.popleft()
            for i in graph[vertex]:
                if visited[i] == False:
                    queue.append([i, distance + 1])
                    visited[i] = distance + 1

    BFS(0, 0)
    answer = visited.count(max(visited))
    return answer
