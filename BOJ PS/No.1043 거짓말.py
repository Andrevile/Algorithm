import sys
from collections import deque
N,M=map(int,sys.stdin.readline().split(" "))
known_people=list(map(int,sys.stdin.readline().split(" ")[1:]))
party=[]
for i in range(M):
    party.append(list(map(int,sys.stdin.readline().split(" ")[1:])))

visit_party=[False]*M
visit_person=[False]*N
people_list=deque(known_people)

for i in range(len(known_people)):
    visit_person[known_people[i]-1]=True
while people_list:
    pop=people_list.popleft()
    for i in range(len(party)):
        if pop in party[i]:
            visit_party[i]=True
            for key in party[i]:
                if visit_person[key-1] != True:
                    people_list.append(key)
                    visit_person[key-1]=True


print(visit_party.count(False))
