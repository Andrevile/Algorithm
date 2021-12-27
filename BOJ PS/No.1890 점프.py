import sys

N = int(sys.stdin.readline())


board = []
for i in range(N):
    board.append(list(map(int,sys.stdin.readline().split(" "))))
direction = [[1,0],[0,1]]

visited = [[0 for i in range(N)] for i in range(N)]
visited[0][0] = 1


for i in range(N):
    for k in range(N):
        if i == N-1 and k == N-1:
            continue
        if visited[i][k] > 0:
            for dir in direction:
                dy = i + dir[0]*board[i][k]
                dx = k + dir[1]*board[i][k]
                if 0<= dy < N and 0<= dx < N:
                    visited[dy][dx] += visited[i][k]

print(visited[-1][-1])

# def Bruteforce(start):
#     count = 0
#     current = [start[0],start[1]]
#
#     if start == [N-1,N-1]:
#         return 1
#
#
#     for dir in direction:
#         dy = current[0] + dir[0]*board[current[0]][current[1]]
#         dx = current[1] + dir[1]*board[current[0]][current[1]]
#         if 0<= dy < N and 0<= dx < N:
#             if visited[dy][dx] != -1:
#                 visited[dy][dx] = -1
#                 count += Bruteforce([dy,dx])
#                 visited[dy][dx] = 0
#
#     return count


# print(Bruteforce([0,0],0))
