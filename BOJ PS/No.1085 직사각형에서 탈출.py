import sys

x,y,w,h = map(int,sys.stdin.readline().split(" "))


center_x, center_y = w/2, h/2

if center_x < x :
    row_distance = w - x
else:
    row_distance = x

if center_y < y :
    col_distance = h - y
else:
    col_distance = y

print(min(row_distance,col_distance))