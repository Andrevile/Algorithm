import sys
from collections import deque
M,N,H=map(int,sys.stdin.readline().rstrip().split(" "))
box=[]
for height in range(H):
    temp=[]
    for row in range(N):
        temp.append(list(map(int,sys.stdin.readline().rstrip().split(" "))))
    box.append(temp)

#print(box)

direction=[[-1,0,0],[1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]
def DFS(box):
    queue=deque()
    for height in range(H):
        for row in range(N):
            for col in range(M):
                if box[height][row][col]==1:
                    queue.append([height,row,col,0])

    if len(queue)==0:
        pop=[0,0,0,0]
    while queue:
       # print(queue)
        pop=queue.popleft()
       # print("pop={}".format(pop))
        for dir in direction:
            if 0<=pop[0]+dir[0]<H and 0<=pop[1]+dir[1]<N and 0<=pop[2]+dir[2]<M:
                if box[pop[0]+dir[0]][pop[1]+dir[1]][pop[2]+dir[2]]==0:
                    box[pop[0] + dir[0]][pop[1] + dir[1]][pop[2] + dir[2]]=1
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],pop[2]+dir[2],pop[3]+1])

    return pop

answer=DFS(box)

flag=0
for height in range(H):
    for row in range(N):
        for col in range(M):
            if box[height][row][col]==0:
                flag=1

if flag==1:
    print(-1)
else:
    print(answer[3])