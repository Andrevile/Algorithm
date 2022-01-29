def solution(N, stages):
    answer = []
    stage = {}

    for i in range(len(stages)):
        if stages[i] not in stage:
            stage[stages[i]] = 1
        else:
            stage[stages[i]] += 1

    for i in range(1, N + 1):
        reached_people = 0
        for cur_stage, people in stage.items():
            if cur_stage >= i:
                reached_people += people
        if i in stage:
            failure_rate = stage[i] / reached_people
        else:
            failure_rate = 0
        answer.append([i, failure_rate])
    answer = sorted(answer, reverse=True, key=lambda x: x[1])
    real_answer = []
    for item in answer:
        real_answer.append(item[0])
    return real_answer