import sys

n = int(sys.stdin.readline())
m = int(sys.stdin.readline())
INF = 100000 * n + 1
city = [[INF for i in range(n)] for i in range(n)]

for i in range(n):
    city[i][i] = 0

for i in range(m):
    start,finish,distance = map(int,sys.stdin.readline().split(" "))
    if distance < city[start-1][finish-1]:
        city[start-1][finish-1] = distance

def floyd():
    for i in range(n):
        for j in range(n):
            for k in range(n):
                city[j][k] = min(city[j][k] , city[j][i]+city[i][k])

floyd()
for i in range(n):
    for k in range(n):
        if city[i][k] == INF:
            print(0, end = " ")
        else:
            print(city[i][k],end = " ")
    print()

