import sys
from collections import deque

N,M=map(int,sys.stdin.readline().split(" "))
number=list(map(int,sys.stdin.readline().split(" ")))
sum_list=[0]*(N+1)
for i in range(1,N+1):
    sum_list[i]=number[i-1]+sum_list[i-1]



def result(prev,post):
    return sum_list[post]-sum_list[prev-1]

for i in range(M):
    prev,post=map(int,sys.stdin.readline().split(" "))
    print(result(prev,post))