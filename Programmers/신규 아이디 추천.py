def solution(new_id):
    # step 1
    new_id = new_id.lower()
    answer = "".join(step(new_id))
    return answer


def step(new_id):
    # step 2
    new_id = list(new_id)
    temp = []
    if len(new_id) >= 1:
        for i in range(len(new_id)):
            if new_id[i].isalpha() == False:  # 알파벳 소문자가 아니면
                if new_id[i].isdigit() == True or new_id[i] == '-' or new_id[i] == '_' or new_id[i] == '.':
                    temp.append(new_id[i])
            else:
                temp.append(new_id[i])

    # step 3
    if len(new_id) >= 1:
        new_id = []
        i = 0
        while i < len(temp) - 1:
            # i+=1
            if temp[i] == ".":
                new_id.append(temp[i])
                border = i + 1
                while temp[border] == "." and border < len(temp) - 1:
                    border += 1
                i = border
            # i+=1
            else:
                # i += 1
                new_id.append(temp[i])
                i += 1
        if temp[i] != ".":
            new_id.append(temp[i])
    print(new_id)
    # step 4
    if len(new_id) >= 1:
        if new_id[0] == ".":
            new_id.pop(0)
    if len(new_id) >= 1:
        if new_id[-1] == ".":
            new_id.pop(-1)

    #     # step 5
    if len(new_id) == 0:
        new_id.append("a")

    #     # step 6
    if len(new_id) >= 16:
        new_id = new_id[:15]
    if new_id[-1] == ".":
        new_id.pop(-1)
    #     # step 7
    if len(new_id) <= 2:
        temp = new_id[-1]
        while len(new_id) < 3:
            new_id.append(temp)
    return new_id