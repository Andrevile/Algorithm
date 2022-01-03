import sys
import math
N,M = map(int,sys.stdin.readline().split(" "))


Prime = [True] * (M+1)
for i in range(2,M+1):
    if Prime[i] == True:
        for k in range(i*2,(M+1),i):
            Prime[k] = False

for i in range(N,(M+1)):
    if Prime[i] == True and i > 1:
        print(i)
