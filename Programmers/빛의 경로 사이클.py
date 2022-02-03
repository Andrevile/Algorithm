def solution(grid):
    global visited, direction
    answer = []
    direction = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    visited = [[[False] * 4 for i in range(len(grid[0]))] for i in range(len(grid))]

    for i in range(len(grid)):
        for k in range(len(grid[0])):
            for direct in range(4):
                if visited[i][k][direct] == False:
                    count = simulation(i, k, direct, grid)

                    if count != 0:
                        answer.append(count)
    answer.sort()
    return answer


def simulation(i, k, direct, grid):
    global visited, direction
    visited[i][k][direct] = True
    row, col, next_direct = i, k, direct
    count = 0
    while True:
        row = (len(grid) + (row + direction[next_direct][0])) % len(grid)
        col = (len(grid[0]) + (col + direction[next_direct][1])) % len(grid[0])
        count += 1
        if grid[row][col] == "L":
            next_direct = (4 + (next_direct + 1)) % 4
        elif grid[row][col] == "R":
            next_direct = (4 + (next_direct - 1)) % 4
        if visited[row][col][next_direct] == True:
            if (row, col, next_direct) == (i, k, direct):
                return count
            else:
                return 0
        visited[row][col][next_direct] = True
