import sys
N=int(sys.stdin.readline())
position=list(map(int,sys.stdin.readline().rstrip().split(" ")))
number=position.copy()
number.sort()
num_dict={}
count=0
for i in range(N):
    if number[i] not in num_dict:
        num_dict[number[i]]=count
        count+=1

def result(position,num_dict):
    for key in position:
        if key in num_dict:
            print(num_dict[key],end=" ")
result(position,num_dict)