import sys
from collections import deque
K = int(sys.stdin.readline())
W,H = map(int,sys.stdin.readline().split(" "))

board = []

for i in range(H):
    board.append(list(map(int,sys.stdin.readline().split(" "))))

visited =[[[0 for i in range(K+1)] for i in range(W)] for i in range(H)]


horse_direction = [[-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1]]
normal_direction = [[1,0],[-1,0],[0,1],[0,-1]]

def BFS(start):
    queue = deque([start])
    visited[start[0]][start[1]][start[2]]=1
    while queue:
        pop = queue.popleft()

        if pop[0] == H-1 and pop[1] == W-1:
            return visited[H-1][W-1][pop[2]]-1

        for n_dir in normal_direction:
            ny = pop[0] + n_dir[0]
            nx = pop[1] + n_dir[1]
            if 0 <= ny < H and 0 <= nx < W:
                if board[ny][nx] != 1 and visited[ny][nx][pop[2]] == 0:
                    queue.append([ny,nx,pop[2]])
                    visited[ny][nx][pop[2]] = visited[pop[0]][pop[1]][pop[2]] + 1



        if pop[2] > 0:

            for h_dir in horse_direction:
                hy = pop[0] + h_dir[0]
                hx = pop[1] + h_dir[1]
                if 0<=hy<H and 0<=hx<W:
                    if board[hy][hx] != 1 and visited[hy][hx][pop[2]-1] == 0:
                        queue.append([hy,hx,pop[2]-1])
                        visited[hy][hx][pop[2]-1] = visited[pop[0]][pop[1]][pop[2]] + 1



    return -1

print(BFS([0,0,K]))


