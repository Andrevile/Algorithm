import sys
import copy
sys.setrecursionlimit(100000)
N=int(sys.stdin.readline())

normal_picture=[]
for i in range(N):
    normal_picture.append(list(sys.stdin.readline().rstrip()))

picture=copy.deepcopy(normal_picture)
colors=['R','G','B']
direction=[[1,0],[0,1],[-1,0],[0,-1]]
def abnormal_DFS(color,row,col): #flag==0이면 정상인 flag==1이면 적록색약
    normal_picture[row][col]='1'
    for dir in direction:
        if 0<=row+dir[0]<N and 0<=col+dir[1]<N:
            if normal_picture[row+dir[0]][col+dir[1]]==color:
                abnormal_DFS(color,row+dir[0],col+dir[1])
            elif color=='R' and normal_picture[row+dir[0]][col+dir[1]]=='G':
                abnormal_DFS(normal_picture[row+dir[0]][col+dir[1]],row+dir[0],col+dir[1])
            elif color=='G' and normal_picture[row+dir[0]][col+dir[1]]=='R':
                abnormal_DFS(normal_picture[row+dir[0]][col+dir[1]],row+dir[0],col+dir[1])

def DFS(color,row,col): #flag==0이면 정상인 flag==1이면 적록색약
    picture[row][col]='1'
    for dir in direction:
        if 0<=row+dir[0]<N and 0<=col+dir[1]<N:
            if picture[row+dir[0]][col+dir[1]]==color:
                DFS(color,row+dir[0],col+dir[1])


normal_count=0
abnormal_count=0
for color in colors:
    for i in range(N):
        for k in range(N):
            if normal_picture[i][k]==color:
                abnormal_DFS(color,i,k)
                abnormal_count+=1
            if picture[i][k]==color:
                DFS(color,i,k)
                normal_count+=1

print(normal_count,abnormal_count)
# 5
# RGRBR
# RGBBB
# GGGGR
# RBBRR
# RRBBB