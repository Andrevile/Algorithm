import sys


n, m = map(int,sys.stdin.readline().split(" "))

def two_count (n):
    count = 0
    while n != 0:
        n = n // 2
        count += n

    return count

def five_count (n):
    count = 0
    while n != 0:
        n = n // 5
        count += n

    return count


head = n
left_body = n-m
right_body = m

print(min(two_count(head)-two_count(left_body)-two_count(right_body)
          ,five_count(head)-five_count(left_body)-five_count(right_body)))