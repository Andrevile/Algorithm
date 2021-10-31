import sys

N=int(sys.stdin.readline())
board=[[0,0,0],[0,0,0]]

for i in range(N):
    temp=list(map(int,sys.stdin.readline().split(" ")))

    board[0]=[max(board[0][0],board[0][1])+temp[0]
                  ,max(board[0][0],board[0][1],board[0][2])+temp[1]
                  ,max(board[0][1],board[0][2])+temp[2]]
    board[1]=[min(board[1][0],board[1][1])+temp[0]
                  ,min(board[1][0],board[1][1],board[1][2])+temp[1]
                  ,min(board[1][1],board[1][2])+temp[2]]


print(max(board[0]),min(board[1]))