import sys
import math
N, M = map(int,sys.stdin.readline().split(" ")) #세로 가로





if N >= 3 and M >= 7: #세로 가로 널널 하면 상관 X
    print(M-2)
else:
    if N >= 3 and 4 <= M <7: #3번 최대
        print(4)
    elif N >= 3 and M < 4: # 가로에 따라 정해짐
        print(M)
    elif 1< N < 3 and M >= 7: #
        print(4)
    elif 1<N < 3 and M < 7:
        print(math.ceil(M/2))
    elif N == 1:
        print(1)

