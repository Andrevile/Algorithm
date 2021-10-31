import sys
n = int(sys.stdin.readline())
dp = [0] * (n + 1)
dp[0], dp[1] = 0, 1

for i in range(2, n + 1):
    minimum=5
    k = 1
    while (pow(k,2)) <= i:
        minimum = min(minimum, dp[i - (pow(k,2))])
        k += 1
    dp[i] = minimum + 1


print(dp[n])