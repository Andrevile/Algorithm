import sys

N=int(sys.stdin.readline())
Map=[]
for i in range(N):
    Map.append(list(map(int,sys.stdin.readline().split(" "))))


color_count=[0,0]
def divide(Map,row,col,size):
    initial=Map[row][col]
    flag=0
    for i in range(row,row+size):
        for k in range(col,col+size):
            if initial!=Map[i][k]:
                flag=1
                break;
    if flag==1:
        for i in range(2):
            for k in range(2):
                divide(Map,row+i*int(size/2),col+k*int(size/2),int(size/2))
    else:
        if initial==0:
            color_count[0]+=1
        else:
            color_count[1]+=1

divide(Map,0,0,N)
for key in color_count:
    print(key)