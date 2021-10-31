import sys
from itertools import permutations

N,M = map(int,sys.stdin.readline().split(" "))
num_list = list(map(int,sys.stdin.readline().split(" ")))
num_list.sort()
result = list(permutations(num_list,M))
for key in result:
    for i in range(len(key)):
        print(key[i], end = " ")
    print()