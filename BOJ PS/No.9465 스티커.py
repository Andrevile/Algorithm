import sys

T=int(sys.stdin.readline())
for i in range(T):
    sticker=[]
    n=int(sys.stdin.readline())
    for i in range(2):
        sticker.append(list(map(int,sys.stdin.readline().split(" "))))
    DP=[[sticker[0][0],sticker[1][0]]]
    if n>=2:
        DP.append([max(sticker[1][0]+sticker[0][1],sticker[0][1]),max(sticker[0][0]+sticker[1][1],sticker[1][0])])
        for i in range(2,n):
            DP.append([max(DP[i-1][1]+sticker[0][i],DP[i-2][1]+sticker[0][i]),max(DP[i-1][0]+sticker[1][i],DP[i-2][0]+sticker[1][i])])
    print(max(DP[n-1]))



