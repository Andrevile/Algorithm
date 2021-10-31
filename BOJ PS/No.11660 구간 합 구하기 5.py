import sys

N, M = map(int,sys.stdin.readline().split(" "))
score_board = []
sum_list = []
for i in range(N):
    score_board.append(list(map(int,sys.stdin.readline().split(" "))))

for i in range(M):
    sum_list.append(list(map(int,sys.stdin.readline().split(" "))))

for i in range(N):
    for k in range(1,N):
        score_board[i][k] = score_board[i][k-1]+score_board[i][k]


for i in range(1,N):
    for k in range(N):
        score_board[i][k] = score_board[i-1][k] + score_board[i][k]



for idx in sum_list:
    x1,x2,x3,x4 = idx[0]-1,idx[1]-1,idx[2]-1,idx[3]-1
    result = score_board[x3][x4]

    if 0<=x1-1:
        result -= score_board[x1-1][x4]
    if 0<=x2-1:
        result -= score_board[x3][x2-1]
    if 0<=x1-1 and 0<=x2-1:
        result += score_board[x1-1][x2-1]

    print(result)