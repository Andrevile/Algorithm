import sys
N=int(input())
words=[]
for i in range(0,N):
    temp=sys.stdin.readline().strip()
    words.append(temp)

#words.sort(key=len, reverse=True)
def result(word_list):
    alphalist=[]
    importance=[]
    for key in word_list:
        for i in range(0,len(key)):
            if key[i] not in alphalist:
                alphalist.append(key[i])
                importance.append(1*pow(10,len(key)-i-1))
            else:
                importance[alphalist.index(key[i])]+=1*pow(10,len(key)-i-1)
    importance.sort(reverse=True)
    sum=0
    num=9
    for i in range(0,len(importance)):
        sum+=importance[i]*num
        num-=1
    return sum



print(result(words))



