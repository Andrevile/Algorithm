import sys
from itertools import product

N=int(sys.stdin.readline())
M=int(sys.stdin.readline())
if M!=0:
    button=list(map(int,sys.stdin.readline().split()))
else:
    button=[]


def result(N,M,button):
    available=[i for i in range(0,10)]
    num_list=[]
    count = 0
    current = 100
    if (98 <= N <= 103):
        count += abs(current - N)
        return count
    else:
        for key in list(str(N)):
            num_list.append(int(key))
        for key in button:
            available.pop(available.index(key))
        if len(available)>0:
            check1=list(product(available,repeat=len(num_list)))
            MIN=abs(N-100)
            for per in check1:
                click=0
                count=0
                for i in range(len(per)):
                    click+=per[i]*pow(10,len(per)-(i+1))
                    count+=1
                count+=abs(N-click)
                if MIN>count:
                    MIN=count
            second=0
            second_count=0
            for k in range(len(num_list)-1):
                second+=max(available)*pow(10,k)
                second_count+=1

            if len(num_list)==1:
                second=max(available)
                second_count+=1

            second_count+=abs(N-abs(second))
            third=0
            third_count=0
            for k in range(len(num_list)+1):
                if k==0:
                    if 0 in available:
                        if len(available)>1:
                            third+=min(available[1:])*pow(10,len(num_list)-k)
                        else:
                            third += min(available) * pow(10, k)
                    else:
                        third+=min(available)*pow(10,k)
                else:
                    third += min(available) * pow(10, k)

                third_count+=1
            third_count+=abs(N-third)
            count=min(MIN,second_count,third_count)

        else:
            count=abs(N-100)

        if abs(N-100)<count:
            return abs(N-100)
        else:
            return count



print(result(N,M,button))



