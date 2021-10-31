import sys
from itertools import combinations
N,M = map(int,sys.stdin.readline().split(" "))

num_list = [ i for i in range(1,N+1)]
result=list(combinations(num_list,M))
for res in result:
    for i in range(len(res)):
        print(res[i],end = " ")
    print()
