import sys


N = int(sys.stdin.readline())
num_list = list(map(int,sys.stdin.readline().split(" ")))

def SWAP(prev_idx,post_idx):
    temp = num_list[post_idx]
    num_list[post_idx] = num_list[prev_idx]
    num_list[prev_idx] = temp

count = 0
for i in range(N):
    for k in range(N-1):
        if num_list[k] > num_list[k+1]:
            SWAP(k,k+1)
            count += 1
print(count)


