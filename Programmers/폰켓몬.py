def solution(nums):
    answer = 0

    choice = int(len(nums) / 2)
    nums = list(set(nums))
    if len(nums) >= int(choice):
        answer = choice
    else:
        answer = len(nums)
    return answer