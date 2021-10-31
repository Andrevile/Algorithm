import sys
sys.setrecursionlimit(100000)
n=int(sys.stdin.readline())


memory=[0]*n

def tile(n):
    if n==1:
        return 1
    if n==2:
        return 2
    if memory[n-1]:
        return memory[n-1]
    else:
        memory[n-1]=tile(n-1)+tile(n-2)
        return memory[n-1]

print(tile(n)%10007)


