import sys

board = {'A':{}, 'B':{}, 'C':{}, 'D':{}, 'E':{}, 'F':{}, 'G':{}, 'H':{}}
for key in board:
    for i in range(1,9):
        board[key][i] = 0

king_position, horse_position, N = sys.stdin.readline().rstrip().split(" ")
king_position_col = ord(king_position[0])
king_position_row = int(king_position[1])
horse_position_col = ord(horse_position[0])
horse_position_row = int(horse_position[1])
board[chr(king_position_col)][str(king_position_row)] = 1
board[chr(horse_position_col)][str(horse_position_row)] = 1
# R : 한 칸 오른쪽으로
# L : 한 칸 왼쪽으로
# B : 한 칸 아래로
# T : 한 칸 위로
# RT : 오른쪽 위 대각선으로
# LT : 왼쪽 위 대각선으로
# RB : 오른쪽 아래 대각선으로
# LB : 왼쪽 아래 대각선으로

dir = {'R':[0,1], 'L':[0,-1], 'B':[-1,0], 'T':[1,0], 'RT':[1,1], 'LT':[1,-1], 'RB':[-1,1], 'LB':[-1,-1]}
def move_position(direction):

    global king_position_row,king_position_col,horse_position_col,horse_position_row
    temp = dir[direction]
    if ((1<=king_position_row + temp[0]<9) and (65<=king_position_col + temp[1]<73)):

        king_position_row = king_position_row + temp[0]
        king_position_col = king_position_col + temp[1]
        if king_position_row == horse_position_row and king_position_col == horse_position_col:
            if (1<=horse_position_row + temp[0]<9) and (65<=horse_position_col + temp[1]<73):
                horse_position_row = horse_position_row + temp[0]
                horse_position_col = horse_position_col + temp[1]
            else:
                king_position_row = king_position_row - temp[0]
                king_position_col = king_position_col - temp[1]





for i in range(int(N)):
    direction = sys.stdin.readline().rstrip()
    board[chr(king_position_col)][str(king_position_row)] = 0
    board[chr(horse_position_col)][str(horse_position_row)] = 0
    move_position(direction)


king_position = chr(king_position_col)+str(king_position_row)
horse_position = chr(horse_position_col)+str(horse_position_row)
print(king_position)
print(horse_position)
