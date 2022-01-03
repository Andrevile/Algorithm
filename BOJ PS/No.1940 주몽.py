import sys
sys.setrecursionlimit(10**6)
N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
materials = list(map(int,sys.stdin.readline().split(" ")))
materials.sort()


answer = 0
start = 0
end = N-1
while start < end:
    if materials[start] + materials[end] == M:
        start += 1
        end -= 1
        answer += 1
    elif materials[start] + materials[end] > M:
        end -= 1
    else:
        start += 1


print(answer)