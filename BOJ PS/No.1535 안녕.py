import sys

N = int(sys.stdin.readline()) #N<=20

damage = []
happy = []


damage = list(map(int,sys.stdin.readline().split(" "))) #0<= <=100
happy = list(map(int,sys.stdin.readline().split(" ")))  #0<= <=100


#
# def Brute_Force(start, energy,point,depth):
#     global max_happy
#     visited[start] = True
#     if max_happy < point:
#         max_happy = point
#     for i in range(N):
#         if visited[i] == False and energy - damage[i] > 0:
#             Brute_Force(i,energy - damage[i],point + happy[i],depth+1)
#
#
#
#
# max_happy = 0
#
# for i in range(N):
#     visited = [False] * N
#     if 100 - damage[i] > 0:
#         Brute_Force(i,100-damage[i],happy[i],0)
# print(max_happy)


DP = [[0 for i in range(100)] for i in range(N+1)]
for i in range(1,N+1):
    for k in range(1,100):
        if k < damage[i-1]:
            DP[i][k] = DP[i-1][k]
        else:
            DP[i][k] = max(DP[i-1][k] , happy[i-1] + DP[i-1][k-damage[i-1]])

print(DP[-1][-1])