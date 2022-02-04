def solution(n):
    answer = 0
    temp = ""
    while n > 0:
        remain = n % 3
        n = n // 3
        temp += str(remain)

    for i in range(len(temp)):
        answer += (3 ** (len(temp) - 1 - i)) * int(temp[i])

    return answer