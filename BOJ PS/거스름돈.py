pay=int(input())
remain=1000-pay
coin=[500,100,50,10,5,1]
def result(remain):
    count=0
    i=0
    while remain>0:
        if remain//coin[i]>0:
            count+=remain//coin[i]
            remain=remain%coin[i]

        i+=1
    return count

print(result(remain))
