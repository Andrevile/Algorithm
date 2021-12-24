from collections import deque


def solution(s):
    answer = len(s)
    for i in range(1, len(s) - 1):
        if answer > len(string_zip(s, i)):
            answer = len(string_zip(s, i))
    return answer


def string_zip(string, zip_num):
    s_queue = deque(list(string))
    temp = ""
    prev = ""
    iter_count = 1
    while s_queue:
        if len(s_queue) < zip_num:
            temp += "".join(s_queue)
            break;

        cur = ""

        for i in range(zip_num):
            pop = s_queue.popleft()
            cur += pop
        if cur == prev:
            iter_count += 1
        else:
            if iter_count > 1:
                temp += str(iter_count)
            temp += cur
            iter_count = 1
        prev = cur
    if iter_count > 1:
        temp += str(iter_count)
    return temp