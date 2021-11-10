import sys
from collections import deque
A,B = sys.stdin.readline().rstrip().split(" ")
INF = sys.maxsize
A_list = deque(list(A))
B_list = deque(list(B))
def calculate_diff(A,B):
    count = 0
    for i in range(len(B)):
        if B[i] != A[i]:
            count += 1

    return count


add_alphabet_number = len(B) - len(A)
if len(A) == len(B):
    print(calculate_diff(A,B))
else:
    minimum = INF
    for i in range(add_alphabet_number+1):
        temp = calculate_diff(A,B[i:i+len(A_list)])
        if minimum > temp:
            minimum = temp

    print(minimum)




