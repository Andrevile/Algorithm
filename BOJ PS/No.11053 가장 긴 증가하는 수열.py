import sys

N = int(sys.stdin.readline())
sequence = list(map(int,sys.stdin.readline().rstrip().split(" ")))


DP = [1 for i in range(N)]

for i in range(N):
    for k in range(i):
        if sequence[i] > sequence[k]:
            DP[i] = max(DP[i],DP[k]+1)


print(max(DP))

