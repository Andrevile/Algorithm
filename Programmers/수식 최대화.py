from itertools import permutations


def solution(expression):
    answer = []

    operand_order = list(permutations(["*", "+", "-"], 3))

    for operand in operand_order:
        answer.append(abs(int(calculator(expression, list(operand), 0))))
    answer = max(answer)
    return answer


def calculator(expression, order, priority):
    if priority == 2:
        return str(eval(expression))

    expression_list = expression.split(order[priority])
    temp = []
    for express in expression_list:
        temp.append(calculator(express, order, priority + 1))
    if order[priority] == "*":
        res = eval('*'.join(temp))
    if order[priority] == "-":
        res = eval("-".join(temp))
    if order[priority] == "+":
        res = eval("+".join(temp))

    return str(res)