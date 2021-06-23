X=int(input())
cache=[X]
def result(input):
    count=0
    global cache
    if input==1:
        return 0
    else:
        while min(cache)!=1:
            count+=1
            temp=[]
            for key in cache:
                temp.append(key-1)
                if key%3==0 and key>=3:
                    temp.append(key//3)
                if key%2==0 and key>=2:
                    temp.append(key//2)
            cache=temp
    return count

print(result(X))
