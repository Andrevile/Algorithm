import sys

N=int(sys.stdin.readline())

def result(N):
    count=0
    new=0
    condition=N
    if N==0:
        return 1
    while True:
        if new==condition:
            break;
        else:
            count+=1
            temp = str(N)
            if N<10:
               firstcal=str(temp[-1])
            else:
               firstcal=str(int(temp[0])+int(temp[-1]))
            new=int(temp[-1])*10+int(firstcal[-1])
            N=new


    return count

print(result(N))