import sys

stairs=int(sys.stdin.readline())
score=[]
for i in range(stairs):
    score.append(int(sys.stdin.readline()))
DP=[score[0]]
def result(stairs):
    if stairs>0:
        for i in range(1,2):
            DP.append(score[i-1]+score[i])
    if stairs>1:
        for i in range(2,3):
            DP.append(max(score[i-1]+score[i],score[i]+DP[i-2]))
    if stairs>2:
        for i in range(3,stairs+1):
            DP.append(max(score[i-1]+score[i]+DP[i-3],score[i]+DP[i-2]))








result(stairs-1)
print(DP[-1])




