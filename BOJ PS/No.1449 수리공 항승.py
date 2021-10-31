import sys

N,L=map(int,sys.stdin.readline().split())
position=list(map(int,sys.stdin.readline().split()))

def result(N,L,position):
    tapecount=1
    coveredposition=[False for i in range(len(position))]
    position.sort()
    index=0
    startpos = position[index] - 0.5  # 덮여야 하는 시작부분
    while True:
        if startpos+L>position[index]:
            coveredposition[index]="True"
            index+=1

        else:
            tapecount+=1
            startpos=position[index]-0.5


        if coveredposition.count("True")==len(position): #모든 위치가 커버되면 종료
            break;


    return tapecount

print(result(N,L,position))

