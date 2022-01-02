import sys


T = int(sys.stdin.readline())




for i in range(T):
    prev,post = map(int,sys.stdin.readline().split(" "))
    if prev > post:
        bigger = prev
        smaller = post
    else:
        bigger = post
        smaller = prev
    for k in range(1,smaller+1):
        if smaller % k == 0:
            temp = bigger * k
            if temp % smaller == 0:
                print(bigger * k)
                break;
        else:
            continue;

