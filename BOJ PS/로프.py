K=int(input())
lope=[]
for i in range(0,K):
    lope.append(int(input()))

def result(inputlist,num):
    inputlist.sort()
    max=0
    i=0
    while num>0:
        if inputlist[i]*num>=inputlist[-1] and max<inputlist[i]*num:
            max=inputlist[i]*num
        num+=-1
        i+=1
    return max


print(result(lope,K))