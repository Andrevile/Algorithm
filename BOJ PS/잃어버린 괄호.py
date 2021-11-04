calculate=input().split("-")
def arith(element):
    form=element.split("+")
    sum=0
    for key in form:
        sum+=int(key)
    return sum

def result(input):
    sum=0
    for i in range(0,len(input)):
        if i==0:
            sum+=arith(input[i])
        else:
            sum-=arith(input[i])
    return sum

print(result(calculate))
