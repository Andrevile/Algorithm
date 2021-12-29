import sys

N = int(sys.stdin.readline())
num_list = list(map(int,sys.stdin.readline().split(" ")))

DP = [0] * N
DP[0] = num_list[0]

for i in range(1,len(num_list)):
    DP[i] = max(DP[i-1] + num_list[i],num_list[i])

print(max(DP))