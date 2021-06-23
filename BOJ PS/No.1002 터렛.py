import sys
import math

T=int(sys.stdin.readline())
case=[]
for i in range(0,T):
    temp=list(map(int,sys.stdin.readline().split()))
    case.append(temp)

def result(T,case):
    number=[]
    for key in case:
        betweendistance=math.sqrt(pow(key[0]-key[3],2)+pow(key[1]-key[4],2))
        outside=abs(key[2]+key[5]) #외접
        inside=abs(key[2]-key[5]) #내접
        if key[0]==key[3] and key[1]==key[4]: #서로 중심이 같고
            if key[2]==key[5]: #반지름이 같은 경우
                number.append(-1)
            else: #반지름이 다른 경우
                number.append(0)
        else: #서로 중심이 다르고
            if betweendistance<=key[2] or betweendistance<=key[5]: #어떤 원 안에 존재한다면
                if inside==betweendistance:
                    number.append(1) #내접
                elif inside>betweendistance:
                    number.append(0)
                else:
                    number.append(2)
            else:
                if outside==betweendistance:
                    number.append(1)
                elif outside>betweendistance:
                    number.append(2)
                else:
                    number.append(0)

    return number

result=result(T,case)
for key in result:
    print(key)
