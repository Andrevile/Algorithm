def solution(answers):
    answer = []
    one = [1, 2, 3, 4, 5]
    two = [2, 1, 2, 3, 2, 4, 2, 5]
    three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    answer_count = [0, 0, 0]
    for i in range(len(answers)):
        if one[i % len(one)] == answers[i]:
            answer_count[0] += 1
        if two[i % len(two)] == answers[i]:
            answer_count[1] += 1
        if three[i % len(three)] == answers[i]:
            answer_count[2] += 1
    MAX = max(answer_count)
    for i in range(len(answer_count)):
        if answer_count[i] == MAX:
            answer.append(i + 1)

    return answer