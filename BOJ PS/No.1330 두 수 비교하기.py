import sys


prev, post = map(int,sys.stdin.readline().split(" "))

if prev > post :
    print(">")
elif prev == post :
    print("==")
else:
    print("<")