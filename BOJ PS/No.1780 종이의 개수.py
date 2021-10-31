import sys
import math
count={-1:0,0:0,1:0}
N=int(sys.stdin.readline())
matrix=[]
for i in range(N):
    temp=list(map(int,sys.stdin.readline().split(" ")))
    matrix.append(temp)

def divide(row,col,matrix,size):

    if size==1:
        count[matrix[row][col]]+=1
        #print(count)
    else:
        initial=matrix[row][col]
        switch=0 #0이면 안나눠도 됨, 1이면 나눠야함
        for i in range(row,row+size):
            for k in range(col,col+size):
                if matrix[i][k]!=initial:
                    switch=1
                    break;
        if switch==1:
            for i in range(3):
                for k in range(3):
                    #print("section={},{}".format(i,k))
                    divide(row+i*int(size/3),col+k*int(size/3),matrix,int(size/3))
        else:
            #print("size={}".format(size)
            count[matrix[row][col]]+=1
           # print(count)




divide(0,0,matrix,N)
for i in range(-1,2):
    print(count[i])
