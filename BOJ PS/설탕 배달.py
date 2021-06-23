#N킬로그램 배달
#3킬로그램 봉지 5킬로그램 봉지
#최대한 적은 봉지

N=int(input())

def result(N):
    total=0
    while True:
        if N%5==0:
            total+=N//5
            return total
        N=N-3
        total+=1
        if N<0:
            return -1



print(result(N))

