import sys
import math
N = int(sys.stdin.readline())


DP =[36288]
factorial = 1
for i in range(1,N+1):
    factorial = factorial * i
    while factorial % 10 == 0:
        factorial /= 10
    factorial = factorial % 1000000000000


factorial = str(int(factorial) % 100000)
temp = ""
while True:
    if len(factorial) + len(temp) == 5:
        break;
    temp += "0"

print(temp+factorial)


