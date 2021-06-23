#1부터 n까지의 합을 계산하는 반복 함수와 재귀 함수

def sum(n):
    sum=0
    for i in range(1,n+1):
        sum=sum+i
    return sum

def recursivesum(n):
    if n==1:
        return n
    else:
        return n+recursivesum(n-1)
if __name__ == "__main__":
    print(sum(9))
    print(recursivesum(9))