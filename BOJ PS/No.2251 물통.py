import sys
from collections import deque

A,B,C = map(int,sys.stdin.readline().split(" "))

visited = [[False] * (B+1) for i in range(A+1)]
visited[0][0] = True
answer = []

def insert(x,y,queue):
    if visited[x][y] == False:
        visited[x][y] = True
        queue.append([x,y])
def BFS():
    queue = deque([[0,0]])
    while queue:

        pop = queue.popleft()
        temp = C - pop[0] - pop[1]

        if pop[0] == 0:
            answer.append(temp)

        #x->y
        sub = min(pop[0],B-pop[1])
        insert(pop[0]-sub,pop[1]+sub,queue)

        #x->z
        sub = min(pop[0],C-temp)
        insert(pop[0]-sub,pop[1],queue)

        #y->x
        sub = min(pop[1],A-pop[0])
        insert(pop[0]+sub,pop[1]-sub,queue)

        #y->z
        sub = min(pop[1],C-temp)
        insert(pop[0],pop[1]-sub,queue)

        #z-x
        sub = min(temp,A-pop[0])
        insert(pop[0]+sub,pop[1],queue)

        #z-y
        sub = min(temp,B-pop[1])
        insert(pop[0],pop[1]+sub,queue)


BFS()
answer.sort()
for key in answer:
    print(key)


