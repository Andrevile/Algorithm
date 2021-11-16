import sys
from collections import deque

N = sys.stdin.readline().rstrip()





if int(N) == 0:
    print(0)
else:
    answer = []
    for i in range(len(N)):
        temp_num = int(N[i])
        temp_list = deque([])
        while temp_num > 0:
            remain = temp_num % 2
            temp_list.append(remain)
            temp_num = temp_num // 2
        while len(temp_list) < 3:
            temp_list.append(0)
        for k in range(2, -1, -1):
            answer.append(temp_list[k])
    switch = 0
    for i in range(len(answer)):
        if answer[i] != 0:
            switch = 1
        if switch == 0:
            continue;
        print(answer[i],end="")