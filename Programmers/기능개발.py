from collections import deque


def solution(progresses, speeds):
    day = 1
    queue = deque(progresses)
    speeds_queue = deque(speeds)
    answer = []
    while queue:
    # for i in range(9):
        deploy_count = 0
        for k in range(len(queue)):
            queue[k] += speeds_queue[k]

        while queue and queue[0] >= 100:
            pop = queue.popleft()
            s_pop = speeds_queue.popleft()
            deploy_count += 1

        if deploy_count > 0:
            answer.append(deploy_count)

        day += 1

    return answer