import sys
sys.setrecursionlimit(100000)

N, M, K = map(int,sys.stdin.readline().split(" "))

way_pass = [[0 for i in range(M)] for i in range(N)]
for i in range(K):
    r,c = map(int,sys.stdin.readline().split(" "))
    way_pass[r-1][c-1] = 1


direction = [[1,0],[-1,0],[0,1],[0,-1]]
def DFS(start):
    global weight
    way_pass[start[0]][start[1]] = 0
    weight += 1
    for dir in direction:
        dy = start[0] + dir[0]
        dx = start[1] + dir[1]
        if 0<= dy <N and 0<= dx < M:
            if way_pass[dy][dx] == 1:
                DFS([dy,dx])






maximum = 0
for i in range(N):
    for k in range(M):
        if way_pass[i][k] == 1:
            weight = 0
            DFS([i,k])
            if weight > maximum:
                maximum = weight

print(maximum)
