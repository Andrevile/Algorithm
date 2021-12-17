import sys

E,S,M = map(int,sys.stdin.readline().split(" "))

one,two,three = 1, 1, 1
count = 1
while True:

    if one == E and two == S and three == M:
        break;
    one += 1
    two += 1
    three += 1
    count += 1
    if one > 15:
        one = one % 15
    if two > 28:
        two = two % 28
    if three > 19:
        three = three % 19

print(count)
