import sys

graph=[]
N=int(sys.stdin.readline())
graph=[[0 for i in range(N)] for k in range(N)]

visited = [False for i in range(N)]

def check_queen(number,column,queen):
    for row in range(N):  # 세로
        graph[row][column] += queen
    for idx in range(N):  # 가로
        if idx != column:
            graph[number][idx] += queen

    row, col = number, column
    while row >= 0 and col >= 0:  # 왼쪽 위
        if row != number and col != column:
            graph[row][col] += queen
        row -= 1
        col -= 1
    row, col = number, column
    while row < N and col >= 0:  # 왼쪽 아래
        if row != number and col != column:
            graph[row][col] += queen
        row += 1
        col -= 1
    row, col = number, column
    while row >= 0 and col < N:  # 오른쪽 위
        if row != number and col != column:
            graph[row][col] += queen

        row -= 1
        col += 1
    row, col = number, column
    while row < N and col < N:  # 오른쪽 아래
        if row != number and col != column:
            graph[row][col] += queen
        row += 1
        col += 1

queen_count=0
visited=[False for i in range(N)]
def Brute_force(depth):
    current = -1

    for i in range(N):
        if visited[i] == False:
            current = i
            break;

    if current == -1:
        return 1

    count = 0

    for i in range(N):
        if graph[current][i] == 0:
            check_queen(current,i,1)
            visited[current] = True
            count += Brute_force(depth+1)
            visited[current] = False
            check_queen(current,i,-1)

    return count



print(Brute_force(0))


