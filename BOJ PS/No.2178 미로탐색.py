# N×M크기의 배열로 표현되는 미로가 있다.
#
# 1	0	1	1	1	1
# 1	0	1	0	1	0
# 1	0	1	0	1	1
# 1	1	1	0	1	1
# 미로에서 1은 이동할 수 있는 칸을 나타내고, 0은 이동할 수 없는 칸을 나타낸다. 이러한 미로가 주어졌을 때,
# (1, 1)에서 출발하여 (N, M)의 위치로 이동할 때 지나야 하는 최소의 칸 수를 구하는 프로그램을 작성하시오.
# 한 칸에서 다른 칸으로 이동할 때, 서로 인접한 칸으로만 이동할 수 있다.
#
# 위의 예에서는 15칸을 지나야 (N, M)의 위치로 이동할 수 있다. 칸을 셀 때에는 시작 위치와 도착 위치도 포함한다.

#첫째 줄에 두 정수 N, M(2 ≤ N, M ≤ 100)이 주어진다. 다음 N개의 줄에는 M개의 정수로 미로가 주어진다. 각각의 수들은 붙어서 입력으로 주어진다.

#첫째 줄에 지나야 하는 최소의 칸 수를 출력한다. 항상 도착위치로 이동할 수 있는 경우만 입력으로 주어진다.

#case1
# 4 6
# 101111
# 101010
# 101011
# 111011

#case2
# 4 6
# 110110
# 110110
# 111111
# 111101

#case3
# 2 25
# 1011101110111011101110111
# 1110111011101110111011101

#case4
# 7 7
# 1011111
# 1110001
# 1000001
# 1000001
# 1000001
# 1000001
# 1111111


import sys
from collections import deque

N,M=map(int,sys.stdin.readline().split(" "))
Maze=[]
for i in range(N):
    line=list(map(int,sys.stdin.readline().rstrip()))
    Maze.append(line)
# N,M=4,6
# Maze=[[1, 1, 0, 1, 1, 0], [1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1]]

# N,M=2,25
# Maze=[[1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1], [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1]]
#print(Maze)
#출발은 (0,0) 도착은(N-1,M-1)
direction=[[1,0],[-1,0],[0,-1],[0,1]]
def pathfinder(Maze,cur_r,cur_c,count):
    queue=deque([[0,0,count]])
    Maze[0][0] = 0
    while True:
        pop = queue.popleft()
        if pop[0]==N-1 and pop[1]==M-1:
            break;
 #       print("pop={}".format(pop))
        for dir in direction:
            if (0<=pop[0]+dir[0]<N) and (0<=pop[1]+dir[1]<M) :
  #              print(pop[0]+dir[0],pop[1]+dir[1])
                if Maze[pop[0]+dir[0]][pop[1]+dir[1]]==1:
                    queue.append([pop[0]+dir[0],pop[1]+dir[1],pop[2]+1])
                    Maze[pop[0]+dir[0]][pop[1]+dir[1]]=0
    #answer=queue.popleft()
    return pop[2]

print(pathfinder(Maze,N,M,1))

