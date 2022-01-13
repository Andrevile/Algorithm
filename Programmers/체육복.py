def solution(n, lost, reserve):
    students = [1] * n
    for i in range(len(lost)):
        students[lost[i] - 1] -= 1
    for i in range(len(reserve)):
        students[reserve[i] - 1] += 1

    if students[0] == 2:
        if students[1] == 0:
            students[0] -= 1
            students[1] += 1
    for i in range(1, n - 1):
        if students[i] == 2:
            if students[i - 1] == 0:
                students[i - 1] += 1
                students[i] -= 1
                continue
            if students[i + 1] == 0:
                students[i + 1] += 1
                students[i] -= 1
                continue
    if students[-1] == 2:
        if students[-2] == 0:
            students[-2] -= 1
            students[-1] += 1
    answer = n - students.count(0)
    return answer