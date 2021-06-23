#H,W=map(int,input().split())
#board=[['#', '.', '.', '.', '.', '.', '#'], ['#', '.', '.', '.', '.', '.', '#'], ['#', '#', '.', '.', '#', '#', '#']]
board=[['#','#','#','#','#','#','#','#','#','#'],
        ['#', '.', '.', '.', '.', '.','.','.','.','#'],
        ['#', '.', '.', '.', '.', '.','.','.','.','#'],
        ['#', '.', '.', '.', '.', '.','.','.','.','#'],
       ['#', '.', '.', '.', '.', '.','.','.','.','#'],
       ['#', '.', '.', '.', '.', '.','.','.','.','#'],
       ['#', '.', '.', '.', '.', '.','.','.','.','#'],
       ['#','#','#','#','#','#','#','#','#','#']]

# board=[]
# for i in range(0,H):
#      board.append(list(input()))
list=[[0 for i in range(0,len(board[0]))] for i in range(0,len(board))]
#print(list)
for i in range(0,len(board)):
    for k in range(0,len(board[0])):
        if board[i][k]=='#':
            list[i][k]=1

#0이면 아직 덮이지 않은 부분을 얘기하는 것


coverType=[[[0,0],[1,0],[0,1]], #상대경로 방향
        [[0,0],[0,1],[1,1]],
        [[0,0],[1,0],[1,1]],
        [[0,0],[1,0],[1,-1]]]

def set(list,y,x,type,delta):
    ok=True
    for i in range(0,3): #3개의 타일을 놓아야 함
        ny=y+coverType[type][i][0] #ny,nx 는 절대경로를 말한다
        nx=x+coverType[type][i][1]
        list[ny][nx]+=delta
        if ny<0 or ny>=len(list) or nx<0 or nx>=len(list[0]): #x y 좌표들이 보드의 범위를 넘어갈때 에러
            ok=False
        elif list[ny][nx]>1: # 겹치는 경우 에러
            ok=False

    return ok

def result(list):
    Wcount=0
    for i in range(0,len(list)):
       Wcount+=list[i].count('.')
    if Wcount%3!=0:
        return 0
    y=-1
    x=-1
    for i in range(0,len(list)):
        for k in range(0,len(list[0])):
            if list[i][k]==0:
                x=k
                y=i
                break
        if y!=-1:
            break
    if y==-1:
        return 1
    ret=0
    for type in range(0,4):
        if set(list,y,x,type,1)==True:
            ret+=result(list)
        set(list,y,x,type,-1)

    return ret

print(result(list))

