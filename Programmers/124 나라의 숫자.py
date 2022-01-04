def solution(n):
    digit = {1: "1", 2: "2", 0: "4"}
    answer = ''
    while n > 0:
        mod = n % 3
        n = n // 3
        answer = digit[mod] + answer
        if mod == 0:
            n -= 1

    return answer