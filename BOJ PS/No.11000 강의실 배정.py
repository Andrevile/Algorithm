import sys
import heapq
N=int(sys.stdin.readline())
lecturelist=[]
for i in range(0,N):
    temp=list(map(int,sys.stdin.readline().split()))
    lecturelist.append(temp)

def result(N,lecturelist):
    sorted(lecturelist,key=lambda x:x[1])
    lecturelist.sort()
    queue = []
    heapq.heappush(queue,lecturelist[0][1])
    for i in range(1,len(lecturelist)):
        if queue[0]>lecturelist[i][0]:
            heapq.heappush(queue,lecturelist[i][1])
        else:
            heapq.heappop(queue)
            heapq.heappush(queue,lecturelist[i][1])


    return len(queue)

print(result(N,lecturelist))