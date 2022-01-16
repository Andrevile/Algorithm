import sys
N = int(sys.stdin.readline())

DP = [0] * (N+1)

DP[0] = 0
DP[1] = 1
if N > 1:
    DP[2] = 1

    for i in range(3,N+1):
        DP[i] = DP[i-1] + DP[i-2]

print(DP[-1])








