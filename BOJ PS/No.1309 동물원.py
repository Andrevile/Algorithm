import sys


N = int(sys.stdin.readline())

zoo = [0] * (N+1)
zoo[0] = 1
zoo[1] = 3
for i in range(2,N+1):
    zoo[i] = (zoo[i-2] + (zoo[i-1]*2)) % 9901

print(zoo[N])