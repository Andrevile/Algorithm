import math


def solution(numbers, hand):
    answer = ''
    hand_position = [[3, 0], [3, 2]]
    for i in range(len(numbers)):
        if numbers[i] == 1 or numbers[i] == 4 or numbers[i] == 7:
            answer += "L"
            hand_position[0] = cal_position(numbers[i])
        elif numbers[i] == 3 or numbers[i] == 6 or numbers[i] == 9:
            answer += "R"
            hand_position[1] = cal_position(numbers[i])
        else:
            current_pos = cal_position(numbers[i])
            left_dis = abs(current_pos[0] - hand_position[0][0]) + abs(current_pos[1] - hand_position[0][1])
            right_dis = abs(current_pos[0] - hand_position[1][0]) + abs(current_pos[1] - hand_position[1][1])

            if left_dis > right_dis:
                answer += "R"
                hand_position[1] = current_pos
            elif left_dis < right_dis:
                answer += "L"
                hand_position[0] = current_pos
            else:
                if hand == "left":
                    answer += "L"
                    hand_position[0] = current_pos
                else:
                    answer += "R"
                    hand_position[1] = current_pos

    return answer


def cal_position(num):
    if num == 0:
        return [3, 1]
    else:
        temp = num - 1
        row = temp // 3
        col = temp % 3
        return [row, col]