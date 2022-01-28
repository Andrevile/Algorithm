def solution(rows, columns, queries):
    answer = []

    matrix = []
    for i in range(1, rows + 1):
        temp = []
        for k in range(1, columns + 1):
            temp.append((i - 1) * columns + k)
        matrix.append(temp)
    for query in queries:
        answer.append(rotate(query, matrix))
    rotate(queries[0], matrix)

    return answer


def rotate(query, matrix):
    move_number = []
    # 왼쪽 세로부터
    move_number.append(matrix[query[0] - 1][query[1] - 1])
    for i in range(query[2] - query[0]):
        temp = matrix[query[0] - 1 + i][query[1] - 1]
        move_number.append(matrix[query[0] + i][query[1] - 1])
        matrix[query[0] - 1 + i][query[1] - 1] = matrix[query[0] + i][query[1] - 1]
        matrix[query[0] + i][query[1] - 1] = temp

    # 아래 가로
    for i in range(query[3] - query[1]):
        temp = matrix[query[2] - 1][query[1] - 1 + i]
        move_number.append(matrix[query[2] - 1][query[1] + i])
        matrix[query[2] - 1][query[1] - 1 + i] = matrix[query[2] - 1][query[1] + i]
        matrix[query[2] - 1][query[1] + i] = temp

    # 오른쪽 세로
    for i in range(query[2] - query[0]):
        temp = matrix[query[2] - 1 - i][query[3] - 1]
        move_number.append(matrix[query[2] - 2 - i][query[3] - 1])
        matrix[query[2] - 1 - i][query[3] - 1] = matrix[query[2] - 2 - i][query[3] - 1]
        matrix[query[2] - 2 - i][query[3] - 1] = temp

    # 위 가로
    for i in range(query[3] - query[1] - 1):
        temp = matrix[query[0] - 1][query[3] - 1 - i]
        move_number.append(matrix[query[0] - 1][query[3] - 2 - i])
        matrix[query[0] - 1][query[3] - 1 - i] = matrix[query[0] - 1][query[3] - 2 - i]
        matrix[query[0] - 1][query[3] - 2 - i] = temp

    move_number = set(move_number)
    return min(move_number)