import sys
import bisect
N = int(sys.stdin.readline())
box_list = list(map(int,sys.stdin.readline().split(" ")))

def Binary_search(target,start,end):
    while start <= end:
        mid = (start+end) // 2
        if answer[mid] < target:
            start = mid + 1
        else:
            end = mid - 1

    return end



answer = [box_list[0]]

for i in range(len(box_list)):
    if box_list[i] > answer[-1]:
        answer.append(box_list[i])
    else:
        idx = bisect.bisect_left(answer,box_list[i])
        answer[idx] = box_list[i]

print(len(answer))
# DP = [1] * (N)
# for i in range(1,len(box_list)):
#     for k in range(i):
#         if box_list[i] > box_list[k]:
#             DP[i] = max(DP[k]+1, DP[i])
#
# print(max(DP))
