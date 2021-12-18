import sys


N,M = map(int,sys.stdin.readline().split(" "))

picture = [[0 for i in range(100)] for i in range(100)]


def result(l_x,l_y,r_x,r_y):

    for i in range(l_y,r_y+1):
        for k in range(l_x,r_x+1):
            picture[i][k] += 1


count = 0

for i in range(N):
    l_down_x,l_down_y,r_up_x,r_up_y = map(int,sys.stdin.readline().split(" "))
    result(l_down_x-1,l_down_y-1,r_up_x-1,r_up_y-1)

for i in range(100):
    for k in range(100):
        if picture[i][k] > M:
            count += 1

print(count)
