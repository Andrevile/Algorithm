import sys

N = int(sys.stdin.readline())

position = []
for i in range(N):
    x,y = map(int,sys.stdin.readline().split(" "))
    position.append([x,y])


prev = 0
post = 0

for i in range(N):
    prev += position[i][0] * position[(i+1)%N][1]
    post += position[i][1] * position[(i+1)%N][0]

answer = abs(prev-post)/2
print(round(answer,1))


