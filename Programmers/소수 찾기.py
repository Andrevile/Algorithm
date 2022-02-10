from itertools import permutations
def solution(numbers):

    answer = set()
    numbers = list(numbers)
    
    for i in range(1,len(numbers)+1):
        num_list = list(permutations(numbers,i))
        for number in num_list:
            temp = "".join(number)
            if int(temp) > 1 and check_prime(int(temp)):
                answer.add(int(temp))
   
    return len(answer)

def check_prime(num):
    for i in range(2,num//2 + 1):
        if num % i == 0:
            return False
    return True