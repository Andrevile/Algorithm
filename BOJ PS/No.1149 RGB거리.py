import sys

N=int(sys.stdin.readline())
cost=[]
for i in range(N):
    cost.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))

#
# 1번 집의 색은 2번 집의 색과 같지 않아야 한다.
# N번 집의 색은 N-1번 집의 색과 같지 않아야 한다.
# i(2 ≤ i ≤ N-1)번 집의 색은 i-1번, i+1번 집의 색과 같지 않아야 한다.

DP=[[1000000,1000000,1000000] for i in range(N)]
DP[0][0]=cost[0][0]
DP[0][1]=cost[0][1]
DP[0][2]=cost[0][2]

def result():
    for i in range(1,N):
        for k in range(3):
            for l in range(3):
                if l!=k:
                    temp=DP[i-1][k]+cost[i][l]
                    if DP[i][l]>temp:
                        DP[i][l]=temp

result()
print(min(DP[N-1]))





