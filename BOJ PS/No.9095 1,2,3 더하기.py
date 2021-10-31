# 정수 4를 1, 2, 3의 합으로 나타내는 방법은 총 7가지가 있다. 합을 나타낼 때는 수를 1개 이상 사용해야 한다.
#
# 1+1+1+1
# 1+1+2
# 1+2+1
# 2+1+1
# 2+2
# 1+3
# 3+1
# 정수 n이 주어졌을 때, n을 1, 2, 3의 합으로 나타내는 방법의 수를 구하는 프로그램을 작성하시오.

# 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력한다.


import sys

T=int(sys.stdin.readline())
number=[]
for i in range(T):
    number.append(int(sys.stdin.readline()))

def result(current,destination):
    count=0
    if current==destination:
        return 1
    elif current>=destination:
        return 0
    for i in range(1,4):
        count+=result(current+i,destination)

    return count

for key in number:
    print(result(0,key))
