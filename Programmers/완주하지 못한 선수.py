def solution(participant, completion):
    dict = {}
    answer = ''
    for name in participant:
        if name in dict:
            dict[name] = dict[name] + 1
        else:
            dict[name] = 1

    for name in completion:
        dict[name] = dict[name] - 1

    for key, val in dict.items():
        if dict[key] > 0:
            answer = key

    return answer