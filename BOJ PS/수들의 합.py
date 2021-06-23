import sys

S=int(sys.stdin.readline())

def result(S):
    count=1
    first=1
    last=2
    while True:
        if S>=first and S<=last:
            break;
        else:
            first+=count+1
            last+=count+2
            count+=1

    return count

print(result(S))