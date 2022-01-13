import sys

N,M= map(int,sys.stdin.readline().split(" "))


if N > M:
    smaller = M
    bigger = N
else:
    smaller = N
    bigger = M

answer = smaller -1 + (bigger -1) * smaller
print(answer)