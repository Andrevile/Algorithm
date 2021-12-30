import sys


N = int(sys.stdin.readline())
num_list = list(map(int,sys.stdin.readline().split(" ")))
M = int(sys.stdin.readline())
check_list = list(map(int,sys.stdin.readline().split(" ")))
#
# num_dict = {}
# for i in range(N):
#     num_dict[num_list[i]] = False
#
# for i in range(M):
#     if check_list[i] in num_dict:
#         num_dict[check_list[i]] = True
#         print(1)
#     else:
#         print(0)



def Binary_search(target,start,end):
    while start <= end:
        mid = (start + end) // 2
        if num_list[mid] == target:
            return 1

        if num_list[mid] > target:
            end = mid - 1
        elif num_list[mid] < target:
            start = mid + 1

    return 0

num_list.sort()
for i in range(M):
    print(Binary_search(check_list[i],0,N-1))