import sys
#3 8 19
#10 5 17
LPV_list=[]
while True:
    temp=list(map(int,sys.stdin.readline().split()))
    if temp[0]==0 and temp[1]==0 and temp[2]==0:
        break;
    LPV_list.append(temp)
def result(L,P,V):
    count=0
    if P-L>0:
       count+=(V//P)*L
       V=V%P
       if V>=L:
           count+=L
       else:
           count+=V
    else:
        count+=(V//L)*L
        V=V%L
        if V>P:
            count+=V-P

    return count

for i in range(0,len(LPV_list)):
    print("Case {}: {}".format(i+1,result(LPV_list[i][0],LPV_list[i][1],LPV_list[i][2])))

