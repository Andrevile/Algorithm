import re


def solution(str1, str2):
    answer = 0
    str1 = str1.upper()
    str2 = str2.upper()
    str1_list = []
    str2_list = []

    for i in range(len(str1) - 1):
        temp = str1[i:i + 2]
        if temp.isalpha() == True:
            str1_list.append(temp)

    for i in range(len(str2) - 1):
        temp = str2[i:i + 2]
        if temp.isalpha() == True:
            str2_list.append(temp)

    intersection = set(str1_list) & set(str2_list)
    union = set(str1_list) | set(str2_list)

    top = 0
    bot = 0
    for key in intersection:
        top += min(str1_list.count(key), str2_list.count(key))
    for key in union:
        bot += max(str1_list.count(key), str2_list.count(key))

    if bot == 0:
        answer = 1
    else:
        answer = top / bot
    answer = int(answer * 65536)
    return answer