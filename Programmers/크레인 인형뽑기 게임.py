def solution(board, moves):
    stack = []
    answer = 0
    for i in range(len(moves)):
        answer = pick_up(board, moves[i] - 1, stack, answer)

    return answer


def pick_up(board, pick, stack, answer):
    temp = 0
    for i in range(len(board)):
        if board[i][pick] != 0:
            temp = board[i][pick]
            board[i][pick] = 0
            break;

    if temp != 0:
        if len(stack) > 0 and stack[-1] == temp:
            stack.pop()
            answer += 2
        else:
            stack.append(temp)
    return answer