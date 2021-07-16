import sys
N,M=map(int,sys.stdin.readline().split(" "))
not_hear={}
not_see=[]
for i in range(N):
    not_hear[sys.stdin.readline().rstrip()]=0
for i in range(M):
    temp=sys.stdin.readline().rstrip()
    not_see.append(temp)


def result(not_hear,not_see):
    count=0
    answer_list=[]
    not_see.sort()
    for key in not_see:
        if key in not_hear:
            count+=1
            answer_list.append(key)

    print(count)
    for key in answer_list:
        print(key)

result(not_hear,not_see)
