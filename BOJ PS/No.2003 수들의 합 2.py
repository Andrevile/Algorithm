import sys

N, M = map(int,sys.stdin.readline().split(" "))
num_list = list(map(int,sys.stdin.readline().split(" ")))


DP = [0] * 10001
DP[0] = 0
for i in range(1,N+1):
    DP[i] = DP[i-1] + num_list[i-1]

count = 0


for i in range(N,-1,-1):
    target = DP[i] - M
    start = 0
    end = i
    while start <= end:
        mid = (start + end) // 2
        if DP[mid] == target:
            count += 1
            break;

        if DP[mid] < target:
            start = mid + 1
        elif DP[mid] > target:
            end = mid - 1


print(count)

