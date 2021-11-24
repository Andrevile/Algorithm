
import sys

N = int(sys.stdin.readline())
K = int(sys.stdin.readline())

def Binary_Search(target,start,end):
    while start <= end:
        mid = (start + end) // 2

        temp = 0
        for i in range(1, N+1):
            temp += min(mid//i, N)

        if temp < target:
            start = mid + 1
        elif temp >= target:
            end = mid - 1
    return start


print(Binary_Search(K,1,N*N))