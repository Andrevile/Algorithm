import sys

n,m=map(int,sys.stdin.readline().rstrip().split(" "))
DP=[[1,1],[1,2,1],[1,3,3,1]]

def result(n):
    temp=[1]
    for i in range(0,n):
        temp.append(DP[n-1][i]+DP[n-1][i+1])
    temp.append(1)
    return temp
for i in range(3,n):
    DP.append(result(i))

print(DP[n-1][m])