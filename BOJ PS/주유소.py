import sys

N=int(input())
length=list(map(int,sys.stdin.readline().strip().split()))
price=list(map(int,sys.stdin.readline().strip().split()))


def result():
    current_price=price[0]
    price_sum=0
    term=1
    position=0
    for i in range(0,len(length)):
        price_sum+=current_price*length[i]
        if current_price>=price[position+term]:
            current_price=price[position+term]
            position+=term
            term=1

        else:
            term+=1
    return price_sum

print(result())