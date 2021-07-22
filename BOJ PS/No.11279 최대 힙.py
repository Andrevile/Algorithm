import heapq
import sys

N=int(sys.stdin.readline())
queue=[]
input_list=[]
for i in range(N):
    input_list.append(int(sys.stdin.readline()))

def result(input_list):
    for key in input_list:
        if key==0:
            if len(queue)==0:
                print(0)
            else:
                print(heapq.heappop(queue)*-1)
        else:
            heapq.heappush(queue,-key)


result(input_list)