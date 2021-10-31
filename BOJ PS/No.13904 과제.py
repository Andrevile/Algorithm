import sys

N=int(sys.stdin.readline().rstrip())
assignment=[]
#assignment=[[4,60],[4,40],[1,20],[2,50],[3,30],[4,10],[6,5]]
#assignment=[[6,80],[2,50],[5,40],[5,50],[4,30],[3,30],[4,20],[7,10]]
for i in range(0,N):
    temp=list(map(int,sys.stdin.readline().split(" ")))
    assignment.append(temp)

def result(N,assignment):
    assignment.sort(reverse=True)
    day=max(assignment)[0]
    sum=0
    temp = []  # 할 수 있는 과제 리스트

    while True:
        if day<=0:
            break;
        while len(assignment)!=0 and assignment[0][0]>=day:
            temp.append(assignment.pop(0))
        day -= 1
        if len(temp)==0:
            continue;
        temp=sorted(temp,key=lambda x:x[1], reverse=True)
        pop=temp.pop(0)
        sum+=pop[1]
       #
    return sum


print(result(N,assignment))


