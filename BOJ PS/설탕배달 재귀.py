
n,m=map(int,input().split())
print(n,m)
areFriends=[[False for i in range(0,n)] for i in range(0,n)]
input_list=list(map(int,input().split()))
input_list=[input_list[i:i+2] for i in range(0,len(input_list),2)]
for case in range(0,len(input_list)):
    areFriends[input_list[case][0]][input_list[case][1]]=True
    areFriends[input_list[case][1]][input_list[case][0]] = True
taken=[False for i in range(0,n)]
def countParings(taken,k):
    firstFree=-1 #firstFree 가 -1이면 한가지 방법을 찾았다는 뜻
    for i in range(0,k):
        if taken[i]==False:
            firstFree=i
            break;
    if firstFree==-1:
        return 1

    ret=0

    for pairwith in range(firstFree+1,k):
        if taken[pairwith] ==False and areFriends[firstFree][pairwith]==True:
            print([firstFree,pairwith])
            taken[firstFree]=True
            taken[pairwith]=True
            ret+=countParings(taken,k)
            taken[firstFree]=False
            taken[pairwith]=False

    return ret



print("답",countParings(taken,n))