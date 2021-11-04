N=int(input())
time_list=[]

for i in range(0,N):
    start,finish=map(int,input().split(" "))
    time_list.append([start,finish])

time_list=sorted(time_list,key=lambda a:a[0])
time_list=sorted(time_list,key=lambda a:a[1])

first = [0,0]
count=0
for key in time_list:
    if key[0]>=first[1]:
        first=key
        count+=1
print(count)

# def find_reserve(list,depth,pre,predepth):
#     allfind=-1
#     for i in range(pre,N):
#         if reserved_list[i]==False:
#            allfind=i
#            reserved_list[allfind]=True
#            break
#     temp=depth
#     if predepth>depth:
#         temp=predepth
#
#     for pair in range(allfind+1,N):
#         if list[pair][0]>=list[allfind][1] and reserved_list[pair]==False:
#             temp=find_reserve(list,depth+1,pair,temp)
#             reserved_list[pair] = False
#     return temp
# max=0
# for i in range(0,N):
#     reserved_list = [False for i in range(0, N)]
#     count=find_reserve(time_list,1,i,1)
#     if max<count:
#         max=count
#
# print(max)


