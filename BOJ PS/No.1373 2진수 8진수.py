import sys
Input = sys.stdin.readline().rstrip()

Input = "0b" + Input

answer = format(int(Input,2),'o')
print(answer)