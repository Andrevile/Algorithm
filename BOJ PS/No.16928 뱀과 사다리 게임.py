import sys
from collections import deque

N,M=map(int,sys.stdin.readline().split(" "))
up_down={}
visited=[False]*100
count=1
direction=0


for i in range(N):
    prev,post=map(int,sys.stdin.readline().split(" "))
    up_down[prev]=post

for i in range(M):
    prev,post=map(int,sys.stdin.readline().split(" "))
    up_down[prev]=post

def BFS():
    queue=deque([[1,0]])
    visited[queue[0][0]-1]=True
    while True:
        #print(queue)
        pop=queue.popleft()
        if pop[0] in up_down:
            pop[0]=up_down[pop[0]]
        if pop[0]>=100:
            break;
        for i in range(1,7):
            #print(pop[0]+i)
            if pop[0]+i<=100 and visited[pop[0]+i-1]==False:
                queue.append([pop[0]+i,pop[1]+1])
                visited[pop[0]+i-1]=True

    return pop

print(BFS()[1])

