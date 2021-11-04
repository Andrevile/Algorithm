import sys

L = int(sys.stdin.readline())
S = list(map(int,sys.stdin.readline().split(" ")))
n = int(sys.stdin.readline())
S = [0] + S
S.sort()

start = 0
end = 0
if n in S:
    print(0)

else:
    for key in S:
        if n > key:
            start = key + 1
        else:
            end = key - 1
            break;
    print(end - start + (end - n) * (n - start))

