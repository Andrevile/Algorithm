import sys

N,r,c=map(int,sys.stdin.readline().split(" "))
#N=int(sys.stdin.readline())
def divide(N,r,c,start):
    #print("N={} r={} c={} start={}".format(N,r,c,start))
    if pow(2,N)//2>r: #첫번째 구간, 세번째 구간
        if pow(2,N)//2>c: #첫번째 구간
     #       print("section1")
            start=start+pow(2,2*N-2)*0
        else: #두번째 구간
      #      print("section2")
            start = start + pow(2, 2 * N - 2) * 1
            c = c - pow(2,N-1) #3 - (2*2-1

    else: #두번째 구간, 네번째 구간
        if pow(2,N)//2>c: #세번째 구간
       #     print("section3")
            start = start + pow(2, 2 * N - 2) * 2
            r = r - pow(2,N-1)

        else:
        #    print("section4")
            start=start+pow(2,2*N-2)*3
            r=r- pow(2,N-1)
            c=c- pow(2,N-1)


    if N>1:
        count=divide(N-1,r,c,start)
    else:
        return start
    return count

def result(N,r,c):
    print(divide(N,r,c,0))

# for i in range(0,pow(2,N)):
#     print("")
#     for k in range(0,pow(2,N)):
#         result(N,i,k)

result(N,r,c)