import sys

N = int(sys.stdin.readline())


max_len = len(str(N))

answer = 0

for i in range(1,max_len):
    answer += i * (10**i - 10**(i-1))

answer += (max_len) * (N - 10**(max_len-1) + 1)

print(answer)