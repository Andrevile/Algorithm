import sys
import math
N = int(sys.stdin.readline())
num_list = str(N)

def check_Prime(num):
    for i in range(2,int(math.sqrt(num))+1):
        if num % i == 0:
            return False
    return True

def result(current_num,depth):
    if check_Prime(current_num) == False:
        return False
    else:
        if depth == N:
            print(current_num)
            return True
        for i in range(1,10):
            temp = current_num * 10 + i
            result(temp,depth+1)

result(2,1)
result(3,1)
result(5,1)
result(7,1)
