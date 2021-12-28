import sys

N = int(sys.stdin.readline())

DP = [0] * 1000001
DP[1] = 1 #1
DP[2] = 2 #00 11
DP[3] = 3 #001 100 111
DP[4] = 5 #0011 0000 1001 1100 1111
# DP[5] =   #00111 10011 11001 11100 00001 10000 00100 11111
for i in range(5,N+1):
    DP[i] = (DP[i-1] + DP[i-2])%15746

print(DP[N])