import sys

N = int(sys.stdin.readline())

count_time = 1
sub = 1
while True:
    if N < sub:
        sub = 1
    N = N - sub
    if N == 0:
        break;
    count_time += 1
    sub += 1

print(count_time)

