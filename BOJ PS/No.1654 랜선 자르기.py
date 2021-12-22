import sys
import math
K, N = map(int,sys.stdin.readline().split(" "))

already_have = []
for i in range(K):
    already_have.append(int(sys.stdin.readline().rstrip()))

start = 1
end = max(already_have)

def Binary_Search(start,end):
    while start <= end:
        mid = (start + end) // 2
        count = 0
        for i in range(K):
            count += already_have[i] // mid

        if count >= N:
            start = mid + 1
        else:
            end = mid -1

    return end

print(Binary_Search(start,end))


