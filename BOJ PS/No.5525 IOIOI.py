import sys
from collections import deque
N=int(sys.stdin.readline())
M=int(sys.stdin.readline())
S=sys.stdin.readline().rstrip()

stack=[]

def result(S):
    for i in range(len(S)):
        if S[i]=="I":
            stack.append(i)
        else:
            continue;
    answer=0
    count=0
    for i in range(1,len(stack)):
        if stack[i]-stack[i-1]==2:
            count+=1
        else:
            count=0
        if count>=N:
            answer+=1
    return answer



print(result(S))
