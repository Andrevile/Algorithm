import sys

N = int(sys.stdin.readline())
num_list = list(map(int,sys.stdin.readline().split(" ")))

max_score = max(num_list)

avg = sum(num_list) / max_score * 100 / N

print(avg)