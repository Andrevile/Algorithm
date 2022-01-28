def solution(p):
    answer = ''

    # step 1
    # step 2
    answer = find_str(p)

    return answer


def find_str(input):
    answer = ""
    if len(input) == 0:
        return answer
    else:
        u, v = separate_uv(input)

        if check_right_str(u) == True:
            answer += u
            answer += find_str(v)


        else:
            temp = "("
            temp += find_str(v)
            temp += ")"
            u = u[1:-1]
            temp += reverse_flag(u)
            answer = temp

    return answer


def separate_uv(input):
    left_count = 0  # (
    right_count = 0  # )

    for i in range(len(input)):
        if input[i] == "(":
            left_count += 1
        else:
            right_count += 1

        if left_count == right_count:
            break;

    return input[:left_count + right_count], input[left_count + right_count:]


def check_right_str(input):
    stack = []
    for str in input:
        if str == "(":
            stack.append(str)
        else:
            if len(stack) == 0:
                return False
            else:
                stack.pop()
    return True


def reverse_flag(input):
    temp = ""
    for flag in input:
        if flag == ")":
            temp += "("
        else:
            temp += ")"

    return temp