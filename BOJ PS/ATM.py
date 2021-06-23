
N=int(input())
time_list=list(map(int,input().split(" ")))

sum=0
total=0
for i in range(0,N):
    minimum=min(time_list)
    sum+=minimum
    total=total+sum
    tiem_list=time_list.remove(minimum)

print(total)