import sys
N=int(sys.stdin.readline())
matrix=[]
for i in range(N):
    matrix.append(list(map(int,sys.stdin.readline().rstrip())))



count=[]

direction=[[0,1],[0,-1],[-1,0],[1,0]]
check_count=0
def DFS(matrix,start):
    global check_count
    matrix[start[0]][start[1]]=0
    check_count+=1
    for key in direction:
        if (0<=start[0]+key[0]<N) and (0<=start[1]+key[1]<N):
            if matrix[start[0]+key[0]][start[1]+key[1]]==1:
                DFS(matrix,[start[0]+key[0],start[1]+key[1]])

city=0
for i in range(N):
    for k in range(N):
        check_count=0
        if matrix[i][k]==1:
            city+=1
            DFS(matrix,[i,k])
            count.append(check_count)

print(city)
count.sort()
for key in count:
    print(key)

