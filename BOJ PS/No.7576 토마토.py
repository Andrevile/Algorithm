import sys
from collections import deque
M,N=map(int,sys.stdin.readline().split(" ")) #M:가로 N:세로

box=[]
for i in range(N):
    box.append(list(map(int,sys.stdin.readline().split(" "))))


direction=[[-1,0],[1,0],[0,1],[0,-1]]
def BFS(box):
    queue=deque()
    for i in range(N):
        for k in range(M):
            if box[i][k]==1:
                queue.append([i,k,0])
    while len(queue)!=0:
        # for i in range(N):
        #     print(box[i])
        #print(queue)
        pop=queue.popleft()
        #print("pop={}".format(pop))
        for dir in direction:
            if (0<=pop[0]+dir[0]<=N-1) and (0<=pop[1]+dir[1]<=M-1):
                if box[pop[0]+dir[0]][pop[1]+dir[1]]==0:
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],pop[2]+1])
                    box[pop[0]+dir[0]][pop[1]+dir[1]]=1

    flag=0
    for i in range(N):
        for k in range(M):
            if box[i][k]==0:
                flag=1
                break;
    if flag==1:
        return -1
    else:
        return pop[2]



print(BFS(box))
