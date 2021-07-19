import sys

N=int(sys.stdin.readline())
Map=[]
for i in range(N):
    Map.append(list(map(int,sys.stdin.readline().rstrip())))

def divide(row,col,size):
    flag = 0  # flag가 0이면 모든 숫자가 같은 상태
    color = Map[row][col]
    for i in range(row, row + size):
        for k in range(col, col + size):
            if Map[i][k] != color:
                flag = 1  # flag가 1이면 다른 숫자가 존재한다는 의미
                break;
    if size==1:
        print(Map[row][col],end="")
    else:
        if flag==1:
            print("(",end="")
            for i in range(2):
                for k in range(2):
                    divide(row+int(size/2)*i,col+int(size/2)*k,int(size/2))
            print(")",end="")
        else:
            print(color,end="")

divide(0,0,N)

