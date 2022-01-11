import sys

N = int(sys.stdin.readline())

DP = [0] * 31
DP[2] = 3
for i in range(4,N+1):
    if i % 2 == 1:
        DP[i] = 0
    else:
        DP[i] = DP[i-2] * 3
        for j in range(i-4,-1,-2):
            DP[i] += DP[j] * 2
        DP[i] += 2

print(DP[N])

