#N!에서 뒤에서부터 처음 0이 아닌 숫자가 나올 때까지 0의 개수를 구하는 프로그램을 작성하시오.

#첫째 줄에 N이 주어진다. (0 ≤ N ≤ 500)

#첫째 줄에 구한 0의 개수를 출력한다.

#case1
#N=10 answer=2

#case2
#N=3 answer=0

import sys

N=int(sys.stdin.readline())

def factorial(N):
    if N==1:
        return 1
    elif N==0:
        return 1

    return N*factorial(N-1)

#print(factorial(N))
list=list(str(factorial(N)))
count=0
for i in range(len(list)-1,-1,-1):
    if list[i]!='0':
        break;
    count+=1

print(count)
