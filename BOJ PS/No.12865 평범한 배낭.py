import sys

N, K = map(int,sys.stdin.readline().split(" "))
weight_value = []

for i in range(N):
    weight,value = map(int,sys.stdin.readline().split(" "))
    weight_value.append([weight,value])

backpack=[[0 for i in range(K+1)] for k in range(N+1)]

for i in range(1,N+1):
    for k in range(1,K+1):
        weight = weight_value[i-1][0]
        value = weight_value[i-1][1]

        if k < weight :
            backpack[i][k] = backpack[i-1][k]

        else :
            backpack[i][k] = max(backpack[i-1][k-weight]+value, backpack[i-1][k])


print(backpack[N][K])