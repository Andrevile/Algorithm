import sys

T=int(sys.stdin.readline())



def result(case):
    mother=max(case[0],case[1])
    child=min(case[0],case[1])
    differ=mother%child
    if mother==case[0]:
        answer_mother=case[2]
        answer_child=case[3]
    else:
        answer_mother=case[3]
        answer_child=case[2]
    if answer_mother>child:
        start=answer_mother-child
    else:
        start=answer_mother
    visited={}
    #print("start={}".format(start))
    for i in range(child):
        if (start+(i*differ))%child in visited:
            break;
        visited[(start+(i*differ))%child]=i
    #print(visited)
    if answer_child%child not in visited:
        return -1
    #print(visited)
    answer=mother*visited[answer_child%child]+answer_mother
    return answer



for i in range(T):
    case=list(map(int,sys.stdin.readline().rstrip().split(" ")))
    print(result(case))




