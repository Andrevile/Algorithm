import sys

N = int(sys.stdin.readline())

people = list(map(int,sys.stdin.readline().split(" "))) #인덱스는 키


position = [-1 for i in range(N)]

for i in range(N):
    minus_count = 0
    current = 0
    for k in range(N):
        if position[k] == -1:
            minus_count += 1
        if minus_count == people[i]+1:
            current = k
            break;
    position[current] = i+1

for i in range(len(position)):
    print(position[i],end=" ")