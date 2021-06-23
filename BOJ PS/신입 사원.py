import sys
T=int(input())

N=[]
case=[]
for i in range(0,T):
    N.append(int(input()))
    temp=[]
    for k in range(0,N[i]):
        pre,post=map(int,sys.stdin.readline().split())
        temp.append((pre,post))
    temp.sort()
    case.append(temp)

def result(inputlist):
    choose=1
    in_num=inputlist[0][1]
    for case in inputlist[1:]:
        if in_num>case[1]:
            choose+=1
            in_num=case[1]
    return choose

for key in case:
    print(result(key))

