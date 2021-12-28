def solution(s):
    voca = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    voca_dict = {}
    for i in range(10):
        voca_dict[voca[i]] = str(i)
    temp = ""
    i = 0
    while i < len(s):
        if s[i].isdigit() == True:
            temp += s[i]
            i += 1
        else:
            check = ""
            current_idx = i
            while current_idx < len(s):
                if check in voca_dict:
                    break;
                if s[current_idx].isdigit() == False:
                    check += s[current_idx]
                    current_idx += 1
                else:
                    break;
            i = current_idx
            temp += voca_dict[check]

    answer = int(temp)
    return answer