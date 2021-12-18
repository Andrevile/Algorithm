import sys

N = int(sys.stdin.readline()) #N<=20

damage = []
happy = []


damage = list(map(int,sys.stdin.readline().split(" "))) #0<= <=100
happy = list(map(int,sys.stdin.readline().split(" ")))  #0<= <=100




def Brute_Force(energy):
    point = 0
    for i in range(N):
        if visited[i] == False:
            if energy - damage[i] > 0:
                visited[i] = True
                point += Brute_Force(energy - damage[i])
                visited[i] = False
    return 



for i in range(N):
    visited = [False] * N

