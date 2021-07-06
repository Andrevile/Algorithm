import sys
import math
from itertools import combinations
N=int(sys.stdin.readline().rstrip())
K=int(sys.stdin.readline().rstrip())
pos=list(map(int,sys.stdin.readline().split(" ")))

def result(N,K,pos):
    pos.sort()
    if K>N:
        return 0
    distance=[]
    for i in range(0,N-1):
        distance.append(pos[i+1]-pos[i])
    distance.sort(reverse=True)
    for k in range(0,K-1):
        distance.pop(0)
    return sum(distance)


print(result(N,K,pos))