import math

sum_list = []


def solution(nums):
    answer = 0
    global sum_list

    Brute_force(0, nums, 0, 0)
    for num in sum_list:
        if check_Prime(num) == True:
            answer += 1
    # for i in range(len(nums)):
    #     for j in range(i+1,len(nums)):
    #         for k in range(j+1,len(nums)):
    #             temp = nums[i] + nums[j] + nums[k]
    #             if check_Prime(temp) == True:
    #                 answer += 1
    return answer


def check_Prime(num):
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True


def Brute_force(depth, num_list, summ, start):
    global sum_list
    if depth == 3:
        sum_list.append(summ)
        return;

    for i in range(start, len(num_list)):
        temp = num_list[i]
        if num_list[i] != 0:
            num_list[i] = 0
            Brute_force(depth + 1, num_list, summ + temp, i)
            num_list[i] = temp