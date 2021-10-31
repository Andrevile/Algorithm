import sys
from collections import deque

N,K = map(int,sys.stdin.readline().split(" "))

MAX = 100001
position = {}
def result():
    queue = deque([[N,0]])
    position[N] = 0

    while queue:
        pop = queue.popleft()
        if pop[0] == K:
            break;

        minus, plus, multiply = pop[0]-1, pop[0]+1, pop[0]*2


        if multiply not in position and multiply <= MAX:
            position[multiply] = pop[1]
            queue.appendleft([multiply,pop[1]])
        if minus not in position and pop[0] != 0 and minus <= MAX:
            position[minus] = pop[1]+1
            queue.append([minus,pop[1]+1])
        if plus not in position and plus <= MAX:
            position[plus] = pop[1]+1
            queue.append([plus, pop[1]+1])


    return pop[1]

print(result())





