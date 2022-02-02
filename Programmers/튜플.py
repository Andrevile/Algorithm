def solution(s):
    answer = []
    subset_list = []
    temp = []
    switch = 0
    s = s[1:-1].split(",")

    for string in s:
        if string[0] == "{":
            string = string[1:]
            switch = 0
        if string[-1] == "}":
            string = string[:-1]
            switch = 1
        temp.append(int(string))
        if switch == 1:
            subset_list.append(temp)
            temp = []

    subset_list = sorted(subset_list, key=lambda x: len(x))
    for i in range(len(subset_list)):
        for num in subset_list[i]:
            if num not in answer:
                answer.append(num)
                break;
    #         for num in answer:
    #             index = subset_list[i].index(num)

    #             subset_list[i].pop(index)

    # answer.append(subset_list[i][0])

    return answer

# def solution(s):
#     answer = []

#     s1 = s.lstrip('{').rstrip('}').split('},{')
#     print(s1)
#     new_s = []
#     for i in s1:
#         new_s.append(i.split(','))
#     print(new_s)

#     new_s.sort(key = len)

#     for i in new_s:
#         for j in range(len(i)):
#             if int(i[j]) not in answer:
#                 answer.append(int(i[j]))

#     return answer