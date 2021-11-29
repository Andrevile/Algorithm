import sys
from collections import deque
N,East,West,South,North = map(int,sys.stdin.readline().split(" "))

board = [[0 for i in range(2*N+2)] for i in range(2*N+2)]

direction = [[0,1,East],[0,-1,West],[1,0,South],[-1,0,North]]
start_X, start_Y = N,N
uncomplex_prob = 0

def Brute_force(current_X,current_Y,prev_X,prev_Y,depth):
    global uncomplex_prob

    if depth == N:
        uncomplex_prob += board[current_X][current_Y] / (100**(depth));
        return

    for dir in direction:
        if depth != 0:
            if current_X + dir[0] == prev_X and current_Y + dir[1] == prev_Y:
                continue;
        if board[current_X + dir[0]][current_Y + dir[1]] == 0:
            board[current_X + dir[0]][current_Y + dir[1]] = board[current_X][current_Y] * dir[2]
            Brute_force(current_X + dir[0],current_Y + dir[1],current_X,current_Y, depth + 1)
            board[current_X + dir[0]][current_Y + dir[1]] = 0


board[N][N] = 1

Brute_force(N,N,N,N,0)
print(uncomplex_prob)








