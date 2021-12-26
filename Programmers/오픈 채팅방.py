def solution(record):
    answer = []
    user = {}
    for key in record:
        temp = key.split(" ")
        if temp[0] == "Enter" or temp[0] == "Change":
            user[temp[1]] = temp[2]

    for key in record:
        temp = key.split(" ")
        if temp[0] == "Enter":
            answer.append(user[temp[1]] + "님이 들어왔습니다.")
        elif temp[0] == "Leave":
            answer.append(user[temp[1]] + "님이 나갔습니다.")
    return answer