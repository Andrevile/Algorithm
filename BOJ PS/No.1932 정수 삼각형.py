import sys
import copy

n=int(sys.stdin.readline())
triangle=[]

for i in range(n):
    triangle.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))
DP=copy.deepcopy(triangle)

direction=[[1,-1],[1,1]] #left right


for i in range(1,n):
     for l in range(len(triangle[i])):
        if l==0:
            DP[i][l]=DP[i-1][l]+triangle[i][l]
        elif l==len(triangle[i])-1:
            DP[i][l]=DP[i-1][l-1]+triangle[i][l]
        else:
            temp=max(triangle[i][l]+DP[i-1][l],triangle[i][l]+DP[i-1][l-1])
            DP[i][l]=temp

print(max(DP[n-1]))

