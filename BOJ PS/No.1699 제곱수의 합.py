import sys
N = int(sys.stdin.readline())


DP = [i for i in range(0,100001)]


for i in range(1,N+1):
    for j in range(1,i):
        square = j*j
        if square > i:
            break;
        if DP[i] > DP[i-square] + 1:
            DP[i] = DP[i-square] + 1


print(DP[N])
