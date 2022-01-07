import sys


N = int(sys.stdin.readline())

num_list = list(map(int,sys.stdin.readline().split(" ")))

count = 0
for i in range(len(num_list)):
    if num_list[i] == 1:
        continue
    switch = 0
    for k in range(2,num_list[i]//2+1):
        if num_list[i] % k == 0:
            switch = 1
            break;
    if switch == 0:
        count += 1
print(count)

