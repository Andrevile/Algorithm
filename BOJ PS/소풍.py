from itertools import permutations,combinations

case_num=int(input())
num_list=[]
pair_list=[]
for i in range(0,case_num):
    student_num, pair_num=map(int,input().split())
    num_list.append(student_num)
    temp=list(map(int,input().split()))
    temp=[temp[i:i+2] for i in range(0,len(temp),2)]
    pair_list.append(temp)

count=[]
for i in range(0,len(pair_list)):
    result=0
    perm=list(combinations(pair_list[i],int(num_list[i]/2)))
    for k in range(0,len(perm)):
        perm[k]=list(set(sum(perm[k],[])))
        if len(perm[k])==num_list[i]:
            result+=1
    count.append(result)

for key in count:
    print(key)

