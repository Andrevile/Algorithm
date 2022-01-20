from collections import deque


def solution(s):
    answer = 0

    queue = deque(list(s))
    string_stack = []
    while queue:
        pop = queue.popleft();
        if len(string_stack) != 0:
            if string_stack[-1] == pop:
                string_stack.pop()
            else:
                string_stack.append(pop)
        else:
            string_stack.append(pop)

    if len(string_stack) == 0:
        answer = 1

    return answer