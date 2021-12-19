def prize_check(count):
    if count == 6:
        return 1
    elif count == 5:
        return 2
    elif count == 4:
        return 3
    elif count == 3:
        return 4
    elif count == 2:
        return 5
    else :
        return 6

def solution(lottos, win_nums):
    lottos.sort()
    win_nums.sort()
    count = 0
    zero_count = 0
    for num in lottos:
        if num in win_nums:
            count += 1
        if num == 0:
            zero_count += 1
    min_prize = prize_check(count)
    max_prize = prize_check(count+zero_count)
    answer = [max_prize,min_prize]
    return answer