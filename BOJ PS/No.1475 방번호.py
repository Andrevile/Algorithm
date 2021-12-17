import sys
import math

N = list(map(int,list(sys.stdin.readline().rstrip())))

number_set = [i for i in range(10)]
num_count = {}
for i in range(10):
    num_count[i] = 0



for key in N:
    num_count[key] += 1


maximum = 0
max_key = 0
for key,val in num_count.items():
    if val > maximum:
        maximum = val
        max_key = key

answer = 0
six_nine_diff = abs(num_count[6] - num_count[9])
answer = math.ceil((num_count[6] + num_count[9]) /2)

for key,val in num_count.items():
    if key == 6 or key == 9:
        continue;
    if answer < val:
        answer = val
print(answer)


