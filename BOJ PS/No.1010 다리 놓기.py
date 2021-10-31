import sys


T = int(sys.stdin.readline())


def result(N,M):
    for i in range(1,M+1):
        DP[1][i] = i

    for i in range(2,N+1):
        for k in range(i,M+1):
            sum = 0

            for _ in range(i-1,k):
                sum += DP[i-1][_]
            DP[i][k] = sum



for i in range(T):
    N, M = map(int,sys.stdin.readline().split(" "))
    DP = [[0 for i in range(M+1)] for i in range(N+1)]
    result(N,M)
    print(DP[N][M])
