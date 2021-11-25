import sys

N = int(sys.stdin.readline())
rope = list(map(int,sys.stdin.readline().split(" ")))

answer = [rope[0]]


def Binary_search(target,start,end):
    while start <= end:
        mid = (start + end) // 2

        if answer[mid] < target:
            start = mid + 1
        elif answer[mid] >= target:
            end = mid - 1
    return start


for i in range(1,len(rope)):
    if answer[-1] < rope[i]:
        answer.append(rope[i])
    else:
        idx = Binary_search(rope[i],0,len(answer)-1)
        answer[idx] = rope[i]

print(N - len(answer))




































































































































