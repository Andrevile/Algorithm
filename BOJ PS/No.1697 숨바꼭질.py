import sys
from collections import deque

N,K=map(int,sys.stdin.readline().split())

def result(N,K):
    destination=N
    queue=deque([[K,0]])
    time={K:0}
    while True:
        pop=queue.popleft()
        start=pop[0]
        if start==destination:
            break;
        if start%2==0 and start>destination and start/2>=0:
            if int(start/2) not in time:
                queue.append([int(start/2),pop[1]+1])
                time[int(start/2)]=pop[1]+1
            else:
                if time[int(start/2)]>pop[1]+1:
                    queue.append([int(start / 2), pop[1] + 1])
                    time[int(start / 2)] = pop[1] + 1
        if start-1>=0:
            if start-1 not in time:
                queue.append([start-1,pop[1]+1])
                time[start-1]=pop[1]+1
            else:
                if time[start-1]>pop[1]+1:
                    queue.append([start - 1, pop[1] + 1])
                    time[start - 1] = pop[1] + 1
        if start+1>=0:
            if start+1 not in time:
                queue.append([start+1,pop[1]+1])
                time[start+1]=pop[1]+1
            else:
                if time[start+1]>pop[1]+1:
                    queue.append([start + 1, pop[1] + 1])
                    time[start + 1] = pop[1] + 1
    return pop[1]



print(result(N,K))
