# 대기실은 5개이며, 각 대기실은 5x5 크기입니다.
# 거리두기를 위하여 응시자들 끼리는 맨해튼 거리1가 2 이하로 앉지 말아 주세요.
# 단 응시자가 앉아있는 자리 사이가 파티션으로 막혀 있을 경우에는 허용합니다
def solution(places):
    answer = []
    for place in places:
        answer.append(find_illegal(place))
    return answer


def find_illegal(place):
    direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    find = []

    def DFS(x, y, start_x, start_y):
        visited[x][y] = True
        answer = True
        for dir in direction:
            dx = x + dir[0]
            dy = y + dir[1]
            if 0 <= dx < 5 and 0 <= dy < 5:
                if visited[dx][dy] == False and calculate_distance(start_x, start_y, dx, dy) <= 2:
                    if place[dx][dy] == "P":
                        return False
                    else:
                        answer = DFS(dx, dy, start_x, start_y)
            if answer == False:
                return False
        return answer

    for i in range(5):
        for k in range(5):
            if place[i][k] == "P":
                visited = []
                for row in range(5):
                    temp = []
                    for col in range(5):
                        if place[row][col] == "X":
                            temp.append(True)
                        else:
                            temp.append(False)
                    visited.append(temp)
                temp = DFS(i, k, i, k)
                if temp == False:
                    return 0
    return 1


def calculate_distance(r1, c1, r2, c2):
    return abs(r1 - r2) + abs(c1 - c2)