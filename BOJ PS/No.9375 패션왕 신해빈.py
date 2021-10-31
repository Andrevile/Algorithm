import sys
from itertools import combinations

T=int(sys.stdin.readline())



def result(dictionary):
    answer=1
    for key in dictionary:
        #print(dictionary[key])
        answer=answer*(dictionary[key]+1)

    return answer-1


for i in range(T):
    n=int(sys.stdin.readline())
    dictionary={}
    for k in range(n):
        cloth_name,cloth_kind=sys.stdin.readline().rstrip().split(" ")
        if cloth_kind not in dictionary:
            dictionary[cloth_kind]=1
        else:
            dictionary[cloth_kind]+=1
    print(result(dictionary))