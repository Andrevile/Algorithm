import sys
import heapq
N=int(sys.stdin.readline())
abs_heap=[]



def result(x):
    if x!=0:
        heapq.heappush(abs_heap,[abs(x),x])
    else:
        if abs_heap:
            pop=heapq.heappop(abs_heap)
            print(pop[1])
        else:
            print(0)


for i in range(N):
    x=int(sys.stdin.readline())
    result(x)
