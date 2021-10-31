#case1
# N,M=26,5
# pocketmon=['Bulbasaur','Ivysaur','Venusaur','Charmander','Charmeleon','Charizard','Squirtle','Wartortle'
# ,'Blastoise','Caterpie','Metapod','Butterfree','Weedle','Kakuna','Beedrill','Pidgey','Pidgeotto','Pidgeot',
# 'Rattata','Raticate','Spearow','Fearow','Ekans','Arbok','Pikachu','Raichu']
# question=['25','Raichu','3','Pidgey','Kakuna']

import re
import sys

N,M=map(int,sys.stdin.readline().split(" "))
pocketmon={}
question=[]
for i in range(N):
    key=sys.stdin.readline().rstrip()
    pocketmon[str(i+1)]=key
    pocketmon[key]=str(i+1)

for k in range(M):
    temp=sys.stdin.readline().rstrip()
    question.append(pocketmon[temp])


for key in question:
    print(key)